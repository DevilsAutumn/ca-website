import { TextLink } from "@/app/_components/ui/text-link";
import { cn } from "@/lib/utils";
import { Arrow } from "../ui/arrow";
import { ButtonLink } from "../ui/button";
export function ClosingSection() {
  return (
    <section
      className={cn(
        "closing bg-ink text-white grid grid-cols-[1fr_1fr] py-30 px-[max(40px,calc((100%_-_1200px)_/_2))] gap-[8%]",
        "[&_h2]:text-[clamp(47px,6vw,77px)] [&_h2]:leading-[0.94] [&_h2]:mb-0 [&_h2_em]:text-teal-wash",
        "[&_p]:text-dark-muted [&_p]:text-[15px] [&_p]:leading-[1.6] [&_>_div:last-child]:self-end",
        "[&_>_div:last-child]:max-w-85 [&_>_div:last-child]:pb-1.5 max-[901px]:grid-cols-1 max-[901px]:py-22.5",
        "max-[901px]:px-6 max-[901px]:gap-10",
      )}
    >
      <div>
        <p
          className={cn(
            "eyebrow uppercase tracking-[0.15em] text-[12px] leading-[1.4] font-extrabold mt-0 mb-6.25 eyebrow-light",
            "text-teal-wash mx-0",
          )}
        >
          Make the next connection
        </p>
        <h2>
          Ready to make loyalty
          <br />
          <em>more useful?</em>
        </h2>
      </div>
      <div>
        <p>
          Register free in under ten minutes, or talk to a human about what
          you’re building.
        </p>
        <div
          className={cn(
            "closing-actions flex flex-wrap items-baseline gap-y-4 gap-x-6 mt-7 max-[541px]:items-start",
            "max-[541px]:flex-col max-[541px]:gap-4",
          )}
        >
          <ButtonLink href="/sign-up">
            Register now <Arrow />
          </ButtonLink>
          <TextLink href="/contact-us" tone="light">
            Contact us <Arrow />
          </TextLink>
        </div>
      </div>
    </section>
  );
}
