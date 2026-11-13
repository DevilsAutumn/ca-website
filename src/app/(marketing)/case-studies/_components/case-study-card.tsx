import Link from "next/link";
import { EditorialImage } from "@/app/_components/editorial/editorial-image";
import { Arrow } from "@/app/_components/ui/arrow";
import { cn } from "@/lib/utils";
import type { CaseStudySummary } from "../_lib/case-studies";

function ReadCaseStudy({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 border-b border-transparent pb-1 text-sm font-extrabold transition-colors group-hover:border-current group-focus-visible:border-current",
        className,
      )}
    >
      Read case study <Arrow />
    </span>
  );
}

export function FeaturedCaseStudy({ study }: { study: CaseStudySummary }) {
  const titleId = `case-study-${study.id}`;

  return (
    <article className="bg-ink text-surface">
      <Link
        href={`/case-studies/${study.slug}`}
        aria-labelledby={titleId}
        className="group grid focus-visible:-outline-offset-4 md:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]"
      >
        <EditorialImage
          src={study.image}
          className="aspect-[774/424] md:order-2 md:aspect-auto"
          sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1280px) 54vw, 672px"
          eager
        />
        <div className="flex min-w-0 flex-col items-start justify-center px-6 py-7 sm:p-8 lg:p-9 xl:px-11">
          <p className="mb-3 text-sm font-extrabold text-teal-pale">
            Featured case study
          </p>
          <h2
            id={titleId}
            className="mb-3 text-[clamp(28px,3.3vw,42px)] leading-[1.08] tracking-[-0.06em] text-balance"
          >
            {study.title}
          </h2>
          {study.description && (
            <p className="mb-0 max-w-100 text-[15px] leading-7 text-surface/80">
              {study.description}
            </p>
          )}
          <ReadCaseStudy className="mt-5 border-b border-teal-pale pb-1.5 text-teal-pale transition-colors group-hover:text-white" />
        </div>
      </Link>
    </article>
  );
}

export function CaseStudyCard({
  study,
  topic = study.topics[0]?.name,
  heading: Heading = "h2",
  imageSizes = "(max-width: 639px) calc(100vw - 48px), (max-width: 1023px) 46vw, (max-width: 1280px) 30vw, 384px",
}: {
  study: CaseStudySummary;
  topic?: string;
  heading?: "h2" | "h3";
  imageSizes?: string;
}) {
  const titleId = `case-study-${study.id}`;

  return (
    <article className="min-w-0 border border-line bg-surface">
      <Link
        href={`/case-studies/${study.slug}`}
        aria-labelledby={titleId}
        className="group flex h-full flex-col focus-visible:-outline-offset-4"
      >
        <EditorialImage
          src={study.image}
          className="aspect-[774/424]"
          sizes={imageSizes}
        />
        <div className="flex flex-1 flex-col items-start p-5 sm:p-6">
          {topic && (
            <p className="mb-2 text-[13px] font-extrabold text-teal-dark">
              {topic}
            </p>
          )}
          <Heading
            id={titleId}
            className="mb-3 text-[clamp(22px,2.1vw,28px)] leading-[1.18] font-semibold tracking-[-0.045em] text-pretty transition-colors group-hover:text-teal-dark"
          >
            {study.title}
          </Heading>
          {study.description && (
            <p className="mb-0 text-[15px] leading-6.5 text-ink-muted">
              {study.description}
            </p>
          )}
          <ReadCaseStudy className="mt-auto pt-5 text-teal-dark" />
        </div>
      </Link>
    </article>
  );
}
