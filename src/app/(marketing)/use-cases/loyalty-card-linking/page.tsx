import { pageMetadata } from "@/lib/seo/metadata";
import { ContactSection } from "@/app/_components/marketing/contact-section";
import { siteLinks } from "@/lib/site-links";
import { CardConnections } from "./_components/card-connections";
import { CardLinkedHero } from "./_components/card-linked-hero";
import { CardLinkingFlow } from "./_components/card-linking-flow";
import { CheckoutAlternatives } from "./_components/checkout-alternatives";

export const metadata = pageMetadata({
  title: "Card-linked Loyalty",
  description:
    "Let members link an eligible payment card or mobile wallet to their loyalty account and earn rewards when they pay at participating merchants.",
  path: siteLinks.cardLinkedLoyalty,
});

export default function CardLinkedLoyaltyPage() {
  return (
    <>
      <CardLinkedHero />
      <CardLinkingFlow />
      <CardConnections />
      <CheckoutAlternatives />
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <ContactSection
          id="card-linked-contact"
          title={
            <>
              Plan a <em>card-linked program.</em>
            </>
          }
          description="Tell us which payment methods your members use and where they shop. We’ll help you assess the right connection for your program."
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
