import Image from "next/image";
import { Arrow } from "@/app/_components/ui/arrow";
import { TextLink } from "@/app/_components/ui/text-link";
import { BrandedCaseStudy } from "../../../solutions/_components/branded-case-study";
import contractPhoto from "../_assets/partner-contracts.jpg";
import {
  coalitionCaseStudy,
  partnershipSteps,
} from "../_content/coalition-content";

export function CoalitionOperations() {
  return (
    <section
      id="coalition-operations"
      aria-labelledby="coalition-operations-title"
      className="scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-10 lg:py-16">
        <h2
          id="coalition-operations-title"
          className="mt-0 mb-7 text-[clamp(34px,4.3vw,55px)] leading-[1.06] tracking-[-0.06em] text-balance"
        >
          From discovery <em>to settlement.</em>
        </h2>
        <div className="grid items-start gap-7 lg:grid-cols-[minmax(0,1.07fr)_minmax(0,0.93fr)] lg:gap-12">
          <ol
            role="list"
            className="m-0 list-none divide-y divide-line border-y border-line p-0"
          >
            {partnershipSteps.map(({ title, description, action }, index) => (
              <li
                key={title}
                className="grid grid-cols-[1.5rem_minmax(0,1fr)] gap-3 py-4.5 sm:grid-cols-[2rem_minmax(0,1fr)]"
              >
                <span
                  aria-hidden="true"
                  className="text-[13px] leading-6 font-extrabold text-teal-dark tabular-nums"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="mt-0 mb-1.5 text-[19px] leading-tight font-extrabold tracking-tight">
                    {title}
                  </h3>
                  <p className="m-0 max-w-115 text-[15px] leading-relaxed text-ink-muted">
                    {description}
                  </p>
                  <TextLink
                    href={action.href}
                    className="mt-2.5 whitespace-normal [&>.arrow]:shrink-0"
                  >
                    {action.label} <Arrow />
                  </TextLink>
                </div>
              </li>
            ))}
          </ol>
          <figure className="m-0 w-full min-w-0 border border-line bg-surface">
            <Image
              src={contractPhoto}
              alt=""
              sizes="(min-width: 1280px) 535px, (min-width: 1024px) 43vw, (min-width: 640px) calc(100vw - 80px), calc(100vw - 48px)"
              className="block h-auto w-full"
            />
            <figcaption className="p-5 sm:p-6">
              <p className="mt-0 mb-1.5 text-[17px] leading-tight font-extrabold">
                Each brand controls what it shares
              </p>
              <p className="m-0 max-w-110 text-[15px] leading-relaxed text-ink-muted">
                Agree which data your brands need for the partnership and choose
                what to share with each partner.
              </p>
            </figcaption>
          </figure>
        </div>
        <BrandedCaseStudy
          titleId="coalition-case-title"
          className="mt-8 lg:mt-10"
          {...coalitionCaseStudy}
        />
      </div>
    </section>
  );
}
