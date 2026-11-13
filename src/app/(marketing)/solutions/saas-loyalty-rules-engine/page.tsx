import { pageMetadata } from "@/lib/seo/metadata";
import { ContactSection } from "@/app/_components/marketing/contact-section";
import { siteLinks } from "@/lib/site-links";
import { LoyaltyModules } from "./_components/loyalty-modules";
import { RuleBenefits } from "./_components/rule-benefits";
import { RulesHero } from "./_components/rules-hero";

export const metadata = pageMetadata({
  title: "Loyalty Rules Engine",
  description:
    "Configure earning, redemption, and exchange rules for your loyalty program. Explore the Purchase Rules and Activity Rules screens and see how the engine fits your platform.",
  path: siteLinks.loyaltyRulesEngine,
});

export default function LoyaltyRulesEnginePage() {
  return (
    <>
      <RulesHero />
      <RuleBenefits />
      <LoyaltyModules />
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <ContactSection
          id="rules-engine-contact"
          title={
            <>
              Try the <em>rules engine.</em>
            </>
          }
          description="Explore the rules engine in the sandbox, or talk us through an incentive you want to offer."
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
