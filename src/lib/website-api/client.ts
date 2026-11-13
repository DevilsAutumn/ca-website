type FormEndpoint =
  | "/api/contact-us"
  | "/api/register"
  | "/api/register-validate"
  | "/api/subscribe-newsletter";

type FormResult =
  | { ok: true }
  | { ok: false; message: string; fields: Record<string, string[]> };

function formFailure(data: unknown): Exclude<FormResult, { ok: true }> {
  const fields: Record<string, string[]> = {};
  let detail: string | undefined;
  if (typeof data === "object" && data !== null && !Array.isArray(data)) {
    for (const [field, value] of Object.entries(data)) {
      const messages = (Array.isArray(value) ? value : [value]).filter(
        (message): message is string =>
          typeof message === "string" && !!message.trim(),
      );
      if (field === "detail") detail = messages[0];
      else if (messages.length) fields[field] = messages;
    }
  }
  return {
    ok: false,
    fields,
    message:
      fields.non_field_errors?.[0] ??
      detail ??
      (Object.keys(fields).length
        ? "Check the highlighted fields and try again."
        : "This service is temporarily unavailable. Try again later."),
  };
}

export async function submitWebsiteForm(
  endpoint: FormEndpoint,
  payload: Record<string, unknown>,
  networkMessage: string,
): Promise<FormResult> {
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
      redirect: "error",
      signal: AbortSignal.timeout(15_000),
    });
    if (!response.ok)
      return formFailure(await response.json().catch(() => null));

    const result: unknown = await response.json().catch(() => null);
    if (
      typeof result !== "object" ||
      result === null ||
      !("ok" in result) ||
      result.ok !== true
    ) {
      return { ok: false, message: networkMessage, fields: {} };
    }
    return { ok: true };
  } catch {
    return { ok: false, message: networkMessage, fields: {} };
  }
}
