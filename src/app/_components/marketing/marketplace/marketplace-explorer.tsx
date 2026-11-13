import { cn } from "@/lib/utils";
import { MarketplaceTabs } from "./marketplace-tabs";
import { PartnershipExamplePanel } from "./partnership-example";
import { partnershipExamples } from "./partnership-examples";
export function MarketplaceExplorer() {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[6px] bg-[color-mix(in_srgb,var(--white)_3%,var(--ink))] border border-solid",
        "border-line-dark",
      )}
    >
      <MarketplaceTabs
        items={partnershipExamples.map((example) => ({
          value: example.id,
          label: example.label,
          content: <PartnershipExamplePanel example={example} />,
        }))}
      />
      <p
        className={cn(
          "border-t border-t-line-dark text-dark-muted text-[14px] leading-[1.5] m-0 py-4.5 px-10 max-[1001px]:px-7",
          "max-[721px]:py-4.5 max-[721px]:px-6 max-[381px]:px-4.5",
        )}
      >
        Use your own points or popular loyalty currencies.
      </p>
    </div>
  );
}
