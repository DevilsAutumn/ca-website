import type { ReactNode } from "react";
import { Arrow } from "@/app/_components/ui/arrow";
import { ButtonLink } from "@/app/_components/ui/button";
import { TextLink } from "@/app/_components/ui/text-link";
import { cn } from "@/lib/utils";

type ContactAction = {
  label: string;
  href: string;
};

type ContactSectionProps = {
  id: string;
  title: ReactNode;
  description: string;
  primaryAction: ContactAction;
  secondaryAction: ContactAction;
};

export function ContactSection({
  id,
  title,
  description,
  primaryAction,
  secondaryAction,
}: ContactSectionProps) {
  return (
    <section
      aria-labelledby={`${id}-title`}
      className={cn(
        "grid grid-cols-[minmax(0,1.4fr)_minmax(0,0.6fr)] items-center py-22 px-0 gap-16",
        "max-[1051px]:grid-cols-1 max-[1051px]:gap-8 max-[801px]:py-16",
      )}
    >
      <div>
        <h2
          id={`${id}-title`}
          className="mb-5 max-w-160 text-[clamp(38px,4.5vw,58px)] leading-[1.07] tracking-[-0.06em]"
        >
          {title}
        </h2>
        <p className="mb-0 max-w-125 text-[16px] leading-[1.7] text-ink-muted">
          {description}
        </p>
      </div>
      <div className="flex flex-col items-start gap-5">
        <ButtonLink href={primaryAction.href}>
          {primaryAction.label} <Arrow />
        </ButtonLink>
        <TextLink href={secondaryAction.href}>
          {secondaryAction.label} <Arrow />
        </TextLink>
      </div>
    </section>
  );
}
