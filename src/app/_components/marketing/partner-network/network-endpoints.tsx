import { cn } from "@/lib/utils";
import {
  ArrowLeftRight,
  Coins,
  Gift,
  Hotel,
  Network,
  Plane,
  ShoppingBag,
  Smartphone,
} from "lucide-react";
const endpointGroups = {
  partners: {
    label: "Partner APIs",
    icon: Network,
    items: [
      { label: "Airlines", icon: Plane },
      { label: "Hotels", icon: Hotel },
      { label: "Retail", icon: ShoppingBag },
    ],
  },
  customers: {
    label: "Customer apps",
    icon: Smartphone,
    items: [
      { label: "Earn", icon: Coins },
      { label: "Exchange", icon: ArrowLeftRight },
      { label: "Redeem", icon: Gift },
    ],
  },
} as const;
export function NetworkEndpoints({
  audience,
}: {
  audience: keyof typeof endpointGroups;
}) {
  const { label, icon: GroupIcon, items } = endpointGroups[audience];
  const heading = (
    <div
      className={cn(
        "home-network-groupLabel flex items-center justify-center mb-3 text-ink-soft text-[11px] font-bold",
        "tracking-[0.1em] leading-[1.4] uppercase gap-1.75 [.home-network-customerGroup_&]:mt-3",
        "[.home-network-customerGroup_&]:mb-0",
      )}
    >
      <GroupIcon size={14} strokeWidth={1.5} />
      <span>{label}</span>
    </div>
  );
  return (
    <div
      className={cn(
        "home-network-endpointGroup w-full",
        audience === "customers" && "home-network-customerGroup",
      )}
    >
      {audience === "partners" && heading}
      <div className="home-network-endpointRow grid grid-cols-3">
        {items.map(({ label: itemLabel, icon: Icon }) => (
          <div
            className={cn(
              "home-network-endpoint flex min-w-0 min-h-13.5 w-[calc(100%_-_20px)] max-w-40 items-center justify-center",
              "justify-self-center text-ink-soft text-[12px] font-semibold tracking-[-0.02em] leading-[1.4] rounded-[5px]",
              "bg-surface p-2.5 gap-2.5 border border-solid border-line [&_svg]:shrink-0",
              "[@container(max-width:_420px)]:min-h-16 [@container(max-width:_420px)]:w-[calc(100%_-_12px)]",
              "[@container(max-width:_420px)]:flex-col [@container(max-width:_420px)]:py-2",
              "[@container(max-width:_420px)]:px-1 [@container(max-width:_420px)]:gap-1.5",
            )}
            key={itemLabel}
          >
            <Icon size={22} strokeWidth={1.35} />
            <span>{itemLabel}</span>
          </div>
        ))}
      </div>
      {audience === "customers" && heading}
    </div>
  );
}
