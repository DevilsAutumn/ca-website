import { ArrowDown, ArrowRight } from "lucide-react";
import { ButtonLink } from "@/app/_components/ui/button";

function ExchangeExample() {
  return (
    <figure className="m-0 min-w-0 bg-ink text-white">
      <figcaption className="border-b border-line-dark px-4 py-3.5 text-sm font-bold text-teal-pale sm:px-6">
        Example exchange
      </figcaption>
      <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-3 px-4 py-6 sm:gap-6 sm:p-6 lg:py-8">
        <div className="min-w-0">
          <p className="mt-0 mb-2 text-[13px] font-bold text-teal-wash">
            Retail program
          </p>
          <p className="mt-0 mb-1.5 text-[clamp(29px,4.35vw,60px)] leading-none font-medium tracking-[-0.06em] tabular-nums">
            4,000
          </p>
          <p className="m-0 text-[14px] leading-snug text-teal-wash">
            points sent
          </p>
        </div>
        <ArrowRight
          aria-hidden="true"
          strokeWidth={1.5}
          className="size-5 text-teal-pale sm:size-7"
        />
        <div className="min-w-0">
          <p className="mt-0 mb-2 text-[13px] font-bold text-teal-wash">
            Travel program
          </p>
          <p className="mt-0 mb-1.5 text-[clamp(29px,4.35vw,60px)] leading-none font-medium tracking-[-0.06em] text-teal-pale tabular-nums">
            1,000
          </p>
          <p className="m-0 text-[14px] leading-snug text-teal-wash">
            miles received
          </p>
        </div>
      </div>
      <p className="m-0 border-t border-line-dark px-4 py-3.5 text-[13px] leading-relaxed text-teal-wash sm:px-6">
        Illustrative amounts. Partners agree the actual conversion rate.
      </p>
    </figure>
  );
}

export function ExchangeHero() {
  return (
    <section
      aria-labelledby="exchange-title"
      className="border-b border-line bg-surface-soft"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 py-12 sm:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-12 lg:py-17">
        <div className="min-w-0">
          <h1
            id="exchange-title"
            className="mt-0 mb-5 text-[clamp(39px,6.15vw,82px)] leading-[1.02] tracking-[-0.065em] text-balance"
          >
            Exchange <em className="block">points and miles.</em>
          </h1>
          <p className="mt-0 mb-5 max-w-120 text-[clamp(16px,1.6vw,19px)] leading-[1.65] text-pretty text-ink-muted">
            Let members turn points from one loyalty program into a
            participating partner’s points or miles. Currency Alliance processes
            the exchange and updates both balances in real time.
          </p>
          <ButtonLink href="#exchange-options">
            See exchange options <ArrowDown size={15} aria-hidden="true" />
          </ButtonLink>
        </div>
        <ExchangeExample />
      </div>
    </section>
  );
}
