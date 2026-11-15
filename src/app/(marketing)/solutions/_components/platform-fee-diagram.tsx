import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import {
  exampleLoyaltyShare,
  formatPercent,
  issuanceFeeRate,
} from "../../_content/platform-pricing";

const feeRateLabel = formatPercent(issuanceFeeRate);
const loyaltyShareLabel = formatPercent(exampleLoyaltyShare);

type Point = readonly [x: number, y: number];

type Callout = {
  position: Point;
  start: Point;
  bend?: Point;
};

type DiagramLayout = {
  viewBox: string;
  revenue: { center: Point; radius: number };
  loyalty: { center: Point; callout: Callout };
  fee: { center: Point; callout: Callout };
};

const wideLayout: DiagramLayout = {
  viewBox: "0 0 520 310",
  revenue: { center: [151, 155], radius: 144 },
  loyalty: {
    center: [234, 72],
    callout: { position: [339, 53], start: [328, 48], bend: [304, 48] },
  },
  fee: {
    center: [235, 77],
    callout: { position: [339, 202], start: [328, 197], bend: [303, 197] },
  },
};

const compactLayout: DiagramLayout = {
  viewBox: "0 0 300 307",
  revenue: { center: [150, 187], radius: 114 },
  loyalty: {
    center: [150, 99],
    callout: { position: [168, 19], start: [201, 51] },
  },
  fee: {
    center: [147, 102],
    callout: { position: [6, 19], start: [62, 51] },
  },
};

function DiagramCallout({
  callout,
  target,
  targetRadius,
  label,
  detail,
}: {
  callout: Callout;
  target: Point;
  targetRadius: number;
  label: string;
  detail: string;
}) {
  const [x, y] = callout.position;
  const [targetX, targetY] = target;
  const [approachX, approachY] = callout.bend ?? callout.start;
  const angle = Math.atan2(approachY - targetY, approachX - targetX);
  const clearance = targetRadius + 1;
  const tipX = targetX + clearance * Math.cos(angle);
  const tipY = targetY + clearance * Math.sin(angle);
  const points = [callout.start, callout.bend, [tipX, tipY]]
    .filter((point) => point !== undefined)
    .map((point) => point.join(","))
    .join(" ");

  return (
    <g>
      <g
        className="fill-none stroke-teal"
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points={points} vectorEffect="non-scaling-stroke" />
        <path
          d="M5 -2.5 0 0 5 2.5"
          transform={`translate(${tipX} ${tipY}) rotate(${(angle * 180) / Math.PI})`}
          vectorEffect="non-scaling-stroke"
        />
      </g>
      <text x={x} y={y} className="fill-ink text-[18px] font-extrabold">
        <tspan>{label}</tspan>
        <tspan x={x} dy={21} className="fill-ink-muted text-[15px] font-medium">
          {detail}
        </tspan>
      </text>
    </g>
  );
}

function FeeGraphic({
  layout,
  className,
}: {
  layout: DiagramLayout;
  className: string;
}) {
  const { revenue, loyalty, fee } = layout;
  const [revenueX, revenueY] = revenue.center;
  const [loyaltyX, loyaltyY] = loyalty.center;
  const [feeX, feeY] = fee.center;
  const loyaltyRadius = revenue.radius * Math.sqrt(exampleLoyaltyShare);
  const feeRadius = loyaltyRadius * Math.sqrt(issuanceFeeRate);
  const feeMarkerRadius = feeRadius + 2.3;

  return (
    <svg
      viewBox={layout.viewBox}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <circle
        cx={revenueX}
        cy={revenueY}
        r={revenue.radius}
        className="fill-ink"
      />
      <text
        x={revenueX}
        y={revenueY - 4}
        textAnchor="middle"
        className="fill-teal-wash text-[19px] font-semibold"
      >
        <tspan>Incremental</tspan>
        <tspan x={revenueX} dy={23}>
          revenue
        </tspan>
      </text>
      <circle
        cx={loyaltyX}
        cy={loyaltyY}
        r={loyaltyRadius}
        className="fill-teal-wash"
      />
      <circle
        cx={feeX}
        cy={feeY}
        r={feeMarkerRadius}
        className="fill-none stroke-teal-dark"
        strokeWidth={1.15}
        vectorEffect="non-scaling-stroke"
      />
      <circle cx={feeX} cy={feeY} r={feeRadius} className="fill-teal-dark" />
      <DiagramCallout
        callout={loyalty.callout}
        target={loyalty.center}
        targetRadius={loyaltyRadius}
        label="Loyalty value"
        detail={`${loyaltyShareLabel} of revenue`}
      />
      <DiagramCallout
        callout={fee.callout}
        target={fee.center}
        targetRadius={feeMarkerRadius}
        label="Platform fee"
        detail={`${feeRateLabel} of loyalty value`}
      />
    </svg>
  );
}

export function PlatformFeeDiagram({
  className,
  ...props
}: Omit<ComponentProps<"figure">, "children">) {
  return (
    <figure
      className={cn("mx-auto my-0 w-full max-w-136", className)}
      {...props}
    >
      <FeeGraphic layout={wideLayout} className="hidden w-full sm:block" />
      <FeeGraphic
        layout={compactLayout}
        className="mx-auto block w-full max-w-80 sm:hidden"
      />
    </figure>
  );
}
