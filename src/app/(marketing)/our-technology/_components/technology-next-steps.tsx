import { TextLink } from "@/app/_components/ui/text-link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/app/_components/ui/arrow";
import { ContactSection } from "@/app/_components/marketing/contact-section";
import {
  API_DOCUMENTATION,
  technologyResources,
} from "../_content/technology-content";
export function TechnologyNextSteps() {
  return (
    <div className="max-w-7xl m-auto py-0 px-10 max-[801px]:py-0 max-[801px]:px-6">
      <section
        className={cn(
          "grid grid-cols-[minmax(140px,0.55fr)_minmax(0,1.65fr)_auto] items-center border-b border-b-line py-18 px-0",
          "gap-12 [&_>_a]:justify-self-start max-[1051px]:grid-cols-[150px_minmax(0,1fr)] max-[1051px]:gap-y-7",
          "max-[1051px]:gap-x-10 max-[1051px]:[&_>_a]:col-start-2 max-[801px]:py-14 max-[801px]:px-0",
          "max-[601px]:grid-cols-1 max-[601px]:gap-7 max-[601px]:[&_>_a]:col-auto",
        )}
        aria-labelledby="technology-case-title"
      >
        <div
          className={cn(
            "flex flex-col items-start gap-6.5 [&_>_span]:text-teal-dark [&_>_span]:text-[12px] [&_>_span]:font-[750]",
            "[&_>_span]:tracking-[0.12em] [&_>_span]:uppercase max-[1051px]:row-span-2 max-[601px]:row-auto",
            "max-[601px]:flex-row max-[601px]:items-center max-[601px]:justify-between max-[601px]:gap-4",
          )}
        >
          <span>In practice</span>
          <div className="relative h-18 w-37.5 max-[601px]:h-13 max-[601px]:w-27.5">
            <Image
              src="/partners/fab.png"
              alt="First Abu Dhabi Bank"
              fill
              sizes="(max-width: 601px) 110px, 150px"
              className="object-contain"
            />
          </div>
        </div>
        <div
          className={cn(
            "[&_h2]:mb-4.5 [&_h2]:text-[clamp(30px,3.4vw,44px)] [&_h2]:tracking-[-0.055em] [&_h2]:leading-[1.1]",
            "[&_p]:max-w-122.5 [&_p]:text-ink-muted [&_p]:text-[15px] [&_p]:leading-[1.7] [&_p]:m-0",
          )}
        >
          <h2 id="technology-case-title">
            Bank points.
            <br />
            <em>A world of travel rewards.</em>
          </h2>
          <p>
            First Abu Dhabi Bank connects members to airline and hotel loyalty
            programs through Currency Alliance.
          </p>
        </div>
        <TextLink href="/case-studies/connecting-first-abu-dhabi-banks-loyalty-program-to-travel-brands">
          Read the case study <Arrow />
        </TextLink>
      </section>
      <section
        className={cn(
          "grid grid-cols-[minmax(180px,0.55fr)_minmax(0,2.3fr)] border-b border-b-line py-16 px-0 gap-12 [&_>_h2]:mt-3",
          "[&_>_h2]:mb-0 [&_>_h2]:text-[32px] [&_>_h2]:tracking-[-0.05em] [&_>_h2]:leading-[1.1] [&_>_h2]:mx-0",
          "max-[1051px]:grid-cols-1 max-[1051px]:gap-7 max-[1051px]:[&_>_h2]:mt-0 max-[801px]:py-14 max-[801px]:px-0",
        )}
        aria-labelledby="technology-resources-title"
      >
        <h2 id="technology-resources-title">A closer look.</h2>
        <div className="grid grid-cols-3 max-[601px]:grid-cols-1 max-[601px]:border-t max-[601px]:border-t-line">
          {technologyResources.map((resource) => (
            <Link
              href={resource.href}
              key={resource.href}
              className={cn(
                "flex min-w-0 flex-col items-start border-l border-l-line transition-[background-color] duration-180",
                "ease-[ease] py-3 px-6 gap-6 first:border-l-0 first:pl-0 last:pr-0 [&_h3]:mb-2.5 [&_h3]:text-[17px]",
                "[&_h3]:font-semibold [&_h3]:tracking-[-0.03em] [&_h3]:leading-[1.4] [&_p]:text-ink-muted [&_p]:text-[13px]",
                "[&_p]:leading-[1.65] [&_p]:m-0 [&_>_span]:mt-auto [&_>_span]:text-teal [&:hover_h3]:text-teal-dark",
                "[&:hover_>_span]:text-teal-dark [&:focus-visible_>_span]:text-teal-dark",
                "max-[601px]:border-l-0 max-[601px]:border-b max-[601px]:border-b-line max-[601px]:py-6",
                "max-[601px]:px-4 max-[601px]:gap-4 max-[601px]:first:pl-4 max-[601px]:last:pr-4",
                "max-[601px]:[&_p]:text-[14px]",
              )}
            >
              <div>
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
              </div>
              <span className="inline-flex items-center gap-2.5 text-[13px] font-bold leading-[1.4] whitespace-nowrap transition-colors">
                Read more <Arrow />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <ContactSection
        id="technology-contact"
        title={
          <>
            Let’s talk about <em>your stack.</em>
          </>
        }
        description="Explore how Currency Alliance can fit your systems, your partners, and your plans."
        primaryAction={{
          label: "Discuss your architecture",
          href: "/contact-us",
        }}
        secondaryAction={{
          label: "View API documentation",
          href: API_DOCUMENTATION,
        }}
      />
    </div>
  );
}
