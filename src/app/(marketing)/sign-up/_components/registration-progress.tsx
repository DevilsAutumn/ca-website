import { cn } from "@/lib/utils";
import { registrationSteps } from "../_content/registration-content";

export function RegistrationProgress({ step }: { step: number }) {
  return (
    <ol
      aria-label="Registration progress"
      className="m-0 grid list-none grid-cols-3 gap-3 p-0"
    >
      {registrationSteps.map((label, index) => (
        <li
          key={label}
          aria-current={step === index ? "step" : undefined}
          className={cn(
            "border-t-2 pt-3 text-sm",
            index <= step
              ? "border-teal text-teal-dark"
              : "border-line text-ink-muted",
          )}
        >
          <span className="mb-1 block text-xs font-semibold tabular-nums">
            0{index + 1}
            {index < step && <span className="sr-only"> completed</span>}
          </span>
          <span className="font-extrabold">{label}</span>
        </li>
      ))}
    </ol>
  );
}
