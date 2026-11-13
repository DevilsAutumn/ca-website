import { Arrow } from "@/app/_components/ui/arrow";
import { TextLink } from "@/app/_components/ui/text-link";

const possibilities = [
  {
    title: "Find the right partners",
    description: "Explore global and local brands for your loyalty program.",
  },
  {
    title: "Build your solution",
    description: "Connect your existing program, or create a new one.",
  },
  {
    title: "Grow member value",
    description: "Give customers more ways to earn and use points.",
  },
];

export function RegistrationIntro() {
  return (
    <div className="flex min-w-0 flex-col bg-ink p-6 text-surface sm:p-9 xl:p-11">
      <p className="mb-5 text-xs font-extrabold tracking-[0.13em] text-teal-pale uppercase">
        Register for free
      </p>
      <h1
        id="registration-title"
        className="mb-5 text-[clamp(40px,4.6vw,62px)] leading-[1.06] tracking-[-0.06em]"
      >
        Create your
        <br />
        <span className="text-teal-pale">free account.</span>
      </h1>
      <p className="m-0 max-w-85 text-base leading-7 text-surface/80">
        Explore the Loyalty Partnerships Marketplace™ and start building your
        next brand collaboration.
      </p>
      <ul className="mt-10 mb-10 hidden list-none space-y-6 border-t border-line-dark pt-8 pl-0 lg:block">
        {possibilities.map(({ title, description }) => (
          <li key={title}>
            <h2 className="mb-1.5 text-base font-extrabold tracking-normal">
              {title}
            </h2>
            <p className="m-0 max-w-80 text-sm leading-6 text-surface/75">
              {description}
            </p>
          </li>
        ))}
      </ul>
      <div className="mt-auto hidden lg:block">
        <p className="mb-3 text-sm text-surface/75">
          Want to discuss your plans first?
        </p>
        <TextLink href="/contact-us" tone="light">
          Talk to our team <Arrow />
        </TextLink>
      </div>
    </div>
  );
}
