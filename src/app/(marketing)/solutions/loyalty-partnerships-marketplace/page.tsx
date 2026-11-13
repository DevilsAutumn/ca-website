import { pageMetadata } from "@/lib/seo/metadata";
import { ContactSection } from "@/app/_components/marketing/contact-section";
import { siteLinks } from "@/lib/site-links";
import { PlatformPricing } from "../_components/platform-pricing";
import { MarketplaceHero } from "./_components/marketplace-hero";
import { MemberValue } from "./_components/member-value";
import { PartnerDiscovery } from "./_components/partner-discovery";

export const metadata = pageMetadata({
  title: "The Loyalty Partnerships Marketplace™",
  description:
    "Discover loyalty partners across travel, retail, and payments. Connect your existing program and give members more ways to earn, redeem, and exchange points.",
  path: siteLinks.partnerMarketplace,
});

export default function PartnerMarketplacePage() {
  return (
    <>
      <MarketplaceHero />
      <PartnerDiscovery />
      <MemberValue />
      <PlatformPricing
        nextStep={{
          title: "Once your partners are live",
          description:
            "See how to manage terms, track transactions, and settle with partners as the network grows.",
          label: "Explore partnership management",
          href: siteLinks.partnershipManagement,
        }}
      />
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <ContactSection
          id="marketplace-contact"
          title={
            <>
              Ready to <em>meet your next partner?</em>
            </>
          }
          description="Create a free account to explore the marketplace, or talk with us about the partnership you want to launch."
          primaryAction={{
            label: "Register for free",
            href: siteLinks.register,
          }}
          secondaryAction={{ label: "Talk to our team", href: "/contact-us" }}
        />
      </div>
    </>
  );
}
