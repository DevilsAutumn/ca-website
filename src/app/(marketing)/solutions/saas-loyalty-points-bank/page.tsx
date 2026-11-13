import { pageMetadata } from "@/lib/seo/metadata";
import { ContactSection } from "@/app/_components/marketing/contact-section";
import { siteLinks } from "@/lib/site-links";
import { LoyaltyBackendSection } from "../_components/loyalty-backend-section";
import { BankOperations } from "./_components/bank-operations";
import { PointsBankHero } from "./_components/points-bank-hero";

export const metadata = pageMetadata({
  title: "Loyalty Points Bank",
  description:
    "Use one primary ledger for your loyalty program. Record points and miles, keep member balances current, and connect the records to your existing systems.",
  path: siteLinks.loyaltyPointsBank,
});

export default function LoyaltyPointsBankPage() {
  return (
    <>
      <PointsBankHero />
      <BankOperations />
      <LoyaltyBackendSection
        title={
          <>
            A ledger for <em>your new program.</em>
          </>
        }
        description="Use the points bank with the rules engine to launch your own loyalty currency. If you already have a primary ledger, you can keep it and connect the Currency Alliance services you need."
        relatedService="loyaltyRulesEngine"
      />
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <ContactSection
          id="points-bank-contact"
          title={
            <>
              Explore the <em>points bank.</em>
            </>
          }
          description="Try the platform in the sandbox, or talk with us about how you plan to issue, track, and redeem points."
          primaryAction={{ label: "Request a demo", href: "/contact-us" }}
          secondaryAction={{
            label: "View API documentation",
            href: siteLinks.apiDocumentation,
          }}
        />
      </div>
    </>
  );
}
