export type WebsiteOption = { id: string | number; value: string };

export type WebsiteOptionsState = {
  phase: "loading" | "ready" | "failed";
  options: WebsiteOption[];
};
