import { useState } from "react";
import { ChevronDown, Eye, EyeOff } from "lucide-react";
import { FormField } from "@/app/_components/forms/form-field";
import { formControlClassName } from "@/app/_components/forms/form-styles";
import { cn } from "@/lib/utils";
import type {
  AccountFieldName,
  CountryState,
  RegistrationData,
  RegistrationErrors,
} from "../_content/registration-content";

const textFields = [
  { name: "first_name", label: "First name", autoComplete: "given-name" },
  { name: "last_name", label: "Last name", autoComplete: "family-name" },
  { name: "company_name", label: "Company name", autoComplete: "organization" },
  {
    name: "job_position",
    label: "Job position",
    autoComplete: "organization-title",
  },
] as const;

export function AccountDetails({
  data,
  countries,
  errors,
  onChange,
  onRetryCountries,
}: {
  data: RegistrationData;
  countries: CountryState;
  errors: RegistrationErrors;
  onChange: (field: AccountFieldName, value: string) => void;
  onRetryCountries: () => void;
}) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {textFields.map(({ name, label, autoComplete }) => (
        <FormField
          key={name}
          id={`register-${name}`}
          label={label}
          error={errors[name]?.[0]}
          required
        >
          {(props) => (
            <input
              {...props}
              name={name}
              autoComplete={autoComplete}
              value={data[name]}
              onChange={(event) => onChange(name, event.target.value)}
              className={formControlClassName}
            />
          )}
        </FormField>
      ))}
      <FormField
        id="register-registration_country"
        label="Country"
        error={
          countries.phase === "failed"
            ? "We couldn’t load the country list. Please try again."
            : errors.registration_country?.[0]
        }
        required
      >
        {(props) => (
          <>
            <div className="relative">
              <select
                {...props}
                name="registration_country"
                autoComplete="country-name"
                value={data.registration_country}
                disabled={countries.phase !== "ready"}
                onChange={(event) =>
                  onChange("registration_country", event.target.value)
                }
                className={cn(formControlClassName, "appearance-none pr-10")}
              >
                <option value="">
                  {countries.phase === "loading"
                    ? "Loading countries…"
                    : "Select your country"}
                </option>
                {countries.options.map(({ id, value }) => (
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
            {countries.phase === "failed" && (
              <button
                type="button"
                onClick={onRetryCountries}
                className="mt-2 min-h-8 cursor-pointer text-sm font-extrabold text-teal-dark underline underline-offset-4"
              >
                Retry country list
              </button>
            )}
          </>
        )}
      </FormField>
      <FormField
        id="register-email"
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
            autoCapitalize="none"
            spellCheck={false}
            value={data.email}
            onChange={(event) => onChange("email", event.target.value)}
            className={formControlClassName}
          />
        )}
      </FormField>
      <div className="sm:col-span-2">
        <FormField
          id="register-password"
          label="Password"
          error={errors.password?.[0]}
          required
        >
          {(props) => (
            <div className="relative">
              <input
                {...props}
                name="password"
                type={passwordVisible ? "text" : "password"}
                autoComplete="new-password"
                value={data.password}
                onChange={(event) => onChange("password", event.target.value)}
                className={cn(formControlClassName, "pr-14")}
              />
              <button
                type="button"
                aria-label={passwordVisible ? "Hide password" : "Show password"}
                aria-pressed={passwordVisible}
                aria-controls="register-password"
                onClick={() => setPasswordVisible((visible) => !visible)}
                className="absolute top-1/2 right-1 grid size-11 -translate-y-1/2 cursor-pointer place-items-center text-ink-muted hover:text-teal-dark"
              >
                {passwordVisible ? (
                  <EyeOff size={19} aria-hidden="true" />
                ) : (
                  <Eye size={19} aria-hidden="true" />
                )}
              </button>
            </div>
          )}
        </FormField>
      </div>
    </div>
  );
}
