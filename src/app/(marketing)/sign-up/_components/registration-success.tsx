import { MailCheck } from "lucide-react";
import type { Ref } from "react";
import { Arrow } from "@/app/_components/ui/arrow";
import { ButtonLink } from "@/app/_components/ui/button";
import { TextLink } from "@/app/_components/ui/text-link";
import { siteLinks } from "@/lib/site-links";

export function RegistrationSuccess({
  email,
  titleRef,
}: {
  email: string;
  titleRef: Ref<HTMLHeadingElement>;
}) {
  return (
    <div className="flex min-w-0 flex-col justify-center p-6 py-12 sm:p-9 xl:p-11">
      <MailCheck
        size={38}
        strokeWidth={1.4}
        aria-hidden="true"
        className="mb-7 text-teal"
      />
      <h2
        ref={titleRef}
        tabIndex={-1}
        className="mb-4 text-[clamp(32px,3.5vw,44px)] leading-[1.1] tracking-[-0.05em]"
      >
        Check your inbox.
      </h2>
      <p role="status" className="mb-6 text-base leading-7 text-ink-muted">
        We’ve sent an activation link to{" "}
        <strong className="font-semibold break-all text-ink">{email}</strong>.
        Follow the link to activate your account, then sign in to get started.
      </p>
      <p className="mb-7 text-sm leading-6 text-ink-muted">
        Can’t find the email? Check your spam or junk folder.
      </p>
      <div className="flex flex-wrap items-center gap-6">
        <ButtonLink href={siteLinks.signIn}>
          Go to sign in <Arrow />
        </ButtonLink>
        <TextLink href="/contact-us">
          Contact our team <Arrow />
        </TextLink>
      </div>
    </div>
  );
}
