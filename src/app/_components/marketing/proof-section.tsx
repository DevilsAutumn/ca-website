import { TextLink } from "@/app/_components/ui/text-link";
import { cn } from "@/lib/utils";
import { Arrow } from "../ui/arrow";
import { PartnerLogoCloud } from "./partner-logo-cloud";
export function ProofSection() {
  return (
    <section
      className="section max-w-7xl proof block m-auto py-26 px-10 max-[901px]:py-20 max-[901px]:px-6"
      id="proof"
    >
      <div
        className={cn(
          "proof-intro grid grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)] items-end pt-0 gap-[9%]",
          "max-[901px]:grid-cols-1 max-[901px]:gap-7 max-[541px]:pt-0",
        )}
      >
        <h2 className="m-0 text-[clamp(42px,5vw,65px)] leading-[1.02] max-[541px]:text-[42px]">
          Built for the way
          <br />
          <em>people live now.</em>
        </h2>
        <div
          className={cn(
            "proof-intro-copy max-w-107.5 pb-1.5 [&_p]:text-ink-muted [&_p]:text-[16px] [&_p]:leading-[1.65]",
            "[&_p]:mb-6.75 max-[901px]:max-w-112.5",
          )}
        >
          <p>
            From airline miles to everyday spending, the right partner can turn
            a passive points balance into a reason to come back.
          </p>
          <TextLink href="/case-studies">
            See customer stories <Arrow />
          </TextLink>
        </div>
      </div>
      <div className="proof-network-board mt-12 bg-surface border border-solid border-line max-[901px]:mt-14 max-[541px]:mt-11">
        <div
          className={cn(
            "proof-network-head flex items-center justify-center min-h-21 border-b border-b-line py-5.5 px-6",
            "max-[901px]:py-5.5 max-[901px]:px-4.5 max-[541px]:min-h-0 max-[541px]:py-4.5 max-[541px]:px-4",
          )}
        >
          <p
            className={cn(
              "proof-network-statement text-ink-soft text-[clamp(17px,2vw,22px)] tracking-[-0.04em] leading-[1.2]",
              "text-center m-0 [&_strong]:text-teal-dark [&_strong]:font-bold [&_strong]:tracking-[-0.05em]",
              "max-[541px]:text-[17px]",
            )}
          >
            Some of our <strong>200+ partner brands.</strong>
          </p>
        </div>
        <PartnerLogoCloud />
      </div>
    </section>
  );
}
