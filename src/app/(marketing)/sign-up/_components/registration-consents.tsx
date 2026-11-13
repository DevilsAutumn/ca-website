import Link from "next/link";
import { siteLinks } from "@/lib/site-links";
import type {
  RegistrationData,
  RegistrationErrors,
} from "../_content/registration-content";

export function RegistrationConsents({
  data,
  errors,
  onChange,
}: {
  data: RegistrationData;
  errors: RegistrationErrors;
  onChange: (field: "terms" | "newsletter", checked: boolean) => void;
}) {
  return (
    <div className="mt-6 space-y-4 text-sm leading-6">
      <div>
        <label className="flex cursor-pointer items-start gap-3">
          <input
            id="register-terms"
            name="terms"
            type="checkbox"
            checked={data.terms}
            onChange={(event) => onChange("terms", event.target.checked)}
            required
            aria-invalid={errors.terms ? true : undefined}
            aria-describedby={errors.terms ? "register-terms-error" : undefined}
            className="mt-1 size-4 shrink-0 accent-teal"
          />
          <span>
            I agree to the{" "}
            <Link
              href={siteLinks.termsOfUse}
              prefetch={false}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-dark underline underline-offset-4 hover:text-ink"
            >
              Terms of Use
            </Link>{" "}
            and{" "}
            <Link
              href={siteLinks.privacyPolicy}
              prefetch={false}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-dark underline underline-offset-4 hover:text-ink"
            >
              Privacy Policy
            </Link>
            .{" "}
            <span aria-hidden="true" className="text-teal-dark">
              *
            </span>
          </span>
        </label>
        {errors.terms && (
          <p id="register-terms-error" className="mt-2 mb-0 text-sm">
            {errors.terms[0]}
          </p>
        )}
      </div>
      <label className="flex cursor-pointer items-start gap-3 text-ink-muted">
        <input
          name="newsletter"
          type="checkbox"
          checked={data.newsletter}
          onChange={(event) => onChange("newsletter", event.target.checked)}
          className="mt-1 size-4 shrink-0 accent-teal"
        />
        <span>
          Send me occasional, useful insights about the loyalty industry.
          <span className="ml-1">(Optional)</span>
        </span>
      </label>
    </div>
  );
}
