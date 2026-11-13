import Image from "next/image";
import identificationImage from "../_assets/identify-customer-pos.jpg";
import { checkoutSteps } from "../_content/terminal-content";

export function TerminalCheckout() {
  return (
    <section
      id="terminal-checkout"
      aria-labelledby="terminal-checkout-title"
      className="mx-auto grid max-w-7xl scroll-mt-24 items-center gap-8 px-6 py-13 sm:px-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14 lg:py-17"
    >
      <div>
        <h2
          id="terminal-checkout-title"
          className="mt-0 mb-5 text-[clamp(34px,4.3vw,55px)] leading-[1.06] tracking-[-0.06em] text-balance"
        >
          From scan to <em>transaction.</em>
        </h2>
        <ol
          role="list"
          className="m-0 list-none divide-y divide-line border-y border-line p-0"
        >
          {checkoutSteps.map(({ title, description }, index) => (
            <li
              key={title}
              className="grid grid-cols-[2rem_minmax(0,1fr)] gap-3 py-4"
            >
              <span
                aria-hidden="true"
                className="text-sm leading-6 font-extrabold text-teal-dark tabular-nums"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="mt-0 mb-1 text-[17px] leading-snug font-extrabold tracking-tight">
                  {title}
                </h3>
                <p className="m-0 max-w-116 text-[15px] leading-relaxed text-ink-muted">
                  {description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <figure className="m-0 w-full min-w-0 max-w-147 justify-self-center">
        <Image
          src={identificationImage}
          alt="Store staff scanning a customer’s loyalty QR code from their phone"
          sizes="(min-width: 1280px) 588px, (min-width: 1024px) 47vw, (min-width: 680px) 588px, calc(100vw - 48px)"
          className="block h-auto w-full"
        />
        <figcaption className="mt-3 text-sm leading-relaxed text-ink-muted">
          Member identification at checkout
        </figcaption>
      </figure>
    </section>
  );
}
