import { Arrow } from "@/app/_components/ui/arrow";
import { TextLink } from "@/app/_components/ui/text-link";
import {
  navigationItems,
  type NavigationMenu,
} from "@/app/_components/navigation/navigation-links";
import { pageMetadata } from "@/lib/seo/metadata";
import { siteLinks } from "@/lib/site-links";

const description =
  "Explore tools for loyalty partnerships, points, and vouchers, and find the right setup for your program and member experience.";

export const metadata = pageMetadata({
  title: "Loyalty Solutions",
  description,
  path: siteLinks.solutions,
});

const directories = navigationItems.filter(
  (item): item is NavigationMenu =>
    item.type === "menu" && (item.id === "platform" || item.id === "solutions"),
);

export default function SolutionsPage() {
  return (
    <div className="bg-surface-soft">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-10 sm:py-16 lg:py-20">
        <header className="mb-10 max-w-2xl sm:mb-14">
          <h1 className="mb-4 text-[clamp(48px,7vw,96px)] leading-none tracking-[-0.072em]">
            Loyalty <em>solutions.</em>
          </h1>
          <p className="m-0 text-lg leading-relaxed text-ink-muted">
            {description}
          </p>
        </header>
        {directories.map(({ id, sections }) => (
          <section key={id} className="border-t border-line py-8 sm:py-10">
            <h2 className="mb-6 text-3xl tracking-tight sm:mb-8">
              {id === "platform" ? "Platform capabilities" : "Use cases"}
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,16rem),1fr))] gap-8">
              {sections.map(({ label, links }) => (
                <div key={label}>
                  <h3 className="mb-3 text-lg font-bold tracking-tight">
                    {label}
                  </h3>
                  <ul className="m-0 list-none space-y-2 p-0">
                    {links.map(({ href, label }) => (
                      <li key={href}>
                        <TextLink href={href} prefetch={false}>
                          {label} <Arrow />
                        </TextLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
