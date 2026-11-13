import { pageMetadata } from "@/lib/seo/metadata";
import { ContactSection } from "@/app/_components/marketing/contact-section";
import { siteLinks } from "@/lib/site-links";
import { VoucherHero } from "./_components/voucher-hero";
import { VoucherSetup } from "./_components/voucher-setup";
import { VoucherWorkflow } from "./_components/voucher-workflow";

export const metadata = pageMetadata({
  title: "Loyalty Voucher Platform",
  description:
    "Issue and redeem vouchers through one API. Run standalone promotions or offer vouchers that customers can claim with their points or miles.",
  path: siteLinks.loyaltyVoucherPlatform,
});

export default function VoucherPlatformPage() {
  return (
    <>
      <VoucherHero />
      <VoucherWorkflow />
      <VoucherSetup />
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <ContactSection
          id="voucher-contact"
          title={
            <>
              Plan a <em>voucher campaign.</em>
            </>
          }
          description="Talk through what you want to offer, who should receive it, and where customers can use it."
          primaryAction={{
            label: "Request a demo",
            href: "https://www.currencyalliance.com/contact-us",
          }}
          secondaryAction={{
            label: "View API documentation",
            href: siteLinks.apiDocumentation,
          }}
        />
      </div>
    </>
  );
}
