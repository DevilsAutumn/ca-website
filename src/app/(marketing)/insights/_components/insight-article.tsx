import { DomUtils } from "htmlparser2";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import { ArticleBody } from "@/app/_components/editorial/article-body";
import { EditorialImage } from "@/app/_components/editorial/editorial-image";
import { Arrow } from "@/app/_components/ui/arrow";
import { TextLink } from "@/app/_components/ui/text-link";
import {
  parseWordPressArticle,
  renderWordPressArticle,
} from "@/lib/wordpress-content";
import { getWordPressImageUrl } from "@/lib/wordpress-images";
import { insightArchiveUrl } from "../_lib/archive-url";
import {
  getPublishedInsightSlugs,
  getRelatedInsights,
  type Insight,
} from "../_lib/insights";
import { InsightDate, InsightGrid } from "./insight-card";

function imagePath(src: string) {
  return new URL(src).pathname.replace(/-\d+x\d+(?=\.[^.]+$)/, "");
}

function startsWithCover(
  nodes: ReturnType<typeof parseWordPressArticle>,
  cover: string,
) {
  const opening = nodes.find(DomUtils.isTag);
  if (opening?.name !== "p" && opening?.name !== "figure") return false;

  const image = DomUtils.findOne(
    (node) => node.name === "img",
    opening.children,
  );
  const src = getWordPressImageUrl(image?.attribs.src);
  return !!src && imagePath(src) === imagePath(cover);
}

async function RelatedInsights({ article }: { article: Insight }) {
  const related = await getRelatedInsights(article).catch(() => []);
  if (!related.length) return null;

  return (
    <section
      aria-labelledby="related-insights-title"
      className="mt-10 border-t border-line pt-8 sm:mt-12 sm:pt-10"
    >
      <div className="mb-5 flex flex-wrap items-end justify-between gap-4 sm:mb-7">
        <h2
          id="related-insights-title"
          className="m-0 text-[clamp(30px,4vw,48px)] leading-[1.1] tracking-[-0.055em]"
        >
          Related insights
        </h2>
        <TextLink href="/insights">
          All insights <Arrow />
        </TextLink>
      </div>
      <InsightGrid articles={related} />
    </section>
  );
}

export async function InsightArticle({ article }: { article: Insight }) {
  const nodes = parseWordPressArticle(article.body);
  const insightSlugs =
    /(?:cablogprod\.wpenginepowered\.com|blog\.currencyalliance\.com)\/\d{4}\/\d{2}\//i.test(
      article.body,
    )
      ? await getPublishedInsightSlugs().catch(() => undefined)
      : undefined;
  const cover =
    article.cover && !startsWithCover(nodes, article.cover)
      ? article.cover
      : null;

  return (
    <div className="bg-surface-soft">
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-14 sm:px-10 sm:pt-13 lg:pb-20">
        <article aria-labelledby="insight-title">
          <header className="mb-7 sm:mb-9">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <TextLink href="/insights">
                <ArrowLeft size={16} aria-hidden="true" /> All insights
              </TextLink>
              <InsightDate article={article} />
            </div>
            <h1
              id="insight-title"
              className="mt-6 mb-4 text-[clamp(38px,5.7vw,72px)] leading-[1.04] tracking-[-0.065em] wrap-break-word"
            >
              {article.title}
            </h1>
            {article.description && (
              <p className="m-0 text-[clamp(16px,1.6vw,20px)] leading-[1.65] wrap-break-word text-ink-muted">
                {article.description}
              </p>
            )}
          </header>
          {cover && (
            <EditorialImage
              src={cover}
              className="aspect-[16/9] sm:aspect-[2.5/1]"
              sizes="(max-width: 639px) calc(100vw - 48px), (max-width: 1280px) calc(100vw - 80px), 1200px"
              eager
            />
          )}
          <ArticleBody className={cover ? "pt-8 sm:pt-11 lg:pt-13" : undefined}>
            {renderWordPressArticle(nodes, { insightSlugs })}
          </ArticleBody>
          {article.topics.length > 0 && (
            <aside
              aria-labelledby="insight-topics-title"
              className="mt-8 flex flex-col items-start gap-3 border-t border-line pt-5 sm:mt-10 sm:flex-row sm:items-baseline sm:gap-6 sm:pt-6"
            >
              <h2
                id="insight-topics-title"
                className="m-0 shrink-0 text-sm font-extrabold tracking-normal"
              >
                Explore by topic
              </h2>
              <ul className="m-0 flex list-none flex-wrap gap-x-5 gap-y-2 p-0">
                {article.topics.map(({ slug, name }) => (
                  <li key={slug}>
                    <Link
                      href={insightArchiveUrl(slug)}
                      prefetch={false}
                      className="text-sm leading-6 font-bold text-teal-dark hover:underline hover:underline-offset-4"
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          )}
        </article>
        <Suspense fallback={null}>
          <RelatedInsights article={article} />
        </Suspense>
      </div>
    </div>
  );
}
