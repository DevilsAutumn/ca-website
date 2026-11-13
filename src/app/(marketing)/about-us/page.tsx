import { pageMetadata } from "@/lib/seo/metadata";
import { ContactSection } from "@/app/_components/marketing/contact-section";
import { AboutHero } from "./_components/about-hero";
import { AboutStory } from "./_components/about-story";
import { CoalitionEvolutionSection } from "./_components/coalition-evolution-section";
import { LeadershipSection } from "./_components/leadership-section";

export const metadata = pageMetadata({
  title: "About us | Better loyalty, built together",
  description:
    "Meet the people and purpose behind Currency Alliance. Since 2015, we have helped brands connect loyalty programs and create more value for their members.",
  path: "/about-us",
});

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <CoalitionEvolutionSection />
      <LeadershipSection />
      <div className="mx-auto max-w-7xl px-10 max-[801px]:px-6">
        <ContactSection
          id="about-contact"
          title={
            <>
              Let’s build <em>something together.</em>
            </>
          }
          description="Tell us what you want to make possible for your members. We’ll help you find the next connection."
          primaryAction={{ label: "Talk to our team", href: "/contact-us" }}
          secondaryAction={{ label: "Register for free", href: "/sign-up" }}
        />
      </div>
    </>
  );
}
