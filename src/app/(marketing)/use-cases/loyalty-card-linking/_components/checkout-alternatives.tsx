import { Arrow } from "@/app/_components/ui/arrow";
import { TextLink } from "@/app/_components/ui/text-link";
import { checkoutAlternatives } from "../_content/card-linking-content";

export function CheckoutAlternatives() {
  return (
    <section
      aria-labelledby="checkout-alternatives-title"
      className="bg-ink text-white"
    >
      <div className="mx-auto grid max-w-7xl items-start gap-7 px-6 py-10 sm:px-10 lg:grid-cols-[minmax(0,0.83fr)_minmax(0,1.17fr)] lg:gap-12 lg:py-13">
        <h2
          id="checkout-alternatives-title"
          className="m-0 max-w-115 text-[clamp(32px,3.8vw,49px)] leading-[1.08] tracking-[-0.06em] text-balance"
        >
          Other ways to <em className="text-teal-pale">identify members.</em>
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {checkoutAlternatives.map(({ title, description, action }) => (
            <div key={title} className="min-w-0 border-t border-line-dark pt-4">
              <h3 className="mt-0 mb-2 text-[19px] leading-snug font-extrabold tracking-tight">
                {title}
              </h3>
              <p className="m-0 text-[15px] leading-relaxed text-teal-wash">
                {description}
              </p>
              <TextLink
                href={action.href}
                tone="light"
                className="mt-4 whitespace-normal [&>.arrow]:shrink-0"
              >
                {action.label} <Arrow />
              </TextLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
