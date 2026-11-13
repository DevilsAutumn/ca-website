import { TextLink } from "@/app/_components/ui/text-link";
import { cn } from "@/lib/utils";
import { Arrow } from "../ui/arrow";
import { ButtonLink } from "../ui/button";
import { PartnerNetworkDiagram } from "./partner-network-diagram";
export function HeroSection() {
  return (
    <section
      className={cn(
        "grid grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-stretch max-w-7xl min-h-166.25 pt-15 pb-16 m-auto",
        "px-10 gap-8 max-[901px]:grid-cols-1 max-[901px]:min-h-auto max-[901px]:pt-15 max-[901px]:pb-17.5",
        "max-[901px]:px-6 max-[901px]:gap-6 max-[541px]:[&_h1]:text-[57px]",
      )}
      id="top"
      data-hero
    >
      <div className="self-center">
        <h1>
          Make every
          <br />
          <em>partnership</em>
          <br />
          count.
        </h1>
        <p className="hero-intro text-ink-soft max-w-112.5 text-[16px] leading-[1.65] mb-8.25">
          The loyalty partnerships platform. Connect brands, move points, and
          give members more value through one API.
        </p>
        <div
          className={cn(
            "hero-actions flex flex-wrap items-baseline gap-y-4 gap-x-6 max-[541px]:items-start max-[541px]:flex-col",
            "max-[541px]:gap-4",
          )}
        >
          <ButtonLink href="#platform">
            Explore the platform <Arrow />
          </ButtonLink>
          <TextLink href="#proof">
            See our partner network <Arrow />
          </TextLink>
        </div>
        <div className="hero-note flex items-center text-ink-muted text-[12px] mt-17.5 leading-[1.5] gap-2.5 max-[541px]:mt-11.25">
          <span className="note-line w-8.5 h-px bg-coral shrink-0" /> Built for
          loyalty, product, payments, and partnerships teams.
        </div>
      </div>
      <div
        className="relative grid min-w-0 min-h-137.5 text-ink @container max-[901px]:min-h-0 max-[901px]:mt-5"
        data-hero-art
      >
        <PartnerNetworkDiagram />
      </div>
    </section>
  );
}
