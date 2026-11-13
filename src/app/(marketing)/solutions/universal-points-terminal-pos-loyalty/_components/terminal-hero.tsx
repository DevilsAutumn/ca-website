import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { ButtonLink } from "@/app/_components/ui/button";
import terminalImage from "../_assets/terminal-at-checkout.jpg";

export function TerminalHero() {
  return (
    <section aria-labelledby="terminal-title" className="bg-ink text-white">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
        <div className="min-w-0 px-6 py-12 sm:px-10 lg:py-18 lg:pr-13">
          <h1
            id="terminal-title"
            className="mt-0 mb-5 text-[clamp(42px,5.6vw,78px)] leading-[1.02] tracking-[-0.065em]"
          >
            Universal <em className="block text-teal-pale">Points Terminal.</em>
          </h1>
          <p className="mt-0 mb-6 max-w-118 text-[clamp(16px,1.55vw,19px)] leading-[1.65] text-pretty text-teal-wash">
            A browser app for earning and spending points at checkout. Run it on
            a POS with a browser, a tablet, or a phone without changing your POS
            software.
          </p>
          <ButtonLink href="#terminal-checkout">
            See the checkout flow <ArrowDown size={15} aria-hidden="true" />
          </ButtonLink>
        </div>
        <div className="relative aspect-[587/307] min-w-0 lg:mr-10 lg:aspect-auto">
          <Image
            src={terminalImage}
            alt="The Universal Points Terminal displayed on a tablet at a store counter"
            fill
            sizes="(min-width: 1280px) 600px, (min-width: 1024px) calc(50vw - 40px), 100vw"
            loading="eager"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
