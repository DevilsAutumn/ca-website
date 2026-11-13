import Image from "next/image";
import { Arrow } from "@/app/_components/ui/arrow";
import { TextLink } from "@/app/_components/ui/text-link";
import { BrandedCaseStudy } from "../../_components/branded-case-study";
import platformImage from "../_assets/platform.png";
import { avoltaCase, voucherOptions } from "../_content/voucher-content";

export function VoucherSetup() {
  return (
    <section
      aria-labelledby="voucher-setup-title"
      className="border-y border-line bg-surface-soft"
    >
      <div className="mx-auto max-w-7xl px-6 py-13 sm:px-10 lg:py-17">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <div>
            <h2
              id="voucher-setup-title"
              className="mt-0 mb-5 text-[clamp(34px,4.3vw,55px)] leading-[1.06] tracking-[-0.06em] text-balance"
            >
              With or without <em className="block">a points program.</em>
            </h2>
            <dl className="m-0 divide-y divide-line border-y border-line">
              {voucherOptions.map(({ title, description }) => (
                <div key={title} className="py-3.5">
                  <dt className="mb-1 text-[16px] font-extrabold">{title}</dt>
                  <dd className="m-0 max-w-126 text-[15px] leading-relaxed text-ink-muted">
                    {description}
                  </dd>
                </div>
              ))}
            </dl>
            <TextLink href="/our-technology#integration" className="mt-5">
              Explore the API integration <Arrow />
            </TextLink>
          </div>
          <figure className="m-0 w-full min-w-0 max-w-144 justify-self-center lg:order-first">
            <Image
              src={platformImage}
              alt="Example voucher catalog and mobile wallet shown on desktop, tablet, and phone"
              sizes="(min-width: 1280px) 572px, (min-width: 1024px) 45vw, (min-width: 680px) 576px, calc(100vw - 48px)"
              className="block h-auto w-full"
            />
            <figcaption className="mt-4 text-center text-sm leading-relaxed text-ink-muted">
              Example voucher catalog and member wallet
            </figcaption>
          </figure>
        </div>
        <BrandedCaseStudy
          titleId="avolta-voucher-case-title"
          className="mt-10 lg:mt-13"
          {...avoltaCase}
        />
      </div>
    </section>
  );
}
