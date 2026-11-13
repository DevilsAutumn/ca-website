import { ArrowDown } from "lucide-react";
import { ButtonLink } from "@/app/_components/ui/button";

export function ModerniseHero() {
  return (
    <section aria-labelledby="modernise-title" className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-10 lg:py-17">
        <h1
          id="modernise-title"
          className="mt-0 mb-5 text-[clamp(40px,6.5vw,84px)] leading-[1.02] tracking-[-0.065em] text-balance"
        >
          Modernise your <em className="text-teal-pale">loyalty program.</em>
        </h1>
        <div className="flex flex-wrap items-end gap-x-9 gap-y-5 lg:justify-between">
          <p className="m-0 max-w-148 text-[clamp(16px,1.6vw,19px)] leading-[1.65] text-pretty text-teal-wash">
            Connect Currency Alliance to the loyalty program you already run.
            Add new ways to earn and spend points, or move services to a modular
            backend as your program evolves.
          </p>
          <ButtonLink href="#modernisation-paths">
            Compare upgrade options <ArrowDown size={15} aria-hidden="true" />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
