import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "../../ui/arrow";
import type { Story } from "./story-content";
export function StoryCard({ story }: { story: Story }) {
  return (
    <Link
      href={story.href}
      className={cn(
        "home-stories-card flex min-w-0 flex-col bg-surface transition-[transform,border-color] duration-180",
        "ease-[ease] border border-solid border-line hover:transform-[translateY(-3px)] hover:border-teal-dark",
        "max-[901px]:grid max-[901px]:grid-cols-[200px_minmax(0,1fr)] max-[541px]:flex",
      )}
    >
      <div
        className={
          story.logo
            ? cn(
                "relative grid h-42 shrink-0 place-items-center pt-6 pb-12 border-b border-b-line bg-surface-soft px-6",
                "max-[901px]:h-auto max-[901px]:min-h-50 max-[901px]:border-r max-[901px]:border-r-line",
                "max-[901px]:border-b-0 max-[541px]:h-34 max-[541px]:min-h-0 max-[541px]:border-r-0 max-[541px]:border-b",
                "max-[541px]:border-b-line",
              )
            : cn(
                "relative grid h-42 shrink-0 place-items-center pt-6 pb-12 border-b border-b-line bg-teal-wash px-6",
                "max-[901px]:h-auto max-[901px]:min-h-50 max-[901px]:border-r max-[901px]:border-r-line",
                "max-[901px]:border-b-0 max-[541px]:h-34 max-[541px]:min-h-0 max-[541px]:border-r-0 max-[541px]:border-b",
                "max-[541px]:border-b-line",
              )
        }
        aria-hidden="true"
      >
        {story.logo ? (
          <span className="relative h-18 w-45 max-w-full">
            <Image
              src={story.logo}
              alt=""
              fill
              sizes="(max-width: 541px) 180px, (max-width: 901px) 152px, 180px"
              className="object-contain"
            />
          </span>
        ) : (
          <span className="text-teal-dark text-[26px] font-medium tracking-[-0.05em] leading-[1.15] max-[541px]:text-[24px]">
            The right partners.
            <br />
            More member value.
          </span>
        )}
        <span className="absolute right-6 bottom-4 left-6 text-ink-muted text-[12px] leading-[1.5] text-center">
          {story.topic}
        </span>
      </div>
      <div
        className={cn(
          "flex flex-1 flex-col p-6 gap-4 [&_h3]:text-ink [&_h3]:text-[23px] [&_h3]:font-medium",
          "[&_h3]:tracking-[-0.04em] [&_h3]:leading-[1.2] [&_h3]:m-0 [&_p]:text-ink-muted [&_p]:text-[15px]",
          "[&_p]:leading-[1.6] [&_p]:m-0 max-[541px]:p-5.5 max-[541px]:[&_h3]:text-[22px]",
        )}
      >
        <span className="text-teal-dark text-[12px] font-bold tracking-[0.08em] leading-[1.4] uppercase">
          {story.type}
        </span>
        <h3>{story.title}</h3>
        <p>{story.summary}</p>
        <span
          className={cn(
            "inline-flex items-center mt-auto pt-2 text-ink text-[13px] font-bold leading-[1.4] gap-2.5",
            "[.home-stories-card:hover_&]:text-teal-dark",
          )}
        >
          {story.type === "Case study" ? "Read case study" : "Read article"}{" "}
          <Arrow />
        </span>
      </div>
    </Link>
  );
}
