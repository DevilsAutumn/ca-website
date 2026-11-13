import { TextLink } from "@/app/_components/ui/text-link";
import { cn } from "@/lib/utils";
import { Arrow } from "@/app/_components/ui/arrow";
import { loyaltyServices } from "../../_content/technology-content";
import { ServiceFlow } from "./service-flow";
import { ServiceTabs } from "./service-tabs";
export function ServicesSection() {
  return (
    <section
      className="bg-surface border-t border-t-line border-b border-b-line scroll-mt-8"
      id="services"
      aria-labelledby="services-title"
    >
      <div className="max-w-7xl m-auto py-22 px-10 max-[801px]:py-16 max-[801px]:px-6">
        <div
          className={cn(
            "grid grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] items-end mb-11 gap-20 [&_h2]:text-[clamp(38px,4.5vw,58px)]",
            "[&_h2]:tracking-[-0.06em] [&_h2]:leading-[1.07] [&_h2]:m-0 [&_>_p]:max-w-100 [&_>_p]:text-ink-muted",
            "[&_>_p]:text-[16px] [&_>_p]:leading-[1.7] [&_>_p]:m-0 max-[1001px]:gap-10 max-[801px]:grid-cols-1",
            "max-[801px]:mb-8 max-[801px]:gap-6",
          )}
        >
          <h2 id="services-title">
            Five services.
            <br />
            <em>One connected platform.</em>
          </h2>
          <p>
            Move value, define the logic, and keep the record. Each service is
            optional, so you can start with what you need.
          </p>
        </div>
        <ServiceTabs
          items={loyaltyServices.map((service) => ({
            id: service.id,
            label: service.label,
            content: (
              <div
                className={cn(
                  "grid min-h-112.5 grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-center pt-11 pb-0 px-0 gap-20",
                  "max-[1001px]:gap-10 max-[801px]:gap-8 max-[601px]:grid-cols-1 max-[601px]:min-h-0 max-[601px]:items-start",
                  "max-[601px]:pt-8 max-[601px]:gap-8",
                )}
              >
                <div
                  className={cn(
                    "[&_h3]:max-w-120 [&_h3]:mb-4.5 [&_h3]:text-[clamp(30px,3.2vw,40px)] [&_h3]:font-medium",
                    "[&_h3]:tracking-[-0.055em] [&_h3]:leading-[1.13] max-[601px]:min-h-75",
                  )}
                >
                  <p className="mb-4.5 text-teal-dark text-[12px] font-[750] tracking-[0.12em] uppercase">
                    {service.role}
                  </p>
                  <h3>{service.title}</h3>
                  <p className="max-w-120 mb-5.5 text-ink-muted text-[15px] leading-[1.75]">
                    {service.description}
                  </p>
                  <ul
                    className={cn(
                      "flex flex-wrap gap-y-2 gap-x-4.5 mt-0 mb-7 list-none mx-0 p-0 [&_li]:flex [&_li]:items-center",
                      "[&_li]:text-ink-soft [&_li]:text-[12px] [&_li]:leading-[1.6] [&_li]:gap-2 [&_li::before]:w-1",
                      "[&_li::before]:h-1 [&_li::before]:rounded-full [&_li::before]:bg-teal [&_li::before]:content-['']",
                    )}
                  >
                    {service.capabilities.map((capability) => (
                      <li key={capability}>{capability}</li>
                    ))}
                  </ul>
                  <TextLink href={service.href}>
                    {service.linkLabel} <Arrow />
                  </TextLink>
                </div>
                <ServiceFlow service={service} />
              </div>
            ),
          }))}
        />
      </div>
    </section>
  );
}
