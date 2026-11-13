import { redirect } from "next/navigation";
import { connection } from "next/server";
import { TopicFilter } from "@/app/_components/editorial/topic-filter";
import { TextLink } from "@/app/_components/ui/text-link";
import { insightArchiveUrl } from "../_lib/archive-url";
import { getInsightArchive, type InsightSearchParams } from "../_lib/insights";
import { InsightGrid } from "./insight-card";
import { InsightLead } from "./insight-lead";
import { InsightPagination } from "./insight-pagination";

export async function InsightLibrary({
  searchParams,
}: {
  searchParams: Promise<InsightSearchParams>;
}) {
  await connection();
  const { page, topics, selected, result } = await getInsightArchive(
    await searchParams,
  );
  if (!result) redirect(insightArchiveUrl(selected?.slug));

  const highlights = page === 1 && !selected ? result.articles.slice(0, 3) : [];
  const [lead, ...recent] = highlights;
  const topicsById = new Map(topics.map(({ id, name }) => [id, name]));
  const archive = result.articles.slice(highlights.length).map((article) => ({
    ...article,
    topic: selected?.name ?? topicsById.get(article.topicIds[0]),
  }));

  return (
    <section aria-label="Insight library" id="insight-library">
      <div className="mb-5 flex flex-col items-start gap-2.5 border-y border-line py-3.5 sm:mb-6 sm:flex-row sm:items-center sm:justify-between">
        <TopicFilter
          pathname="/insights"
          topics={topics}
          selected={selected?.slug ?? ""}
        />
        <p role="status" className="m-0 text-sm font-semibold text-ink-muted">
          {result.totalItems} {result.totalItems === 1 ? "article" : "articles"}
        </p>
      </div>

      {lead && <InsightLead lead={lead} recent={recent} />}
      <InsightGrid
        articles={archive}
        heading={
          lead ? (
            <h2 className="mt-8 mb-5 border-t border-line pt-7 text-[clamp(29px,3.3vw,42px)] leading-[1.1] tracking-[-0.055em] sm:mt-10 sm:mb-6 sm:pt-9">
              More insights
            </h2>
          ) : (
            <h2 className="sr-only">Browse articles</h2>
          )
        }
      />
      {result.articles.length === 0 && (
        <div className="py-7">
          <p className="mb-3 text-ink-muted">
            {selected
              ? "There are no articles for this topic yet."
              : "No insights have been published yet."}
          </p>
          {selected && <TextLink href="/insights">View all insights</TextLink>}
        </div>
      )}
      <InsightPagination
        page={page}
        totalPages={result.totalPages}
        topic={selected?.slug}
      />
    </section>
  );
}

export function InsightLibraryLoading() {
  return (
    <div role="status" className="border-t border-line pt-4">
      <span className="sr-only">Loading insights</span>
      <div aria-hidden="true" className="mb-5 h-11 w-48 bg-paper-deep" />
      <div
        aria-hidden="true"
        className="aspect-[16/9] max-h-90 bg-paper-deep lg:w-3/5"
      />
    </div>
  );
}
