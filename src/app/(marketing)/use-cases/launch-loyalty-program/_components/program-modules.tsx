import { Arrow } from "@/app/_components/ui/arrow";
import { TextLink } from "@/app/_components/ui/text-link";
import { cn } from "@/lib/utils";
import {
  programModuleGroups,
  type ProgramModuleGroup,
} from "../_content/launch-content";

function ModuleGroup({ id, title, start, modules }: ProgramModuleGroup) {
  return (
    <div>
      <h3
        id={id}
        className="m-0 border-b border-line bg-paper-deep px-5 py-3.5 text-sm font-extrabold sm:px-6"
      >
        {title}
      </h3>
      <ol
        role="list"
        start={start}
        aria-labelledby={id}
        className={cn(
          "m-0 grid list-none divide-y divide-line bg-surface p-0",
          "md:auto-cols-fr md:grid-flow-col md:divide-x md:divide-y-0",
        )}
      >
        {modules.map(({ title: moduleTitle, description, action }, index) => (
          <li
            key={moduleTitle}
            className="flex min-w-0 flex-col items-start px-5 py-5 sm:p-6"
          >
            <span
              aria-hidden="true"
              className="mb-2 text-[13px] font-extrabold text-teal-dark tabular-nums"
            >
              {String(start + index).padStart(2, "0")}
            </span>
            <h4 className="mt-0 mb-2 text-[clamp(18px,2vw,24px)] leading-tight font-extrabold tracking-tight">
              {moduleTitle}
            </h4>
            <p className="m-0 max-w-102 text-[15px] leading-relaxed text-ink-muted">
              {description}
            </p>
            {action && (
              <div className="mt-auto pt-4">
                <TextLink
                  href={action.href}
                  className="whitespace-normal [&>.arrow]:shrink-0"
                >
                  {action.label} <Arrow />
                </TextLink>
              </div>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

export function ProgramModules() {
  return (
    <section
      id="program-modules"
      aria-labelledby="program-modules-title"
      className="scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-10 lg:py-16">
        <div className="mb-7 grid gap-4 lg:grid-cols-[minmax(0,1.22fr)_minmax(0,0.78fr)] lg:items-end lg:gap-12">
          <h2
            id="program-modules-title"
            className="m-0 max-w-140 text-[clamp(34px,4.3vw,55px)] leading-[1.06] tracking-[-0.06em] text-balance"
          >
            Five modules behind <em>your program.</em>
          </h2>
          <div>
            <p className="m-0 max-w-120 text-[16px] leading-[1.7] text-ink-muted">
              Start with the rules and ledger for your own points. Then connect
              rewards, customer data, and the tools you use to run campaigns.
            </p>
            <TextLink href="/our-technology#integration" className="mt-3">
              See integration options <Arrow />
            </TextLink>
          </div>
        </div>
        <div className="divide-y divide-line border border-line">
          {programModuleGroups.map((group) => (
            <ModuleGroup key={group.id} {...group} />
          ))}
        </div>
      </div>
    </section>
  );
}
