import { cn } from "@/lib/utils";
const connectorPaths = {
  in: [
    "M100 0V4Q100 20 116 20H284Q300 20 300 36V40",
    "M300 0V40",
    "M500 0V4Q500 20 484 20H316Q300 20 300 36V40",
  ],
  out: [
    "M300 0V4Q300 20 284 20H116Q100 20 100 36V40",
    "M300 0V40",
    "M300 0V4Q300 20 316 20H484Q500 20 500 36V40",
  ],
} as const;
export function NetworkConnectors({ direction }: { direction: "in" | "out" }) {
  return (
    <svg
      viewBox="0 0 600 40"
      preserveAspectRatio="none"
      className={cn(
        "home-network-out",
        direction === "out"
          ? cn(
              "home-network-connectors block w-full h-8.5 shrink-0 overflow-visible fill-none stroke-teal",
              "[stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.1] home-network-out",
              "[&_path]:[vector-effect:non-scaling-stroke] [@container(max-width:_420px)]:h-7",
            )
          : cn(
              "home-network-connectors block w-full h-8.5 shrink-0 overflow-visible fill-none stroke-teal",
              "[stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.1]",
              "[&_path]:[vector-effect:non-scaling-stroke] [@container(max-width:_420px)]:h-7",
            ),
      )}
    >
      <g className="home-network-connectorBase opacity-50">
        {connectorPaths[direction].map((path) => (
          <path d={path} key={path} />
        ))}
      </g>
      <g className="home-network-connectorSignals stroke-teal-dark [stroke-width:2] motion-reduce:hidden">
        {connectorPaths[direction].map((path) => (
          <path
            className={cn(
              "home-network-flowSignal [stroke-dasharray:8_112] [stroke-dashoffset:8]",
              "animate-[home-network-dataFlow_4.8s_linear_infinite] [&:nth-child(2)]:[animation-delay:-1.6s]",
              "[&:nth-child(3)]:[animation-delay:-3.2s] [.home-network-out_&]:[animation-delay:-0.8s]",
              "[.home-network-out_&:nth-child(2)]:[animation-delay:-2.4s]",
              "[.home-network-out_&:nth-child(3)]:[animation-delay:-4s] motion-reduce:animate-none",
            )}
            d={path}
            pathLength={100}
            key={path}
          />
        ))}
      </g>
    </svg>
  );
}
