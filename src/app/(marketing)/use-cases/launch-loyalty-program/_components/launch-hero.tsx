import { ArrowDown } from "lucide-react";
import { ButtonLink } from "@/app/_components/ui/button";
import { cn } from "@/lib/utils";
import { purchaseSteps } from "../_content/launch-content";

export function LaunchHero() {
  return (
    <section
      aria-labelledby="launch-title"
      className="border-b border-line bg-surface-soft"
    >
      <div className="mx-auto max-w-7xl px-6 pt-11 pb-10 sm:px-10 lg:pt-15 lg:pb-13">
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1.22fr)_minmax(0,0.78fr)] lg:items-end lg:gap-12">
          <h1
            id="launch-title"
            className="m-0 text-[clamp(38px,6.5vw,86px)] leading-[1.02] tracking-[-0.065em]"
          >
            Launch a <em className="block">loyalty program.</em>
          </h1>
          <div className="min-w-0 lg:pb-1">
            <p className="mt-0 mb-5 max-w-122 text-[clamp(16px,1.6vw,19px)] leading-[1.65] text-pretty text-ink-muted">
              Issue your own points and give customers a reason to return.
              Connect Currency Alliance to the commerce, customer data, and
              campaign tools your team already uses.
            </p>
            <ButtonLink href="#program-modules">
              See the five modules <ArrowDown size={15} aria-hidden="true" />
            </ButtonLink>
          </div>
        </div>
        <figure className="m-0 mt-8 bg-ink text-white sm:mt-10">
          <figcaption className="flex flex-wrap items-baseline gap-x-3 gap-y-1 border-b border-line-dark px-5 py-3.5 text-sm font-bold sm:px-6">
            <span className="text-teal-pale">Example</span>
            <span>A member’s first purchase</span>
          </figcaption>
          <ol
            role="list"
            className={cn(
              "m-0 grid list-none divide-y divide-line-dark p-0",
              "md:grid-cols-3 md:divide-x md:divide-y-0",
            )}
          >
            {purchaseSteps.map(({ system, title, description }) => (
              <li key={system} className="min-w-0 px-5 py-5 sm:p-6">
                <p className="mt-0 mb-2 text-[13px] font-bold text-teal-pale">
                  {system}
                </p>
                <p className="mt-0 mb-1.5 text-[clamp(21px,2.55vw,32px)] leading-tight font-semibold tracking-tight">
                  {title}
                </p>
                <p className="m-0 max-w-72 text-[15px] leading-relaxed text-teal-wash">
                  {description}
                </p>
              </li>
            ))}
          </ol>
        </figure>
      </div>
    </section>
  );
}
