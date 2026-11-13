import { memberStatement } from "../_content/bank-content";

const points = new Intl.NumberFormat("en-US");
const signedPoints = new Intl.NumberFormat("en-US", { signDisplay: "always" });

export function MemberStatement() {
  return (
    <figure className="m-0 border border-line-dark bg-surface text-ink">
      <figcaption className="border-b border-line px-4 py-3.5 text-sm font-extrabold sm:px-7">
        Example member statement
      </figcaption>
      <div className="grid md:grid-cols-[minmax(0,1.8fr)_minmax(0,0.9fr)]">
        <div className="min-w-0 px-4 py-2 sm:px-7">
          <table className="w-full border-collapse text-[13px] leading-[1.4] sm:text-[15px]">
            <caption className="sr-only">
              Transaction history and running balance in points
            </caption>
            <thead className="border-b border-line text-ink-muted">
              <tr>
                <th scope="col" className="py-3 pr-2 text-left font-bold">
                  Activity
                </th>
                <th scope="col" className="px-1 py-3 text-right font-bold">
                  Change
                </th>
                <th scope="col" className="py-3 pl-2 text-right font-bold">
                  Balance
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {memberStatement.entries.map(({ label, change, balance }) => (
                <tr key={label}>
                  <th scope="row" className="py-3 pr-2 text-left font-semibold">
                    {label}
                  </th>
                  <td className="px-1 py-3 text-right text-ink-muted tabular-nums">
                    {change === null ? "—" : signedPoints.format(change)}
                  </td>
                  <td className="py-3 pl-2 text-right font-extrabold tabular-nums">
                    {points.format(balance)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <dl className="m-0 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-2 border-t border-line bg-teal-wash px-4 py-4 sm:px-7 md:flex-col md:items-start md:justify-center md:border-t-0 md:border-l md:p-8">
          <dt className="text-sm font-extrabold text-teal-dark">
            Closing balance
          </dt>
          <dd className="m-0 text-[clamp(32px,5.2vw,68px)] leading-none font-medium tracking-[-0.065em] whitespace-nowrap text-teal-dark tabular-nums">
            {points.format(memberStatement.closingBalance)}{" "}
            <span className="text-sm font-bold tracking-normal sm:text-base">
              points
            </span>
          </dd>
        </dl>
      </div>
    </figure>
  );
}
