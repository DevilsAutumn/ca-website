import { linkedExperiences } from "../_content/account-linking-content";

export function LinkedExperiences() {
  return (
    <section
      id="linked-experiences"
      aria-labelledby="linked-experiences-title"
      className="scroll-mt-24 border-y border-line bg-surface-soft"
    >
      <div className="mx-auto grid max-w-7xl gap-7 px-6 py-13 sm:px-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-center lg:gap-14 lg:py-17">
        <div>
          <h2
            id="linked-experiences-title"
            className="mt-0 mb-4 text-[clamp(34px,4.3vw,55px)] leading-[1.06] tracking-[-0.06em] text-balance"
          >
            What a link <em>makes possible.</em>
          </h2>
          <p className="m-0 max-w-108 text-[16px] leading-[1.65] text-ink-muted">
            The partnership agreement determines which actions members can take
            after linking their accounts.
          </p>
        </div>
        <dl className="m-0 grid divide-y divide-line border-y border-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {linkedExperiences.map(({ title, description }) => (
            <div
              key={title}
              className="py-4 sm:px-4 sm:py-5 sm:first:pl-0 sm:last:pr-0"
            >
              <dt className="mb-2 text-[18px] leading-tight font-extrabold text-teal-dark">
                {title}
              </dt>
              <dd className="m-0 text-[15px] leading-[1.6] text-ink-muted">
                {description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
