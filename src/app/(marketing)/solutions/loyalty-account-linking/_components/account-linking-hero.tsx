import { ArrowDown } from "lucide-react";
import { ButtonLink } from "@/app/_components/ui/button";
import { LinkingFlow } from "./linking-flow";

export function AccountLinkingHero() {
  return (
    <section aria-labelledby="account-linking-title" className="bg-surface">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 py-13 sm:px-10 lg:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)] lg:gap-16 lg:py-20">
        <div className="min-w-0">
          <p className="mb-4 text-[12px] leading-[1.5] font-extrabold tracking-[0.1em] text-teal-dark uppercase">
            Loyalty account linking
          </p>
          <h1
            id="account-linking-title"
            className="mt-0 mb-6 max-w-155 text-[clamp(38px,5.6vw,74px)] leading-[1.02] tracking-[-0.072em]"
          >
            Link accounts <em className="block">across programs.</em>
          </h1>
          <p className="mt-0 mb-7 max-w-123 text-[clamp(16px,1.55vw,19px)] leading-[1.65] text-pretty text-ink-muted">
            Add a branded, low-code flow to your site or app. Members sign in
            with the partner program and return to confirm the link.
          </p>
          <ButtonLink href="#linked-experiences">
            See what linking enables <ArrowDown size={15} aria-hidden="true" />
          </ButtonLink>
        </div>
        <LinkingFlow />
      </div>
    </section>
  );
}
