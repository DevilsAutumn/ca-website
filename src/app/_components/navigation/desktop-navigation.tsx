"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  isCurrentNavigationLink,
  isNavigationItemCurrent,
  navigationItems,
} from "./navigation-links";
import { DesktopMenuContent } from "./desktop-menu-content";

const navigationItemClassName = cn(
  "inline-flex items-center whitespace-nowrap rounded-none bg-transparent text-ink-soft text-[13px] font-bold min-h-11 py-2.5 px-0 transition-colors",
  "decoration-teal decoration-2 underline-offset-8 hover:bg-transparent hover:text-teal-dark focus:bg-transparent",
  "focus-visible:text-teal-dark focus-visible:ring-0 focus-visible:outline-solid focus-visible:outline-2",
  "focus-visible:outline-teal focus-visible:outline-offset-4",
);

const navigationTriggerClassName = cn(
  "ca-nav-trigger",
  navigationItemClassName,
  "data-popup-open:bg-transparent data-popup-open:hover:bg-transparent data-popup-open:text-teal-dark data-popup-open:underline",
  "data-open:bg-transparent data-open:hover:bg-transparent data-open:focus:bg-transparent",
  "data-current:text-teal-dark data-current:underline",
);

const navigationLinkClassName = cn(
  "ca-nav-direct-link leading-[1.4285714286]",
  navigationItemClassName,
  "data-active:bg-transparent data-active:hover:bg-transparent data-active:focus:bg-transparent",
  "data-active:text-teal-dark data-active:underline",
);

export function DesktopNavigation() {
  const pathname = usePathname();

  return (
    <NavigationMenu
      className="main-nav desktop-navigation hidden max-w-none flex-[0_1_auto] items-center text-ink-soft lg:flex"
      aria-label="Main navigation"
      popupClassName="ca-nav-popup rounded-none bg-transparent shadow-none ring-0 text-inherit max-lg:hidden"
    >
      <NavigationMenuList className="gap-6">
        {navigationItems.map((item) => (
          <NavigationMenuItem
            key={item.id}
            value={item.id}
            className="flex items-center"
          >
            {item.type === "menu" ? (
              <>
                <NavigationMenuTrigger
                  className={navigationTriggerClassName}
                  data-current={
                    isNavigationItemCurrent(pathname, item) ? "" : undefined
                  }
                >
                  {item.label}
                </NavigationMenuTrigger>
                <NavigationMenuContent
                  role="group"
                  aria-label={item.label + " navigation"}
                  className={cn(
                    "ca-nav-content h-auto max-h-(--available-height) overflow-y-auto overscroll-contain rounded-none border border-line bg-surface p-0 text-ink shadow-[0_16px_28px_rgba(23,37,42,0.1)]",
                    item.sections.length === 3 &&
                      "w-[min(920px,calc(100vw-48px))]",
                    item.sections.length === 2 &&
                      "w-[min(680px,calc(100vw-48px))]",
                    item.sections.length === 1 && "w-80",
                  )}
                >
                  <DesktopMenuContent menu={item} pathname={pathname} />
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink
                closeOnClick
                render={<Link href={item.href} />}
                className={navigationLinkClassName}
                active={isCurrentNavigationLink(pathname, item.href)}
              >
                {item.label}
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
