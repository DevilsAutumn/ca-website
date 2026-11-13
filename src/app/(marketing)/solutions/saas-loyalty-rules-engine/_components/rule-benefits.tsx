import { Arrow } from "@/app/_components/ui/arrow";
import { TextLink } from "@/app/_components/ui/text-link";
import { ruleBenefits, rulesGuideHref } from "../_content/rules-content";

export function RuleBenefits() {
  return (
    <section
      id="rule-capabilities"
      aria-labelledby="rule-benefits-title"
      className="mx-auto max-w-7xl scroll-mt-24 px-6 py-13 sm:px-10 lg:py-17"
    >
      <div className="mb-7 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-4">
        <h2
          id="rule-benefits-title"
          className="m-0 text-[clamp(34px,4.3vw,55px)] leading-[1.06] tracking-[-0.06em] text-balance"
        >
          Benefits of the <em>loyalty rules engine.</em>
        </h2>
        <TextLink href={rulesGuideHref}>
          Read the rules engine guide <Arrow />
        </TextLink>
      </div>
      <ul className="m-0 grid list-none gap-px border border-line bg-line p-0 sm:grid-cols-2 lg:grid-cols-4">
        {ruleBenefits.map(({ title, description, icon: Icon }) => (
          <li
            key={title}
            className="grid min-w-0 grid-cols-[1.5rem_minmax(0,1fr)] items-start gap-3 bg-surface p-5 sm:block xl:p-6"
          >
            <Icon
              size={23}
              strokeWidth={1.6}
              aria-hidden="true"
              className="mt-0.5 text-teal-dark sm:mt-0 sm:mb-4"
            />
            <div>
              <h3 className="mt-0 mb-2 text-[18px] leading-snug font-extrabold tracking-tight">
                {title}
              </h3>
              <p className="m-0 text-[15px] leading-[1.65] text-ink-muted">
                {description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
