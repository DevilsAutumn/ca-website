import { Arrow } from "@/app/_components/ui/arrow";
import { TextLink } from "@/app/_components/ui/text-link";
import { BrandedCaseStudy } from "../../_components/branded-case-study";
import { RelationshipDiagram } from "../../_components/relationship-diagram";
import { avoltaWhiteLabelCase } from "../_content/white-label-content";

export function WhiteLabelSetup() {
  return (
    <section
      aria-labelledby="white-label-setup-title"
      className="border-y border-line"
    >
      <div className="mx-auto max-w-7xl px-6 py-13 sm:px-10 lg:py-17">
        <div className="grid items-center gap-7 lg:grid-cols-2 lg:gap-14">
          <div>
            <h2
              id="white-label-setup-title"
              className="mt-0 mb-4 text-[clamp(34px,4.3vw,55px)] leading-[1.06] tracking-[-0.06em] text-balance"
            >
              Built into <em>your experience.</em>
            </h2>
            <p className="m-0 max-w-114 text-[16px] leading-[1.7] text-ink-muted">
              Add the screen where a member needs it, from checkout to their
              account page. The screen matches your brand, while Currency
              Alliance handles the loyalty transaction behind it.
            </p>
            <TextLink href="/our-technology#integration" className="mt-5">
              See integration options <Arrow />
            </TextLink>
          </div>
          <div className="min-w-0 border border-line bg-surface-soft p-4 sm:p-6">
            <RelationshipDiagram
              from={{
                label: "Your website or app",
                detail: "The member’s existing journey",
              }}
              to={{
                label: "Branded loyalty screen",
                detail: "Powered by Currency Alliance",
              }}
              connection="Embed"
              direction="forward"
              description="A branded loyalty screen is embedded in the brand’s website or app. Currency Alliance handles the loyalty transaction."
            />
          </div>
        </div>
        <BrandedCaseStudy
          titleId="avolta-white-label-title"
          className="mt-9 lg:mt-11"
          {...avoltaWhiteLabelCase}
        />
      </div>
    </section>
  );
}
