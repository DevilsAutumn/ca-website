import Image from "next/image";
import { Arrow } from "@/app/_components/ui/arrow";
import { ContentTabs } from "@/app/_components/ui/content-tabs";
import { TextLink } from "@/app/_components/ui/text-link";
import { RelationshipDiagram } from "../../../solutions/_components/relationship-diagram";
import { retailMoments } from "../_content/retail-content";

function RetailMomentPanel({
  title,
  description,
  action,
  media,
}: (typeof retailMoments)[number]) {
  return (
    <div className="grid md:min-h-71 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:min-h-75">
      <div className="flex min-w-0 flex-col items-start justify-center px-5 py-6 sm:p-7 lg:p-9">
        <h3 className="mt-0 mb-3 text-[clamp(24px,3vw,38px)] leading-[1.12] font-medium tracking-[-0.045em] text-balance">
          {title}
        </h3>
        <p className="m-0 max-w-118 text-[15px] leading-relaxed text-ink-muted">
          {description}
        </p>
        <TextLink
          href={action.href}
          className="mt-4 whitespace-normal [&>.arrow]:shrink-0"
        >
          {action.label} <Arrow />
        </TextLink>
      </div>
      {media.kind === "diagram" ? (
        <div className="grid min-w-0 content-center border-t border-line bg-paper px-3 py-5 sm:p-6 md:border-t-0 md:border-l lg:p-7">
          <RelationshipDiagram
            from={media.from}
            to={media.to}
            connection={media.connection}
            description={media.description}
            direction="forward"
          />
        </div>
      ) : (
        <div className="relative aspect-[587/307] min-w-0 md:aspect-auto">
          <Image
            src={media.src}
            alt={media.alt}
            fill
            sizes="(min-width: 1280px) 600px, (min-width: 768px) 46vw, (min-width: 640px) calc(100vw - 80px), calc(100vw - 48px)"
            className="object-cover"
          />
        </div>
      )}
    </div>
  );
}

export function RetailTouchpoints() {
  return (
    <section
      id="retail-touchpoints"
      aria-labelledby="retail-touchpoints-title"
      className="scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-10 lg:py-16">
        <h2
          id="retail-touchpoints-title"
          className="mt-0 mb-7 max-w-188 text-[clamp(34px,4.3vw,55px)] leading-[1.06] tracking-[-0.06em] text-balance"
        >
          Where loyalty fits <em>in the shopping journey.</em>
        </h2>
        <div className="border-x border-b border-line bg-surface">
          <ContentTabs
            label="Shopping experiences"
            appearance="light"
            items={retailMoments.map((moment) => ({
              value: moment.id,
              label: moment.label,
              content: <RetailMomentPanel {...moment} />,
            }))}
          />
        </div>
      </div>
    </section>
  );
}
