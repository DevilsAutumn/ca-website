import { Suspense } from "react";
import { pageMetadata } from "@/lib/seo/metadata";
import {
  CaseStudyLibrary,
  CaseStudyLibraryLoading,
  type CaseStudySearchParams,
} from "./_components/case-study-library";

const description =
  "See how brands use Currency Alliance to build loyalty partnerships and give members more ways to earn and spend points.";

type CaseStudiesPageProps = {
  searchParams: CaseStudySearchParams;
};

export async function generateMetadata({ searchParams }: CaseStudiesPageProps) {
  const { cluster } = await searchParams;
  return pageMetadata({
    title: "Loyalty Case Studies",
    description,
    path: "/case-studies",
    index: cluster === undefined,
  });
}

export default function CaseStudiesPage({
  searchParams,
}: CaseStudiesPageProps) {
  return (
    <div className="bg-surface-soft">
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-14 sm:px-10 sm:pt-14 lg:pb-20">
        <header className="mb-7 grid items-end gap-4 md:mb-9 md:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] md:gap-10">
          <h1 className="m-0 text-[clamp(48px,7.3vw,102px)] leading-[0.98] tracking-[-0.072em]">
            Case <em>studies.</em>
          </h1>
          <p className="m-0 max-w-112 text-[clamp(16px,1.55vw,19px)] leading-[1.6] text-pretty text-ink-muted">
            {description}
          </p>
        </header>
        <Suspense fallback={<CaseStudyLibraryLoading />}>
          <CaseStudyLibrary searchParams={searchParams} />
        </Suspense>
      </div>
    </div>
  );
}
