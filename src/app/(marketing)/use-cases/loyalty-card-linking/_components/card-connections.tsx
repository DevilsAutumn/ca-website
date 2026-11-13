import Image from "next/image";
import { BrandedCaseStudy } from "../../../solutions/_components/branded-case-study";
import walletPhoto from "../_assets/mobile-wallets.jpg";
import {
  activeSuperCaseStudy,
  cardConnections,
} from "../_content/card-linking-content";

export function CardConnections() {
  return (
    <section
      aria-labelledby="card-connections-title"
      className="border-y border-line bg-surface-soft"
    >
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-10 lg:py-16">
        <div className="grid items-center gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-12">
          <div>
            <h2
              id="card-connections-title"
              className="mt-0 mb-5 max-w-132 text-[clamp(34px,4.3vw,55px)] leading-[1.06] tracking-[-0.06em] text-balance"
            >
              Connect a card <em>or a wallet.</em>
            </h2>
            <dl className="m-0 max-w-128 divide-y divide-line border-y border-line">
              {cardConnections.map(({ label, description }) => (
                <div key={label} className="py-4">
                  <dt className="mb-1.5 text-[17px] leading-snug font-extrabold tracking-tight">
                    {label}
                  </dt>
                  <dd className="m-0 text-[15px] leading-relaxed text-ink-muted">
                    {description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <Image
            src={walletPhoto}
            alt="A shopper holding a phone near a payment reader"
            sizes="(min-width: 1280px) 576px, (min-width: 1024px) 46vw, (min-width: 640px) calc(100vw - 80px), calc(100vw - 48px)"
            className="block h-auto w-full"
          />
        </div>
        <BrandedCaseStudy
          titleId="card-linked-case-title"
          className="mt-8 lg:mt-10"
          {...activeSuperCaseStudy}
        />
      </div>
    </section>
  );
}
