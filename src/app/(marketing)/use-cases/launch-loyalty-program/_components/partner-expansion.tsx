import Image from "next/image";
import { Arrow } from "@/app/_components/ui/arrow";
import { TextLink } from "@/app/_components/ui/text-link";
import { siteLinks } from "@/lib/site-links";
import marketplacePhoto from "../_assets/marketplace.jpg";

export function PartnerExpansion() {
  return (
    <section
      aria-labelledby="launch-partners-title"
      className="border-y border-line bg-surface-soft"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-7 px-6 py-12 sm:px-10 lg:grid-cols-2 lg:gap-12 lg:py-16">
        <div className="min-w-0">
          <h2
            id="launch-partners-title"
            className="mt-0 mb-4 max-w-130 text-[clamp(34px,4.3vw,55px)] leading-[1.06] tracking-[-0.06em] text-balance"
          >
            Add partners <em>as you grow.</em>
          </h2>
          <p className="m-0 max-w-118 text-[16px] leading-[1.7] text-ink-muted">
            Give members more places to earn or spend. Find complementary
            loyalty programs in the marketplace, then manage partner
            transactions, reporting, and settlement in one place.
          </p>
          <div className="mt-5 flex flex-wrap items-start gap-x-7 gap-y-4">
            <TextLink href={siteLinks.partnerMarketplace}>
              Find partners <Arrow />
            </TextLink>
            <TextLink href={siteLinks.partnershipManagement}>
              Manage partnerships <Arrow />
            </TextLink>
          </div>
        </div>
        <Image
          src={marketplacePhoto}
          alt=""
          sizes="(min-width: 1280px) 576px, (min-width: 1024px) 46vw, (min-width: 640px) calc(100vw - 80px), calc(100vw - 48px)"
          className="block h-auto w-full"
        />
      </div>
    </section>
  );
}
