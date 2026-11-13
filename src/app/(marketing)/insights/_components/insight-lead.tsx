import Link from "next/link";
import { EditorialImage } from "@/app/_components/editorial/editorial-image";
import { cn } from "@/lib/utils";
import type { InsightSummary } from "../_lib/insights";
import { InsightDate, ReadInsight } from "./insight-card";

export function InsightLead({
  lead,
  recent,
}: {
  lead: InsightSummary;
  recent: InsightSummary[];
}) {
  return (
    <div
      className={cn(
        "grid gap-7 sm:gap-9",
        recent.length > 0 &&
          "lg:grid-cols-[minmax(0,1.68fr)_minmax(0,1fr)] lg:gap-8 xl:gap-10",
      )}
    >
      <article className="min-w-0">
        <Link
          href={`/insights/${lead.slug}`}
          aria-labelledby="latest-insight-title"
          className="group block"
        >
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <span className="text-sm font-extrabold text-teal-dark">
              Latest insight
            </span>
            <InsightDate article={lead} />
          </div>
          <h2
            id="latest-insight-title"
            className="mt-2 mb-3 text-[clamp(28px,4.1vw,50px)] leading-[1.07] tracking-[-0.065em] text-pretty transition-colors group-hover:text-teal-dark"
          >
            {lead.title}
          </h2>
          {lead.description && (
            <p className="mb-4 line-clamp-3 text-[16px] leading-7 text-ink-muted">
              {lead.description}
            </p>
          )}
          <ReadInsight />
          <EditorialImage
            src={lead.image}
            className="mt-5 aspect-[16/9] lg:aspect-[2.12/1]"
            sizes={
              recent.length
                ? "(max-width: 639px) calc(100vw - 48px), (max-width: 1023px) calc(100vw - 80px), (max-width: 1280px) 58vw, 730px"
                : "(max-width: 639px) calc(100vw - 48px), (max-width: 1280px) calc(100vw - 80px), 1200px"
            }
            eager
          />
        </Link>
      </article>

      {recent.length > 0 && (
        <aside
          aria-labelledby="recent-insights-title"
          className="border-t border-line pt-5 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8 xl:pl-10"
        >
          <h2
            id="recent-insights-title"
            className="mb-4 text-[clamp(23px,2.2vw,30px)] leading-[1.13] tracking-[-0.048em]"
          >
            Recent insights
          </h2>
          <ul className="m-0 grid list-none gap-4 p-0 sm:grid-cols-2 sm:gap-6 lg:grid-cols-1 lg:gap-5">
            {recent.map((article) => (
              <li key={article.id} className="min-w-0">
                <Link
                  href={`/insights/${article.slug}`}
                  prefetch={false}
                  className="group grid grid-cols-[5.75rem_minmax(0,1fr)] items-start gap-3.5 border-b border-line pb-4 sm:grid-cols-1 sm:gap-3 lg:pb-5"
                >
                  <EditorialImage
                    src={article.image}
                    className="aspect-[1/1] sm:aspect-[2.5/1]"
                    sizes="(max-width: 639px) 92px, (max-width: 1023px) 45vw, (max-width: 1280px) 34vw, 393px"
                  />
                  <div className="min-w-0">
                    <InsightDate article={article} />
                    <h3 className="mt-1 mb-0 text-[clamp(18px,1.8vw,24px)] leading-[1.2] font-semibold tracking-[-0.035em] text-pretty transition-colors group-hover:text-teal-dark">
                      {article.title}
                    </h3>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      )}
    </div>
  );
}
