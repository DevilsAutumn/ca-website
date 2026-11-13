import { cn } from "@/lib/utils";
import { platformHighlights } from "./home-data";

export function SignalStrip() {
  return (
    <section
      className={cn(
        "signal-strip border-t-3 border-t-teal border-b border-b-line-dark bg-ink text-white py-0",
        "px-[max(40px,calc((100%_-_1200px)_/_2))] max-[901px]:px-6 max-[541px]:px-4.5",
      )}
      aria-label="Platform highlights"
    >
      <div
        className={cn(
          "signal-strip-inner grid grid-cols-[minmax(150px,0.78fr)_repeat(4,minmax(0,1fr))] max-w-300 min-h-32.5 m-auto",
          "max-[901px]:grid-cols-2 max-[901px]:min-h-0",
        )}
      >
        <div
          className={cn(
            "signal-strip-intro flex flex-col justify-center min-w-0 border-r border-r-line-dark pl-0 pr-7 py-6.25",
            "max-[901px]:col-span-full max-[901px]:min-h-17 max-[901px]:border-r-0 max-[901px]:border-b",
            "max-[901px]:border-b-line-dark max-[901px]:py-5 max-[901px]:px-0 max-[541px]:min-h-15.5",
          )}
        >
          <span className="text-teal-pale text-[12px] font-extrabold tracking-[0.14em] leading-[1.4] uppercase">
            Platform at a glance
          </span>
        </div>
        {platformHighlights.map((highlight) => (
          <div
            key={highlight.label}
            className={cn(
              "signal-strip-metric flex flex-col justify-center min-w-0 border-r border-r-line-dark py-6.25 px-6",
              "last:border-r-0 max-[901px]:min-h-25.5 max-[901px]:py-5 max-[901px]:px-3.5",
              "max-[901px]:odd:border-r-0 max-[901px]:[&:nth-child(n+4)]:border-t",
              "max-[901px]:[&:nth-child(n+4)]:border-t-line-dark max-[541px]:min-h-27",
              "max-[541px]:items-start max-[541px]:py-4.5 max-[541px]:px-3 max-[541px]:gap-2",
            )}
          >
            <strong className="text-teal-pale text-[30px] tracking-[-0.08em] font-medium leading-[1] max-[541px]:text-[23px]">
              {highlight.value}
            </strong>
            <span className="text-dark-muted text-[14px] leading-[1.45] max-[541px]:text-[13px]">
              {highlight.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
