import { pageMetadata } from "@/lib/seo/metadata";
import { ContactForm } from "./_components/contact-form";
import { OfficeDirectory } from "./_components/office-directory";

export const metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Get in touch with Currency Alliance about your loyalty program, partnerships, or integration. Find contact details for our regional offices.",
  path: "/contact-us",
});

export default function ContactUsPage() {
  return (
    <section aria-labelledby="contact-title" className="bg-surface-soft">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-10 lg:py-16">
        <h1
          id="contact-title"
          className="mt-0 mb-4 text-[clamp(44px,6.7vw,86px)] leading-[1.02] tracking-[-0.065em]"
        >
          Contact <em>us.</em>
        </h1>
        <p className="m-0 max-w-158 text-[clamp(16px,1.6vw,19px)] leading-[1.65] text-pretty text-ink-muted">
          Get in touch with the Currency Alliance team about your loyalty
          program, partnerships, or integration.
        </p>
        <div className="mt-8 grid gap-6 lg:mt-10 lg:grid-cols-[minmax(0,1.54fr)_minmax(0,1fr)] lg:gap-8">
          <ContactForm />
          <OfficeDirectory />
        </div>
      </div>
    </section>
  );
}
