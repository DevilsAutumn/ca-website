import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { ArticleBody } from "@/app/_components/editorial/article-body";
import { EditorialImage } from "@/app/_components/editorial/editorial-image";
import { Arrow } from "@/app/_components/ui/arrow";
import { ButtonLink } from "@/app/_components/ui/button";
import { TextLink } from "@/app/_components/ui/text-link";
import { getArticleContent } from "../_lib/article-content";
import { getCaseStudySummaries, type CaseStudy } from "../_lib/case-studies";
import { CaseStudyCard } from "./case-study-card";

async function RelatedCaseStudies({ study }: { study: CaseStudy }) {
  if (!study.topics.length) return null;

  const topicSlugs = new Set(study.topics.map(({ slug }) => slug));
  const studies = await getCaseStudySummaries().catch(() => []);
  const related = studies
    .filter(
      (item) =>
        item.id !== study.id &&
        item.topics.some(({ slug }) => topicSlugs.has(slug)),
    )
    .slice(0, 2);
  if (!related.length) return null;

  return (
    <section
      aria-labelledby="related-studies-title"
      className="border-t border-line pt-9 sm:pt-12"
    >
      <div className="mb-5 flex flex-wrap items-end justify-between gap-4 sm:mb-7">
        <h2
          id="related-studies-title"
          className="m-0 text-[clamp(30px,4vw,48px)] leading-[1.1] tracking-[-0.055em]"
        >
          Related case studies
        </h2>
        <TextLink href="/case-studies">
          All case studies <Arrow />
        </TextLink>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">
        {related.map((item) => (
          <CaseStudyCard
            key={item.id}
            study={item}
            heading="h3"
            imageSizes="(max-width: 639px) calc(100vw - 48px), (max-width: 1280px) 46vw, 588px"
          />
        ))}
      </div>
    </section>
  );
}

export function CaseStudyArticle({ study }: { study: CaseStudy }) {
  const { logo, body } = getArticleContent(study.body);

  return (
    <div className="bg-surface-soft">
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-14 sm:px-10 sm:pt-13 lg:pb-20">
        <article aria-labelledby="case-study-title">
          <header className="mb-7 sm:mb-9">
            <TextLink href="/case-studies">
              <ArrowLeft size={16} aria-hidden="true" /> All case studies
            </TextLink>
            <h1
              id="case-study-title"
              className="mt-6 mb-4 text-[clamp(38px,5.7vw,72px)] leading-[1.04] tracking-[-0.065em] wrap-break-word"
            >
              {study.title}
            </h1>
            {study.description && (
              <p className="m-0 text-[clamp(16px,1.6vw,20px)] leading-[1.65] wrap-break-word text-ink-muted">
                {study.description}
              </p>
            )}
          </header>
          {study.cover && (
            <EditorialImage
              src={study.cover}
              className="aspect-[2.25/1] sm:aspect-[1024/277]"
              sizes="(max-width: 639px) calc(100vw - 48px), (max-width: 1280px) calc(100vw - 80px), 1200px"
              eager
            />
          )}
          <div className="space-y-8 py-8 sm:py-11 lg:py-13">
            <ArticleBody>{body}</ArticleBody>
            <aside
              aria-label="Case study information"
              className="flex flex-col items-start gap-5 border-t border-line pt-6 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6"
            >
              {logo && (
                <Image
                  src={logo}
                  width={150}
                  height={150}
                  alt=""
                  className="size-20 shrink-0 object-contain"
                />
              )}
              {study.topics.length > 0 && (
                <div className="min-w-0 sm:flex-1">
                  <h2 className="mb-2 text-sm font-extrabold tracking-normal">
                    Explore by topic
                  </h2>
                  <ul className="m-0 flex list-none flex-wrap gap-x-5 gap-y-1.5 p-0">
                    {study.topics.map(({ slug, name }) => (
                      <li key={slug}>
                        <Link
                          href={`/case-studies?cluster=${encodeURIComponent(slug)}`}
                          className="text-sm leading-6 font-bold text-teal-dark hover:underline hover:underline-offset-4"
                        >
                          {name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <ButtonLink href="/contact-us" className="shrink-0 sm:ml-auto">
                Talk to our team <Arrow />
              </ButtonLink>
            </aside>
          </div>
        </article>
        <Suspense fallback={null}>
          <RelatedCaseStudies study={study} />
        </Suspense>
      </div>
    </div>
  );
}
