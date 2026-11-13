import { cn } from "@/lib/utils";
import { adoptionPaths, machPrinciples } from "../_content/technology-content";
export function AdoptionSection() {
  return (
    <section
      className="max-w-7xl pt-24 pb-20 scroll-mt-8 m-auto px-10 max-[801px]:py-16 max-[801px]:px-6"
      id="architecture"
      aria-labelledby="adoption-title"
    >
      <div
        className={cn(
          "grid grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-end mb-12 gap-20 [&_h2]:text-[clamp(38px,4.5vw,58px)]",
          "[&_h2]:leading-[1.07] [&_h2]:tracking-[-0.06em] [&_h2]:m-0 [&_>_p]:max-w-107.5 [&_>_p]:text-ink-muted",
          "[&_>_p]:text-[16px] [&_>_p]:leading-[1.7] [&_>_p]:m-0 max-[801px]:grid-cols-1 max-[801px]:mb-8",
          "max-[801px]:gap-6",
        )}
      >
        <h2 id="adoption-title">
          Keep what works.
          <br />
          <em>Build what’s next.</em>
        </h2>
        <p>
          A thin layer over your existing platform, or the core of a new one.
          Start with the architecture that fits your business.
        </p>
      </div>
      <div className="grid grid-cols-2 border-t border-t-line border-b border-b-line max-[601px]:grid-cols-1">
        {adoptionPaths.map((path) => (
          <article
            key={path.title}
            className={cn(
              "tech-adoption-path pr-11 pl-0 py-9 [.tech-adoption-path_+_&]:pr-0 [.tech-adoption-path_+_&]:pl-11",
              "[.tech-adoption-path_+_&]:border-l [.tech-adoption-path_+_&]:border-l-line [&_h3]:mb-4",
              "[&_h3]:text-[clamp(25px,2.6vw,32px)] [&_h3]:font-medium [&_h3]:tracking-[-0.045em] [&_h3]:leading-[1.2]",
              "max-[801px]:pr-6 max-[801px]:[.tech-adoption-path_+_&]:pl-6 max-[601px]:py-7 max-[601px]:px-0",
              "max-[601px]:[.tech-adoption-path_+_&]:border-l-0 max-[601px]:[.tech-adoption-path_+_&]:border-t",
              "max-[601px]:[.tech-adoption-path_+_&]:border-t-line max-[601px]:[.tech-adoption-path_+_&]:py-7",
              "max-[601px]:[.tech-adoption-path_+_&]:px-0",
            )}
          >
            <p className="mb-4.5 text-teal-dark text-[12px] font-[750] tracking-[0.12em] uppercase">
              {path.label}
            </p>
            <h3>{path.title}</h3>
            <p className="max-w-120 mb-7 text-ink-muted text-[15px] leading-[1.7]">
              {path.description}
            </p>
            <dl
              className={cn(
                "grid m-0 gap-4 [&_>_div]:grid [&_>_div]:grid-cols-[62px_minmax(0,1fr)] [&_>_div]:text-[14px]",
                "[&_>_div]:leading-[1.6] [&_>_div]:gap-4 [&_dt]:text-teal-dark [&_dt]:font-[750] [&_dd]:text-ink-soft",
                "[&_dd]:m-0",
              )}
            >
              {path.details.map((detail) => (
                <div key={detail.term}>
                  <dt>{detail.term}</dt>
                  <dd>{detail.description}</dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>
      <div
        className={cn(
          "grid grid-cols-[minmax(120px,0.8fr)_minmax(0,3.2fr)] items-center pt-10.5 gap-10 [&_>_p]:text-ink-muted",
          "[&_>_p]:text-[14px] [&_>_p]:leading-[1.6] [&_>_p]:m-0 [&_strong]:text-ink [&_strong]:font-bold [&_dl]:grid",
          "[&_dl]:grid-cols-4 [&_dl]:m-0 [&_dl]:gap-6 [&_dt]:flex [&_dt]:items-baseline [&_dt]:text-teal-dark",
          "[&_dt]:text-[34px] [&_dt]:font-medium [&_dt]:leading-[1] [&_dt]:gap-2.5 [&_dt_span]:text-ink",
          "[&_dt_span]:text-[13px] [&_dt_span]:font-bold [&_dd]:mt-2.5 [&_dd]:mb-0 [&_dd]:text-ink-muted",
          "[&_dd]:text-[12px] [&_dd]:leading-[1.6] [&_dd]:mx-0 max-[1001px]:grid-cols-1 max-[1001px]:gap-6",
          "max-[1001px]:[&_>_p_br]:hidden max-[701px]:[&_dl]:grid-cols-2 max-[701px]:[&_dl]:gap-y-7",
          "max-[701px]:[&_dl]:gap-x-6 max-[701px]:[&_dt]:text-[30px]",
        )}
      >
        <p>
          Built on
          <br />
          <strong>MACH principles.</strong>
        </p>
        <dl>
          {machPrinciples.map((principle) => (
            <div key={principle.letter}>
              <dt>
                {principle.letter}
                <span>{principle.name}</span>
              </dt>
              <dd>{principle.benefit}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
