import { checkoutAmounts, paymentChoices } from "../_content/payment-content";

const usd = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
const { orderTotal, pointsValue } = checkoutAmounts;
const checkoutLines = [
  { label: "Order total", value: usd.format(orderTotal) },
  { label: "Value covered by points", value: usd.format(-pointsValue) },
] as const;
const cashDue = usd.format(orderTotal - pointsValue);

function CheckoutReceipt() {
  return (
    <figure className="m-0 min-w-0 border border-line bg-surface">
      <figcaption className="flex flex-wrap items-baseline justify-between gap-2 border-b border-line px-5 py-4 sm:px-6">
        <span className="text-[15px] font-extrabold">Example checkout</span>
        <span className="text-[13px] font-bold text-ink-muted">USD</span>
      </figcaption>
      <dl className="m-0">
        {checkoutLines.map(({ label, value }) => (
          <div
            key={label}
            className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-3 px-5 py-3.5 sm:px-6"
          >
            <dt className="text-[15px] text-ink-muted">{label}</dt>
            <dd className="m-0 text-[17px] font-bold tabular-nums">{value}</dd>
          </div>
        ))}
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-3 border-t border-line bg-teal-wash/35 px-5 py-4 sm:px-6">
          <dt className="text-[16px] font-extrabold text-teal-dark">
            Cash to pay
          </dt>
          <dd className="m-0 text-[clamp(26px,3.6vw,42px)] leading-none font-semibold tracking-tight text-teal-dark tabular-nums">
            {cashDue}
          </dd>
        </div>
      </dl>
    </figure>
  );
}

export function CheckoutExample() {
  return (
    <section
      id="checkout-example"
      aria-labelledby="checkout-example-title"
      className="scroll-mt-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-7 px-6 py-12 sm:px-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-14 lg:py-16">
        <div>
          <h2
            id="checkout-example-title"
            className="mt-0 mb-5 text-[clamp(34px,4.3vw,55px)] leading-[1.06] tracking-[-0.06em] text-balance"
          >
            Points, cash, <em>or both.</em>
          </h2>
          <dl className="m-0 max-w-129 divide-y divide-line border-y border-line">
            {paymentChoices.map(({ title, description }) => (
              <div key={title} className="py-4">
                <dt className="mb-1.5 text-[17px] leading-snug font-extrabold tracking-tight">
                  {title}
                </dt>
                <dd className="m-0 text-[15px] leading-relaxed text-ink-muted">
                  {description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <CheckoutReceipt />
      </div>
    </section>
  );
}
