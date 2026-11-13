import Image from "next/image";
import { Arrow } from "@/app/_components/ui/arrow";
import { TextLink } from "@/app/_components/ui/text-link";
import { cn } from "@/lib/utils";
import { leadershipTeam } from "../_content/about-content";

export function LeadershipSection() {
  return (
    <section
      id="leadership"
      aria-labelledby="about-leadership-title"
      className="mx-auto max-w-7xl scroll-mt-8 px-10 pt-22 max-[801px]:px-6 max-[801px]:pt-16"
    >
      <div
        className={cn(
          "mb-11 grid grid-cols-2 items-end gap-20",
          "max-[901px]:gap-10 max-[701px]:grid-cols-1 max-[701px]:gap-6",
        )}
      >
        <h2
          id="about-leadership-title"
          className="mb-0 text-[clamp(36px,4.5vw,58px)] leading-[1.07] tracking-[-0.06em]"
        >
          People behind
          <br />
          <em>the partnerships.</em>
        </h2>
        <p className="mb-0 max-w-110 text-[16px] leading-[1.75] text-ink-muted">
          Most of our team is based in Barcelona, Spain. We bring together
          expertise in marketing, technology, finance, and business development.
        </p>
      </div>
      <ul className="m-0 grid list-none grid-cols-2 gap-10 border-b border-line p-0 pb-18 max-[641px]:grid-cols-1 max-[641px]:pb-14">
        {leadershipTeam.map((person) => (
          <li key={person.id} className="min-w-0">
            <article aria-labelledby={`${person.id}-name`}>
              <Image
                src={person.portrait}
                alt={person.name}
                width={570}
                height={437}
                sizes="(max-width: 641px) calc(100vw - 48px), (max-width: 801px) calc((100vw - 88px) / 2), (max-width: 1280px) calc((100vw - 120px) / 2), 580px"
                className="block h-auto w-full bg-paper-deep"
              />
              <div className="flex flex-wrap items-start justify-between gap-x-5 gap-y-4 pt-6">
                <div>
                  <h3
                    id={`${person.id}-name`}
                    className="mb-2 text-[24px] leading-[1.25] font-medium tracking-[-0.04em]"
                  >
                    {person.name}
                  </h3>
                  <p className="mb-0 text-[14px] leading-[1.6] text-ink-muted">
                    {person.role}
                  </p>
                </div>
                <TextLink
                  href={person.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${person.name} on LinkedIn (opens in a new tab)`}
                  className="min-h-11"
                >
                  LinkedIn <Arrow />
                </TextLink>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
