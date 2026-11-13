import { Arrow } from "@/app/_components/ui/arrow";
import { TextLink } from "@/app/_components/ui/text-link";
import {
  bankTravelCaseStudy,
  memberActions,
} from "../_content/marketplace-content";

export function MemberValue() {
  return (
    <section
      id="member-value"
      aria-labelledby="member-value-title"
      className="scroll-mt-24 bg-surface"
    >
      <div className="mx-auto grid max-w-7xl gap-9 px-6 py-15 sm:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-14 lg:py-22">
        <div>
          <h2
            id="member-value-title"
            className="mt-0 mb-6 max-w-118 text-[clamp(36px,4.5vw,57px)] leading-[1.05] tracking-[-0.06em] text-balance"
          >
            What members <em>can do.</em>
          </h2>
          <dl className="m-0 divide-y divide-line border-y border-line">
            {memberActions.map(({ label, example }) => (
              <div
                key={label}
                className="grid grid-cols-[5.25rem_minmax(0,1fr)] items-baseline gap-3 py-4 sm:grid-cols-[6rem_minmax(0,1fr)]"
              >
                <dt className="text-[16px] font-extrabold text-teal-dark">
                  {label}
                </dt>
                <dd className="m-0 text-[15px] leading-[1.6] text-ink-muted">
                  {example}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <article
          aria-labelledby="marketplace-case-title"
          className="flex flex-col items-start justify-center bg-ink px-6 py-8 text-white sm:px-9 sm:py-10"
        >
          <p className="mb-4 text-[13px] font-extrabold text-teal-pale">
            {bankTravelCaseStudy.customer}
          </p>
          <h3
            id="marketplace-case-title"
            className="mt-0 mb-4 max-w-96 text-[clamp(28px,3.4vw,43px)] leading-[1.1] font-medium tracking-[-0.05em] text-balance"
          >
            {bankTravelCaseStudy.title}
          </h3>
          <p className="mt-0 mb-6 max-w-104 text-[15px] leading-[1.7] text-teal-wash">
            {bankTravelCaseStudy.description}
          </p>
          <TextLink href={bankTravelCaseStudy.href} tone="light">
            Read the case study <Arrow />
          </TextLink>
        </article>
      </div>
    </section>
  );
}
