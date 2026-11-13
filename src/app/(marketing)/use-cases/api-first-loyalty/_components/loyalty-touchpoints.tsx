import { LoyaltyTouchpointGrid } from "../../_components/loyalty-touchpoint-grid";
import { loyaltyTouchpoints } from "../_content/modernisation-content";

export function LoyaltyTouchpoints() {
  return (
    <section
      aria-labelledby="loyalty-touchpoints-title"
      className="border-y border-line bg-surface-soft"
    >
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-10 lg:py-16">
        <h2
          id="loyalty-touchpoints-title"
          className="mt-0 mb-7 max-w-180 text-[clamp(34px,4.3vw,55px)] leading-[1.06] tracking-[-0.06em] text-balance"
        >
          Add loyalty where <em>members already shop.</em>
        </h2>
        <LoyaltyTouchpointGrid items={loyaltyTouchpoints} />
      </div>
    </section>
  );
}
