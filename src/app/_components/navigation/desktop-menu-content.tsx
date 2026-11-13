import Link from "next/link";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Arrow } from "../ui/arrow";
import {
  isCurrentNavigationLink,
  type NavigationLink,
  type NavigationMenu,
} from "./navigation-links";

function DesktopMenuLink({
  link,
  pathname,
}: {
  link: NavigationLink;
  pathname: string;
}) {
  return (
    <li>
      <NavigationMenuLink
        closeOnClick
        render={
          <Link
            href={link.href}
            prefetch={false}
            target={link.target}
            rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
            aria-label={
              link.target === "_blank"
                ? link.label + " (opens in a new tab)"
                : undefined
            }
          />
        }
        active={isCurrentNavigationLink(pathname, link.href)}
        className={cn(
          "ca-nav-link flex min-h-11 items-center justify-between gap-3 rounded-none px-3 py-2.5 text-[14px] leading-[1.5] font-semibold text-ink-soft",
          "in-data-[slot=navigation-menu-content]:rounded-none",
          "hover:bg-paper hover:text-teal-dark focus:bg-paper focus-visible:text-teal-dark",
          "focus-visible:ring-0 focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-teal focus-visible:outline-offset-[-2px]",
          "data-active:bg-transparent data-active:text-teal-dark data-active:underline data-active:decoration-teal data-active:underline-offset-4",
          "data-active:hover:bg-paper data-active:focus:bg-paper",
        )}
      >
        <span>{link.label}</span>
        {link.target === "_blank" && <Arrow />}
      </NavigationMenuLink>
    </li>
  );
}

export function DesktopMenuContent({
  menu,
  pathname,
}: {
  menu: NavigationMenu;
  pathname: string;
}) {
  return (
    <div
      className={cn(
        "grid gap-6 p-5",
        menu.sections.length === 3 && "grid-cols-3",
        menu.sections.length === 2 && "grid-cols-2",
        menu.sections.length === 1 && "grid-cols-1 gap-0 p-2",
      )}
    >
      {menu.sections.map((section) => (
        <div
          key={section.label ?? menu.id}
          role={section.label ? "group" : undefined}
          aria-label={section.label}
        >
          {section.label && (
            <p className="mt-1 mb-3 px-3 text-[12px] leading-[1.4] font-extrabold tracking-[0.09em] text-teal-dark uppercase">
              {section.label}
            </p>
          )}
          <ul className="m-0 list-none space-y-1 p-0">
            {section.links.map((link) => (
              <DesktopMenuLink
                key={link.href}
                link={link}
                pathname={pathname}
              />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
