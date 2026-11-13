import { Arrow } from "@/app/_components/ui/arrow";
import { TextLink } from "@/app/_components/ui/text-link";
import { cn } from "@/lib/utils";
import { voucherStages } from "../_content/voucher-content";

export function VoucherWorkflow() {
  return (
    <section
      id="voucher-workflow"
      aria-labelledby="voucher-workflow-title"
      className="mx-auto max-w-7xl scroll-mt-24 px-6 py-13 sm:px-10 lg:py-17"
    >
      <h2
        id="voucher-workflow-title"
        className="mt-0 mb-7 text-[clamp(34px,4.3vw,55px)] leading-[1.06] tracking-[-0.06em] text-balance"
      >
        From offer to <em>redemption.</em>
      </h2>
      <ol role="list" className="m-0 grid list-none p-0 md:grid-cols-3">
        {voucherStages.map(({ title, description, action }, index) => (
          <li
            key={title}
            className={cn(
              "relative grid grid-cols-[2rem_minmax(0,1fr)] items-start gap-4 pb-7 last:pb-0",
              "before:absolute before:inset-y-0 before:left-4 before:w-px before:bg-line last:before:hidden",
              "md:block md:pr-8 md:pb-0 md:last:pr-0 md:before:inset-x-0 md:before:top-4 md:before:bottom-auto md:before:h-px md:before:w-auto lg:pr-12",
            )}
          >
            <span
              aria-hidden="true"
              className="relative grid size-8 place-items-center border border-line bg-surface text-[13px] font-extrabold text-teal-dark tabular-nums"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="min-w-0 pt-1 md:mt-4 md:pt-0">
              <h3 className="mt-0 mb-2 text-[20px] leading-tight font-extrabold tracking-tight">
                {title}
              </h3>
              <p className="m-0 max-w-91 text-[15px] leading-relaxed text-ink-muted">
                {description}
              </p>
              {action && (
                <TextLink
                  href={action.href}
                  className="mt-3 whitespace-normal [&>.arrow]:shrink-0"
                >
                  {action.label} <Arrow />
                </TextLink>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
