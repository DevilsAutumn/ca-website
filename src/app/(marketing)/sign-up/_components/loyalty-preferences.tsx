import { cn } from "@/lib/utils";
import {
  registrationInterests,
  type InterestId,
  type RegistrationData,
} from "../_content/registration-content";

const currencyOptions = [
  {
    value: true,
    label: "I have a loyalty currency, or want to create one",
    description: "Connect an existing program or build a new one.",
  },
  {
    value: false,
    label: "I want to offer another brand’s points or miles",
    description: "Reward customers with a partner’s loyalty currency.",
  },
];

export function LoyaltyCurrency({
  value,
  onChange,
  error,
}: {
  value: boolean | null;
  onChange: (value: boolean) => void;
  error?: string;
}) {
  return (
    <fieldset className="m-0 min-w-0 space-y-4 border-0 p-0">
      <legend className="sr-only">Which best describes your business?</legend>
      {currencyOptions.map((option) => (
        <label
          key={String(option.value)}
          className={cn(
            "flex cursor-pointer items-start gap-3.5 border p-5 transition-colors sm:p-6",
            value === option.value
              ? "border-teal bg-teal/5"
              : "border-line bg-surface hover:border-ink-muted",
            error && "border-destructive",
          )}
        >
          <input
            type="radio"
            name="company_has_loyalty_currency"
            value={String(option.value)}
            checked={value === option.value}
            onChange={() => onChange(option.value)}
            required
            aria-describedby={error ? "register-currency-error" : undefined}
            className="mt-1 size-4 shrink-0 accent-teal"
          />
          <span>
            <span className="block text-base leading-6 font-extrabold">
              {option.label}
            </span>
            <span className="mt-2 block text-sm leading-6 text-ink-muted">
              {option.description}
            </span>
          </span>
        </label>
      ))}
      {error && (
        <p id="register-currency-error" className="m-0 text-sm leading-6">
          {error}
        </p>
      )}
    </fieldset>
  );
}

export function LoyaltyInterests({
  data,
  onChange,
  error,
}: {
  data: RegistrationData;
  onChange: (id: InterestId, checked: boolean) => void;
  error?: string;
}) {
  const interests = registrationInterests.filter(
    (interest) =>
      data.company_has_loyalty_currency || !interest.currencyOwnerOnly,
  );

  return (
    <fieldset className="m-0 min-w-0 border-0 p-0">
      <legend className="mb-3 text-sm text-ink-muted">
        Select all that apply. This step is optional.
      </legend>
      <div className="divide-y divide-line border-y border-line">
        {interests.map(({ id, label }) => (
          <label
            key={id}
            className="flex cursor-pointer items-start gap-3.5 px-1 py-4 text-[15px] leading-6 hover:bg-surface-soft"
          >
            <input
              name={id}
              type="checkbox"
              checked={data.interests[id] ?? false}
              aria-invalid={error ? true : undefined}
              aria-describedby={error ? "register-interests-error" : undefined}
              onChange={(event) => onChange(id, event.target.checked)}
              className="mt-1 size-4 shrink-0 accent-teal"
            />
            <span>{label}</span>
          </label>
        ))}
      </div>
      {error && (
        <p
          id="register-interests-error"
          className="mt-3 mb-0 text-sm leading-6"
        >
          {error}
        </p>
      )}
    </fieldset>
  );
}
