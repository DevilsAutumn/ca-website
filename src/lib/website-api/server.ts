import "server-only";

import { connection } from "next/server";
import { isRecord, type FormFields } from "./forms";
import type { WebsiteOption } from "./types";

const maxBodyBytes = 64 * 1024;
const unavailable = "This service is temporarily unavailable. Try again later.";

function json(data: unknown, status = 200) {
  return Response.json(data, {
    status,
    headers: { "Cache-Control": "no-store" },
  });
}

function error(detail: string, status: number) {
  return json({ detail }, status);
}

async function requestWebsiteApi(
  path: string,
  payload?: Record<string, unknown>,
) {
  const baseUrl = process.env.API_URL?.trim();
  const authorization = process.env.WEBSITE_AUTHORIZATION_KEY?.trim();

  if (!baseUrl || !authorization) return { failure: error(unavailable, 503) };

  try {
    const url = new URL(baseUrl);
    if (
      !["http:", "https:"].includes(url.protocol) ||
      url.username ||
      url.password ||
      url.search ||
      url.hash
    ) {
      return { failure: error(unavailable, 503) };
    }
    url.pathname = `${url.pathname.replace(/\/+$/, "")}${path}`;

    const headers = new Headers({
      Accept: "application/json",
      Authorization: authorization,
    });
    if (payload) headers.set("Content-Type", "application/json");

    const response = await fetch(url, {
      method: payload ? "POST" : "GET",
      headers,
      body: payload ? JSON.stringify(payload) : undefined,
      cache: "no-store",
      redirect: "error",
      signal: AbortSignal.timeout(10_000),
    });
    return { response };
  } catch {
    return { failure: error(unavailable, 502) };
  }
}

async function readJson(
  request: Request,
): Promise<Record<string, unknown> | Response> {
  if (request.headers.get("sec-fetch-site") === "cross-site") {
    return error("Submit the form from this website.", 403);
  }
  const mediaType = request.headers
    .get("content-type")
    ?.split(";")[0]
    ?.trim()
    .toLowerCase();
  if (mediaType !== "application/json") {
    return error("Send the form as JSON.", 415);
  }

  const tooLarge = () =>
    error("The form is too long. Shorten it and try again.", 413);
  if (Number(request.headers.get("content-length")) > maxBodyBytes)
    return tooLarge();

  const reader = request.body?.getReader();
  if (!reader) return error("Send a valid JSON object.", 400);

  const decoder = new TextDecoder("utf-8", { fatal: true });
  let size = 0;
  let body = "";

  try {
    for (
      let chunk = await reader.read();
      !chunk.done;
      chunk = await reader.read()
    ) {
      size += chunk.value.byteLength;
      if (size > maxBodyBytes) {
        void reader.cancel().catch(() => {});
        return tooLarge();
      }
      body += decoder.decode(chunk.value, { stream: true });
    }
    const data: unknown = JSON.parse(body + decoder.decode());
    if (isRecord(data)) return data;
  } catch {
    return error("Send a valid JSON object.", 400);
  } finally {
    reader.releaseLock();
  }
  return error("Send a valid JSON object.", 400);
}

function fieldErrors(data: unknown, fields: FormFields) {
  const messages = (value: unknown) =>
    (Array.isArray(value) ? value : [value])
      .filter(
        (message): message is string =>
          typeof message === "string" && !!message.trim(),
      )
      .slice(0, 3)
      .map((message) => message.slice(0, 300));
  if (Array.isArray(data)) {
    const errors = messages(data);
    return errors.length ? { non_field_errors: errors } : {};
  }
  if (!isRecord(data)) return {};

  const errors: Record<string, string[] | string> = {};
  for (const field of [...Object.keys(fields), "non_field_errors"]) {
    const errorsForField = messages(data[field]);
    if (errorsForField.length) errors[field] = errorsForField;
  }
  const detail = messages(data.detail)[0];
  if (detail) errors.detail = detail;
  return errors;
}

export async function postWebsiteForm(
  request: Request,
  path: string,
  fields: FormFields,
) {
  const data = await readJson(request);
  if (data instanceof Response) return data;

  const payload: Record<string, unknown> = {};
  const errors: Record<string, string[]> = {};
  for (const [field, rule] of Object.entries(fields)) {
    const value = data[field];
    if (rule.optional && (value === undefined || value === "")) continue;
    if (rule.accepts(value)) payload[field] = value;
    else errors[field] = [rule.message];
  }
  if (Object.keys(errors).length) return json(errors, 400);

  const { response, failure } = await requestWebsiteApi(path, payload);
  if (failure) return failure;

  if ([400, 403, 409, 422].includes(response.status)) {
    const validation = fieldErrors(
      await response.json().catch(() => null),
      fields,
    );
    if (Object.keys(validation).length)
      return json(validation, response.status);
    if (response.status !== 403)
      return error("Check the form and try again.", response.status);
  } else {
    await response.body?.cancel().catch(() => {});
  }

  if (response.ok) return json({ ok: true });
  if (response.status === 429)
    return error("Too many requests. Try again later.", 429);
  return error(unavailable, 502);
}

function isWebsiteOption(value: unknown): value is WebsiteOption {
  return (
    isRecord(value) &&
    (typeof value.id === "string" || Number.isSafeInteger(value.id)) &&
    typeof value.value === "string"
  );
}

export async function getWebsiteOptions(path: string) {
  await connection();
  const { response, failure } = await requestWebsiteApi(path);
  if (failure) return failure;

  if (!response.ok) {
    await response.body?.cancel().catch(() => {});
    return error(unavailable, 502);
  }

  const data: unknown = await response.json().catch(() => null);
  if (!Array.isArray(data) || !data.every(isWebsiteOption))
    return error(unavailable, 502);
  return json(data.map(({ id, value }) => ({ id, value })));
}
