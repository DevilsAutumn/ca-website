import { cn } from "@/lib/utils";
import { cardLinkingSteps } from "../_content/card-linking-content";

export function CardLinkingFlow() {
  return (
    <section
      id="card-linking-flow"
      aria-labelledby="card-linking-flow-title"
      className="scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-10 lg:py-16">
        <h2
          id="card-linking-flow-title"
          className="mt-0 mb-7 text-[clamp(34px,4.3vw,55px)] leading-[1.06] tracking-[-0.06em] text-balance"
        >
          From payment <em>to reward.</em>
        </h2>
        <ol
          role="list"
          className={cn(
            "m-0 grid list-none divide-y divide-line border border-line bg-surface p-0",
            "md:grid-cols-3 md:divide-x md:divide-y-0",
          )}
        >
          {cardLinkingSteps.map(({ title, description }, index) => (
            <li key={title} className="min-w-0 p-5 sm:p-6 lg:p-7">
              <p
                aria-hidden="true"
                className="mt-0 mb-2 text-[13px] font-extrabold text-teal-dark tabular-nums"
              >
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-0 mb-2 text-[clamp(20px,2.15vw,26px)] leading-tight font-extrabold tracking-tight">
                {title}
              </h3>
              <p className="m-0 max-w-86 text-[15px] leading-relaxed text-ink-muted">
                {description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
