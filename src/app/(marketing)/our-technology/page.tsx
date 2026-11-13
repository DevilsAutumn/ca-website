import { pageMetadata } from "@/lib/seo/metadata";
import { AdoptionSection } from "./_components/adoption-section";
import { ApiSection } from "./_components/api-section";
import { ServicesSection } from "./_components/services/services-section";
import { TechnologyHero } from "./_components/technology-hero";
import { TechnologyNextSteps } from "./_components/technology-next-steps";

export const metadata = pageMetadata({
  title: "API-First Loyalty Platform",
  description:
    "Extend your existing loyalty platform or build a new program with Currency Alliance. Explore our modular services, architecture, and REST API.",
  path: "/our-technology",
});

export default function TechnologyPage() {
  return (
    <>
      <TechnologyHero />
      <AdoptionSection />
      <ServicesSection />
      <ApiSection />
      <TechnologyNextSteps />
    </>
  );
}
