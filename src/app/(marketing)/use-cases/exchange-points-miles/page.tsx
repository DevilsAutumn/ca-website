import { pageMetadata } from "@/lib/seo/metadata";
import { ContactSection } from "@/app/_components/marketing/contact-section";
import { siteLinks } from "@/lib/site-links";
import { ExchangeHero } from "./_components/exchange-hero";
import { ExchangeOperations } from "./_components/exchange-operations";
import { ExchangeOptions } from "./_components/exchange-options";
import { OtherTransactions } from "./_components/other-transactions";

export const metadata = pageMetadata({
  title: "Exchange Points and Miles",
  description:
    "Let members exchange points or miles between participating loyalty programs in real time. Set partner terms and automate reconciliation and settlement.",
  path: siteLinks.exchangePointsMiles,
});

export default function ExchangePointsAndMilesPage() {
  return (
    <>
      <ExchangeHero />
      <ExchangeOptions />
      <OtherTransactions />
      <ExchangeOperations />
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <ContactSection
          id="exchange-contact"
          title={
            <>
              Plan <em>your first exchange.</em>
            </>
          }
          description="Tell us which currencies your members want to move between and what you’d like to offer through your partners."
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
