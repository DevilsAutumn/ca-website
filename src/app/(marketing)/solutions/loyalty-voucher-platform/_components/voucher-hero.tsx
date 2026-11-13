import { ArrowDown } from "lucide-react";
import { ButtonLink } from "@/app/_components/ui/button";
import { VoucherSpecimen } from "./voucher-specimen";

export function VoucherHero() {
  return (
    <section aria-labelledby="voucher-title" className="bg-ink text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 py-13 sm:px-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14 lg:py-19">
        <div className="min-w-0">
          <h1
            id="voucher-title"
            className="mt-0 mb-5 text-[clamp(44px,6.3vw,84px)] leading-[1.01] tracking-[-0.065em] text-balance"
          >
            Voucher <em className="text-teal-pale">platform.</em>
          </h1>
          <p className="mt-0 mb-6 max-w-111 text-[clamp(16px,1.6vw,19px)] leading-[1.65] text-pretty text-teal-wash">
            Issue and redeem vouchers through one API. Run standalone offers or
            let customers claim vouchers with your own or a partner’s points or
            miles.
          </p>
          <ButtonLink href="#voucher-workflow">
            See how vouchers work <ArrowDown size={15} aria-hidden="true" />
          </ButtonLink>
        </div>
        <VoucherSpecimen />
      </div>
    </section>
  );
}
