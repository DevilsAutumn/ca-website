import { pageMetadata } from "@/lib/seo/metadata";
import { ContactSection } from "@/app/_components/marketing/contact-section";
import { siteLinks } from "@/lib/site-links";
import { TerminalCheckout } from "./_components/terminal-checkout";
import { TerminalHero } from "./_components/terminal-hero";
import { TerminalRollout } from "./_components/terminal-rollout";

export const metadata = pageMetadata({
  title: "Universal Points Terminal",
  description:
    "Identify loyalty members, issue points, and accept points as payment at checkout through a browser app for your POS, tablet, or phone.",
  path: siteLinks.universalPointsTerminal,
});

export default function UniversalPointsTerminalPage() {
  return (
    <>
      <TerminalHero />
      <TerminalCheckout />
      <TerminalRollout />
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <ContactSection
          id="terminal-contact"
          title={
            <>
              Bring loyalty to <em>your checkout.</em>
            </>
          }
          description="Tell us what your store teams use today and how you want members to earn or spend points in store."
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
