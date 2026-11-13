import { pageMetadata } from "@/lib/seo/metadata";
import { ContactSection } from "@/app/_components/marketing/contact-section";
import { siteLinks } from "@/lib/site-links";
import { AccountLinkingHero } from "./_components/account-linking-hero";
import { LinkedExperiences } from "./_components/linked-experiences";
import { LinkingIntegration } from "./_components/linking-integration";

export const metadata = pageMetadata({
  title: "Loyalty Account Linking",
  description:
    "Let members link accounts across partnered loyalty programs with a branded flow, partner-managed sign-in, and a token-based return.",
  path: siteLinks.loyaltyAccountLinking,
});

export default function AccountLinkingPage() {
  return (
    <>
      <AccountLinkingHero />
      <LinkedExperiences />
      <LinkingIntegration />
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <ContactSection
          id="account-linking-contact"
          title={
            <>
              Plan your <em>account-linking flow.</em>
            </>
          }
          description="Tell us which partner programs and member experiences you want to support. We’ll help you map how the link fits into your site or app."
          primaryAction={{ label: "Talk to our team", href: "/contact-us" }}
          secondaryAction={{
            label: "Explore partner accrual",
            href: siteLinks.partnerAccrual,
          }}
        />
      </div>
    </>
  );
}
