import { pageMetadata } from "@/lib/seo/metadata";
import { ContactSection } from "@/app/_components/marketing/contact-section";
import { siteLinks } from "@/lib/site-links";
import { LaunchHero } from "./_components/launch-hero";
import { LaunchPlanning } from "./_components/launch-planning";
import { PartnerExpansion } from "./_components/partner-expansion";
import { ProgramModules } from "./_components/program-modules";
import { VendorComparison } from "./_components/vendor-comparison";

export const metadata = pageMetadata({
  title: "Launch a Loyalty Program",
  description:
    "Launch a points program with a rules engine and points bank. Connect your rewards, customer data, and campaign tools, then add loyalty partners as you grow.",
  path: siteLinks.launchLoyaltyProgram,
});

export default function LaunchLoyaltyProgramPage() {
  return (
    <>
      <LaunchHero />
      <ProgramModules />
      <PartnerExpansion />
      <LaunchPlanning />
      <VendorComparison />
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <ContactSection
          id="launch-contact"
          title={
            <>
              Let’s build <em>your program.</em>
            </>
          }
          description="Tell us how you want members to earn and spend points. We’ll help you map the services, integrations, and rewards you need to get started."
          primaryAction={{
            label: "Request a demo",
            href: "https://www.currencyalliance.com/contact-us",
          }}
          secondaryAction={{
            label: "Explore white-label solutions",
            href: siteLinks.whiteLabelSolutions,
          }}
        />
      </div>
    </>
  );
}
