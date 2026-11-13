import { pageMetadata } from "@/lib/seo/metadata";
import { ContactSection } from "@/app/_components/marketing/contact-section";
import { siteLinks } from "@/lib/site-links";
import { WhiteLabelHero } from "./_components/white-label-hero";
import { WhiteLabelSetup } from "./_components/white-label-setup";

export const metadata = pageMetadata({
  title: "White-Label Loyalty Solutions",
  description:
    "Embed branded loyalty screens for account linking, points exchange, partner earning, member accounts, and pay with points in your website or app.",
  path: siteLinks.whiteLabelSolutions,
});

export default function WhiteLabelSolutionsPage() {
  return (
    <>
      <WhiteLabelHero />
      <WhiteLabelSetup />
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <ContactSection
          id="white-label-contact"
          title={
            <>
              Choose a <em>loyalty screen.</em>
            </>
          }
          description="Tell us where you want members to earn, spend, or manage points. We’ll show how a branded screen can fit that step."
          primaryAction={{
            label: "Request a demo",
            href: "https://www.currencyalliance.com/contact-us",
          }}
          secondaryAction={{
            label: "Explore in-store loyalty",
            href: siteLinks.universalPointsTerminal,
          }}
        />
      </div>
    </>
  );
}
