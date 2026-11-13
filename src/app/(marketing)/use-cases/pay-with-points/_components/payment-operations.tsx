import { Arrow } from "@/app/_components/ui/arrow";
import { TextLink } from "@/app/_components/ui/text-link";
import { siteLinks } from "@/lib/site-links";
import { CapabilityCaseStudy } from "../../../solutions/_components/capability-case-study";
import { bankRedemptionCase } from "../_content/payment-content";

export function PaymentOperations() {
  return (
    <section
      aria-labelledby="payment-operations-title"
      className="border-b border-line"
    >
      <div className="mx-auto grid max-w-7xl gap-7 px-6 py-12 sm:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-14 lg:py-16">
        <div className="flex flex-col items-start justify-center">
          <h2
            id="payment-operations-title"
            className="mt-0 mb-4 max-w-123 text-[clamp(34px,4.3vw,55px)] leading-[1.06] tracking-[-0.06em] text-balance"
          >
            What happens <em>after checkout?</em>
          </h2>
          <p className="m-0 max-w-122 text-[16px] leading-[1.7] text-ink-muted">
            Currency Alliance reconciles and settles points payments between
            partners. Finance teams get consolidated reporting and can request
            invoices for partner activity.
          </p>
          <TextLink
            href={siteLinks.partnershipManagement}
            className="mt-5 whitespace-normal [&>.arrow]:shrink-0"
          >
            Explore partnership management <Arrow />
          </TextLink>
        </div>
        <CapabilityCaseStudy
          titleId="payment-bank-case-title"
          {...bankRedemptionCase}
        />
      </div>
    </section>
  );
}
