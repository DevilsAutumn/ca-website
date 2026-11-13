import Link from "next/link";
import { Arrow } from "@/app/_components/ui/arrow";
import { Button } from "@/app/_components/ui/button";
import { siteLinks } from "@/lib/site-links";

export function RegistrationActions({
  step,
  sending,
  canContinue,
  onBack,
}: {
  step: number;
  sending: boolean;
  canContinue: boolean;
  onBack: () => void;
}) {
  const labels = sending
    ? ["Checking details…", "Continue", "Creating account…"]
    : ["Continue", "Continue", "Create free account"];

  return (
    <div className="mt-auto pt-7">
      <div className="flex flex-wrap items-center gap-4">
        <Button
          type="submit"
          disabled={sending || !canContinue}
          className="min-w-36 max-sm:w-full"
        >
          {labels[step]}
          {!sending && <Arrow />}
        </Button>
        {step > 0 && (
          <Button
            variant="secondary"
            onClick={onBack}
            disabled={sending}
            className="max-sm:w-full"
          >
            Back
          </Button>
        )}
      </div>
      <p className="mt-5 mb-0 text-sm leading-6 text-ink-muted">
        Already a partner?{" "}
        <Link
          href={siteLinks.signIn}
          className="inline-block font-extrabold text-teal-dark underline underline-offset-4 hover:text-ink"
        >
          Sign in
        </Link>
      </p>
      <p role="status" className="sr-only">
        {sending &&
          (step === 0
            ? "Checking your account details."
            : "Creating your account.")}
      </p>
    </div>
  );
}
