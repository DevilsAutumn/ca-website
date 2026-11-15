import {
  exchangeFeeRate,
  formatPercent,
  issuanceFeeRate,
} from "../../_content/platform-pricing";

const fees = [
  {
    title: "Issuing points or miles",
    amount: formatPercent(issuanceFeeRate),
    description:
      "Applies to the value of points or miles issued on your behalf.",
  },
  {
    title: "Eligible exchanges",
    amount: formatPercent(exchangeFeeRate),
    description:
      "Applies when members exchange into your currency or use it for a gift card, voucher, or other reward supplied by the platform.",
  },
];

export function FeeSchedule() {
  return (
    <section
      id="fees"
      aria-labelledby="fees-title"
      className="scroll-mt-6 border-y border-line bg-paper"
    >
      <div className="mx-auto max-w-7xl px-6 py-11 sm:px-10 sm:py-14">
        <h2
          id="fees-title"
          className="mb-3 text-[clamp(32px,4.4vw,52px)] leading-[1.08] tracking-[-0.06em]"
        >
          Transaction fees
        </h2>
        <p className="mb-6 leading-relaxed text-ink-muted">
          Issuance and exchange fees are billed monthly.
        </p>
        <dl className="m-0 divide-y divide-line border-y border-line">
          {fees.map(({ title, amount, description }) => (
            <div
              key={title}
              className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-5 gap-y-2 py-5 md:grid-cols-[minmax(0,1fr)_7rem_minmax(0,2fr)] md:gap-x-7"
            >
              <dt className="text-base font-extrabold sm:text-lg">{title}</dt>
              <dd className="m-0 text-right text-[28px] leading-none font-bold tracking-[-0.045em] text-teal-dark tabular-nums md:text-left">
                {amount}
              </dd>
              <dd className="col-span-2 m-0 max-w-152 text-[15px] leading-[1.65] text-ink-soft md:col-span-1">
                {description}
              </dd>
            </div>
          ))}
        </dl>
        <div className="mt-5 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3">
          <p className="m-0 text-sm text-ink-muted">
            Fees are shown before any applicable taxes.
          </p>
        </div>
      </div>
    </section>
  );
}
