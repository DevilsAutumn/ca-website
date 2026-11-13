import { cn } from "@/lib/utils";
import { NetworkConnectors } from "./partner-network/network-connectors";
import { NetworkEndpoints } from "./partner-network/network-endpoints";
import { PlatformStack } from "./partner-network/platform-stack";
export function PartnerNetworkDiagram() {
  return (
    <div
      className={cn(
        "home-network-diagram [--diagram-scale:0.8] relative grid w-full min-w-0 h-full place-items-center py-3 px-0",
        "[@container(max-width:_420px)]:py-2 [@container(max-width:_420px)]:px-0",
      )}
      data-partner-network
    >
      <div
        className={cn(
          "home-network-network flex w-[calc(100%_*_var(--diagram-scale))] min-h-135 flex-col items-center",
          "justify-center [zoom:var(--diagram-scale)] [@container(max-width:_420px)]:min-h-107.5",
        )}
        role="group"
        aria-label="Partner APIs connect through Currency Alliance’s loyalty API, rules engine, and settlement layer to customer apps for earning, exchanging, and redeeming points."
      >
        <NetworkEndpoints audience="partners" />
        <NetworkConnectors direction="in" />
        <PlatformStack />
        <NetworkConnectors direction="out" />
        <NetworkEndpoints audience="customers" />
      </div>
    </div>
  );
}
