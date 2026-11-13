import { Arrow } from "@/app/_components/ui/arrow";
import { TextLink } from "@/app/_components/ui/text-link";
import {
  formatPercent,
  platformFeeRate,
} from "../../../solutions/_content/platform-pricing";
import { launchGuides } from "../_content/launch-content";

const platformFee = formatPercent(platformFeeRate);

export function LaunchPlanning() {
  return (
    <section
      aria-labelledby="launch-planning-title"
      className="border-b border-line"
    >
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-10 lg:py-16">
        <h2
          id="launch-planning-title"
          className="mt-0 mb-4 text-[clamp(34px,4.3vw,55px)] leading-[1.06] tracking-[-0.06em] text-balance"
        >
          Budget for <em>your launch.</em>
        </h2>
        <p className="m-0 max-w-136 text-[16px] leading-[1.7] text-ink-muted">
          Plan for rewards and day-to-day operations alongside the platform fee.
          The systems and channels you connect will shape the rollout.
        </p>
        <div className="mt-6 grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4 border border-line bg-surface p-5 sm:gap-6 sm:p-7">
            <p className="m-0 text-[clamp(42px,5vw,65px)] leading-none font-medium tracking-[-0.06em] text-teal-dark tabular-nums">
              {platformFee}
            </p>
            <div>
              <h3 className="mt-0 mb-1 text-[16px] leading-snug font-extrabold">
                Platform fee on loyalty value issued
              </h3>
              <p className="m-0 text-[15px] leading-relaxed text-ink-muted">
                No upfront platform setup or licence fees.
              </p>
            </div>
          </div>
          <div className="border-y border-line py-4">
            <h3 className="mt-0 mb-2 text-[16px] font-extrabold">
              Planning guides
            </h3>
            <ul role="list" className="m-0 grid list-none gap-3 p-0">
              {launchGuides.map(({ label, href }) => (
                <li key={href}>
                  <TextLink
                    href={href}
                    className="whitespace-normal [&>.arrow]:shrink-0"
                  >
                    {label} <Arrow />
                  </TextLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
