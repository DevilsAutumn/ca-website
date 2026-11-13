export const contractingModels = [
  {
    id: "direct",
    tabLabel: "Direct",
    title: "Direct agreement",
    description:
      "Use standard terms and a short schedule tailored to the partnership.",
    contractingParty: "Your brand",
    partnerParty: "Partner brand",
    diagramDescription:
      "Your brand and the partner brand are the parties to the agreement.",
    yourRole: "Agree terms and contract with your partner.",
    platformRole: "Provides standard terms and a schedule you can adapt.",
    administration: "Define billing and settlement in the agreement.",
  },
  {
    id: "agency",
    tabLabel: "Agency",
    title: "Agency agreement",
    description:
      "Delegate negotiation. Your brand and the partner are still the parties to the agreement.",
    contractingParty: "Your brand",
    partnerParty: "Partner brand",
    diagramDescription:
      "Your brand contracts with the partner brand. Currency Alliance acts on your behalf.",
    yourRole: "Set guidelines and approve partners.",
    platformRole: "Negotiates and can act for you under agreed authority.",
    administration: "Assign any invoicing duties in the agency agreement.",
  },
  {
    id: "serviced",
    tabLabel: "Serviced",
    title: "Serviced agreement",
    description:
      "Currency Alliance contracts with partners you approve, on terms you set.",
    contractingParty: "Currency Alliance",
    partnerParty: "Approved partner",
    diagramDescription:
      "Currency Alliance contracts directly with an approved partner on agreed terms.",
    yourRole: "Approve each partner and set commercial terms.",
    platformRole: "Contracts directly with the approved partners.",
    administration:
      "Currency Alliance handles partner invoices, payments, and administration.",
  },
] as const;

export type ContractingModel = (typeof contractingModels)[number];

export const termsToPrepare = [
  {
    label: "Partner fit",
    description: "Decide which brands, markets, and partner types qualify.",
  },
  {
    label: "Commercial terms",
    description:
      "Agree the currency, price per point, volumes, and payment terms.",
  },
  {
    label: "Operating roles",
    description:
      "Decide who reports activity, shares data, and settles payments.",
  },
] as const;

export const flyingBlueContractsCase = {
  customer: "Flying Blue",
  title: "Standard terms for partner onboarding.",
  description:
    "Flying Blue uses standard contracts to simplify partner agreements. Once commercial terms are agreed, Currency Alliance helps onboard each partner and determine how they will report transactions.",
  href: "https://www.currencyalliance.com/case-studies/partner-network-scaling-for-the-flying-blue-loyalty-program",
} as const;
