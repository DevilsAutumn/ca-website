import { Arrow } from "@/app/_components/ui/arrow";
import { ContentTabs } from "@/app/_components/ui/content-tabs";
import { TextLink } from "@/app/_components/ui/text-link";
import { RelationshipDiagram } from "../../../solutions/_components/relationship-diagram";
import { modernisationPaths } from "../_content/modernisation-content";

function UpgradePanel({
  title,
  description,
  action,
  diagram,
}: (typeof modernisationPaths)[number]) {
  return (
    <div className="grid md:min-h-62 md:grid-cols-[minmax(0,1.07fr)_minmax(0,0.93fr)]">
      <div className="flex min-w-0 flex-col items-start justify-center px-5 py-6 sm:p-7 lg:p-9">
        <h3 className="mt-0 mb-3 text-[clamp(24px,3vw,38px)] leading-[1.12] font-medium tracking-[-0.045em] text-balance">
          {title}
        </h3>
        <p className="m-0 max-w-115 text-[15px] leading-relaxed text-ink-muted">
          {description}
        </p>
        <TextLink
          href={action.href}
          className="mt-4 whitespace-normal [&>.arrow]:shrink-0"
        >
          {action.label} <Arrow />
        </TextLink>
      </div>
      <div className="grid min-w-0 content-center border-t border-line bg-paper px-3 py-5 sm:p-6 md:border-t-0 md:border-l lg:p-7">
        <RelationshipDiagram {...diagram} direction="mutual" />
      </div>
    </div>
  );
}

export function ModernisationPaths() {
  return (
    <section
      id="modernisation-paths"
      aria-labelledby="modernisation-paths-title"
      className="scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-10 lg:py-16">
        <h2
          id="modernisation-paths-title"
          className="mt-0 mb-4 text-[clamp(34px,4.3vw,55px)] leading-[1.06] tracking-[-0.06em] text-balance"
        >
          Choose what <em>to change.</em>
        </h2>
        <p className="mt-0 mb-6 max-w-145 text-[16px] leading-[1.7] text-ink-muted">
          Keep the member experience in your hands and choose where Currency
          Alliance fits into your technology.
        </p>
        <div className="border-x border-b border-line bg-surface">
          <ContentTabs
            label="Loyalty upgrade options"
            appearance="light"
            items={modernisationPaths.map((path) => ({
              value: path.id,
              label: path.label,
              content: <UpgradePanel {...path} />,
            }))}
          />
        </div>
      </div>
    </section>
  );
}
