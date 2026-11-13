import { pageMetadata } from "@/lib/seo/metadata";
import { ContactSection } from "@/app/_components/marketing/contact-section";
import { siteLinks } from "@/lib/site-links";
import { PlatformPricing } from "../_components/platform-pricing";
import { ManagementHero } from "./_components/management-hero";
import { PartnerControls } from "./_components/partner-controls";
import { SettlementWorkflow } from "./_components/settlement-workflow";
import { TransactionReporting } from "./_components/transaction-reporting";

export const metadata = pageMetadata({
  title: "Loyalty Partnership Management",
  description:
    "Manage loyalty partners alongside your existing system. Set transaction permissions, review partner activity, and reconcile, invoice, and settle.",
  path: siteLinks.partnershipManagement,
});

export default function PartnershipManagementPage() {
  return (
    <>
      <ManagementHero />
      <PartnerControls />
      <TransactionReporting />
      <SettlementWorkflow />
      <PlatformPricing
        nextStep={{
          title: "Connect your existing platform",
          description:
            "See where the API and management portal fit alongside your loyalty system.",
          label: "Explore our technology",
          href: "/our-technology",
        }}
      />
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <ContactSection
          id="management-contact"
          title={
            <>
              Bring your partner <em>operations together.</em>
            </>
          }
          description="Tell us how you manage partner transactions and settlement today. We’ll show you how the management portal can fit your program."
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
