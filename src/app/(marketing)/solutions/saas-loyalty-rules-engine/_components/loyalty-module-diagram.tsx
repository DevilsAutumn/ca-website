import { cn } from "@/lib/utils";
import { loyaltyModules } from "../_content/rules-content";

const size = 352;
const center = size / 2;
const radius = 132;
const labelPositions = {
  "points-bank":
    "lg:col-start-1 lg:row-start-1 lg:justify-self-end lg:translate-x-12 lg:text-right",
  "rules-engine":
    "lg:col-start-3 lg:row-start-1 lg:justify-self-start lg:-translate-x-12",
  "crm-analytics":
    "lg:col-start-3 lg:row-start-2 lg:self-start lg:justify-self-start lg:pt-8",
  "campaign-management":
    "lg:col-start-2 lg:row-start-3 lg:w-full lg:max-w-none lg:pt-13 lg:text-center",
  "redemption-catalog":
    "lg:col-start-1 lg:row-start-2 lg:self-start lg:justify-self-end lg:pt-8 lg:text-right",
} satisfies Record<(typeof loyaltyModules)[number]["id"], string>;

const diagramModules = loyaltyModules.map((module, index) => {
  // Start at the upper left and space the five nodes clockwise.
  const angle =
    (-126 + (index * 360) / loyaltyModules.length) * (Math.PI / 180);

  return {
    ...module,
    number: String(index + 1).padStart(2, "0"),
    x: (center + radius * Math.cos(angle)).toFixed(2),
    y: (center + radius * Math.sin(angle)).toFixed(2),
  };
});

export function LoyaltyModuleDiagram() {
  return (
    <figure className="relative mx-auto grid max-w-275 gap-4 md:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] md:items-center md:gap-7 lg:block">
      <figcaption className="sr-only">
        Five modules of a loyalty system arranged in a circle.
      </figcaption>
      <div
        aria-hidden="true"
        className="relative mx-auto aspect-square w-full max-w-60 sm:max-w-66 lg:absolute lg:top-0 lg:left-1/2 lg:w-88 lg:max-w-none lg:-translate-x-1/2"
      >
        <svg viewBox={`0 0 ${size} ${size}`} className="block h-full w-full">
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            strokeWidth={1.25}
            className="stroke-teal-dark/45"
          />
          {diagramModules.map(({ id, number, x, y, icon: Icon }) => (
            <g key={id} transform={`translate(${x} ${y})`}>
              <circle
                r={26}
                strokeWidth={1.25}
                className="fill-surface stroke-teal-dark/45"
              />
              <Icon
                x={-13}
                y={-13}
                size={26}
                strokeWidth={1.5}
                className="hidden text-teal-dark lg:block"
              />
              <text
                textAnchor="middle"
                dominantBaseline="central"
                className="fill-teal-dark text-[22px] font-extrabold tabular-nums lg:hidden"
              >
                {number}
              </text>
            </g>
          ))}
        </svg>
        <p className="absolute inset-0 m-0 grid place-content-center text-center text-[24px] leading-[1.04] font-medium tracking-[-0.06em] lg:text-[34px]">
          The loyalty <span className="text-teal-dark">system</span>
        </p>
      </div>
      <ol
        role="list"
        className="m-0 list-none divide-y divide-line border-y border-line p-0 lg:grid lg:grid-cols-[minmax(0,1fr)_20rem_minmax(0,1fr)] lg:grid-rows-[8.5rem_10.125rem_auto] lg:gap-x-5 lg:divide-y-0 lg:border-0"
      >
        {diagramModules.map(({ id, name, description, number }) => (
          <li
            key={id}
            className={cn(
              "grid grid-cols-[2.25rem_minmax(0,1fr)] items-start gap-3 py-4",
              "lg:block lg:w-full lg:max-w-64 lg:self-center lg:py-0",
              labelPositions[id],
            )}
          >
            <span
              aria-hidden="true"
              className="grid size-8 place-items-center rounded-full border border-line bg-surface text-[13px] font-extrabold text-teal-dark tabular-nums lg:hidden"
            >
              {number}
            </span>
            <div>
              <h3 className="mt-0 mb-1.5 text-[18px] leading-snug font-extrabold tracking-tight">
                {name}
              </h3>
              <p className="m-0 text-[15px] leading-relaxed text-ink-muted">
                {description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </figure>
  );
}
