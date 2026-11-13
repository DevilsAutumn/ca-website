import { cn } from "@/lib/utils";
import {
  ArrowRightLeft,
  FileCheck2,
  ReceiptText,
  SlidersHorizontal,
} from "lucide-react";
const lifecycleSteps = [
  {
    title: "Agree the terms",
    description: "Contracts and commercial agreements.",
    icon: FileCheck2,
  },
  {
    title: "Set the rules",
    description: "Points, pricing, and partner permissions.",
    icon: SlidersHorizontal,
  },
  {
    title: "Connect the experience",
    description: "Enable earning, exchange, and redemption.",
    icon: ArrowRightLeft,
  },
  {
    title: "Reconcile and settle",
    description: "Invoicing, payments, and shared reporting.",
    icon: ReceiptText,
  },
];
export function PartnerLifecycle() {
  return (
    <div
      className={cn(
        "[grid-area:workflow] rounded-[6px] bg-ink text-white p-8 [&_h3]:mt-0 [&_h3]:mb-8 [&_h3]:text-[25px]",
        "[&_h3]:font-medium [&_h3]:tracking-[-0.04em] [&_h3]:leading-[1.2] [&_h3]:mx-0 max-[541px]:py-6",
        "max-[541px]:px-5 max-[541px]:[&_h3]:text-[23px]",
      )}
      aria-labelledby="lifecycle-title"
    >
      <h3 id="lifecycle-title">From agreement to settlement.</h3>
      <ol className="grid list-none m-0 p-0 gap-6">
        {lifecycleSteps.map(({ title, description, icon: Icon }) => (
          <li
            className={cn(
              "relative grid grid-cols-[40px_minmax(0,1fr)] items-start gap-4.5 [&:not(:last-child)::before]:absolute",
              "[&:not(:last-child)::before]:top-10 [&:not(:last-child)::before]:bottom-[-24px]",
              "[&:not(:last-child)::before]:left-4.875 [&:not(:last-child)::before]:w-px",
              "[&:not(:last-child)::before]:bg-line-dark [&:not(:last-child)::before]:content-[''] [&_h4]:mt-0",
              "[&_h4]:mb-1.5 [&_h4]:text-[17px] [&_h4]:font-semibold [&_h4]:tracking-[-0.025em] [&_h4]:leading-[1.3]",
              "[&_h4]:mx-0 [&_p]:text-dark-muted [&_p]:text-[14px] [&_p]:leading-[1.5] [&_p]:m-0 max-[541px]:gap-3.5",
            )}
            key={title}
          >
            <span
              className="grid w-10 h-10 place-items-center rounded-[4px] text-teal-pale border border-solid border-line-dark"
              aria-hidden="true"
            >
              <Icon size={20} strokeWidth={1.5} />
            </span>
            <div>
              <h4>{title}</h4>
              <p>{description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
