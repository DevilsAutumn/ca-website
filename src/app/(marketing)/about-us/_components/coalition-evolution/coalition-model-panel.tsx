import { cn } from "@/lib/utils";
import type { CoalitionModel } from "../../_content/coalition-models";
import { CoalitionModelDiagram } from "./coalition-model-diagram";

export function CoalitionModelPanel({ model }: { model: CoalitionModel }) {
  return (
    <div
      className={cn(
        "grid min-h-100 grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-center gap-14 bg-paper p-10 text-ink",
        "max-[1051px]:gap-8 max-[1051px]:p-8",
        "max-[801px]:min-h-0 max-[801px]:grid-cols-1 max-[801px]:p-6",
      )}
    >
      <div>
        <h3 className="mb-5 max-w-110 text-[clamp(28px,2.8vw,38px)] leading-[1.15] font-medium tracking-[-0.05em]">
          {model.title}
        </h3>
        <p className="mb-7 max-w-110 text-[15px] leading-[1.75] text-ink-muted">
          {model.description}
        </p>
        <div className="max-w-110 border-l-2 border-teal pl-4">
          <p className="mb-2 text-[14px] leading-[1.5] font-semibold text-ink">
            {model.changeLabel}
          </p>
          <p className="mb-0 text-[15px] leading-[1.75] text-ink-muted">
            {model.change}
          </p>
        </div>
      </div>
      <CoalitionModelDiagram model={model} />
    </div>
  );
}
