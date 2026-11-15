import {
  formatEuros,
  formatPercent,
  issuanceFeeRate,
} from "../../_content/platform-pricing";

const issuedValue = 5_000;

export function FeeExample() {
  return (
    <figure className="m-0 bg-ink p-6 text-white sm:p-8">
      <figcaption className="mb-4 text-base font-extrabold text-teal-pale">
        Example issuance fee
      </figcaption>
      <dl className="m-0 tabular-nums">
        <div className="flex items-baseline justify-between gap-4 border-b border-line-dark py-3">
          <dt className="text-sm text-white/80">Value of points issued</dt>
          <dd className="m-0 text-lg font-bold">{formatEuros(issuedValue)}</dd>
        </div>
        <div className="flex items-baseline justify-between gap-4 border-b border-line-dark py-3">
          <dt className="text-sm text-white/80">Issuance rate</dt>
          <dd className="m-0 text-lg font-bold">
            {formatPercent(issuanceFeeRate)}
          </dd>
        </div>
        <div className="flex items-baseline justify-between gap-4 pt-4">
          <dt className="font-bold">Issuance fee</dt>
          <dd className="m-0 text-4xl leading-none font-medium tracking-tight text-teal-pale">
            {formatEuros(issuedValue * issuanceFeeRate)}
          </dd>
        </div>
      </dl>
    </figure>
  );
}
