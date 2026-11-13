import { TextLink } from "@/app/_components/ui/text-link";
import { cn } from "@/lib/utils";
import { Arrow } from "@/app/_components/ui/arrow";
import { apiFacts, API_DOCUMENTATION } from "../_content/technology-content";
import { ApiCodeExample } from "./api-code-example";
export function ApiSection() {
  return (
    <section
      className="bg-ink text-white scroll-mt-0"
      id="integration"
      aria-labelledby="api-title"
    >
      <div
        className={cn(
          "grid max-w-7xl grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] items-center pt-22 pb-16 m-auto px-10 gap-16",
          "max-[1001px]:gap-10 max-[801px]:grid-cols-1 max-[801px]:py-16 max-[801px]:px-6 max-[801px]:gap-10",
        )}
      >
        <div
          className={cn(
            "[&_h2]:mb-6 [&_h2]:text-[clamp(38px,4.5vw,58px)] [&_h2]:tracking-[-0.06em]",
            "[&_h2]:leading-[1.07] [&_h2_em]:text-teal-pale max-[801px]:max-w-135",
          )}
        >
          <p className="mb-6 text-teal-pale text-[12px] font-[750] tracking-[0.12em] uppercase">
            Built for your developers
          </p>
          <h2 id="api-title">
            A familiar API.
            <br />
            <em>A secure connection.</em>
          </h2>
          <p className="max-w-95 mb-7.5 text-teal-wash text-[16px] leading-[1.7] max-[801px]:max-w-110">
            Clear interfaces for your engineers. Consistent loyalty experiences
            for your members.
          </p>
          <TextLink
            href={API_DOCUMENTATION}
            tone="light"
            className="border-dark-muted whitespace-normal focus-visible:outline-teal-pale"
          >
            Read the API documentation <Arrow />
          </TextLink>
        </div>
        <ApiCodeExample />
        <dl
          className={cn(
            "grid col-span-full grid-cols-4 pt-8 border-t border-t-line-dark m-0 gap-0 [&_>_div]:border-l",
            "[&_>_div]:border-l-line-dark [&_>_div]:py-0 [&_>_div]:px-6 [&_>_div:first-child]:pl-0",
            "[&_>_div:first-child]:border-l-0 [&_>_div:last-child]:pr-0 [&_dt]:mb-3 [&_dt]:text-white [&_dt]:text-[15px]",
            "[&_dt]:font-[650] [&_dd]:text-teal-wash [&_dd]:text-[13px] [&_dd]:leading-[1.75] [&_dd]:m-0",
            "max-[1001px]:grid-cols-2 max-[1001px]:gap-y-7 max-[1001px]:gap-x-0 max-[1001px]:[&_>_div:nth-child(3)]:pl-0",
            "max-[1001px]:[&_>_div:nth-child(3)]:border-l-0 max-[1001px]:[&_>_div:nth-child(even)]:pr-0",
            "max-[541px]:grid-cols-1 max-[541px]:gap-6 max-[541px]:[&_>_div]:border-l-0 max-[541px]:[&_>_div]:p-0",
            "max-[541px]:[&_dt]:mb-1.5",
          )}
        >
          {apiFacts.map((fact) => (
            <div key={fact.title}>
              <dt>{fact.title}</dt>
              <dd>{fact.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
