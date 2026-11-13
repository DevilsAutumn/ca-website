import { Arrow } from "@/app/_components/ui/arrow";
import { TextLink } from "@/app/_components/ui/text-link";
import { CapabilityCaseStudy } from "../../_components/capability-case-study";
import { accrualControls, dynataCase } from "../_content/accrual-content";

export function AccrualControls() {
  return (
    <section
      id="earning-terms"
      aria-labelledby="accrual-controls-title"
      className="scroll-mt-24 border-y border-line bg-surface-soft"
    >
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-14 sm:px-10 lg:grid-cols-2 lg:gap-14 lg:py-19">
        <div>
          <h2
            id="accrual-controls-title"
            className="mt-0 mb-4 max-w-112 text-[clamp(34px,4.3vw,55px)] leading-[1.05] tracking-[-0.06em] text-balance"
          >
            Set the <em>earning terms.</em>
          </h2>
          <p className="mt-0 mb-6 max-w-108 text-[16px] leading-[1.65] text-ink-muted">
            Agree on the commercial and operating terms with each partner before
            you start awarding points.
          </p>
          <dl className="m-0 divide-y divide-line border-y border-line">
            {accrualControls.map(({ label, description }) => (
              <div
                key={label}
                className="grid grid-cols-[5.7rem_minmax(0,1fr)] items-baseline gap-3 py-3.5 sm:grid-cols-[7rem_minmax(0,1fr)]"
              >
                <dt className="text-[15px] font-extrabold text-teal-dark">
                  {label}
                </dt>
                <dd className="m-0 text-[15px] leading-[1.6] text-ink-muted">
                  {description}
                </dd>
              </div>
            ))}
          </dl>
          <TextLink href="/our-technology#integration" className="mt-5">
            See an accrual API example <Arrow />
          </TextLink>
        </div>
        <CapabilityCaseStudy titleId="accrual-case-title" {...dynataCase} />
      </div>
    </section>
  );
}
