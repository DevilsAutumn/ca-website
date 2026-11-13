import { Arrow } from "@/app/_components/ui/arrow";
import { ContentTabs } from "@/app/_components/ui/content-tabs";
import { TextLink } from "@/app/_components/ui/text-link";
import {
  COALITION_ARTICLE,
  coalitionModels,
} from "../_content/coalition-models";
import { CoalitionModelPanel } from "./coalition-evolution/coalition-model-panel";

export function CoalitionEvolutionSection() {
  return (
    <section
      id="partnership-models"
      aria-labelledby="coalition-evolution-title"
      className="scroll-mt-8 bg-ink text-white [&_a:focus-visible]:outline-teal-pale"
    >
      <div className="mx-auto max-w-7xl px-10 py-22 max-[801px]:px-6 max-[801px]:py-16">
        <h2
          id="coalition-evolution-title"
          className="mb-6 max-w-200 text-[clamp(36px,4.5vw,58px)] leading-[1.07] tracking-[-0.06em]"
        >
          Evolution of the
          <br />
          <em className="text-teal-pale">loyalty coalition model.</em>
        </h2>
        <p className="mb-10 max-w-190 text-[16px] leading-[1.75] text-teal-wash">
          A loyalty coalition connects brands so members can earn and use
          rewards across them. Explore how ownership and value change across
          three generations of the model.
        </p>
        <ContentTabs
          label="Evolution of loyalty coalitions"
          appearance="dark"
          items={coalitionModels.map((model) => ({
            value: model.id,
            label: model.version,
            content: <CoalitionModelPanel model={model} />,
          }))}
        />
        <p className="mt-5 mb-0 text-[13px] leading-[1.6] text-dark-muted">
          These models continue to coexist. The evolution is in how brands
          collaborate and share value.
        </p>
        <div className="mt-8 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-6">
          <TextLink href="/our-technology" tone="light">
            How the platform works <Arrow />
          </TextLink>
          <TextLink
            href={COALITION_ARTICLE}
            tone="light"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read the full evolution story <Arrow />
          </TextLink>
        </div>
      </div>
    </section>
  );
}
