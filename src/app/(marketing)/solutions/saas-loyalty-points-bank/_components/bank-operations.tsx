import { Arrow } from "@/app/_components/ui/arrow";
import { TextLink } from "@/app/_components/ui/text-link";
import { BrandedCaseStudy } from "../../_components/branded-case-study";
import {
  activeSuperCaseHref,
  bankCapabilities,
  pointsBankGuideHref,
} from "../_content/bank-content";

export function BankOperations() {
  return (
    <section
      aria-labelledby="bank-operations-title"
      className="mx-auto max-w-7xl px-6 py-13 sm:px-10 lg:py-17"
    >
      <div className="grid items-start gap-7 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-14">
        <div>
          <h2
            id="bank-operations-title"
            className="mt-0 mb-4 max-w-113 text-[clamp(34px,4.3vw,55px)] leading-[1.06] tracking-[-0.06em] text-balance"
          >
            One record for <em className="block">the whole program.</em>
          </h2>
          <p className="mt-0 mb-5 max-w-108 text-[16px] leading-[1.7] text-ink-muted">
            Give member apps, CRM, and accounting tools access to the same
            balances and transaction history through the API.
          </p>
          <TextLink href={pointsBankGuideHref}>
            Read the points bank guide <Arrow />
          </TextLink>
        </div>
        <dl className="m-0 divide-y divide-line border-y border-line">
          {bankCapabilities.map(({ title, description }) => (
            <div
              key={title}
              className="grid items-baseline gap-1.5 py-4 sm:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] sm:gap-5"
            >
              <dt className="text-[15px] leading-snug font-extrabold text-teal-dark">
                {title}
              </dt>
              <dd className="m-0 text-[15px] leading-[1.65] text-ink-muted">
                {description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <BrandedCaseStudy
        titleId="active-super-case-title"
        title="How Active Super shows members their points activity"
        description="Members earn through linked cards and can see their balance and transaction history in Active Super’s branded screens."
        href={activeSuperCaseHref}
        logo={{ src: "/partners/active-super.svg", width: 144, height: 43 }}
        className="mt-8 lg:mt-10"
      />
    </section>
  );
}
