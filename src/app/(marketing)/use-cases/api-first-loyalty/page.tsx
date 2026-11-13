import { pageMetadata } from "@/lib/seo/metadata";
import { ContactSection } from "@/app/_components/marketing/contact-section";
import { siteLinks } from "@/lib/site-links";
import { LoyaltyTouchpoints } from "./_components/loyalty-touchpoints";
import { ModernisationPaths } from "./_components/modernisation-paths";
import { ModerniseHero } from "./_components/modernise-hero";

export const metadata = pageMetadata({
  title: "Modernise Your Loyalty Program",
  description:
    "Extend your current loyalty program with an API, migrate individual services, or adopt a headless loyalty backend for your app, website, and stores.",
  path: siteLinks.moderniseLoyaltyProgram,
});

export default function ModerniseLoyaltyProgramPage() {
  return (
    <>
      <ModerniseHero />
      <ModernisationPaths />
      <LoyaltyTouchpoints />
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <ContactSection
          id="modernise-contact"
          title={
            <>
              Plan <em>your next upgrade.</em>
            </>
          }
          description="Tell us how your loyalty program works today and what you want members to be able to do next."
          primaryAction={{
            label: "Request a demo",
            href: "https://www.currencyalliance.com/contact-us",
          }}
          secondaryAction={{
            label: "Read the API documentation",
            href: siteLinks.apiDocumentation,
          }}
        />
      </div>
    </>
  );
}
