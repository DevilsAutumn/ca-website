import Image from "next/image";
import { Arrow } from "@/app/_components/ui/arrow";
import { TextLink } from "@/app/_components/ui/text-link";
import { cn } from "@/lib/utils";

type BrandedCaseStudyProps = {
  titleId: string;
  title: string;
  description: string;
  href: string;
  logo: { src: string; width: number; height: number };
  className?: string;
};

export function BrandedCaseStudy({
  titleId,
  title,
  description,
  href,
  logo,
  className,
}: BrandedCaseStudyProps) {
  return (
    <article
      aria-labelledby={titleId}
      className={cn(
        "grid items-center gap-4 border border-line bg-surface p-5",
        "sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-x-6 sm:p-6 lg:grid-cols-[9rem_minmax(0,1fr)_auto] lg:gap-x-8",
        className,
      )}
    >
      <Image
        {...logo}
        alt=""
        sizes="(min-width: 1024px) 144px, (min-width: 640px) 128px, 112px"
        className="h-auto w-28 sm:w-full"
      />
      <div>
        <h3
          id={titleId}
          className="mt-0 mb-2 text-lg leading-snug font-extrabold tracking-tight"
        >
          {title}
        </h3>
        <p className="m-0 max-w-155 text-sm leading-relaxed text-ink-muted">
          {description}
        </p>
      </div>
      <TextLink
        href={href}
        className="justify-self-start sm:col-start-2 lg:col-auto"
      >
        Read the case study <Arrow />
      </TextLink>
    </article>
  );
}
