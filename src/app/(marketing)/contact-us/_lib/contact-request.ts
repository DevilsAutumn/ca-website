import { submitWebsiteForm } from "@/lib/website-api/client";
import { getContactCaptcha } from "./recaptcha";

export type ContactFieldErrors = Partial<
  Record<"full_name" | "email" | "code" | "phone" | "message", string[]>
>;

type ContactResult =
  { ok: true } | { ok: false; message: string; errors: ContactFieldErrors };

const networkMessage =
  "We couldn’t confirm that your message was sent. You can email one of our offices.";

export async function sendContactMessage(
  values: FormData,
  siteKey: string,
): Promise<ContactResult> {
  try {
    const captcha = await getContactCaptcha(siteKey);
    if (!captcha) {
      return {
        ok: false,
        message: "Verification failed. Try again or email one of our offices.",
        errors: {},
      };
    }

    const code = values.get("code")?.toString().trim();
    const phone = values.get("phone")?.toString().trim();
    const result = await submitWebsiteForm(
      "/api/contact-us",
      {
        full_name: values.get("full_name")?.toString().trim(),
        email: values.get("email")?.toString().trim(),
        message: values.get("message")?.toString().trim(),
        ...(code && { code }),
        ...(phone && { phone }),
        captcha,
      },
      networkMessage,
    );
    if (result.ok) return result;
    return {
      ok: false,
      message: result.fields.captcha?.[0] ?? result.message,
      errors: result.fields,
    };
  } catch {
    return { ok: false, message: networkMessage, errors: {} };
  }
}
