import { notFound } from "next/navigation";
import { Suspense } from "react";
import { JsonLd } from "@/app/_components/seo/json-ld";
import { articleMetadata, articleStructuredData } from "@/lib/seo/articles";
import { InsightArticle } from "../_components/insight-article";
import { getInsight } from "../_lib/insights";

type InsightPageProps = { params: Promise<{ slug: string }> };

async function loadInsight(params: InsightPageProps["params"]) {
  const { slug } = await params;
  const article = await getInsight(slug);
  if (!article) notFound();
  return article;
}

export async function generateMetadata({ params }: InsightPageProps) {
  return articleMetadata("insights", await loadInsight(params));
}

async function Article({ params }: InsightPageProps) {
  const article = await loadInsight(params);
  return (
    <>
      <JsonLd data={articleStructuredData("insights", article)} />
      <InsightArticle article={article} />
    </>
  );
}

export default function InsightPage({ params }: InsightPageProps) {
  return (
    <Suspense
      fallback={
        <div role="status" className="mx-auto max-w-7xl px-6 py-12 sm:px-10">
          <span className="sr-only">Loading article</span>
          <div aria-hidden="true" className="mb-6 h-13 w-3/4 bg-paper-deep" />
          <div
            aria-hidden="true"
            className="aspect-[16/9] bg-paper-deep sm:aspect-[2.5/1]"
          />
        </div>
      }
    >
      <Article params={params} />
    </Suspense>
  );
}
