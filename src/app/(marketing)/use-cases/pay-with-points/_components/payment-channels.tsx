import { LoyaltyTouchpointGrid } from "../../_components/loyalty-touchpoint-grid";
import { paymentChannels } from "../_content/payment-content";

export function PaymentChannels() {
  return (
    <section
      aria-labelledby="payment-channels-title"
      className="border-y border-line bg-surface-soft"
    >
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-10 lg:py-16">
        <h2
          id="payment-channels-title"
          className="mt-0 mb-4 text-[clamp(34px,4.3vw,55px)] leading-[1.06] tracking-[-0.06em] text-balance"
        >
          Offer it online <em>or in store.</em>
        </h2>
        <p className="mt-0 mb-7 max-w-167 text-[16px] leading-[1.7] text-ink-muted">
          Start with a ready-made checkout tool with zero upfront software fees,
          or use the API to display prices in points and build your own payment
          flow.
        </p>
        <LoyaltyTouchpointGrid items={paymentChannels} />
      </div>
    </section>
  );
}
