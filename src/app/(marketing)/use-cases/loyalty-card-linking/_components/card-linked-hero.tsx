import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { ButtonLink } from "@/app/_components/ui/button";
import paymentCardPhoto from "../_assets/payment-cards.jpg";

export function CardLinkedHero() {
  return (
    <section
      aria-labelledby="card-linked-title"
      className="border-b border-line bg-surface-soft"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 py-12 sm:px-10 lg:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)] lg:gap-14 lg:py-17">
        <div className="min-w-0 lg:col-start-2 lg:row-start-1">
          <h1
            id="card-linked-title"
            className="mt-0 mb-5 text-[clamp(40px,6.2vw,80px)] leading-[1.02] tracking-[-0.065em] text-balance"
          >
            Card-linked <em>loyalty.</em>
          </h1>
          <p className="mt-0 mb-5 max-w-122 text-[clamp(16px,1.6vw,19px)] leading-[1.65] text-pretty text-ink-muted">
            Let members earn rewards on eligible purchases when they pay with a
            card or mobile wallet linked to their loyalty account.
          </p>
          <ButtonLink href="#card-linking-flow">
            See how it works <ArrowDown size={15} aria-hidden="true" />
          </ButtonLink>
        </div>
        <Image
          src={paymentCardPhoto}
          alt="A shopper holding a payment card over a checkout reader"
          sizes="(min-width: 1280px) 550px, (min-width: 1024px) 44vw, (min-width: 640px) calc(100vw - 80px), calc(100vw - 48px)"
          loading="eager"
          className="block h-auto w-full lg:col-start-1 lg:row-start-1"
        />
      </div>
    </section>
  );
}
