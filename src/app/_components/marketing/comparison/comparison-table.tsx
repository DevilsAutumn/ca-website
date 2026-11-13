import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

export type ComparisonRow = {
  criterion: string;
  alternatives: readonly [string, string];
  alliance: string;
};

type ComparisonTableProps = {
  caption: string;
  criterionHeading?: string;
  alternativeLabels: readonly [string, string];
  rows: readonly ComparisonRow[];
};

const allianceCellClassName = cn(
  "[.comparison-table_&]:bg-[color-mix(in_srgb,var(--teal-wash)_30%,var(--surface))]",
  "[.comparison-table_&]:text-teal-dark [.comparison-table_&]:font-semibold",
);

export function ComparisonTable({
  caption,
  criterionHeading = "Capability",
  alternativeLabels,
  rows,
}: ComparisonTableProps) {
  return (
    <>
      <div className="flex flex-1 max-[801px]:hidden">
        <table
          className={cn(
            "comparison-table w-full h-full border-collapse table-fixed border-t border-t-line [&_th]:border-b",
            "[&_th]:border-b-line [&_th]:text-left [&_th]:align-middle [&_th]:break-words [&_th]:py-5 [&_th]:px-4",
            "[&_td]:border-b [&_td]:border-b-line [&_td]:text-left [&_td]:align-middle [&_td]:break-words",
            "[&_td]:text-ink-muted [&_td]:text-[14px] [&_td]:leading-[1.5] [&_td]:py-5 [&_td]:px-4",
            "[&_thead_th]:text-ink-muted [&_thead_th]:text-[12px] [&_thead_th]:font-bold [&_thead_th]:leading-[1.5]",
            "[&_th:first-child]:w-[23%] [&_th:first-child]:pl-0 [&_tbody_th]:text-ink [&_tbody_th]:text-[14px]",
            "[&_tbody_th]:font-[650] [&_tbody_th]:leading-[1.5]",
          )}
        >
          <caption className="sr-only">{caption}</caption>
          <thead>
            <tr>
              <th scope="col">{criterionHeading}</th>
              {alternativeLabels.map((label) => (
                <th key={label} scope="col">
                  {label}
                </th>
              ))}
              <th scope="col" className={allianceCellClassName}>
                Currency Alliance
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.criterion}>
                <th scope="row">{row.criterion}</th>
                {alternativeLabels.map((label, index) => (
                  <td key={label}>{row.alternatives[index]}</td>
                ))}
                <td className={allianceCellClassName}>{row.alliance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="hidden max-[801px]:block">
        <p
          className={cn(
            "max-[801px]:bg-teal-wash max-[801px]:text-teal-dark max-[801px]:text-[14px] max-[801px]:font-bold",
            "max-[801px]:m-0 max-[801px]:py-4 max-[801px]:px-5 max-[801px]:border max-[801px]:border-solid",
            "max-[801px]:border-line",
          )}
        >
          With Currency Alliance
        </p>
        <ul
          role="list"
          className={cn(
            "max-[801px]:border-r max-[801px]:border-b max-[801px]:border-l max-[801px]:border-t-0 max-[801px]:list-none",
            "max-[801px]:m-0 max-[801px]:p-0 max-[801px]:border-line",
          )}
        >
          {rows.map((row) => (
            <li
              key={row.criterion}
              className={cn(
                "comparison-mobile-row max-[801px]:py-4 max-[801px]:px-5",
                "max-[801px]:[.comparison-mobile-row_+_&]:border-t",
                "max-[801px]:[.comparison-mobile-row_+_&]:border-t-line max-[801px]:[&_h3]:mt-0 max-[801px]:[&_h3]:mb-1.5",
                "max-[801px]:[&_h3]:text-ink-muted max-[801px]:[&_h3]:text-[14px] max-[801px]:[&_h3]:font-medium",
                "max-[801px]:[&_h3]:leading-[1.4] max-[801px]:[&_h3]:mx-0",
              )}
            >
              <h3>{row.criterion}</h3>
              <p
                className={cn(
                  "max-[801px]:text-teal-dark max-[801px]:text-[18px] max-[801px]:font-semibold max-[801px]:tracking-[-0.025em]",
                  "max-[801px]:leading-[1.4] max-[801px]:m-0",
                )}
              >
                {row.alliance}
              </p>
              <details
                className={cn(
                  "max-[801px]:mt-2.5 max-[801px]:[&_summary]:flex max-[801px]:[&_summary]:min-h-7",
                  "max-[801px]:[&_summary]:items-center max-[801px]:[&_summary]:justify-between",
                  "max-[801px]:[&_summary]:text-ink-muted max-[801px]:[&_summary]:text-[13px]",
                  "max-[801px]:[&_summary]:leading-[1.4] max-[801px]:[&_summary]:list-none",
                  "max-[801px]:[&_summary]:cursor-pointer max-[801px]:[&_summary]:gap-3",
                  "max-[801px]:[&_summary::-webkit-details-marker]:hidden max-[801px]:[&_summary:hover]:text-teal-dark",
                  "max-[801px]:[&_summary:focus-visible]:outline-2 max-[801px]:[&_summary:focus-visible]:outline-solid",
                  "max-[801px]:[&_summary:focus-visible]:outline-teal",
                  "max-[801px]:[&_summary:focus-visible]:outline-offset-[4px]",
                  "max-[801px]:[&[open]_summary_svg]:transform-[rotate(180deg)] max-[801px]:[&_dl]:grid max-[801px]:[&_dl]:mt-4",
                  "max-[801px]:[&_dl]:mb-0 max-[801px]:[&_dl]:pt-4 max-[801px]:[&_dl]:border-t max-[801px]:[&_dl]:border-t-line",
                  "max-[801px]:[&_dl]:text-[14px] max-[801px]:[&_dl]:leading-[1.5] max-[801px]:[&_dl]:mx-0",
                  "max-[801px]:[&_dl]:gap-3.5 max-[801px]:[&_dt]:text-ink-muted max-[801px]:[&_dd]:mt-1 max-[801px]:[&_dd]:mb-0",
                  "max-[801px]:[&_dd]:text-ink max-[801px]:[&_dd]:mx-0",
                )}
              >
                <summary
                  aria-label={`Compare alternatives for ${row.criterion}`}
                >
                  Compare alternatives
                  <ChevronDown size={16} aria-hidden="true" />
                </summary>
                <dl>
                  {alternativeLabels.map((label, index) => (
                    <div key={label}>
                      <dt>{label}</dt>
                      <dd>{row.alternatives[index]}</dd>
                    </div>
                  ))}
                </dl>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
