import { ChevronDown } from "lucide-react";
import { FormField as Field } from "@/app/_components/forms/form-field";
import { formControlClassName as controlClassName } from "@/app/_components/forms/form-styles";
import type { WebsiteOptionsState } from "@/lib/website-api/types";
import { cn } from "@/lib/utils";
import type { ContactFieldErrors } from "../_lib/contact-request";

export function ContactFields({
  codes,
  errors = {},
  disabled,
  onRetryCodes,
}: {
  codes: WebsiteOptionsState;
  errors?: ContactFieldErrors;
  disabled: boolean;
  onRetryCodes: () => void;
}) {
  return (
    <fieldset
      disabled={disabled}
      className="m-0 grid min-w-0 gap-5 border-0 p-0"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="contact-full-name"
          label="Full name"
          error={errors.full_name?.[0]}
          required
        >
          {(props) => (
            <input
              {...props}
              name="full_name"
              autoComplete="name"
              className={controlClassName}
            />
          )}
        </Field>
        <Field
          id="contact-email"
          label="Email address"
          error={errors.email?.[0]}
          required
        >
          {(props) => (
            <input
              {...props}
              name="email"
              type="email"
              autoComplete="email"
              className={controlClassName}
            />
          )}
        </Field>
      </div>
      <div className="grid gap-5 min-[480px]:grid-cols-2">
        <Field
          id="contact-country-code"
          label="Country code"
          error={
            codes.phase === "failed"
              ? "Country codes couldn’t load. You can retry or leave the phone fields blank."
              : errors.code?.[0]
          }
        >
          {(props) => (
            <>
              <div className="relative">
                <select
                  {...props}
                  name="code"
                  autoComplete="tel-country-code"
                  defaultValue=""
                  disabled={codes.phase !== "ready"}
                  className={cn(controlClassName, "appearance-none pr-10")}
                >
                  <option value="">
                    {codes.phase === "loading"
                      ? "Loading codes…"
                      : "Select a code"}
                  </option>
                  {codes.options.map(({ id, value }) => (
                    <option key={id} value={id}>
                      {value}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={17}
                  aria-hidden="true"
                  className="pointer-events-none absolute top-1/2 right-3.5 -translate-y-1/2 text-ink-muted"
                />
              </div>
              {codes.phase === "failed" && (
                <button
                  type="button"
                  onClick={onRetryCodes}
                  className="mt-2 min-h-8 cursor-pointer text-sm font-extrabold text-teal-dark underline underline-offset-4"
                >
                  Retry country codes
                </button>
              )}
            </>
          )}
        </Field>
        <Field id="contact-phone" label="Phone" error={errors.phone?.[0]}>
          {(props) => (
            <input
              {...props}
              name="phone"
              type="tel"
              autoComplete="tel-national"
              className={controlClassName}
            />
          )}
        </Field>
      </div>
      <Field
        id="contact-message"
        label="Message"
        error={errors.message?.[0]}
        required
      >
        {(props) => (
          <textarea
            {...props}
            name="message"
            rows={5}
            className={cn(controlClassName, "min-h-36 resize-y py-3")}
          />
        )}
      </Field>
    </fieldset>
  );
}
