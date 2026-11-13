import { ScreenGallery } from "./screen-gallery";

export function WhiteLabelHero() {
  return (
    <section aria-labelledby="white-label-title" className="bg-surface-soft">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-10 lg:py-16">
        <div className="mb-8 md:text-center lg:mb-10">
          <h1
            id="white-label-title"
            className="mt-0 mb-5 text-[clamp(43px,6vw,80px)] leading-[1.02] tracking-[-0.067em] text-balance"
          >
            White-label <em>solutions.</em>
          </h1>
          <p className="m-0 max-w-170 text-[clamp(16px,1.6vw,19px)] leading-[1.65] text-pretty text-ink-muted md:mx-auto">
            Give members a way to earn, spend, and manage points inside your
            website or app. Choose the loyalty screens you need and make them
            part of your brand’s experience.
          </p>
        </div>
        <ScreenGallery />
      </div>
    </section>
  );
}
