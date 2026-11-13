import { pageMetadata } from "@/lib/seo/metadata";
import { ContactSection } from "@/app/_components/marketing/contact-section";
import { siteLinks } from "@/lib/site-links";
import { CheckoutExample } from "./_components/checkout-example";
import { PayWithPointsHero } from "./_components/pay-with-points-hero";
import { PaymentChannels } from "./_components/payment-channels";
import { PaymentOperations } from "./_components/payment-operations";

export const metadata = pageMetadata({
  title: "Pay with Points",
  description:
    "Accept your own or a partner’s loyalty points and miles at checkout. Offer full or split payment online and in store, with automated partner settlement.",
  path: siteLinks.payWithPoints,
});

export default function PayWithPointsPage() {
  return (
    <>
      <PayWithPointsHero />
      <CheckoutExample />
      <PaymentChannels />
      <PaymentOperations />
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <ContactSection
          id="pay-with-points-contact"
          title={
            <>
              Plan your <em>payment flow.</em>
            </>
          }
          description="Tell us where customers shop and which loyalty currencies you want to accept. We’ll help you choose an online or in-store setup."
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
