import { siteLinks } from "@/lib/site-links";
import { cn } from "@/lib/utils";
import { Arrow } from "../ui/arrow";
import { ButtonLink } from "../ui/button";
import { PartnerLifecycle } from "./operations/partner-lifecycle";
export function OperationsSection() {
  return (
    <section
      className="bg-paper-deep"
      id="operations"
      aria-labelledby="operations-title"
    >
      <div
        className={cn(
          'grid [grid-template-areas:"workflow_copy"] grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] items-center',
          'max-w-7xl m-auto py-26 px-10 gap-20 max-[1001px]:gap-10 max-[901px]:[grid-template-areas:"copy"_"workflow"]',
          "max-[901px]:grid-cols-1 max-[901px]:py-20 max-[901px]:px-6 max-[901px]:gap-9",
        )}
      >
        <div
          className={cn(
            "[grid-area:copy] [&_h2]:mt-0 [&_h2]:mb-6 [&_h2]:text-[clamp(42px,5vw,65px)] [&_h2]:leading-[1.02]",
            "[&_h2]:mx-0 [&_p]:max-w-107.5 [&_p]:mt-0 [&_p]:mb-7 [&_p]:text-ink-muted [&_p]:text-[16px]",
            "[&_p]:leading-[1.65] [&_p]:mx-0 max-[901px]:[&_p]:max-w-140",
          )}
        >
          <h2 id="operations-title">
            Relationships are
            <br />
            <em>the product.</em>
          </h2>
          <p>
            Bring contracts, rules, invoices, and reconciliation into one place.
            Spend less time managing the details and more time building the
            partnership.
          </p>
          <ButtonLink href={siteLinks.partnershipManagement}>
            Explore lifecycle management <Arrow />
          </ButtonLink>
        </div>
        <PartnerLifecycle />
      </div>
    </section>
  );
}
