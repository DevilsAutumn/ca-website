import { ComparisonTable } from "@/app/_components/marketing/comparison/comparison-table";
import { siteLinks } from "@/lib/site-links";
import {
  vendorAlternatives,
  vendorComparisonRows,
} from "../_content/vendor-comparison";

export function VendorComparison() {
  return (
    <section
      id="vendor-comparison"
      aria-labelledby="vendor-comparison-title"
      className="scroll-mt-24 border-b border-line bg-surface"
    >
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-10 lg:py-16">
        <h2
          id="vendor-comparison-title"
          className="mt-0 mb-7 max-w-235 text-[clamp(32px,4.1vw,52px)] leading-[1.08] tracking-[-0.06em] text-balance"
        >
          How does Currency Alliance compare to{" "}
          <em>other loyalty solution vendors?</em>
        </h2>
        <ComparisonTable
          caption="Comparison of loyalty solution vendors"
          criterionHeading="Criteria"
          alternativeLabels={vendorAlternatives}
          rows={vendorComparisonRows}
        />
        <p className="mt-4 mb-0 max-w-182 text-[13px] leading-relaxed text-ink-muted">
          Timelines and cost ranges are Currency Alliance’s published estimates.
          The source leaves the currency unspecified. Terms and capabilities
          vary by vendor and integration scope.{" "}
          <a
            href={`https://www.currencyalliance.com${siteLinks.launchLoyaltyProgram}`}
            className="underline underline-offset-3 hover:text-teal-dark"
          >
            See the original comparison
          </a>
          .
        </p>
      </div>
    </section>
  );
}
