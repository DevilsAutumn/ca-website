import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { retailSectionLinks } from "../_content/retail-content";

export function RetailHero() {
  return (
    <section
      aria-labelledby="retail-loyalty-title"
      className="bg-ink text-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-10 lg:py-16">
        <h1
          id="retail-loyalty-title"
          className="mt-0 mb-5 text-[clamp(39px,6.05vw,82px)] leading-[1.02] tracking-[-0.065em] text-balance"
        >
          Ecommerce and <em className="text-teal-pale">retail loyalty.</em>
        </h1>
        <p className="m-0 max-w-166 text-[clamp(16px,1.6vw,19px)] leading-[1.65] text-pretty text-teal-wash">
          Give customers ways to earn and use rewards in your webstore and at
          your store counters. Connect loyalty to the commerce and marketing
          tools you already use.
        </p>
        <nav aria-label="Ecommerce loyalty page sections" className="mt-8">
          <ul
            role="list"
            className={cn(
              "m-0 grid list-none divide-y divide-line-dark border-y border-line-dark p-0",
              "sm:grid-cols-3 sm:divide-x sm:divide-y-0",
            )}
          >
            {retailSectionLinks.map(({ label, href }) => (
              <li
                key={href}
                className="min-w-0 sm:px-5 sm:first:pl-0 sm:last:pr-0"
              >
                <Link
                  href={href}
                  className="flex min-h-12 items-center justify-between gap-3 py-3 text-sm font-bold text-white hover:text-teal-pale focus-visible:outline-teal-pale"
                >
                  {label}
                  <ArrowDown
                    size={15}
                    className="shrink-0 text-teal-pale"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
