import { TextLink } from "@/app/_components/ui/text-link";
import { cn } from "@/lib/utils";
import { Arrow } from "../ui/arrow";
import { StoryCard } from "./stories/story-card";
import { stories } from "./stories/story-content";
export function StoriesSection() {
  return (
    <section
      className="max-w-7xl m-auto py-26 px-10 max-[901px]:py-20 max-[901px]:px-6"
      id="resources"
      aria-labelledby="stories-title"
    >
      <div
        className={cn(
          "flex items-end justify-between gap-8 [&_h2]:text-[clamp(42px,5vw,65px)] [&_h2]:leading-[1.02] [&_h2]:m-0",
          "max-[541px]:items-start max-[541px]:flex-col max-[541px]:gap-6",
        )}
      >
        <h2 id="stories-title">
          Ideas and outcomes
          <br />
          <em>worth sharing.</em>
        </h2>
        <TextLink href="/insights">
          Visit Insights <Arrow />
        </TextLink>
      </div>
      <div className="grid grid-cols-3 mt-10 gap-6 max-[901px]:grid-cols-1">
        {stories.map((story) => (
          <StoryCard story={story} key={story.href} />
        ))}
      </div>
    </section>
  );
}
