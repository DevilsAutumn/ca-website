import { cn } from "@/lib/utils";

type DiagramConnectionProps = {
  path: string;
  viewBox: string;
  className?: string;
  compact?: boolean;
};

export function DiagramConnection({
  path,
  viewBox,
  className,
  compact = false,
}: DiagramConnectionProps) {
  return (
    <svg
      className={cn(
        "h-full w-full overflow-visible [stroke-width:1]",
        className,
      )}
      viewBox={viewBox}
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path className="stroke-line" d={path} />
      <path
        className={cn(
          "stroke-teal [stroke-dashoffset:0] animate-[tech-diagram-signal_2.4s_linear_infinite] motion-reduce:animate-none",
          compact ? "[stroke-dasharray:72_190]" : "[stroke-dasharray:12_250]",
        )}
        // Keep the pulse visible on short links while sharing the same loop.
        pathLength={compact ? 262 : undefined}
        d={path}
      />
    </svg>
  );
}
