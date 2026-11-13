import Image, { type StaticImageData } from "next/image";
import { Arrow } from "@/app/_components/ui/arrow";
import { TextLink } from "@/app/_components/ui/text-link";

type LoyaltyTouchpoint = {
  id: string;
  title: string;
  description: string;
  image: StaticImageData;
  alt: string;
  action: { label: string; href: string };
};

export function LoyaltyTouchpointGrid({
  items,
}: {
  items: readonly LoyaltyTouchpoint[];
}) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:gap-7">
      {items.map(({ id, title, description, image, alt, action }) => (
        <article
          key={id}
          aria-labelledby={`loyalty-touchpoint-${id}`}
          className="flex min-w-0 flex-col border border-line bg-surface"
        >
          <Image
            src={image}
            alt={alt}
            sizes="(min-width: 1280px) 586px, (min-width: 768px) 45vw, (min-width: 640px) calc(100vw - 80px), calc(100vw - 48px)"
            className="block aspect-[21/10] h-auto w-full object-cover"
          />
          <div className="flex flex-1 flex-col items-start p-5 sm:p-6">
            <h3
              id={`loyalty-touchpoint-${id}`}
              className="mt-0 mb-2 text-[clamp(21px,2.3vw,29px)] leading-tight font-bold tracking-tight"
            >
              {title}
            </h3>
            <p className="mt-0 mb-4 max-w-115 text-[15px] leading-relaxed text-ink-muted">
              {description}
            </p>
            <TextLink
              href={action.href}
              className="mt-auto whitespace-normal [&>.arrow]:shrink-0"
            >
              {action.label} <Arrow />
            </TextLink>
          </div>
        </article>
      ))}
    </div>
  );
}
