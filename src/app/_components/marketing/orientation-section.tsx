import { siteLinks } from "@/lib/site-links";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Arrow } from "../ui/arrow";
const nextSteps = [
  {
    title: "Find a loyalty solution",
    description: "Explore ways to earn, exchange, and redeem.",
    href: siteLinks.solutions,
  },
  {
    title: "Explore the technology",
    description: "See how the platform fits your existing stack.",
    href: "/our-technology",
  },
  {
    title: "Talk to our team",
    description: "Discuss your goals with a loyalty specialist.",
    href: "/contact-us",
  },
];
export function OrientationSection() {
  return (
    <section
      className="max-w-7xl m-auto py-22 px-10 max-[901px]:py-18 max-[901px]:px-6"
      aria-labelledby="next-steps-title"
    >
      <div
        className={cn(
          "max-w-170 text-center my-0 mx-auto [&_h2]:mt-0 [&_h2]:mb-5 [&_h2]:text-[clamp(38px,4vw,52px)]",
          "[&_h2]:leading-[1.05] [&_h2]:mx-0 [&_p]:text-ink-muted [&_p]:text-[16px] [&_p]:leading-[1.65]",
          "[&_p]:text-balance [&_p]:m-0",
        )}
      >
        <h2 id="next-steps-title">
          Where do you want <em>to go next?</em>
        </h2>
        <p>Choose a solution, explore the technology, or discuss your plans.</p>
      </div>
      <nav
        className={cn(
          "grid grid-cols-3 mt-10 border-t border-t-line border-b border-b-line max-[901px]:grid-cols-1",
          "max-[901px]:mt-8",
        )}
        aria-label="Choose a starting point"
      >
        {nextSteps.map((step) => (
          <Link
            className={cn(
              "flex min-w-0 items-center justify-between border-r border-r-line transition-[background-color] duration-180",
              "ease-[ease] py-7 px-6 gap-5 last:border-r-0 focus-visible:bg-surface active:bg-surface [&_>_div]:min-w-0",
              "[&_h3]:mt-0 [&_h3]:mb-2.5 [&_h3]:text-ink [&_h3]:text-[21px] [&_h3]:font-medium [&_h3]:tracking-[-0.04em]",
              "[&_h3]:leading-[1.25] [&_h3]:mx-0 [&_p]:text-ink-muted [&_p]:text-[14px] [&_p]:leading-[1.6] [&_p]:m-0",
              "pointer-fine:hover:bg-surface pointer-fine:[&:hover_>_.arrow]:transform-[translate(2px,-2px)]",
              "max-[901px]:items-start max-[901px]:border-r-0 max-[901px]:border-b max-[901px]:border-b-line",
              "max-[901px]:py-6 max-[901px]:px-4 max-[901px]:gap-4 max-[901px]:last:border-b-0",
            )}
            href={step.href}
            key={step.href}
          >
            <div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
            <Arrow
              size={22}
              className="text-teal-dark transition-[transform] duration-180 ease-[ease]"
            />
          </Link>
        ))}
      </nav>
    </section>
  );
}
