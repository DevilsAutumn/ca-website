import Image from "next/image";
import { Arrow } from "@/app/_components/ui/arrow";
import { ContentTabs } from "@/app/_components/ui/content-tabs";
import { TextLink } from "@/app/_components/ui/text-link";
import { cn } from "@/lib/utils";
import {
  loyaltyScreens,
  type LoyaltyScreen,
} from "../_content/white-label-content";

function ScreenPanel({
  id,
  title,
  description,
  image,
  alt,
  action,
}: LoyaltyScreen) {
  return (
    <div className="grid md:min-h-68 md:grid-cols-2 lg:min-h-78">
      <div className="relative aspect-[587/307] min-w-0 md:aspect-auto">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(min-width: 1280px) 600px, (min-width: 768px) 46vw, (min-width: 640px) calc(100vw - 80px), calc(100vw - 48px)"
          loading={id === "exchange" ? "eager" : "lazy"}
          className="object-cover"
        />
      </div>
      <div className="flex min-w-0 flex-col items-start justify-center px-5 py-6 sm:px-8 md:py-7 lg:px-10">
        <h3 className="mt-0 mb-3 max-w-110 text-[clamp(24px,3vw,40px)] leading-[1.12] font-medium tracking-[-0.045em] text-balance">
          {title}
        </h3>
        <p className="m-0 max-w-108 text-[15px] leading-relaxed text-ink-muted">
          {description}
        </p>
        {action && (
          <TextLink href={action.href} className="mt-4">
            {action.label} <Arrow />
          </TextLink>
        )}
      </div>
    </div>
  );
}

export function ScreenGallery() {
  return (
    <section
      aria-labelledby="screen-gallery-title"
      className={cn(
        "border-x border-b border-line bg-surface",
        "max-md:[&_[role=tablist]]:grid max-md:[&_[role=tablist]]:grid-cols-2 max-md:[&_[role=tablist]]:overflow-visible",
        "max-md:[&_[role=tab]]:min-h-12 max-md:[&_[role=tab]]:min-w-0 max-md:[&_[role=tab]]:px-2 max-md:[&_[role=tab]]:py-3 max-md:[&_[role=tab]]:whitespace-normal",
        "max-md:[&_[role=tab]:nth-child(odd)]:border-l-0",
        "max-md:[&_[role=tab]:nth-child(n+3)]:border-t max-md:[&_[role=tab]:nth-child(n+3)]:border-t-line",
        "max-md:[&_[role=tab]:last-child]:col-span-2",
      )}
    >
      <h2 id="screen-gallery-title" className="sr-only">
        Explore the five loyalty screens
      </h2>
      <ContentTabs
        label="Loyalty screen examples"
        appearance="light"
        items={loyaltyScreens.map((screen) => ({
          value: screen.id,
          label: screen.label,
          content: <ScreenPanel {...screen} />,
        }))}
      />
    </section>
  );
}
