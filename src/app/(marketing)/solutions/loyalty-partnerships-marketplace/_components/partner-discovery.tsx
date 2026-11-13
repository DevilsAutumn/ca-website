import { discoverySteps } from "../_content/marketplace-content";

export function PartnerDiscovery() {
  return (
    <section
      id="partner-discovery"
      aria-labelledby="partner-discovery-title"
      className="scroll-mt-24 border-y border-line bg-surface-soft"
    >
      <div className="mx-auto grid max-w-7xl gap-9 px-6 py-15 sm:px-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-17 lg:py-22">
        <div>
          <h2
            id="partner-discovery-title"
            className="mt-0 mb-5 max-w-125 text-[clamp(36px,4.5vw,61px)] leading-[1.04] tracking-[-0.06em] text-balance"
          >
            From discovery <em>to launch.</em>
          </h2>
          <p className="m-0 max-w-105 text-[16px] leading-[1.7] text-ink-muted">
            Start with what would make your program more useful to members. Then
            choose the brands and the experience you want to build together.
          </p>
          <aside className="mt-7 max-w-101 border-l-2 border-teal pl-4 lg:mt-9">
            <h3 className="mt-0 mb-1.5 text-[15px] font-extrabold">
              Need a private network?
            </h3>
            <p className="m-0 text-[14px] leading-[1.65] text-ink-muted">
              With a private network, partners issuing your points see your
              brand. Your other partner relationships stay private.
            </p>
          </aside>
        </div>
        <ol
          className="m-0 list-none divide-y divide-line border-y border-line p-0"
          role="list"
        >
          {discoverySteps.map(({ title, description }, index) => (
            <li
              key={title}
              className="grid grid-cols-[1.75rem_minmax(0,1fr)] gap-3 py-5 sm:grid-cols-[2.75rem_minmax(0,1fr)] sm:gap-4 sm:py-6"
            >
              <span
                className="mt-1 text-[13px] font-extrabold text-teal-dark tabular-nums"
                aria-hidden="true"
              >
                0{index + 1}
              </span>
              <div>
                <h3 className="mt-0 mb-2 text-[clamp(20px,2.2vw,27px)] leading-[1.23] font-semibold tracking-[-0.035em]">
                  {title}
                </h3>
                <p className="m-0 max-w-136 text-[15px] leading-[1.68] text-ink-muted">
                  {description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
