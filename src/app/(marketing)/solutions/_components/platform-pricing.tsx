import { Arrow } from "@/app/_components/ui/arrow";
import { TextLink } from "@/app/_components/ui/text-link";
import { siteLinks } from "@/lib/site-links";
import {
  exampleLoyaltyShare,
  formatPercent,
  issuanceFeeRate,
} from "../../_content/platform-pricing";
import { PlatformFeeDiagram } from "./platform-fee-diagram";

const feeRateLabel = formatPercent(issuanceFeeRate);
const loyaltyShareLabel = formatPercent(exampleLoyaltyShare);
const exampleRevenueFeeShare = formatPercent(
  exampleLoyaltyShare * issuanceFeeRate,
);

type PlatformPricingProps = {
  nextStep: {
    title: string;
    description: string;
    label: string;
    href: string;
  };
};

export function PlatformPricing({ nextStep }: PlatformPricingProps) {
  return (
    <section
      id="pricing"
      aria-labelledby="platform-pricing-title"
      className="scroll-mt-24 border-y border-line bg-paper-deep"
    >
      <div className="mx-auto grid max-w-7xl gap-y-7 px-6 py-10 sm:px-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-x-12 lg:py-12">
        <div className="max-w-112 lg:col-start-1 lg:row-start-1">
          <h2
            id="platform-pricing-title"
            className="mt-0 mb-4 text-[clamp(28px,3vw,42px)] leading-[1.08] tracking-[-0.055em]"
          >
            Usage-based pricing.
          </h2>
          <p className="m-0 text-[15px] leading-[1.7] text-pretty text-ink-soft">
            The platform fee is{" "}
            <strong className="font-extrabold text-teal-dark">
              {feeRateLabel} of the loyalty value issued to members
            </strong>
            . There are no platform setup or licence fees.
          </p>
          <p
            id="platform-pricing-example"
            className="mt-4 mb-0 text-[15px] leading-[1.7] text-pretty text-ink-muted"
          >
            For example, if loyalty value is {loyaltyShareLabel} of incremental
            revenue, the platform fee is{" "}
            <strong className="font-extrabold text-teal-dark">
              {exampleRevenueFeeShare} of that revenue
            </strong>
            .
          </p>
          <TextLink href={siteLinks.pricing} className="mt-4">
            View full pricing <Arrow />
          </TextLink>
        </div>
        <PlatformFeeDiagram
          aria-label="Illustrative pricing breakdown"
          aria-describedby="platform-pricing-example"
          className="lg:mx-0 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-center"
        />
        <div className="max-w-112 border-t border-line pt-6 lg:col-start-1 lg:row-start-2">
          <h3 className="mt-0 mb-2 text-[22px] leading-tight font-bold tracking-[-0.035em]">
            {nextStep.title}
          </h3>
          <p className="m-0 text-[15px] leading-[1.65] text-pretty text-ink-soft">
            {nextStep.description}
          </p>
          <TextLink href={nextStep.href} className="mt-4 whitespace-normal">
            {nextStep.label} <Arrow />
          </TextLink>
        </div>
      </div>
    </section>
  );
}
