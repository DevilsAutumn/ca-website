"use client";

import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";
import { useId, useOptimistic, useTransition } from "react";
import { Button } from "@/app/_components/ui/button";

export function TopicFilter({
  pathname,
  topics,
  selected,
}: {
  pathname: string;
  topics: { slug: string; name: string }[];
  selected: string;
}) {
  const id = useId();
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [topic, selectTopic] = useOptimistic(selected);

  return (
    <form
      action={pathname}
      method="get"
      aria-busy={pending}
      className="flex w-full items-center gap-3 sm:w-auto sm:gap-4"
    >
      <label htmlFor={id} className="shrink-0 text-sm font-extrabold">
        Topic
      </label>
      <div className="relative min-w-0 flex-1 sm:flex-none">
        <select
          id={id}
          name="cluster"
          value={topic}
          onChange={({ target }) => {
            const value = target.value;
            startTransition(() => {
              selectTopic(value);
              router.push(
                value
                  ? `${pathname}?cluster=${encodeURIComponent(value)}`
                  : pathname,
                { scroll: false },
              );
            });
          }}
          className="min-h-11 w-full appearance-none border border-line bg-surface py-2 pr-10 pl-3.5 text-[16px] font-bold text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal sm:w-64"
        >
          <option value="">All topics</option>
          {topics.map(({ slug, name }) => (
            <option key={slug} value={slug}>
              {name}
            </option>
          ))}
        </select>
        <ChevronDown
          size={16}
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-ink-muted"
        />
      </div>
      <noscript>
        <Button type="submit">Apply</Button>
      </noscript>
    </form>
  );
}
