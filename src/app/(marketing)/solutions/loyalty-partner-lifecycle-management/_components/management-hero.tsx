import { ArrowDown } from "lucide-react";
import { ViewportHero } from "@/app/_components/marketing/viewport-hero";
import { Arrow } from "@/app/_components/ui/arrow";
import { ButtonLink } from "@/app/_components/ui/button";
import { TextLink } from "@/app/_components/ui/text-link";

const sections = [
  { label: "Set partner rules", href: "#partner-controls" },
  { label: "Report transactions", href: "#transaction-reporting" },
  { label: "Reconcile and settle", href: "#settlement" },
] as const;

export function ManagementHero() {
  return (
    <ViewportHero
      aria-labelledby="management-page-title"
      className="items-center bg-ink text-white"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-8 sm:px-10 sm:py-[clamp(2rem,6svh,5.5rem)]">
        <p className="mb-5 text-[12px] leading-[1.55] font-extrabold tracking-[0.1em] text-teal-pale uppercase">
          Partnership management
        </p>
        <h1
          id="management-page-title"
          className="mt-0 mb-9 max-w-260 text-[clamp(43px,6.8vw,90px)] leading-[1.01] tracking-[-0.074em] sm:mb-12"
        >
          Run loyalty partnerships{" "}
          <em className="block text-teal-pale">in one place.</em>
        </h1>
        <div className="grid items-end gap-8 border-t border-line-dark pt-7 lg:grid-cols-[minmax(0,1fr)_minmax(0,23rem)] lg:gap-16 lg:pt-9">
          <div>
            <p className="mt-0 mb-6 max-w-135 text-[clamp(16px,1.6vw,19px)] leading-[1.65] text-pretty text-teal-wash">
              Add a management portal to the loyalty system you already use. Set
              what each partner can do, see their transactions, and handle
              reporting, reconciliation, and settlement.
            </p>
            <ButtonLink href="/contact-us">
              Talk to our team <Arrow />
            </ButtonLink>
          </div>
          <nav aria-label="Partnership management sections">
            <ul className="m-0 grid list-none p-0" role="list">
              {sections.map(({ label, href }) => (
                <li key={href}>
                  <TextLink
                    href={href}
                    tone="light"
                    className="min-h-11 w-full justify-between border-line-dark py-3 text-[14px] hover:translate-y-0"
                  >
                    {label}
                    <ArrowDown size={15} aria-hidden="true" />
                  </TextLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </ViewportHero>
  );
}
