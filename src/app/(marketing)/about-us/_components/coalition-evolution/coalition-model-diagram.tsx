import Image from "next/image";
import { Building2, Plane, Store, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { CoalitionModel } from "../../_content/coalition-models";

function DiagramNode({
  label,
  detail,
  icon: Icon,
}: {
  label: string;
  detail?: string;
  icon: LucideIcon;
}) {
  return (
    <div className="flex min-h-20 flex-col items-center justify-center gap-2 border border-line bg-surface px-3 py-4 text-center">
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Icon size={18} strokeWidth={1.5} className="shrink-0 text-teal" />
        <span className="text-[14px] leading-[1.45] font-semibold text-ink">
          {label}
        </span>
      </div>
      {detail && (
        <span className="text-[13px] leading-[1.5] text-ink-muted">
          {detail}
        </span>
      )}
    </div>
  );
}

function PartnerPrograms({ independent }: { independent: boolean }) {
  return (
    <div className="grid grid-cols-2">
      {[
        { name: "Retail", icon: Store },
        { name: "Travel", icon: Plane },
      ].map(({ name, icon }) => (
        <div key={name} className="mx-3 min-w-0">
          <DiagramNode
            label={`${name} ${independent ? "program" : "partner"}`}
            detail={independent ? "Own program & rules" : undefined}
            icon={icon}
          />
        </div>
      ))}
    </div>
  );
}

function DiagramConnections({ shared }: { shared: boolean }) {
  return (
    <svg
      viewBox="0 0 400 56"
      preserveAspectRatio="none"
      className={cn(
        "block h-14 w-full overflow-visible",
        shared ? "text-teal" : "text-ink-muted/65",
      )}
      fill="none"
      aria-hidden="true"
    >
      <path
        d={shared ? "M100 0V56 M300 0V56" : "M200 0V28 M100 56V28H300V56"}
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export function CoalitionModelDiagram({ model }: { model: CoalitionModel }) {
  const shared = model.id === "v3";

  return (
    <div
      role="img"
      aria-label={model.diagramDescription}
      className="flex min-h-64 w-full min-w-0 flex-col justify-center"
    >
      {shared ? (
        <>
          <PartnerPrograms independent />
          <DiagramConnections shared />
          <div className="mx-3 flex min-h-16 items-center justify-center gap-3 border border-teal bg-teal-wash px-4 py-4">
            <Image src="/logo.svg" alt="" width={32} height={19} />
            <span className="text-[14px] leading-[1.5] font-semibold text-ink">
              Shared API layer
            </span>
          </div>
        </>
      ) : (
        <>
          <div className="mx-auto w-full max-w-72 px-3">
            <DiagramNode
              label={model.id === "v1" ? "Third-party operator" : "Lead brand"}
              detail="Owns program, data & rules"
              icon={Building2}
            />
          </div>
          <DiagramConnections shared={false} />
          <PartnerPrograms independent={false} />
        </>
      )}
    </div>
  );
}
