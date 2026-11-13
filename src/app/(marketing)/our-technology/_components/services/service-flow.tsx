import { cn } from "@/lib/utils";
import type { LoyaltyService } from "../../_content/technology-content";
export function ServiceFlow({ service }: { service: LoyaltyService }) {
  return (
    <figure
      className={cn(
        "w-full rounded-[4px] bg-paper m-0 border border-solid border-line [&_figcaption]:border-t",
        "[&_figcaption]:border-t-line [&_figcaption]:text-ink-muted [&_figcaption]:text-[12px]",
        "[&_figcaption]:leading-[1.6] [&_figcaption]:m-0 [&_figcaption]:py-4 [&_figcaption]:px-6",
      )}
    >
      <div
        className={cn(
          "flex items-center justify-between border-b border-b-line text-ink-muted text-[12px] py-4 px-6 gap-4",
          "[&_span:first-child]:text-ink [&_span:first-child]:font-[750]",
        )}
      >
        <span>{service.label}</span>
        <span>How it works</span>
      </div>
      <ol
        className={cn(
          "grid list-none m-0 py-7 px-8 gap-6 [&_li]:relative [&_li]:flex [&_li]:min-w-0 [&_li]:items-center",
          "[&_li]:gap-4.5 [&_li_+_li::before]:absolute [&_li_+_li::before]:bottom-full [&_li_+_li::before]:left-5.75",
          "[&_li_+_li::before]:h-6 [&_li_+_li::before]:border-l [&_li_+_li::before]:border-l-teal",
          "[&_li_+_li::before]:content-[''] [&_li_+_li::after]:absolute [&_li_+_li::after]:bottom-[calc(100%_+_3px)]",
          "[&_li_+_li::after]:left-5 [&_li_+_li::after]:w-1.75 [&_li_+_li::after]:h-1.75 [&_li_+_li::after]:border-r",
          "[&_li_+_li::after]:border-r-teal [&_li_+_li::after]:border-b [&_li_+_li::after]:border-b-teal",
          "[&_li_+_li::after]:transform-[rotate(45deg)] [&_li_+_li::after]:content-[''] [&_strong]:block",
          "[&_strong]:text-[15px] [&_strong]:font-[650] [&_strong]:leading-[1.4] [&_li_span]:block [&_li_span]:mt-1",
          "[&_li_span]:text-ink-muted [&_li_span]:text-[13px] [&_li_span]:leading-[1.5] max-[1001px]:py-7",
          "max-[1001px]:px-6 max-[601px]:p-6",
        )}
      >
        {service.flow.map(({ label, detail, icon: Icon }, index) => (
          <li key={label}>
            <div
              className={cn(
                "grid w-12 h-12 shrink-0 place-items-center rounded-[3px] bg-surface text-ink-soft border border-solid",
                "border-line",
                index === 1 && "border-teal bg-teal-wash text-teal-dark",
              )}
            >
              <Icon size={22} strokeWidth={1.4} aria-hidden="true" />
            </div>
            <div>
              <strong>{label}</strong>
              <span>{detail}</span>
            </div>
          </li>
        ))}
      </ol>
      <figcaption>{service.flowCaption}</figcaption>
    </figure>
  );
}
