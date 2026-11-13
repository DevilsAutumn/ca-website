import { cn } from "@/lib/utils";
import { ArrowLeftRight, ArrowRight } from "lucide-react";
import type { PartnershipExample } from "./partnership-examples";
function PartnershipNode({ node }: { node: PartnershipExample["source"] }) {
  const Icon = node.icon;
  return (
    <div
      className={cn(
        "flex min-w-0 min-h-36 flex-col items-center justify-center rounded-[5px] bg-surface text-ink text-center",
        "py-5 px-4 gap-3 [&_strong]:flex [&_strong]:min-h-[2.5em] [&_strong]:items-center [&_strong]:text-[15px]",
        "[&_strong]:font-[650] [&_strong]:tracking-[-0.025em] [&_strong]:leading-[1.25] max-[1001px]:py-4.5",
        "max-[1001px]:px-3 max-[1001px]:[&_strong]:text-[14px] max-[721px]:min-h-33 max-[721px]:py-4 max-[721px]:px-3",
        "max-[721px]:gap-2.5 max-[381px]:[&_strong]:text-[13px]",
      )}
    >
      <Icon className="mb-1.25 text-teal-dark" size={34} strokeWidth={1.25} />
      <strong>{node.title}</strong>
    </div>
  );
}
export function PartnershipExamplePanel({
  example,
}: {
  example: PartnershipExample;
}) {
  const Connector = example.bidirectional ? ArrowLeftRight : ArrowRight;
  return (
    <div
      className={cn(
        "grid grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] min-h-67.5 items-center py-8 px-10 gap-16",
        "max-[1001px]:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] max-[1001px]:p-7 max-[1001px]:gap-8",
        "max-[721px]:grid-cols-1 max-[721px]:min-h-97.5 max-[721px]:content-center max-[721px]:p-6 max-[721px]:gap-7",
        "max-[381px]:min-h-100 max-[381px]:py-6 max-[381px]:px-4.5",
      )}
    >
      <figure
        className={cn(
          "grid grid-cols-[minmax(0,1fr)_48px_minmax(0,1fr)] items-center w-full max-w-140 m-0",
          "max-[1001px]:grid-cols-[minmax(0,1fr)_36px_minmax(0,1fr)] max-[721px]:max-w-105",
          "max-[721px]:justify-self-center max-[381px]:grid-cols-[minmax(0,1fr)_28px_minmax(0,1fr)]",
        )}
        role="img"
        aria-label={example.illustrationLabel}
      >
        <PartnershipNode node={example.source} />
        <Connector
          className="justify-self-center text-teal-pale max-[381px]:w-6"
          size={30}
          strokeWidth={1.25}
          aria-hidden="true"
        />
        <PartnershipNode node={example.destination} />
      </figure>
      <div
        className={cn(
          "max-w-90 [&_h3]:mt-0 [&_h3]:mb-4 [&_h3]:text-white [&_h3]:text-[clamp(27px,2.6vw,34px)] [&_h3]:font-medium",
          "[&_h3]:tracking-[-0.045em] [&_h3]:leading-[1.15] [&_h3]:text-balance [&_h3]:mx-0 [&_p]:text-teal-wash",
          "[&_p]:text-[15px] [&_p]:leading-[1.65] [&_p]:m-0 max-[721px]:max-w-none max-[721px]:[&_h3]:text-[27px]",
          "max-[721px]:[&_h3]:[text-wrap:initial]",
        )}
      >
        <h3>{example.title}</h3>
        <p>{example.description}</p>
      </div>
    </div>
  );
}
