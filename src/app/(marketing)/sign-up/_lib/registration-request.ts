import { submitWebsiteForm } from "@/lib/website-api/client";
import {
  accountFieldNames,
  type RegistrationData,
  type RegistrationErrors,
} from "../_content/registration-content";

type RegistrationResult =
  | { ok: true }
  | { ok: false; message: string; errors: RegistrationErrors; step?: number };

export async function sendRegistration(
  data: RegistrationData,
  final: boolean,
): Promise<RegistrationResult> {
  const account = {
    ...Object.fromEntries(
      accountFieldNames.map((field) => [
        field,
        field === "password" ? data[field] : data[field].trim(),
      ]),
    ),
    terms: data.terms,
    newsletter: data.newsletter,
  };

  const result = await submitWebsiteForm(
    final ? "/api/register" : "/api/register-validate",
    final
      ? {
          ...account,
          company_has_loyalty_currency: data.company_has_loyalty_currency,
          interests: data.interests,
        }
      : account,
    final
      ? "We couldn’t confirm your registration. Check your email before trying again, or contact our team."
      : "We couldn’t check your details. Please try again.",
  );
  if (result.ok) return result;

  let step: number | undefined;
  if (
    accountFieldNames.some((field) => result.fields[field]?.length) ||
    result.fields.terms?.length
  )
    step = 0;
  else if (result.fields.company_has_loyalty_currency?.length) step = 1;
  return { ok: false, message: result.message, errors: result.fields, step };
}
