import { Arrow } from "@/app/_components/ui/arrow";
import { TextLink } from "@/app/_components/ui/text-link";
import {
  flyingBlueCaseStudy,
  settlementSteps,
} from "../_content/management-content";

export function SettlementWorkflow() {
  return (
    <section
      id="settlement"
      aria-labelledby="settlement-title"
      className="scroll-mt-24 bg-surface"
    >
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-15 sm:px-10 lg:grid-cols-2 lg:gap-14 lg:py-22">
        <div>
          <h2
            id="settlement-title"
            className="mt-0 mb-6 max-w-125 text-[clamp(36px,4.5vw,59px)] leading-[1.04] tracking-[-0.06em] text-balance"
          >
            From transaction <em>to settlement.</em>
          </h2>
          <ol
            className="m-0 list-none divide-y divide-line border-y border-line p-0"
            role="list"
          >
            {settlementSteps.map(({ title, description }, index) => (
              <li
                key={title}
                className="grid grid-cols-[1.75rem_minmax(0,1fr)] gap-3 py-4"
              >
                <span
                  className="mt-0.5 text-[13px] font-extrabold text-teal-dark tabular-nums"
                  aria-hidden="true"
                >
                  0{index + 1}
                </span>
                <div>
                  <h3 className="mt-0 mb-1 text-[17px] leading-tight font-extrabold">
                    {title}
                  </h3>
                  <p className="m-0 max-w-102 text-[15px] leading-[1.6] text-ink-muted">
                    {description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <article
          aria-labelledby="settlement-case-title"
          className="flex flex-col items-start justify-center border border-line bg-paper px-6 py-8 sm:px-9 sm:py-10"
        >
          <p className="mb-5 text-[14px] font-extrabold text-teal-dark">
            {flyingBlueCaseStudy.customer}
          </p>
          <h3
            id="settlement-case-title"
            className="mt-0 mb-4 max-w-103 text-[clamp(29px,3.6vw,48px)] leading-[1.06] font-medium tracking-[-0.055em] text-balance"
          >
            {flyingBlueCaseStudy.title}
          </h3>
          <p className="mt-0 mb-6 max-w-106 text-[15px] leading-[1.7] text-ink-muted">
            {flyingBlueCaseStudy.description}
          </p>
          <TextLink href={flyingBlueCaseStudy.href}>
            Read the Flying Blue case study <Arrow />
          </TextLink>
        </article>
      </div>
    </section>
  );
}
