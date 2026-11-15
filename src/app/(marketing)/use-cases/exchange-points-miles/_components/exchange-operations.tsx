import { Arrow } from "@/app/_components/ui/arrow";
import { TextLink } from "@/app/_components/ui/text-link";
import { siteLinks } from "@/lib/site-links";
import {
  exchangeFeeRate,
  formatPercent,
} from "../../../_content/platform-pricing";

export function ExchangeOperations() {
  return (
    <section
      aria-labelledby="exchange-operations-title"
      className="border-b border-line bg-surface-soft"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-7 px-6 py-12 sm:px-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-12 lg:py-16">
        <div>
          <h2
            id="exchange-operations-title"
            className="mt-0 mb-4 max-w-132 text-[clamp(34px,4.3vw,55px)] leading-[1.06] tracking-[-0.06em] text-balance"
          >
            Settle exchanges <em>between partners.</em>
          </h2>
          <p className="m-0 max-w-125 text-[16px] leading-[1.7] text-ink-muted">
            Automate reconciliation and settlement for partner transactions, or
            give your finance team consolidated invoices.
          </p>
          <TextLink
            href={siteLinks.partnershipManagement}
            className="mt-5 whitespace-normal [&>.arrow]:shrink-0"
          >
            Explore partnership management <Arrow />
          </TextLink>
        </div>
        <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4 border border-line bg-surface p-5 sm:gap-6 sm:p-7">
          <p className="m-0 text-[clamp(42px,5vw,65px)] leading-none font-medium tracking-[-0.06em] text-teal-dark tabular-nums">
            {formatPercent(exchangeFeeRate)}
          </p>
          <div>
            <h3 className="mt-0 mb-1 text-[16px] leading-snug font-extrabold">
              Platform fee on eligible exchanges
            </h3>
            <p className="m-0 text-[15px] leading-relaxed text-ink-muted">
              Zero upfront platform setup or licence fees.
            </p>
            <TextLink
              href={siteLinks.pricing}
              className="mt-3 whitespace-normal"
            >
              View full pricing <Arrow />
            </TextLink>
          </div>
        </div>
      </div>
    </section>
  );
}
