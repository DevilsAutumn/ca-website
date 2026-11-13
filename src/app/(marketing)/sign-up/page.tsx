import { pageMetadata } from "@/lib/seo/metadata";
import { RegistrationForm } from "./_components/registration-form";
import { RegistrationIntro } from "./_components/registration-intro";

export const metadata = pageMetadata({
  title: "Register for Free",
  description:
    "Create a free Currency Alliance account to explore the Loyalty Partnerships Marketplace and find global and local partners for your loyalty program.",
  path: "/sign-up",
});

export default function SignUpPage() {
  return (
    <section aria-labelledby="registration-title" className="bg-surface-soft">
      <div className="mx-auto max-w-7xl px-6 py-9 sm:px-10 sm:py-12 lg:py-14">
        <div className="grid min-w-0 border border-line bg-surface lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <RegistrationIntro />
          <RegistrationForm />
        </div>
      </div>
    </section>
  );
}
