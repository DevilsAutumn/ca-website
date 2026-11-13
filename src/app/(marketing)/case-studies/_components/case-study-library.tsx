import { connection } from "next/server";
import { TopicFilter } from "@/app/_components/editorial/topic-filter";
import { cn } from "@/lib/utils";
import { getCaseStudySummaries } from "../_lib/case-studies";
import { CaseStudyCard, FeaturedCaseStudy } from "./case-study-card";

const featuredSlug =
  "partner-network-scaling-for-the-flying-blue-loyalty-program";

export type CaseStudySearchParams = Promise<
  Record<string, string | string[] | undefined>
>;

export async function CaseStudyLibrary({
  searchParams,
}: {
  searchParams: CaseStudySearchParams;
}) {
  await connection();
  const [{ cluster }, studies] = await Promise.all([
    searchParams,
    getCaseStudySummaries(),
  ]);

  if (!studies.length) {
    return (
      <p className="border-t border-line py-8 text-ink-muted">
        No case studies have been published yet.
      </p>
    );
  }

  const topics = [
    ...new Map(
      studies.flatMap(({ topics }) =>
        topics.map((topic) => [topic.slug, topic]),
      ),
    ).values(),
  ].sort((a, b) => a.name.localeCompare(b.name, "en"));
  const selected = topics.find(({ slug }) => slug === cluster);
  const visible = selected
    ? studies.filter(({ topics }) =>
        topics.some(({ slug }) => slug === selected.slug),
      )
    : studies;
  const featured = selected
    ? undefined
    : (studies.find(({ slug }) => slug === featuredSlug) ?? studies[0]);
  const cards = visible.filter(({ id }) => id !== featured?.id);

  return (
    <section aria-label="Case study library">
      <div className="mb-5 flex flex-col items-start gap-2.5 border-y border-line py-3.5 sm:mb-6 sm:flex-row sm:items-center sm:justify-between">
        <TopicFilter
          pathname="/case-studies"
          topics={topics}
          selected={selected?.slug ?? ""}
        />
        <p role="status" className="m-0 text-sm font-semibold text-ink-muted">
          {visible.length}{" "}
          {visible.length === 1 ? "case study" : "case studies"}
        </p>
      </div>
      {featured && <FeaturedCaseStudy study={featured} />}
      {cards.length > 0 && (
        <div
          className={cn(
            "grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6",
            featured && "mt-5 lg:mt-6",
          )}
        >
          {cards.map((study) => (
            <CaseStudyCard
              key={study.id}
              study={study}
              topic={selected?.name}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export function CaseStudyLibraryLoading() {
  return (
    <div role="status" className="border-t border-line pt-4">
      <span className="sr-only">Loading case studies</span>
      <div aria-hidden="true" className="mb-5 h-11 w-48 bg-paper-deep" />
      <div
        aria-hidden="true"
        className="aspect-[4/5] max-h-96 bg-paper-deep sm:aspect-[3/1]"
      />
    </div>
  );
}
