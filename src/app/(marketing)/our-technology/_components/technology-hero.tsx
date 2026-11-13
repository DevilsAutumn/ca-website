import { TextLink } from "@/app/_components/ui/text-link";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Arrow } from "@/app/_components/ui/arrow";
import { ButtonLink } from "@/app/_components/ui/button";
import { API_DOCUMENTATION } from "../_content/technology-content";
import { ArchitectureDiagram } from "./architecture-diagram";
export function TechnologyHero() {
  return (
    <>
      <section
        className="max-w-7xl pt-14 pb-12 m-auto px-10 max-[901px]:pt-11 max-[901px]:pb-10 max-[901px]:px-6"
        aria-labelledby="technology-title"
      >
        <div
          className={cn(
            "grid grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] items-end mb-10 gap-16 max-[1051px]:grid-cols-2",
            "max-[1051px]:gap-8 max-[901px]:grid-cols-1 max-[901px]:items-start max-[901px]:mb-9",
            "max-[901px]:text-center max-[901px]:gap-7",
          )}
        >
          <div
            className={cn(
              "[&_h1]:mb-0 [&_h1]:text-[clamp(52px,5.5vw,74px)] [&_h1]:leading-[1.02] [&_h1]:tracking-[-0.07em]",
              "max-[901px]:[&_h1]:text-[clamp(44px,7.5vw,64px)]",
            )}
          >
            <p
              className={cn(
                "eyebrow text-teal-dark uppercase tracking-[0.15em] text-[12px] leading-[1.4] font-extrabold mt-0 mb-6.25",
                "mx-0",
              )}
            >
              Our technology
            </p>
            <h1 id="technology-title">
              Your stack.
              <br />
              <em>More possibilities.</em>
            </h1>
          </div>
          <div className="max-[901px]:max-w-140 max-[901px]:m-auto">
            <p className="max-w-115 mb-6 text-ink-soft text-[16px] leading-[1.7] max-[901px]:max-w-none">
              An API-first loyalty platform that connects your systems, partner
              programs, and customer experiences. Add the capabilities you need,
              or build a new loyalty backend.
            </p>
            <div
              className={cn(
                "flex flex-wrap items-baseline gap-y-4.5 gap-x-6 max-[901px]:justify-center max-[541px]:flex-col",
                "max-[541px]:items-center",
              )}
            >
              <ButtonLink href="#architecture">
                See how it fits <Arrow />
              </ButtonLink>
              <TextLink href={API_DOCUMENTATION}>
                Explore the API <Arrow />
              </TextLink>
            </div>
          </div>
        </div>
        <ArchitectureDiagram />
      </section>
      <nav
        className="border-t border-t-line border-b border-b-line"
        aria-label="Technology page sections"
      >
        <div
          className={cn(
            "flex max-w-7xl items-center justify-between text-[13px] m-auto py-3.5 px-10 gap-6 [&_>_span]:text-ink-muted",
            "[&_>_div]:flex [&_>_div]:flex-wrap [&_>_div]:gap-y-3 [&_>_div]:gap-x-9 [&_a]:inline-flex [&_a]:min-h-11",
            "[&_a]:items-center [&_a]:font-bold [&_a]:gap-4 [&_a:hover]:text-teal-dark [&_a_span]:text-teal",
            "[&_a_span]:text-[18px] [&_a_span]:font-normal max-[901px]:py-3 max-[901px]:px-6",
            "max-[901px]:[&_>_span]:hidden max-[901px]:[&_>_div]:w-full max-[901px]:[&_>_div]:justify-between",
            "max-[901px]:[&_>_div]:gap-y-2 max-[901px]:[&_>_div]:gap-x-4 max-[541px]:[&_a]:text-[12px]",
            "max-[541px]:[&_a]:gap-2 max-[541px]:[&_a_span]:hidden",
          )}
        >
          <span>Explore the platform</span>
          <div>
            <Link href="#architecture">
              Architecture <span aria-hidden="true">↓</span>
            </Link>
            <Link href="#services">
              Loyalty services <span aria-hidden="true">↓</span>
            </Link>
            <Link href="#integration">
              API & security <span aria-hidden="true">↓</span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
