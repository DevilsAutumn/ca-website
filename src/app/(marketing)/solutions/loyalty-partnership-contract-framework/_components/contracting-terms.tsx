import { CapabilityCaseStudy } from "../../_components/capability-case-study";
import {
  flyingBlueContractsCase,
  termsToPrepare,
} from "../_content/contracting-content";

export function ContractingTerms() {
  return (
    <section
      aria-labelledby="contracting-terms-title"
      className="border-y border-line bg-surface-soft"
    >
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-14 sm:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-14 lg:py-19">
        <div>
          <h2
            id="contracting-terms-title"
            className="mt-0 mb-6 max-w-116 text-[clamp(34px,4.3vw,55px)] leading-[1.05] tracking-[-0.06em] text-balance"
          >
            What to agree <em>before launch.</em>
          </h2>
          <dl className="m-0 divide-y divide-line border-y border-line">
            {termsToPrepare.map(({ label, description }) => (
              <div
                key={label}
                className="grid grid-cols-[6rem_minmax(0,1fr)] items-baseline gap-3 py-3.5 sm:grid-cols-[8.5rem_minmax(0,1fr)]"
              >
                <dt className="text-[15px] leading-tight font-extrabold text-teal-dark">
                  {label}
                </dt>
                <dd className="m-0 text-[15px] leading-[1.6] text-ink-muted">
                  {description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <CapabilityCaseStudy
          titleId="contracting-case-title"
          {...flyingBlueContractsCase}
        />
      </div>
    </section>
  );
}
