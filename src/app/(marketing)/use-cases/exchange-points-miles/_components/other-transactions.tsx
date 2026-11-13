import { otherTransactions } from "../_content/exchange-content";

export function OtherTransactions() {
  return (
    <section
      aria-labelledby="other-transactions-title"
      className="bg-ink text-white"
    >
      <div className="mx-auto grid max-w-7xl items-start gap-7 px-6 py-10 sm:px-10 lg:grid-cols-[minmax(0,0.76fr)_minmax(0,1.24fr)] lg:gap-12 lg:py-13">
        <h2
          id="other-transactions-title"
          className="m-0 max-w-115 text-[clamp(32px,3.8vw,49px)] leading-[1.08] tracking-[-0.06em] text-balance"
        >
          More ways to <em className="text-teal-pale">move loyalty value.</em>
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {otherTransactions.map(({ title, description }) => (
            <div key={title} className="border-t border-line-dark pt-4">
              <h3 className="mt-0 mb-2 text-[19px] leading-snug font-extrabold tracking-tight">
                {title}
              </h3>
              <p className="m-0 text-[15px] leading-relaxed text-teal-wash">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
