import { cn } from "@/lib/utils";
import { comparisonOutcomes, comparisonRows } from "./home-data";
import { ComparisonTable } from "./comparison/comparison-table";
export function ComparisonSection() {
  return (
    <section
      className="bg-surface"
      id="comparison"
      aria-labelledby="comparison-title"
    >
      <div className="max-w-7xl m-auto py-26 px-10 max-[901px]:py-20 max-[901px]:px-6">
        <div
          className={cn(
            "[&_h2]:mt-0 [&_h2]:mb-6 [&_h2]:text-[clamp(42px,5vw,65px)] [&_h2]:leading-[1.02] [&_h2]:mx-0",
            "[&_>_p]:max-w-150 [&_>_p]:text-ink-muted [&_>_p]:text-[16px] [&_>_p]:leading-[1.65] [&_>_p]:m-0",
          )}
        >
          <h2 id="comparison-title">
            Compared with <em>the alternatives.</em>
          </h2>
          <p>
            See how the approaches to loyalty partnerships differ. Other
            solutions vary by provider and implementation.
          </p>
        </div>
        <div
          className={cn(
            "grid grid-cols-[minmax(0,1fr)_280px] items-stretch mt-12 gap-12 max-[1200px]:grid-cols-1 max-[1200px]:gap-9",
            "max-[801px]:mt-9",
          )}
        >
          <div className="flex min-w-0 flex-col">
            <ComparisonTable
              caption="Comparison of partner collaboration approaches"
              alternativeLabels={["Custom build", "Program platform"]}
              rows={comparisonRows}
            />
            <p
              className={cn(
                "mt-5 mb-0 text-ink-muted text-[13px] leading-[1.6] mx-0 [&_a]:underline [&_a]:underline-offset-[3px]",
                "[&_a:hover]:text-teal-dark",
              )}
            >
              Results vary by partnership, market, and operating baseline.
            </p>
          </div>
          <aside
            className={cn(
              "grid grid-rows-[auto_repeat(3,1fr)] border-t border-t-teal [&_h3]:text-teal-dark [&_h3]:text-[12px]",
              "[&_h3]:font-bold [&_h3]:tracking-[0.08em] [&_h3]:leading-[1.5] [&_h3]:uppercase [&_h3]:m-0 [&_h3]:py-4",
              "[&_h3]:px-0 max-[1200px]:grid-cols-3 max-[1200px]:grid-rows-[auto_1fr] max-[1200px]:gap-x-8",
              "max-[1200px]:[&_h3]:col-span-full max-[541px]:grid-cols-1 max-[541px]:grid-rows-[auto]",
            )}
            aria-label="Reported outcomes"
          >
            <h3>Reported outcomes</h3>
            {comparisonOutcomes.map((outcome) => (
              <div
                className={cn(
                  "flex flex-col justify-center border-t border-t-line py-5 px-0 last:justify-end last:pb-0",
                  "[&_strong]:text-teal-dark [&_strong]:text-[38px] [&_strong]:font-medium [&_strong]:tracking-[-0.06em]",
                  "[&_strong]:leading-[1] [&_>_span]:mt-2 [&_>_span]:text-ink [&_>_span]:text-[12px] [&_>_span]:font-bold",
                  "[&_>_span]:tracking-[0.04em] [&_>_span]:leading-[1.4] [&_>_span]:uppercase [&_p]:mt-3 [&_p]:mb-0",
                  "[&_p]:text-ink-muted [&_p]:text-[14px] [&_p]:leading-[1.6] [&_p]:mx-0 max-[1200px]:justify-start",
                  "max-[1200px]:pt-5 max-[1200px]:pb-0 max-[1200px]:px-0 max-[1200px]:last:justify-start max-[1200px]:last:pt-5",
                  "max-[1200px]:last:pb-0 max-[1200px]:last:px-0 max-[541px]:grid max-[541px]:grid-cols-[86px_minmax(0,1fr)]",
                  "max-[541px]:gap-y-2 max-[541px]:gap-x-4 max-[541px]:py-5 max-[541px]:px-0 max-[541px]:last:grid",
                  "max-[541px]:last:grid-cols-[86px_minmax(0,1fr)] max-[541px]:last:gap-y-2 max-[541px]:last:gap-x-4",
                  "max-[541px]:last:pt-5 max-[541px]:last:pb-0 max-[541px]:last:px-0 max-[541px]:[&_strong]:col-start-1",
                  "max-[541px]:[&_strong]:[grid-row:1_/_3] max-[541px]:[&_strong]:self-center",
                  "max-[541px]:[&_strong]:text-[34px] max-[541px]:[&_>_span]:col-start-2 max-[541px]:[&_>_span]:mt-0",
                  "max-[541px]:[&_p]:col-start-2 max-[541px]:[&_p]:mt-0",
                )}
                key={outcome.label}
              >
                <strong>{outcome.value}</strong>
                <span>{outcome.label}</span>
                <p>{outcome.copy}</p>
              </div>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
}
