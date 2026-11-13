import { ContentTabs } from "@/app/_components/ui/content-tabs";
import { contractingModels } from "../_content/contracting-content";
import { ContractModelPanel } from "./contract-model-panel";

export function ContractingHero() {
  return (
    <section aria-labelledby="partner-contracting-title" className="bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-13 sm:px-10 lg:py-17">
        <p className="mb-4 text-[12px] leading-[1.5] font-extrabold tracking-[0.1em] text-teal-dark uppercase">
          Partner contracting
        </p>
        <div className="mb-7 grid items-end gap-4 lg:mb-9 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-15">
          <h1
            id="partner-contracting-title"
            className="m-0 text-[clamp(42px,5.6vw,76px)] leading-[1.02] tracking-[-0.072em]"
          >
            Choose your <em className="block">contracting model.</em>
          </h1>
          <p className="m-0 max-w-124 text-[clamp(16px,1.6vw,19px)] leading-[1.65] text-pretty text-ink-muted">
            Compare three ways to contract with loyalty partners. See who
            negotiates, who is party to the agreement, and who handles billing.
          </p>
        </div>
        <ContentTabs
          label="Partner agreement models"
          appearance="light"
          items={contractingModels.map((model) => ({
            value: model.id,
            label: model.tabLabel,
            content: <ContractModelPanel model={model} />,
          }))}
        />
      </div>
    </section>
  );
}
