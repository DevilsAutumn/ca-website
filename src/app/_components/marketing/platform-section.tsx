import { cn } from "@/lib/utils";
import { siteLinks } from "@/lib/site-links";
import Link from "next/link";
import { TextLink } from "../ui/text-link";
import { Arrow } from "../ui/arrow";
import { ButtonLink } from "../ui/button";
import { capabilities } from "./home-data";
export function PlatformSection() {
  return (
    <section
      className={cn(
        "section platform grid grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] bg-surface max-w-none",
        "px-[max(40px,calc((100%_-_1200px)_/_2))] m-auto py-26 gap-[7%] max-[901px]:grid-cols-1 max-[901px]:py-20",
        "max-[901px]:px-6 max-[901px]:gap-15 [&_h2]:text-[clamp(42px,5vw,65px)] [&_h2]:leading-[0.98] [&_h2]:mb-6.25",
      )}
      id="platform"
    >
      <div
        className={cn(
          "platform-aside max-w-105 [&_>_p:not(.eyebrow)]:text-ink-muted [&_>_p:not(.eyebrow)]:text-[16px]",
          "[&_>_p:not(.eyebrow)]:leading-[1.65] [&_>_p:not(.eyebrow)]:mb-7",
        )}
      >
        <h2>
          Partnerships
          <br />
          <em>that compound.</em>
        </h2>
        <p>
          Extend your existing loyalty platform or launch a new program. Bring
          partners, points, and member experiences together through one API.
        </p>
        <div
          className={cn(
            "platform-actions flex flex-wrap items-baseline gap-y-4 gap-x-6 max-[541px]:items-start max-[541px]:flex-col",
            "max-[541px]:gap-4",
          )}
        >
          <ButtonLink href="/our-technology" variant="secondary">
            Our technology <Arrow />
          </ButtonLink>
          <TextLink href={siteLinks.solutions} className="view-all mt-0">
            View all capabilities <Arrow />
          </TextLink>
        </div>
      </div>
      <div className="capability-list border-t border-t-line">
        {capabilities.map((item) => (
          <Link
            className={cn(
              "capability grid grid-cols-[32px_minmax(0,1fr)_24px] items-start border-b border-b-line",
              "transition-[background-color] duration-180 ease-[ease] py-7 px-5 gap-5 [&_>_div]:min-w-0 [&_h3]:text-[23px]",
              "[&_h3]:tracking-[-0.04em] [&_h3]:mb-2 [&_h3]:font-medium [&_h3]:leading-[1.25] [&_p]:text-ink-muted",
              "[&_p]:text-[15px] [&_p]:leading-[1.6] [&_p]:max-w-105 [&_p]:m-0",
              "max-[541px]:grid-cols-[24px_minmax(0,1fr)_20px] max-[541px]:py-6 max-[541px]:px-4 max-[541px]:gap-3",
              "focus-visible:bg-surface-soft active:bg-surface-soft pointer-fine:hover:bg-surface-soft",
            )}
            href={item.href}
            key={item.number}
          >
            <span className="capability-number pt-1 text-teal-dark text-[12px] font-extrabold leading-[1.5]">
              {item.number}
            </span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </div>
            <span
              className={cn(
                "capability-arrow text-teal-dark text-[22px] leading-[1.25] transition-[transform] duration-180 ease-[ease]",
                "pointer-fine:[.capability:hover_&]:transform-[translate(2px,-2px)]",
              )}
              aria-hidden="true"
            >
              ↗
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
