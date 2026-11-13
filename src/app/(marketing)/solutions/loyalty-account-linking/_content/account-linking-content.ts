export const linkingSteps = [
  {
    id: "choose",
    environment: "Your site or app",
    action: "The member selects a partner program where they have an account.",
  },
  {
    id: "authenticate",
    environment: "Partner sign-in",
    action: "The member signs in using the partner’s authentication method.",
  },
  {
    id: "confirm",
    environment: "Back in your site or app",
    action: "The member returns with a token and confirms the link.",
  },
] as const;

export const linkedExperiences = [
  {
    title: "Earn",
    description: "Collect points or miles through eligible partner activity.",
  },
  {
    title: "Redeem",
    description: "Use points for rewards from a participating partner.",
  },
  {
    title: "Exchange",
    description: "Move loyalty value between the linked programs.",
  },
] as const;
