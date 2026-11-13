import { RelationshipDiagram } from "../../_components/relationship-diagram";
import { earningPaths } from "../_content/accrual-content";

export function EarningPaths() {
  return (
    <section
      id="earning-paths"
      aria-labelledby="earning-paths-title"
      className="scroll-mt-24 bg-surface"
    >
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-10 lg:py-20">
        <h2
          id="earning-paths-title"
          className="mt-0 mb-6 max-w-260 text-[clamp(34px,4.5vw,57px)] leading-[1.05] tracking-[-0.06em] text-balance lg:mb-8"
        >
          Where members earn. <em>Where points go.</em>
        </h2>
        <div className="divide-y divide-line border-y border-line">
          {earningPaths.map((path) => (
            <article
              key={path.id}
              aria-labelledby={path.id + "-title"}
              className="grid gap-5 py-5 sm:py-6 lg:grid-cols-[minmax(0,0.83fr)_minmax(0,1.17fr)] lg:items-center lg:gap-13 lg:py-7"
            >
              <div>
                <h3
                  id={path.id + "-title"}
                  className="mt-0 mb-2 text-[clamp(21px,2.2vw,27px)] leading-tight font-semibold tracking-[-0.035em]"
                >
                  {path.title}
                </h3>
                <p className="m-0 max-w-111 text-[15px] leading-[1.65] text-ink-muted">
                  {path.description}
                </p>
              </div>
              <RelationshipDiagram
                from={path.from}
                to={path.to}
                connection="Points award"
                direction="forward"
                description={path.figureDescription}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
