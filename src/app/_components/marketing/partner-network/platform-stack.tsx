import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { PlatformStackInteraction } from "./platform-stack-interaction";
const layerToneClasses = {
  api: "home-network-api [--rest-offset:58px] [--expanded-offset:0px]",
  rules: "home-network-rules [--rest-offset:70px] [--expanded-offset:70px]",
  settlement:
    "home-network-settlement [--rest-offset:82px] [--expanded-offset:140px]",
};
function StackLayer({
  tone,
  children,
}: {
  tone: "api" | "rules" | "settlement";
  children?: ReactNode;
}) {
  return (
    <g
      className={cn(
        "home-network-layerPosition transform-[translateY(var(--rest-offset))]",
        "[.home-network-stack[data-interacted=true]_&]:[transition:transform_0.55s_cubic-bezier(0.22,1,0.36,1)]",
        "[.home-network-stack[data-expanded=true]_&]:transform-[translateY(var(--expanded-offset))]",
        "motion-reduce:[.home-network-stack[data-interacted=true]_&]:transition-none",
        layerToneClasses[tone],
      )}
    >
      <g
        className={cn(
          "home-network-layer [pointer-events:visiblePainted]",
          "stroke-[color-mix(in_srgb,var(--teal-dark)_35%,transparent)] [stroke-linejoin:round] [stroke-width:1]",
        )}
      >
        <path
          className={cn(
            "home-network-leftEdge fill-[color-mix(in_srgb,var(--teal-pale)_60%,var(--surface))]",
            "[.home-network-settlement_&]:fill-ink",
          )}
          d="m148 96 152 78v12l-152-78Z"
        />
        <path
          className={cn(
            "home-network-rightEdge fill-teal-pale",
            "[.home-network-rules_&]:fill-[color-mix(in_srgb,var(--teal)_35%,var(--teal-pale))]",
            "[.home-network-settlement_&]:fill-[color-mix(in_srgb,var(--ink)_80%,var(--teal))]",
          )}
          d="m300 174 152-78v12l-152 78Z"
        />
        <path
          className={cn(
            "home-network-layerFace fill-surface",
            "[.home-network-rules_&]:fill-[color-mix(in_srgb,var(--teal-pale)_50%,var(--surface))]",
            "[.home-network-settlement_&]:fill-ink-soft",
          )}
          d="m300 18 152 78-152 78-152-78Z"
        />
        <path
          className={cn(
            "home-network-layerInset fill-none stroke-[color-mix(in_srgb,var(--teal)_16%,transparent)]",
            "[.home-network-settlement_&]:stroke-[color-mix(in_srgb,var(--teal-pale)_25%,transparent)]",
          )}
          d="m300 30 129 66-129 66-129-66Z"
        />
        <path
          className={cn(
            "home-network-layerSignal fill-none stroke-teal [stroke-width:1.5] [stroke-dasharray:8_92] opacity-65",
            "animate-[home-network-layerActivity_7.2s_linear_infinite] [.home-network-rules_&]:[animation-delay:-2.4s]",
            "[.home-network-settlement_&]:stroke-teal-pale [.home-network-settlement_&]:[animation-delay:-4.8s]",
            "motion-reduce:animate-none motion-reduce:hidden",
          )}
          d="m300 30 129 66-129 66-129-66Z"
          pathLength={100}
        />
        {children}
      </g>
    </g>
  );
}
function CircuitMark() {
  return (
    <g transform="matrix(.92 .47 -.92 .47 300 96)">
      <rect
        className="home-network-chipFrame fill-surface stroke-[color-mix(in_srgb,var(--teal)_50%,transparent)]"
        x={-61}
        y={-41}
        width={122}
        height={82}
        rx={5}
      />
      <path
        className="home-network-circuitTraces fill-none stroke-[color-mix(in_srgb,var(--teal)_40%,transparent)]"
        d="M-61-20h-12v-16h-8M-61 0h-20M-61 20h-12v16h-8M61-20h12v-16h8M61 0h20M61 20h12v16h8M-20-41v-38M20-41v-38M-20 41v38M20 41v38"
      />
      <image href="/logo.svg" x={-45} y={-25.35} width={90} height={50.7} />
    </g>
  );
}
export function PlatformStack() {
  return (
    <PlatformStackInteraction>
      <svg
        className="home-network-stackDrawing block w-full h-full overflow-visible [&_path]:[vector-effect:non-scaling-stroke]"
        viewBox="0 0 600 360"
        aria-hidden="true"
      >
        <path
          className="home-network-hoverBridge [.home-network-stack[data-expanded=true]_&]:[pointer-events:all]"
          d="M300 18 452 96V248L300 326 148 248V96Z"
          fill="transparent"
          pointerEvents="none"
        />
        <path
          className="home-network-spine fill-none stroke-teal [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.1]"
          d="M300 0v360"
        />
        <path
          className={cn(
            "home-network-incomingArrow fill-none stroke-teal [stroke-linecap:round] [stroke-linejoin:round]",
            "[stroke-width:1.1]",
          )}
          d="m295 8 5 7 5-7"
        />

        <StackLayer tone="settlement">
          <path
            className="home-network-ledger fill-none stroke-teal-pale [stroke-opacity:0.45]"
            d="m246 88 54 28 54-28m-108 14 54 28 54-28"
          />
        </StackLayer>
        <StackLayer tone="rules" />
        <StackLayer tone="api">
          <CircuitMark />
        </StackLayer>

        <g
          className={cn(
            "home-network-callouts fill-teal stroke-[color-mix(in_srgb,var(--teal)_45%,transparent)] [stroke-width:1]",
            "invisible opacity-0",
            "[.home-network-stack[data-interacted=true]_&]:[transition:opacity_0.15s_ease,visibility_0s_linear_0.15s]",
            "[.home-network-stack[data-expanded=true]_&]:visible [.home-network-stack[data-expanded=true]_&]:opacity-100",
            "[.home-network-stack[data-expanded=true]_&]:[transition:opacity_0.2s_ease_0.18s,visibility_0s]",
            "motion-reduce:[.home-network-stack[data-interacted=true]_&]:transition-none",
            "motion-reduce:[.home-network-stack[data-expanded=true]_&]:transition-none",
          )}
        >
          <path d="M452 96h8M452 166h8M452 236h8" />
          <circle cx={452} cy={96} r={2} />
          <circle cx={452} cy={166} r={2} />
          <circle cx={452} cy={236} r={2} />
        </g>
        <path
          className={cn(
            "home-network-outgoingArrow fill-none stroke-teal [stroke-linecap:round] [stroke-linejoin:round]",
            "[stroke-width:1.1]",
          )}
          d="m295 346 5 7 5-7"
        />
      </svg>

      <span
        className={cn(
          "home-network-stackLabel absolute right-0 left-[77%] text-[12px] leading-[1.4] transform-[translateY(-50%)]",
          "invisible opacity-0 home-network-apiLabel top-[26.6667%] text-teal-dark font-bold",
          "[.home-network-stack[data-interacted=true]_&]:[transition:opacity_0.15s_ease,visibility_0s_linear_0.15s]",
          "[.home-network-stack[data-expanded=true]_&]:visible [.home-network-stack[data-expanded=true]_&]:opacity-100",
          "[.home-network-stack[data-expanded=true]_&]:[transition:opacity_0.2s_ease_0.18s,visibility_0s]",
          "[@container(max-width:_420px)]:text-[11px]",
          "motion-reduce:[.home-network-stack[data-interacted=true]_&]:transition-none",
          "motion-reduce:[.home-network-stack[data-expanded=true]_&]:transition-none",
        )}
      >
        Loyalty API
      </span>
      <span
        className={cn(
          "home-network-stackLabel absolute right-0 left-[77%] text-ink-soft text-[12px] font-[550] leading-[1.4]",
          "transform-[translateY(-50%)] invisible opacity-0 home-network-rulesLabel top-[46.1111%]",
          "[.home-network-stack[data-interacted=true]_&]:[transition:opacity_0.15s_ease,visibility_0s_linear_0.15s]",
          "[.home-network-stack[data-expanded=true]_&]:visible [.home-network-stack[data-expanded=true]_&]:opacity-100",
          "[.home-network-stack[data-expanded=true]_&]:[transition:opacity_0.2s_ease_0.18s,visibility_0s]",
          "[@container(max-width:_420px)]:text-[11px]",
          "motion-reduce:[.home-network-stack[data-interacted=true]_&]:transition-none",
          "motion-reduce:[.home-network-stack[data-expanded=true]_&]:transition-none",
        )}
      >
        Rules engine
      </span>
      <span
        className={cn(
          "home-network-stackLabel absolute right-0 left-[77%] text-ink-soft text-[12px] font-[550] leading-[1.4]",
          "transform-[translateY(-50%)] invisible opacity-0 home-network-settlementLabel top-[65.5556%]",
          "[.home-network-stack[data-interacted=true]_&]:[transition:opacity_0.15s_ease,visibility_0s_linear_0.15s]",
          "[.home-network-stack[data-expanded=true]_&]:visible [.home-network-stack[data-expanded=true]_&]:opacity-100",
          "[.home-network-stack[data-expanded=true]_&]:[transition:opacity_0.2s_ease_0.18s,visibility_0s]",
          "[@container(max-width:_420px)]:text-[11px]",
          "motion-reduce:[.home-network-stack[data-interacted=true]_&]:transition-none",
          "motion-reduce:[.home-network-stack[data-expanded=true]_&]:transition-none",
        )}
      >
        Settlement
      </span>
    </PlatformStackInteraction>
  );
}
