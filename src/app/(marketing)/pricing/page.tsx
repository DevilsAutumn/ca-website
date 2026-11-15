import { ArrowDown } from "lucide-react";
import { ContactSection } from "@/app/_components/marketing/contact-section";
import { TextLink } from "@/app/_components/ui/text-link";
import { pageMetadata } from "@/lib/seo/metadata";
import { siteLinks } from "@/lib/site-links";
import { FeeExample } from "./_components/fee-example";
import { FeeSchedule } from "./_components/fee-schedule";
import { PricingServices } from "./_components/pricing-services";

export const metadata = pageMetadata({
  title: "Loyalty Platform Pricing",
  description:
    "See Currency Alliance’s fees for issuing and exchanging loyalty points and miles, with a worked example and the tools included with the platform.",
  path: siteLinks.pricing,
});

export default function PricingPage() {
  return (
    <>
      <div className="bg-surface">
        <header className="mx-auto grid max-w-7xl gap-8 px-6 py-10 sm:px-10 sm:py-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,27rem)] lg:items-center lg:gap-12 lg:py-16">
          <div>
            <h1 className="mb-4 text-[clamp(42px,6.4vw,78px)] leading-[1.02] tracking-[-0.065em] text-balance max-[359px]:text-[38px]">
              Loyalty platform{" "}
              <em className="text-teal-dark lg:block">pricing.</em>
            </h1>
            <p className="m-0 max-w-123 text-[clamp(16px,1.45vw,19px)] leading-[1.65] text-ink-soft">
              Platform setup and licensing cost €0 upfront. Transaction fees are
              based on the value of points and miles issued through the platform
              or exchanged in eligible transactions.
            </p>
            <TextLink href="#fees" className="mt-5">
              See transaction fees <ArrowDown size={15} aria-hidden="true" />
            </TextLink>
          </div>
          <FeeExample />
        </header>
      </div>
      <FeeSchedule />
      <PricingServices />
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <ContactSection
          id="pricing-contact"
          title={
            <>
              Plan your <em>loyalty budget.</em>
            </>
          }
          description="Tell us how much loyalty value you expect to issue or exchange. We can help estimate your fees and discuss volume discounts."
          primaryAction={{ label: "Discuss pricing", href: "/contact-us" }}
          secondaryAction={{
            label: "Register for free",
            href: siteLinks.register,
          }}
        />
      </div>
    </>
  );
}
