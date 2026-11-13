import { Arrow } from "@/app/_components/ui/arrow";
import { TextLink } from "@/app/_components/ui/text-link";
import { siteLinks } from "@/lib/site-links";
import { BrandedCaseStudy } from "../../../solutions/_components/branded-case-study";
import {
  bankExchangeCaseStudy,
  exchangeActions,
} from "../_content/exchange-content";

export function ExchangeOptions() {
  return (
    <section
      id="exchange-options"
      aria-labelledby="exchange-options-title"
      className="scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-10 lg:py-16">
        <div className="grid items-center gap-7 lg:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)] lg:gap-12">
          <div>
            <h2
              id="exchange-options-title"
              className="mt-0 mb-4 max-w-128 text-[clamp(34px,4.3vw,55px)] leading-[1.06] tracking-[-0.06em] text-balance"
            >
              Set the terms <em>with each partner.</em>
            </h2>
            <p className="m-0 max-w-114 text-[16px] leading-[1.7] text-ink-muted">
              Agree which transactions members can make across both programs and
              how those transactions are funded and settled.
            </p>
            <TextLink href={siteLinks.partnerContracting} className="mt-5">
              Explore partner contracting <Arrow />
            </TextLink>
          </div>
          <dl className="m-0 divide-y divide-line border border-line bg-surface">
            {exchangeActions.map(({ label, description }) => (
              <div
                key={label}
                className="grid grid-cols-[4.25rem_minmax(0,1fr)] items-baseline gap-3 px-4 py-4 sm:grid-cols-[6rem_minmax(0,1fr)] sm:px-6 sm:py-5"
              >
                <dt className="text-[16px] font-extrabold text-teal-dark">
                  {label}
                </dt>
                <dd className="m-0 text-[15px] leading-relaxed text-ink-muted">
                  {description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <BrandedCaseStudy
          titleId="bank-exchange-case-title"
          className="mt-8 lg:mt-10"
          {...bankExchangeCaseStudy}
        />
      </div>
    </section>
  );
}
