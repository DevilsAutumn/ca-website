import { RelationshipDiagram } from "../../_components/relationship-diagram";
import type { ContractingModel } from "../_content/contracting-content";

export function ContractModelPanel({ model }: { model: ContractingModel }) {
  const roles = [
    { label: "Your role", detail: model.yourRole },
    { label: "Currency Alliance", detail: model.platformRole },
    { label: "Billing", detail: model.administration },
  ];

  return (
    <div className="grid min-w-0 gap-6 border-b border-line bg-paper px-3.5 py-6 sm:px-6 sm:py-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-12 lg:px-8">
      <div className="min-w-0">
        <h2 className="mt-0 mb-3 max-w-124 text-[clamp(26px,3.2vw,43px)] leading-[1.1] tracking-[-0.055em] text-balance">
          {model.title}
        </h2>
        <p className="mt-0 mb-5 max-w-116 text-[15px] leading-[1.65] text-ink-muted sm:mb-6">
          {model.description}
        </p>
        <RelationshipDiagram
          from={{ label: model.contractingParty }}
          to={{ label: model.partnerParty }}
          connection="Contract"
          direction="mutual"
          description={model.diagramDescription}
        />
      </div>
      <dl className="m-0 self-center divide-y divide-line border-y border-line">
        {roles.map(({ label, detail }) => (
          <div
            key={label}
            className="grid grid-cols-[5.5rem_minmax(0,1fr)] gap-3 py-3.5 sm:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] sm:gap-4 sm:py-4"
          >
            <dt className="text-[15px] leading-[1.55] font-extrabold text-teal-dark">
              {label}
            </dt>
            <dd className="m-0 text-[15px] leading-[1.6] text-ink-muted">
              {detail}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
