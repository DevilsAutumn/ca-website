import { Check } from "lucide-react";

const includedServices = [
  {
    title: "API access and testing",
    description:
      "Use the API documentation and a test environment to build and check your integration.",
  },
  {
    title: "Program management",
    description: "Set loyalty rules and manage your account in the portal.",
  },
  {
    title: "Points and analytics",
    description:
      "Issue, transfer, and redeem points. Track program activity with analytics.",
  },
];

export function PricingServices() {
  return (
    <section
      aria-labelledby="included-title"
      className="border-b border-line bg-surface"
    >
      <div className="mx-auto grid max-w-7xl items-start gap-6 px-6 py-11 sm:px-10 sm:py-14 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-10 lg:gap-14">
        <h2
          id="included-title"
          className="m-0 text-[clamp(28px,3.2vw,40px)] leading-[1.1] tracking-[-0.05em] text-balance md:max-w-75"
        >
          Included with the platform
        </h2>
        <ul role="list" className="m-0 list-none divide-y divide-line p-0">
          {includedServices.map(({ title, description }) => (
            <li
              key={title}
              className="flex items-start gap-3.5 py-4 first:pt-0 last:pb-0"
            >
              <Check
                size={18}
                aria-hidden="true"
                className="mt-0.75 shrink-0 text-teal-dark"
              />
              <div>
                <h3 className="mt-0 mb-1 text-[17px] leading-snug font-extrabold">
                  {title}
                </h3>
                <p className="m-0 max-w-124 text-[15px] leading-relaxed text-ink-muted">
                  {description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
