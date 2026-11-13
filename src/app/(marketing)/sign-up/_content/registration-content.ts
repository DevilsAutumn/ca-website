import type { WebsiteOptionsState } from "@/lib/website-api/types";

export const registrationSteps = ["Account", "Program", "Goals"] as const;

export const registrationStepContent = [
  {
    title: "Let’s start with you.",
    description: "Tell us who you are and where you work.",
  },
  {
    title: "Your program, your way.",
    description: "Which option best describes what you’re looking to do?",
  },
  {
    title: "What would you like to do?",
    description: "Help us understand what you’re looking to build.",
  },
];

export const accountFieldNames = [
  "first_name",
  "last_name",
  "company_name",
  "job_position",
  "registration_country",
  "email",
  "password",
] as const;

export type AccountFieldName = (typeof accountFieldNames)[number];

export const registrationInterests = [
  {
    id: "enable_currency_issue_to_other_partners",
    label: "Let partner brands issue my points or miles",
    currencyOwnerOnly: true,
  },
  {
    id: "enable_currency_exchange",
    label: "Enable exchanges with other loyalty currencies",
    currencyOwnerOnly: true,
  },
  {
    id: "enable_gift_card_exchange",
    label: "Let members exchange points for gift cards",
    currencyOwnerOnly: true,
  },
  {
    id: "define_loyalty_rules",
    label: "Define rules for issuing loyalty currency through the API",
    currencyOwnerOnly: false,
  },
  {
    id: "issue_other_currencies",
    label: "Issue points or miles from partner programs",
    currencyOwnerOnly: false,
  },
] as const;

export type InterestId = (typeof registrationInterests)[number]["id"];

export type RegistrationData = Record<AccountFieldName, string> & {
  terms: boolean;
  newsletter: boolean;
  company_has_loyalty_currency: boolean | null;
  interests: Partial<Record<InterestId, boolean>>;
};

export type RegistrationErrors = Partial<
  Record<keyof RegistrationData, string[]>
>;

export const initialRegistrationData: RegistrationData = {
  first_name: "",
  last_name: "",
  company_name: "",
  job_position: "",
  registration_country: "",
  email: "",
  password: "",
  terms: false,
  newsletter: false,
  company_has_loyalty_currency: null,
  interests: {},
};

export type CountryState = WebsiteOptionsState;
