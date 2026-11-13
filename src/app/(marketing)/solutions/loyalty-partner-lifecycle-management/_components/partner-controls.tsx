import { partnerControls } from "../_content/management-content";

export function PartnerControls() {
  return (
    <section
      id="partner-controls"
      aria-labelledby="partner-controls-title"
      className="scroll-mt-24 bg-surface"
    >
      <div className="mx-auto grid max-w-7xl items-start gap-8 px-6 py-15 sm:px-10 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:gap-16 lg:py-22">
        <div>
          <h2
            id="partner-controls-title"
            className="mt-0 mb-5 max-w-112 text-[clamp(36px,4.5vw,61px)] leading-[1.04] tracking-[-0.06em] text-balance"
          >
            Decide what each <em>partner can do.</em>
          </h2>
          <p className="m-0 max-w-106 text-[16px] leading-[1.7] text-ink-muted">
            A partner that awards points may need different permissions from one
            that accepts them. Use the management portal to set which
            transactions are available for each relationship.
          </p>
        </div>
        <figure className="m-0 border border-line bg-paper">
          <figcaption className="border-b border-line bg-surface-soft px-5 py-4 sm:px-7">
            <span className="block text-[17px] font-extrabold text-ink">
              Example partner setup
            </span>
            <span className="mt-1 block text-[14px] text-ink-muted">
              Travel partner
            </span>
          </figcaption>
          <dl className="m-0 divide-y divide-line px-5 sm:px-7">
            {partnerControls.map(({ label, description, example }) => (
              <div
                key={label}
                className="grid gap-1.5 py-4 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] sm:gap-x-6"
              >
                <dt className="text-[15px] font-extrabold">{label}</dt>
                <dd className="m-0 text-[14px] font-bold text-teal-dark sm:text-right">
                  {example}
                </dd>
                <dd className="m-0 text-[14px] leading-[1.55] text-ink-muted sm:col-span-2">
                  {description}
                </dd>
              </div>
            ))}
          </dl>
        </figure>
      </div>
    </section>
  );
}
