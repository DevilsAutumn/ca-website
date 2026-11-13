import { siteLinks } from "@/lib/site-links";
import { cn } from "@/lib/utils";
import { Arrow } from "../ui/arrow";
import { ButtonLink } from "../ui/button";
import { MarketplaceExplorer } from "./marketplace/marketplace-explorer";
export function MarketplaceSection() {
  return (
    <section
      className="bg-ink text-white"
      id="marketplace"
      aria-labelledby="marketplace-title"
    >
      <div className="max-w-7xl my-0 mx-auto py-22.5 px-10 max-[721px]:py-18 max-[721px]:px-6">
        <div
          className={cn(
            "grid grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] items-end mb-12 gap-20 max-[1001px]:gap-10",
            "max-[721px]:grid-cols-1 max-[721px]:mb-9 max-[721px]:gap-6",
          )}
        >
          <div>
            <p
              className={cn(
                "mt-0 mb-5 text-teal-pale text-[12px] font-bold tracking-[0.12em] leading-[1.6] uppercase mx-0",
                "max-[381px]:tracking-[0.09em]",
              )}
            >
              The Loyalty Partnerships Marketplace™
            </p>
            <h2
              className={cn(
                "text-[clamp(44px,5.2vw,66px)] font-medium tracking-[-0.065em] leading-[1.02] m-0 [&_em]:block",
                "[&_em]:text-teal-pale [&_em]:not-italic max-[721px]:text-[clamp(40px,7.5vw,54px)] max-[381px]:text-[38px]",
              )}
              id="marketplace-title"
            >
              Find your next
              <em>loyalty partner.</em>
            </h2>
          </div>
          <div
            className={cn(
              "max-w-110 [&_>_p]:mt-0 [&_>_p]:mb-6 [&_>_p]:text-teal-wash [&_>_p]:text-[15px] [&_>_p]:leading-[1.65]",
              "[&_>_p]:mx-0",
            )}
          >
            <p>
              Discover complementary brands and manage loyalty partnerships in
              one place. Give members more ways to earn, exchange, and redeem
              points.
            </p>
            <ButtonLink href={siteLinks.partnerMarketplace}>
              Explore the marketplace <Arrow />
            </ButtonLink>
          </div>
        </div>
        <MarketplaceExplorer />
      </div>
    </section>
  );
}
