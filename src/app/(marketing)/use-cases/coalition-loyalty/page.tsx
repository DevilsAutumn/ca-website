import { pageMetadata } from "@/lib/seo/metadata";
import { ContactSection } from "@/app/_components/marketing/contact-section";
import { siteLinks } from "@/lib/site-links";
import { PlatformPricing } from "../../solutions/_components/platform-pricing";
import { CoalitionHero } from "./_components/coalition-hero";
import { CoalitionOperations } from "./_components/coalition-operations";
import { partnerMixGuide } from "./_content/coalition-content";

export const metadata = pageMetadata({
  title: "Grow a Loyalty Partner Network",
  description:
    "Start, join, or extend a loyalty coalition. Find complementary partners, agree terms, and manage loyalty transactions and settlement in one place.",
  path: siteLinks.coalitionLoyalty,
});

export default function CoalitionLoyaltyPage() {
  return (
    <>
      <CoalitionHero />
      <CoalitionOperations />
      <PlatformPricing nextStep={partnerMixGuide} />
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <ContactSection
          id="coalition-contact"
          title={
            <>
              Build a network <em>around your members.</em>
            </>
          }
          description="Tell us which brands and reward categories would give your members more ways to use their points."
          primaryAction={{
            label: "Request a demo",
            href: "https://www.currencyalliance.com/contact-us",
          }}
          secondaryAction={{
            label: "Explore the partner marketplace",
            href: siteLinks.partnerMarketplace,
          }}
        />
      </div>
    </>
  );
}
