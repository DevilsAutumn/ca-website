import { pageMetadata } from "@/lib/seo/metadata";
import { ContactSection } from "@/app/_components/marketing/contact-section";
import { siteLinks } from "@/lib/site-links";
import { RetailHero } from "./_components/retail-hero";
import { RetailPartners } from "./_components/retail-partners";
import { RetailProgram } from "./_components/retail-program";
import { RetailTouchpoints } from "./_components/retail-touchpoints";

export const metadata = pageMetadata({
  title: "Ecommerce and Retail Loyalty",
  description:
    "Connect loyalty to your webstore and store checkout. Personalise offers, launch or extend a points program, and let shoppers earn or spend partner currencies.",
  path: siteLinks.ecommerceLoyalty,
});

export default function EcommerceLoyaltyPage() {
  return (
    <>
      <RetailHero />
      <RetailTouchpoints />
      <RetailProgram />
      <RetailPartners />
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <ContactSection
          id="retail-loyalty-contact"
          title={
            <>
              Build loyalty into <em>your storefront.</em>
            </>
          }
          description="Tell us how customers shop with you and what you want them to earn or spend. We’ll help map the experience to your existing tools."
          primaryAction={{
            label: "Request a demo",
            href: "https://www.currencyalliance.com/contact-us",
          }}
          secondaryAction={{
            label: "Read the ecommerce loyalty guide",
            href: "https://www.currencyalliance.com/insights/loyalty-ecommerce-a-how-to-guide",
          }}
        />
      </div>
    </>
  );
}
