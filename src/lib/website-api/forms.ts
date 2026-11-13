import "server-only";

export type FormFields = Record<
  string,
  { accepts: (value: unknown) => boolean; message: string; optional?: boolean }
>;

export function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

const text = {
  accepts: (value: unknown) => typeof value === "string" && !!value.trim(),
  message: "This field is required.",
};

const email = {
  accepts: (value: unknown) =>
    typeof value === "string" && /^[^\s@]+@[^\s@]+$/.test(value),
  message: "Enter a valid email address.",
};

const optionId = {
  accepts: (value: unknown) =>
    text.accepts(value) || Number.isSafeInteger(value),
  message: "Select a valid option.",
};

const terms = {
  accepts: (value: unknown) => value === true,
  message: "Accept the terms to continue.",
};

export const contactFields = {
  full_name: text,
  email,
  code: { ...optionId, optional: true },
  phone: { ...text, optional: true },
  message: text,
  captcha: { ...text, message: "Complete verification and try again." },
} satisfies FormFields;

export const registrationFields = {
  first_name: text,
  last_name: text,
  email,
  company_name: text,
  registration_country: optionId,
  job_position: text,
  password: text,
  terms,
  newsletter: {
    accepts: (value: unknown) => typeof value === "boolean",
    message: "Select a valid newsletter preference.",
    optional: true,
  },
  company_has_loyalty_currency: {
    accepts: (value: unknown) => value === null || typeof value === "boolean",
    message: "Select a valid loyalty currency preference.",
    optional: true,
  },
  interests: {
    accepts: (value: unknown) =>
      isRecord(value) &&
      Object.values(value).every(
        (item) => typeof item === "boolean" || typeof item === "string",
      ),
    message: "Select valid interests.",
    optional: true,
  },
} satisfies FormFields;

export const newsletterFields = {
  name: text,
  email,
  terms,
} satisfies FormFields;
