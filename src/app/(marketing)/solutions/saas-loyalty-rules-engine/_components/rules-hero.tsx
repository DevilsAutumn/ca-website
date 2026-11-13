import { ArrowDown } from "lucide-react";
import { ButtonLink } from "@/app/_components/ui/button";
import { RuleScreens } from "./rule-screens";

export function RulesHero() {
  return (
    <section
      aria-labelledby="loyalty-rules-title"
      className="border-b border-line bg-surface"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-7 px-6 py-10 sm:gap-8 sm:px-10 sm:py-13 md:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)] lg:gap-14 lg:py-19">
        <div className="min-w-0">
          <h1
            id="loyalty-rules-title"
            className="mt-0 mb-5 text-[clamp(43px,6.4vw,84px)] leading-[1.01] tracking-[-0.065em]"
          >
            Loyalty <em className="block">rules engine.</em>
          </h1>
          <p className="mt-0 mb-6 max-w-106 text-[clamp(16px,1.6vw,19px)] leading-[1.65] text-pretty text-ink-muted">
            Decide how members earn, redeem, and exchange points. Configure
            rules in one place and apply them across your own channels and
            partner experiences.
          </p>
          <ButtonLink href="#rule-capabilities">
            Explore the benefits <ArrowDown size={15} aria-hidden="true" />
          </ButtonLink>
        </div>
        <RuleScreens />
      </div>
    </section>
  );
}
