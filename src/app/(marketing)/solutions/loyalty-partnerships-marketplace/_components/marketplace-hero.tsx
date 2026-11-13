import {
  ArrowDown,
  ArrowRight,
  Cable,
  Network,
  WalletCards,
} from "lucide-react";
import { Arrow } from "@/app/_components/ui/arrow";
import { ButtonLink } from "@/app/_components/ui/button";
import { TextLink } from "@/app/_components/ui/text-link";
import { siteLinks } from "@/lib/site-links";
import { cn } from "@/lib/utils";

const connectionNodes = [
  {
    title: "Your loyalty program",
    description: "Keep your existing platform",
    icon: WalletCards,
  },
  {
    title: "Currency Alliance API",
    description: "One integration",
    icon: Cable,
    accent: true,
  },
  {
    title: "Partner brands",
    description: "Travel, retail, payments, and more",
    icon: Network,
  },
] as const;

function PartnerConnection() {
  return (
    <figure className="mx-auto mt-10 max-w-6xl border border-line bg-paper text-left sm:mt-13">
      <figcaption className="sr-only">
        A single API integration connects your loyalty program to participating
        brands.
      </figcaption>
      <ol
        className="m-0 grid list-none gap-3 px-5 py-6 md:grid-cols-3 md:gap-4 md:px-7 md:py-7 lg:gap-7"
        role="list"
      >
        {connectionNodes.map(
          ({ title, description, icon: Icon, ...node }, index) => (
            <li
              key={title}
              className="grid grid-cols-[minmax(0,1fr)] gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:last:grid-cols-1"
            >
              <div className="flex items-center gap-3 lg:gap-4">
                <span
                  className={cn(
                    "grid size-10 shrink-0 place-items-center border lg:size-12",
                    "accent" in node
                      ? "border-teal-dark bg-teal-dark text-white"
                      : "border-line bg-surface text-teal-dark",
                  )}
                >
                  <Icon size={20} strokeWidth={1.6} aria-hidden="true" />
                </span>
                <div>
                  <p className="m-0 text-[15px] leading-tight font-extrabold text-ink lg:text-[16px]">
                    {title}
                  </p>
                  <p className="mt-1 mb-0 text-[13px] leading-[1.5] text-ink-muted lg:text-[14px]">
                    {description}
                  </p>
                </div>
              </div>
              {index < connectionNodes.length - 1 && (
                <ArrowRight
                  size={19}
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className="ml-2.5 rotate-90 text-teal-dark md:ml-0 md:rotate-0"
                />
              )}
            </li>
          ),
        )}
      </ol>
    </figure>
  );
}

export function MarketplaceHero() {
  return (
    <section aria-labelledby="marketplace-page-title" className="bg-surface">
      <div className="mx-auto max-w-7xl px-6 pt-15 pb-12 text-center sm:px-10 sm:pt-19 sm:pb-15">
        <p className="mb-4 text-[12px] leading-[1.55] font-extrabold tracking-[0.09em] text-teal-dark uppercase">
          The Loyalty Partnerships Marketplace™
        </p>
        <h1
          id="marketplace-page-title"
          className="mx-auto mt-0 mb-5 max-w-210 text-[clamp(43px,6.7vw,84px)] leading-[1.01] tracking-[-0.072em] text-balance"
        >
          Find your next <em>loyalty partner.</em>
        </h1>
        <p className="mx-auto mt-0 mb-7 max-w-151 text-[clamp(16px,1.65vw,19px)] leading-[1.65] text-pretty text-ink-muted">
          Discover brands that fit your members. Connect your existing loyalty
          program once, then work with partners to offer new ways to earn,
          redeem, and exchange points.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
          <ButtonLink href="#partner-discovery">
            See how it works <ArrowDown size={15} aria-hidden="true" />
          </ButtonLink>
          <TextLink href={siteLinks.register}>
            Register to browse <Arrow />
          </TextLink>
        </div>
        <PartnerConnection />
      </div>
    </section>
  );
}
