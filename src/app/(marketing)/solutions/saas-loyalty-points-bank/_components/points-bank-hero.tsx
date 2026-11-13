import { MemberStatement } from "./member-statement";

export function PointsBankHero() {
  return (
    <section aria-labelledby="points-bank-title" className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-6 py-13 sm:px-10 lg:py-17">
        <div className="mb-8 grid items-end gap-4 lg:mb-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] lg:gap-12">
          <h1
            id="points-bank-title"
            className="m-0 text-[clamp(40px,6.3vw,80px)] leading-[1.01] tracking-[-0.06em] text-balance"
          >
            Loyalty <em className="text-teal-pale">points bank.</em>
          </h1>
          <p className="m-0 max-w-118 text-[clamp(16px,1.55vw,18px)] leading-[1.65] text-pretty text-teal-wash">
            Record what members earn and spend, and what they have left. Use one
            primary ledger for your loyalty program across your own channels and
            partner transactions.
          </p>
        </div>
        <MemberStatement />
      </div>
    </section>
  );
}
