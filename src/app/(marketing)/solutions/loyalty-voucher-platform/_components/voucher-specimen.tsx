import { Ticket } from "lucide-react";
import { voucherExample } from "../_content/voucher-content";

export function VoucherSpecimen() {
  return (
    <figure className="m-0 grid w-full min-w-0 max-w-156 overflow-hidden bg-surface text-ink min-[520px]:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:max-w-none">
      <figcaption className="flex min-w-0 flex-col justify-between gap-4 bg-teal-wash p-5 min-[520px]:gap-8 sm:p-7">
        <div className="flex items-center justify-between gap-3 text-teal-dark">
          <span className="text-sm font-extrabold">Example voucher</span>
          <Ticket size={22} strokeWidth={1.5} aria-hidden="true" />
        </div>
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 min-[520px]:block">
          <span className="block text-[clamp(54px,6.7vw,90px)] leading-none font-medium tracking-[-0.075em] text-teal-dark tabular-nums">
            {voucherExample.amount}
          </span>
          <span className="block text-base font-extrabold min-[520px]:mt-2">
            {voucherExample.name}
          </span>
        </div>
      </figcaption>
      <div className="relative grid items-center border-t border-dashed border-teal-dark/40 p-5 min-[520px]:border-t-0 min-[520px]:border-l sm:p-7">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-1.5 -left-1.5 size-3 rounded-full bg-ink"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-1.5 -right-1.5 size-3 rounded-full bg-ink min-[520px]:top-auto min-[520px]:right-auto min-[520px]:-bottom-1.5 min-[520px]:-left-1.5"
        />
        <dl className="m-0 grid gap-3 min-[520px]:gap-4">
          {voucherExample.terms.map(({ label, value }) => (
            <div
              key={label}
              className="grid grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] items-baseline gap-x-3 min-[520px]:grid-cols-1 min-[520px]:gap-y-0.5"
            >
              <dt className="text-sm font-semibold text-ink-muted">{label}</dt>
              <dd className="m-0 text-[15px] font-extrabold">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </figure>
  );
}
