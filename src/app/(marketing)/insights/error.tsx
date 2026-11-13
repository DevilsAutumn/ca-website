"use client";

import { Button } from "@/app/_components/ui/button";

export default function InsightsError({ retry }: { retry: () => void }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-14 sm:px-10 sm:py-20">
      <h1 className="mb-4 text-[clamp(36px,5.5vw,64px)] leading-[1.08]">
        Insights are temporarily unavailable
      </h1>
      <p className="mb-6 text-ink-muted">Please try loading this page again.</p>
      <Button onClick={retry}>Try again</Button>
    </section>
  );
}
