import Image from "next/image";
import type { ReactNode } from "react";
import { Arrow } from "@/app/_components/ui/arrow";
import { TextLink } from "@/app/_components/ui/text-link";
import { siteLinks } from "@/lib/site-links";
import { RelationshipDiagram } from "./relationship-diagram";

const relatedLabels = {
  loyaltyPointsBank: "Explore the points bank",
  loyaltyRulesEngine: "Explore the rules engine",
} as const;

type LoyaltyBackendSectionProps = {
  title: ReactNode;
  description: string;
  relatedService: keyof typeof relatedLabels;
};

export function LoyaltyBackendSection({
  title,
  description,
  relatedService,
}: LoyaltyBackendSectionProps) {
  return (
    <section
      aria-labelledby="loyalty-backend-title"
      className="border-y border-line bg-surface-soft"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 py-13 sm:px-10 lg:grid-cols-2 lg:gap-14 lg:py-17">
        <div>
          <h2
            id="loyalty-backend-title"
            className="mt-0 mb-4 max-w-125 text-[clamp(34px,4.3vw,55px)] leading-[1.06] tracking-[-0.06em] text-balance"
          >
            {title}
          </h2>
          <p className="mt-0 mb-5 max-w-116 text-[16px] leading-[1.7] text-ink-muted">
            {description}
          </p>
          <TextLink href={siteLinks[relatedService]}>
            {relatedLabels[relatedService]} <Arrow />
          </TextLink>
        </div>
        <div className="min-w-0 border border-line bg-paper p-3.5 sm:p-6">
          <div className="mb-4 flex items-center gap-3">
            <Image src="/logo.svg" width={28} height={16} alt="" />
            <p className="m-0 text-sm font-extrabold">Using both services</p>
          </div>
          <RelationshipDiagram
            from={{ label: "Rules engine", detail: "Calculates the outcome" }}
            to={{ label: "Points bank", detail: "Records the transaction" }}
            connection="Amount"
            direction="forward"
            description="The rules engine calculates the points outcome. The points bank records the resulting transaction and updates the balance."
          />
        </div>
      </div>
    </section>
  );
}
