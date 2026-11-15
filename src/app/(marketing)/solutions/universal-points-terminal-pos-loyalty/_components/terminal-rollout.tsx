import { Arrow } from "@/app/_components/ui/arrow";
import { TextLink } from "@/app/_components/ui/text-link";
import { siteLinks } from "@/lib/site-links";
import { BrandedCaseStudy } from "../../_components/branded-case-study";
import {
  formatPercent,
  issuanceFeeRate,
} from "../../../_content/platform-pricing";
import { airMilesTerminalCase } from "../_content/terminal-content";

export function TerminalRollout() {
  return (
    <section
      aria-labelledby="terminal-rollout-title"
      className="border-y border-line bg-surface-soft"
    >
      <div className="mx-auto max-w-7xl px-6 py-13 sm:px-10 lg:py-17">
        <div className="grid items-center gap-7 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-14">
          <div>
            <h2
              id="terminal-rollout-title"
              className="mt-0 mb-4 max-w-135 text-[clamp(34px,4.3vw,55px)] leading-[1.06] tracking-[-0.06em] text-balance"
            >
              Keep the checkout <em>you already use.</em>
            </h2>
            <p className="m-0 max-w-122 text-[16px] leading-[1.7] text-ink-muted">
              Open the Terminal on your POS or a separate browser-enabled
              device. Currency Alliance connects your loyalty program and
              participating partners, and reports transactions in real time.
            </p>
            <TextLink href={siteLinks.loyaltyVoucherPlatform} className="mt-5">
              Explore vouchers at checkout <Arrow />
            </TextLink>
          </div>
          <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4 border border-line bg-surface p-5 sm:gap-6 sm:p-7">
            <p className="m-0 text-[clamp(42px,5vw,65px)] leading-none font-medium tracking-[-0.06em] text-teal-dark tabular-nums">
              {formatPercent(issuanceFeeRate)}
            </p>
            <div>
              <h3 className="mt-0 mb-1 text-[16px] leading-snug font-extrabold">
                Fee on the value of points issued
              </h3>
              <p className="m-0 text-[15px] leading-relaxed text-ink-muted">
                The Terminal has no upfront app cost.
              </p>
            </div>
          </div>
        </div>
        <BrandedCaseStudy
          titleId="air-miles-terminal-title"
          className="mt-9 lg:mt-11"
          {...airMilesTerminalCase}
        />
      </div>
    </section>
  );
}
