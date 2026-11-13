import { ChevronLeft, ChevronRight } from "lucide-react";
import { TextLink } from "@/app/_components/ui/text-link";
import { insightArchiveUrl } from "../_lib/archive-url";

export function InsightPagination({
  page,
  totalPages,
  topic,
}: {
  page: number;
  totalPages: number;
  topic?: string;
}) {
  if (totalPages < 2) return null;

  return (
    <nav
      aria-label="Insights pagination"
      className="mt-8 grid grid-cols-[1fr_auto_1fr] items-center gap-2 border-t border-line pt-5 sm:mt-10 sm:pt-6"
    >
      <div className="justify-self-start">
        {page > 1 && (
          <TextLink
            href={`${insightArchiveUrl(topic, page - 1)}#insight-library`}
            rel="prev"
          >
            <ChevronLeft size={16} aria-hidden="true" /> Previous
          </TextLink>
        )}
      </div>
      <p className="m-0 text-center text-sm font-semibold text-ink-muted">
        Page {page} of {totalPages}
      </p>
      <div className="justify-self-end">
        {page < totalPages && (
          <TextLink
            href={`${insightArchiveUrl(topic, page + 1)}#insight-library`}
            rel="next"
          >
            Next <ChevronRight size={16} aria-hidden="true" />
          </TextLink>
        )}
      </div>
    </nav>
  );
}
