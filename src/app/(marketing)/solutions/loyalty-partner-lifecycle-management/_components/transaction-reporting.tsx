import { ReportingFlow } from "./reporting-flow";

export function TransactionReporting() {
  return (
    <section
      id="transaction-reporting"
      aria-labelledby="transaction-reporting-title"
      className="scroll-mt-24 border-y border-line bg-surface-soft"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 py-13 sm:px-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-14 lg:py-17">
        <div>
          <h2
            id="transaction-reporting-title"
            className="mt-0 mb-4 max-w-112 text-[clamp(34px,4vw,53px)] leading-[1.05] tracking-[-0.06em] text-balance"
          >
            One view of <em>partner activity.</em>
          </h2>
          <p className="m-0 max-w-108 text-[16px] leading-[1.7] text-ink-muted">
            Partners submit transactions in the way that fits their systems and
            volume. Your team can review their activity together in the
            management portal.
          </p>
        </div>
        <ReportingFlow />
      </div>
    </section>
  );
}
