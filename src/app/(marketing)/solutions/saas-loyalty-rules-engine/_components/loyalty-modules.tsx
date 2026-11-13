import { Arrow } from "@/app/_components/ui/arrow";
import { TextLink } from "@/app/_components/ui/text-link";
import { siteLinks } from "@/lib/site-links";
import { LoyaltyModuleDiagram } from "./loyalty-module-diagram";

export function LoyaltyModules() {
  return (
    <section
      id="loyalty-modules"
      aria-labelledby="loyalty-modules-title"
      className="scroll-mt-24 border-y border-line bg-surface-soft"
    >
      <div className="mx-auto max-w-7xl px-6 py-13 sm:px-10 lg:py-17">
        <h2
          id="loyalty-modules-title"
          className="mt-0 mb-7 text-[clamp(34px,4.3vw,55px)] leading-[1.06] tracking-[-0.06em] text-balance lg:text-center"
        >
          Five core modules <em>of a loyalty system.</em>
        </h2>
        <LoyaltyModuleDiagram />
        <p className="mt-7 mb-0 max-w-175 text-[15px] leading-relaxed text-ink-muted lg:mx-auto lg:text-center">
          Currency Alliance provides the points bank and rules engine. Use both
          for a new program, or add the rules engine to your existing platform
          by API.
        </p>
        <div className="mt-4 flex flex-wrap gap-x-8 gap-y-4 lg:justify-center">
          <TextLink href={siteLinks.loyaltyPointsBank}>
            Explore the points bank <Arrow />
          </TextLink>
          <TextLink href="/our-technology#architecture">
            See the platform architecture <Arrow />
          </TextLink>
        </div>
      </div>
    </section>
  );
}
