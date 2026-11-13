import { pageMetadata } from "@/lib/seo/metadata";
import { ContactSection } from "@/app/_components/marketing/contact-section";
import { siteLinks } from "@/lib/site-links";
import { PlatformPricing } from "../_components/platform-pricing";
import { AccrualControls } from "./_components/accrual-controls";
import { AccrualHero } from "./_components/accrual-hero";
import { EarningPaths } from "./_components/earning-paths";

export const metadata = pageMetadata({
  title: "Partner Accrual",
  description:
    "Let partners award your points or reward members with a partner’s points or miles. Explore the two earning paths and the terms you can set for each.",
  path: siteLinks.partnerAccrual,
});

export default function PartnerAccrualPage() {
  return (
    <>
      <AccrualHero />
      <EarningPaths />
      <AccrualControls />
      <PlatformPricing
        nextStep={{
          title: "Agree the terms before launch",
          description:
            "Choose a contracting model for each partner, then agree on pricing, payment, and operating responsibilities.",
          label: "Explore partner contracting",
          href: siteLinks.partnerContracting,
        }}
      />
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <ContactSection
          id="accrual-contact"
          title={
            <>
              Plan your next <em>partner earn offer.</em>
            </>
          }
          description="Tell us where members would earn and which points they would receive. We’ll help you work through the connection and commercial setup."
          primaryAction={{ label: "Talk to our team", href: "/contact-us" }}
          secondaryAction={{
            label: "Explore partner marketplace",
            href: siteLinks.partnerMarketplace,
          }}
        />
      </div>
    </>
  );
}
