import { Suspense } from "react";
import { pageMetadata } from "@/lib/seo/metadata";
import {
  InsightLibrary,
  InsightLibraryLoading,
} from "./_components/insight-library";
import { insightArchiveUrl, parseInsightPage } from "./_lib/archive-url";
import { getInsightPage, type InsightSearchParams } from "./_lib/insights";

const description =
  "Research and practical guides on loyalty strategy, technology, and partnerships.";

type InsightsPageProps = {
  searchParams: Promise<InsightSearchParams>;
};

export async function generateMetadata({ searchParams }: InsightsPageProps) {
  const { cluster, page: requestedPage } = await searchParams;
  const page = parseInsightPage(requestedPage);
  const filtered = cluster !== undefined;
  const validPage =
    !filtered && page > 1 && (await getInsightPage(page, undefined)) !== null;

  return pageMetadata({
    title: validPage ? `Loyalty Insights – Page ${page}` : "Loyalty Insights",
    description,
    path: insightArchiveUrl(undefined, validPage ? page : 1),
    index: !filtered && (page === 1 || validPage),
  });
}

export default function InsightsPage({ searchParams }: InsightsPageProps) {
  return (
    <div className="bg-surface-soft">
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-14 sm:px-10 sm:pt-13 lg:pb-20">
        <header className="mb-7 sm:mb-8">
          <h1 className="mb-3 text-[clamp(52px,7.2vw,96px)] leading-[0.98] tracking-[-0.072em]">
            Insights<em>.</em>
          </h1>
          <p className="m-0 text-[clamp(16px,1.55vw,19px)] leading-[1.6] text-ink-muted">
            {description}
          </p>
        </header>
        <Suspense fallback={<InsightLibraryLoading />}>
          <InsightLibrary searchParams={searchParams} />
        </Suspense>
      </div>
    </div>
  );
}
