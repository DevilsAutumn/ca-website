import { pageMetadata } from "@/lib/seo/metadata";
import { ContactSection } from "@/app/_components/marketing/contact-section";
import { siteLinks } from "@/lib/site-links";
import { ContractingHero } from "./_components/contracting-hero";
import { ContractingTerms } from "./_components/contracting-terms";

export const metadata = pageMetadata({
  title: "Loyalty Partner Contracting",
  description:
    "Compare direct, agency, and serviced loyalty partnership agreements. See who contracts with each partner and who handles negotiation and administration.",
  path: siteLinks.partnerContracting,
});

export default function PartnerContractingPage() {
  return (
    <>
      <ContractingHero />
      <ContractingTerms />
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <ContactSection
          id="contracting-contact"
          title={
            <>
              Discuss your <em>partner agreement.</em>
            </>
          }
          description="Tell us which partners you want to work with and how much of the contracting process you want to manage. We’ll walk you through the available models."
          primaryAction={{ label: "Talk to our team", href: "/contact-us" }}
          secondaryAction={{
            label: "Explore partnership management",
            href: siteLinks.partnershipManagement,
          }}
        />
      </div>
    </>
  );
}
