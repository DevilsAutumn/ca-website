import { notFound } from "next/navigation";
import { Suspense } from "react";
import { JsonLd } from "@/app/_components/seo/json-ld";
import { articleMetadata, articleStructuredData } from "@/lib/seo/articles";
import { CaseStudyArticle } from "../_components/case-study-article";
import { getCaseStudy } from "../_lib/case-studies";

type ArticlePageProps = { params: Promise<{ slug: string }> };

async function loadCaseStudy(params: ArticlePageProps["params"]) {
  const { slug } = await params;
  const study = await getCaseStudy(slug);
  if (!study) notFound();
  return study;
}

export async function generateMetadata({ params }: ArticlePageProps) {
  return articleMetadata("case-studies", await loadCaseStudy(params));
}

async function Article({ params }: ArticlePageProps) {
  const study = await loadCaseStudy(params);
  return (
    <>
      <JsonLd data={articleStructuredData("case-studies", study)} />
      <CaseStudyArticle study={study} />
    </>
  );
}

export default function CaseStudyPage({ params }: ArticlePageProps) {
  return (
    <Suspense
      fallback={
        <div role="status" className="mx-auto max-w-7xl px-6 py-12 sm:px-10">
          <span className="sr-only">Loading case study</span>
          <div aria-hidden="true" className="mb-6 h-13 w-3/4 bg-paper-deep" />
          <div
            aria-hidden="true"
            className="aspect-[2.25/1] bg-paper-deep sm:aspect-[1024/277]"
          />
        </div>
      }
    >
      <Article params={params} />
    </Suspense>
  );
}
