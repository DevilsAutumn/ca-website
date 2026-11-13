import { Braces, FileSpreadsheet, ListChecks, Monitor } from "lucide-react";
import { reportingMethods } from "../_content/management-content";

const methodIcons = {
  API: Braces,
  "Batch files": FileSpreadsheet,
  Portal: Monitor,
};

export function ReportingFlow() {
  return (
    <figure className="m-0">
      <figcaption className="sr-only">
        API submissions, batch files, and manual portal entries feed the same
        view of partner transactions.
      </figcaption>
      <dl className="m-0 grid grid-cols-3 divide-x divide-line border border-line bg-surface">
        {reportingMethods.map(({ label, description }) => {
          const Icon = methodIcons[label];

          return (
            <div
              key={label}
              className="px-1.5 py-3.5 text-center sm:px-4 sm:py-5"
            >
              <dt className="grid justify-items-center gap-2 text-[14px] leading-tight font-extrabold text-ink sm:text-[16px]">
                <Icon
                  size={20}
                  strokeWidth={1.5}
                  className="text-teal-dark"
                  aria-hidden="true"
                />
                {label}
              </dt>
              <dd className="mx-auto mt-1.5 mb-0 max-w-37 text-[13px] leading-[1.4] text-balance text-ink-muted">
                {description}
              </dd>
            </div>
          );
        })}
      </dl>
      <div aria-hidden="true" className="relative h-12 text-teal sm:h-16">
        <svg
          className="absolute inset-0 size-full"
          viewBox="0 0 120 60"
          preserveAspectRatio="none"
          fill="none"
          focusable="false"
        >
          <path
            d="M20 0 V8 C20 32 60 19 60 44 M60 0 V60 M100 0 V8 C100 32 60 19 60 44"
            stroke="currentColor"
            strokeWidth={1.25}
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        <span className="absolute bottom-px left-1/2 size-2 -translate-x-1/2 rotate-45 border-r border-b border-current" />
      </div>
      <div className="mx-auto flex w-fit max-w-full items-center gap-3 border border-ink bg-ink px-4 py-3.5 text-white sm:px-6 sm:py-4">
        <ListChecks
          size={22}
          strokeWidth={1.5}
          className="shrink-0 text-teal-pale"
          aria-hidden="true"
        />
        <div>
          <p className="m-0 text-[15px] leading-tight font-extrabold">
            Transaction reporting
          </p>
          <p className="mt-1 mb-0 text-[13px] leading-[1.4] text-teal-wash">
            Management portal
          </p>
        </div>
      </div>
    </figure>
  );
}
