import { cn } from "@/lib/utils";
import { foundingQuestion } from "../_content/about-content";

export function AboutStory() {
  return (
    <section
      id="our-story"
      aria-labelledby="about-story-title"
      className="scroll-mt-8 border-t border-line bg-surface"
    >
      <div
        className={cn(
          "mx-auto grid max-w-7xl grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] gap-24 px-10 py-22",
          "max-[1051px]:gap-12 max-[801px]:grid-cols-1 max-[801px]:gap-9 max-[801px]:px-6 max-[801px]:py-16",
        )}
      >
        <div>
          <p className="mb-5 text-[12px] leading-[1.4] font-extrabold tracking-[0.15em] text-teal-dark uppercase">
            Our story
          </p>
          <h2
            id="about-story-title"
            className="mb-0 max-w-85 text-[clamp(32px,3.5vw,44px)] leading-[1.1] tracking-[-0.06em]"
          >
            A question worth building around.
          </h2>
        </div>
        <div>
          <figure className="m-0 mb-8">
            <blockquote className="m-0 text-[clamp(26px,2.8vw,36px)] leading-[1.35] font-medium tracking-[-0.045em] text-ink">
              <p className="mb-5">“{foundingQuestion}”</p>
            </blockquote>
            <figcaption className="text-[13px] leading-[1.6] text-ink-muted">
              The founding question, 2015
            </figcaption>
          </figure>
          <div className="max-w-155 space-y-4 text-[16px] leading-[1.8] text-ink-muted [&_p]:mb-0">
            <p>
              Chuck Ehredt founded Currency Alliance to help brands make loyalty
              rewarding beyond their own checkout.
            </p>
            <p>
              Bringing complementary businesses together gives members more
              opportunities to earn and use points. Our job is to remove the
              technical and commercial friction that gets in the way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
