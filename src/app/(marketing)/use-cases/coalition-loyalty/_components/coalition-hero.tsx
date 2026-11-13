import { ArrowDown } from "lucide-react";
import { ButtonLink } from "@/app/_components/ui/button";
import { cn } from "@/lib/utils";
import {
  coalitionJourney,
  coalitionStartingPoints,
} from "../_content/coalition-content";

export function CoalitionHero() {
  return (
    <section
      aria-labelledby="coalition-title"
      className="border-b border-line bg-surface-soft"
    >
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-10 lg:py-16">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.14fr)_minmax(0,0.86fr)] lg:gap-14">
          <div className="min-w-0">
            <h1
              id="coalition-title"
              className="mt-0 mb-5 text-[clamp(39px,6vw,80px)] leading-[1.02] tracking-[-0.065em] text-balance"
            >
              Grow your loyalty <em>partner network.</em>
            </h1>
            <p className="mt-0 mb-5 max-w-118 text-[clamp(16px,1.6vw,19px)] leading-[1.65] text-pretty text-ink-muted">
              A loyalty coalition brings complementary brands together so
              members can earn and spend points across participating businesses.
            </p>
            <ButtonLink href="#coalition-operations">
              See how partnerships work{" "}
              <ArrowDown size={15} aria-hidden="true" />
            </ButtonLink>
          </div>
          <figure className="m-0 min-w-0 bg-ink text-white">
            <figcaption className="border-b border-line-dark px-5 py-3.5 text-sm font-bold text-teal-pale sm:px-6">
              Example member journey
            </figcaption>
            <ol
              role="list"
              className="m-0 list-none divide-y divide-line-dark p-0"
            >
              {coalitionJourney.map(({ title, description }, index) => (
                <li
                  key={title}
                  className="grid grid-cols-[1.5rem_minmax(0,1fr)] gap-3 px-5 py-5 sm:grid-cols-[2rem_minmax(0,1fr)] sm:p-6"
                >
                  <span
                    aria-hidden="true"
                    className="text-[13px] leading-6 font-bold text-teal-pale tabular-nums"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="mt-0 mb-1.5 text-[clamp(19px,2.2vw,25px)] leading-tight font-semibold tracking-tight">
                      {title}
                    </p>
                    <p className="m-0 text-[15px] leading-relaxed text-teal-wash">
                      {description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </figure>
        </div>
        <ul
          role="list"
          aria-label="Ways to take part in a coalition"
          className={cn(
            "m-0 mt-8 grid list-none divide-y divide-line border border-line bg-surface p-0",
            "md:grid-cols-3 md:divide-x md:divide-y-0 lg:mt-10",
          )}
        >
          {coalitionStartingPoints.map(({ title, description }) => (
            <li key={title} className="min-w-0 p-5 sm:p-6">
              <h2 className="mt-0 mb-2 text-[20px] leading-tight font-extrabold tracking-tight">
                {title}
              </h2>
              <p className="m-0 text-[15px] leading-relaxed text-ink-muted">
                {description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
