import { Arrow } from "@/app/_components/ui/arrow";
import { TextLink } from "@/app/_components/ui/text-link";
import { siteLinks } from "@/lib/site-links";
import { retailPartnerOptions } from "../_content/retail-content";

export function RetailPartners() {
  return (
    <section
      id="retail-partners"
      aria-labelledby="retail-partners-title"
      className="scroll-mt-24 bg-ink text-white"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-7 px-6 py-12 sm:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-14 lg:py-16">
        <div>
          <h2
            id="retail-partners-title"
            className="mt-0 mb-4 max-w-141 text-[clamp(34px,4.3vw,55px)] leading-[1.06] tracking-[-0.06em] text-balance"
          >
            Offer points{" "}
            <em className="text-teal-pale">customers already collect.</em>
          </h2>
          <p className="m-0 max-w-120 text-[16px] leading-[1.7] text-teal-wash">
            Find complementary brands in the marketplace and agree when members
            can earn or spend each partner’s currency.
          </p>
          <TextLink
            href={siteLinks.partnerMarketplace}
            tone="light"
            className="mt-5"
          >
            Find loyalty partners <Arrow />
          </TextLink>
        </div>
        <div className="divide-y divide-line-dark border-y border-line-dark">
          {retailPartnerOptions.map(({ title, description, action }) => (
            <div key={title} className="py-4">
              <h3 className="mt-0 mb-2 text-[19px] leading-snug font-extrabold tracking-tight">
                {title}
              </h3>
              <p className="m-0 max-w-114 text-[15px] leading-relaxed text-teal-wash">
                {description}
              </p>
              <TextLink
                href={action.href}
                tone="light"
                className="mt-3 whitespace-normal [&>.arrow]:shrink-0"
              >
                {action.label} <Arrow />
              </TextLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
