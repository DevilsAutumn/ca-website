import { Arrow } from "@/app/_components/ui/arrow";
import { TextLink } from "@/app/_components/ui/text-link";
import { cn } from "@/lib/utils";
import { retailProgramOptions } from "../_content/retail-content";

export function RetailProgram() {
  return (
    <section
      id="retail-program"
      aria-labelledby="retail-program-title"
      className="scroll-mt-24 border-y border-line bg-surface-soft"
    >
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-10 lg:py-16">
        <h2
          id="retail-program-title"
          className="mt-0 mb-7 text-[clamp(34px,4.3vw,55px)] leading-[1.06] tracking-[-0.06em] text-balance"
        >
          Connect or launch <em>a loyalty program.</em>
        </h2>
        <div
          className={cn(
            "grid divide-y divide-line border border-line bg-surface",
            "md:grid-cols-2 md:divide-x md:divide-y-0",
          )}
        >
          {retailProgramOptions.map(({ title, description, action }) => (
            <div
              key={title}
              className="flex min-w-0 flex-col items-start p-5 sm:p-6 lg:p-8"
            >
              <h3 className="mt-0 mb-2 text-[clamp(20px,2.3vw,29px)] leading-tight font-extrabold tracking-tight">
                {title}
              </h3>
              <p className="mt-0 mb-4 max-w-110 text-[15px] leading-relaxed text-ink-muted">
                {description}
              </p>
              <TextLink
                href={action.href}
                className="mt-auto whitespace-normal [&>.arrow]:shrink-0"
              >
                {action.label} <Arrow />
              </TextLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
