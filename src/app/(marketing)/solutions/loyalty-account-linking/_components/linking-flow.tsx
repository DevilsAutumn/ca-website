import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { linkingSteps } from "../_content/account-linking-content";

export function LinkingFlow() {
  return (
    <figure className="m-0 min-w-0 border border-line bg-paper px-4 py-5 sm:px-6 sm:py-6">
      <figcaption className="mb-4 border-b border-line pb-3 text-[14px] font-extrabold text-ink">
        How a member links an account
      </figcaption>
      <ol className="m-0 list-none p-0" role="list">
        {linkingSteps.map((step, index) => (
          <li
            key={step.id}
            className="grid grid-cols-[2rem_minmax(0,1fr)] gap-3 sm:gap-4"
          >
            <div aria-hidden="true" className="flex flex-col items-center">
              <span className="grid size-8 shrink-0 place-items-center border border-line bg-surface text-[12px] font-extrabold text-teal-dark tabular-nums">
                0{index + 1}
              </span>
              {index < linkingSteps.length - 1 && (
                <span className="flex min-h-5 flex-1 flex-col items-center text-teal-dark">
                  <span className="w-px flex-1 bg-teal/45" />
                  <ChevronDown size={12} className="-mt-1.5" />
                </span>
              )}
            </div>
            <div
              className={cn(
                "mb-2.5 px-3 py-2.5 sm:px-4",
                step.id === "authenticate" && "bg-teal-wash/55",
                step.id === "confirm" && "mb-0",
              )}
            >
              <p className="mt-0 mb-1 text-[15px] leading-[1.35] font-extrabold">
                {step.environment}
              </p>
              <p className="m-0 text-[14px] leading-[1.55] text-ink-muted">
                {step.action}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </figure>
  );
}
