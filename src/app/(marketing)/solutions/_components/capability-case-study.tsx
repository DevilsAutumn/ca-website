import { Arrow } from "@/app/_components/ui/arrow";
import { TextLink } from "@/app/_components/ui/text-link";

type CapabilityCaseStudyProps = {
  titleId: string;
  customer: string;
  title: string;
  description: string;
  href: string;
};

export function CapabilityCaseStudy({
  titleId,
  customer,
  title,
  description,
  href,
}: CapabilityCaseStudyProps) {
  return (
    <article
      aria-labelledby={titleId}
      className="flex min-w-0 flex-col items-start justify-center bg-ink px-6 py-8 text-white sm:px-9 sm:py-10"
    >
      <p className="mb-4 text-[13px] font-extrabold text-teal-pale">
        {customer}
      </p>
      <h3
        id={titleId}
        className="mt-0 mb-4 max-w-110 text-[clamp(28px,3.5vw,45px)] leading-[1.09] font-medium tracking-[-0.05em] text-balance"
      >
        {title}
      </h3>
      <p className="mt-0 mb-6 max-w-110 text-[15px] leading-[1.7] text-teal-wash">
        {description}
      </p>
      <TextLink href={href} tone="light">
        Read the case study <Arrow />
      </TextLink>
    </article>
  );
}
