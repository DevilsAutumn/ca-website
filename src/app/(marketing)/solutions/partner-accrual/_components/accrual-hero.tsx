import { ArrowDown } from "lucide-react";
import { ButtonLink } from "@/app/_components/ui/button";

export function AccrualHero() {
  return (
    <section
      aria-labelledby="partner-accrual-title"
      className="bg-ink text-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-15 sm:px-10 lg:py-20">
        <p className="mb-5 text-[12px] leading-[1.5] font-extrabold tracking-[0.1em] text-teal-pale uppercase">
          Partner accrual
        </p>
        <div className="grid items-end gap-6 lg:grid-cols-[minmax(0,1.17fr)_minmax(0,0.83fr)] lg:gap-15">
          <h1
            id="partner-accrual-title"
            className="m-0 max-w-170 text-[clamp(42px,5.7vw,78px)] leading-[1.01] tracking-[-0.072em]"
          >
            Give members{" "}
            <em className="block text-teal-pale">more places to earn.</em>
          </h1>
          <div>
            <p className="mt-0 mb-6 max-w-110 text-[clamp(16px,1.6vw,19px)] leading-[1.65] text-pretty text-teal-wash">
              Award points or miles for eligible activity with a participating
              brand. Let partners award your currency, or reward your customers
              with a partner’s points or miles.
            </p>
            <ButtonLink href="#earning-paths">
              See the two earning paths{" "}
              <ArrowDown size={15} aria-hidden="true" />
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
