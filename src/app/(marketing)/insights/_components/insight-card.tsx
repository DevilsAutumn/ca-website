import Link from "next/link";
import type { ReactNode } from "react";
import { EditorialImage } from "@/app/_components/editorial/editorial-image";
import { Arrow } from "@/app/_components/ui/arrow";
import type { InsightSummary } from "../_lib/insights";

export function InsightDate({
  article,
}: {
  article: Pick<InsightSummary, "date" | "dateLabel">;
}) {
  return article.dateLabel ? (
    <time
      dateTime={article.date}
      className="text-sm font-semibold text-ink-muted"
    >
      {article.dateLabel}
    </time>
  ) : null;
}

export function ReadInsight() {
  return (
    <span className="inline-flex items-center gap-2 border-b border-transparent pb-1 text-sm font-extrabold text-teal-dark transition-colors group-hover:border-current group-focus-visible:border-current">
      Read article <Arrow />
    </span>
  );
}

function InsightCard({
  article,
  topic,
}: {
  article: InsightSummary;
  topic?: string;
}) {
  const titleId = `insight-${article.id}`;

  return (
    <article className="min-w-0">
      <Link
        href={`/insights/${article.slug}`}
        prefetch={false}
        aria-labelledby={titleId}
        className="group flex h-full flex-col border-b border-line pb-5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal"
      >
        <EditorialImage
          src={article.image}
          className="aspect-[16/9]"
          sizes="(max-width: 639px) calc(100vw - 48px), (max-width: 1023px) 46vw, (max-width: 1280px) 30vw, 384px"
        />
        <div className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
          {topic && (
            <span className="text-sm font-extrabold text-teal-dark">
              {topic}
            </span>
          )}
          <InsightDate article={article} />
        </div>
        <h3
          id={titleId}
          className="mt-2 mb-3 text-[clamp(22px,2vw,28px)] leading-[1.16] font-semibold tracking-[-0.045em] text-pretty transition-colors group-hover:text-teal-dark"
        >
          {article.title}
        </h3>
        <div className="mt-auto pt-1">
          <ReadInsight />
        </div>
      </Link>
    </article>
  );
}

export function InsightGrid({
  articles,
  heading,
}: {
  articles: (InsightSummary & { topic?: string })[];
  heading?: ReactNode;
}) {
  if (!articles.length) return null;

  return (
    <>
      {heading}
      <div className="grid gap-x-5 gap-y-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-8">
        {articles.map((article) => (
          <InsightCard
            key={article.id}
            article={article}
            topic={article.topic}
          />
        ))}
      </div>
    </>
  );
}
