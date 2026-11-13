import { ArrowDown } from "lucide-react";
import { ButtonLink } from "@/app/_components/ui/button";

export function PayWithPointsHero() {
  return (
    <section
      aria-labelledby="pay-with-points-title"
      className="bg-ink text-white"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-start px-6 py-12 sm:items-center sm:px-10 sm:text-center lg:py-17">
        <h1
          id="pay-with-points-title"
          className="mt-0 mb-5 text-[clamp(44px,7vw,90px)] leading-[1.02] tracking-[-0.065em] text-balance"
        >
          Pay with <em className="text-teal-pale">points.</em>
        </h1>
        <p className="mt-0 mb-6 max-w-152 text-[clamp(16px,1.6vw,19px)] leading-[1.65] text-pretty text-teal-wash">
          Let members spend points at online or in-store checkout using your
          loyalty currency or a participating partner’s points or miles.
        </p>
        <ButtonLink href="#checkout-example">
          See the checkout example <ArrowDown size={15} aria-hidden="true" />
        </ButtonLink>
      </div>
    </section>
  );
}
