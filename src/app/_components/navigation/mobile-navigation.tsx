"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Accordion } from "@base-ui/react/accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Arrow } from "../ui/arrow";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavigationActions } from "./navigation-actions";
import {
  isCurrentNavigationLink,
  isNavigationItemCurrent,
  navigationItems,
  type NavigationLink,
} from "./navigation-links";

function MobileMenuLink({
  link,
  pathname,
  onNavigate,
}: {
  link: NavigationLink;
  pathname: string;
  onNavigate: () => void;
}) {
  const current = isCurrentNavigationLink(pathname, link.href);

  return (
    <li>
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
        onClick={onNavigate}
        aria-current={current ? "page" : undefined}
        className={cn(
          "group flex min-h-11 items-center justify-between gap-3 py-2.5 text-[14px] leading-[1.5] font-semibold text-ink-soft",
          "hover:text-teal-dark focus-visible:text-teal-dark aria-[current=page]:text-teal-dark",
        )}
      >
        <span className="decoration-teal decoration-2 underline-offset-4 group-aria-[current=page]:underline">
          {link.label}
        </span>
        {link.target === "_blank" && <Arrow />}
      </Link>
    </li>
  );
}

export function MobileNavigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const closeMenu = () => setMobileOpen(false);
  const currentMenu = navigationItems.find(
    (item) => item.type === "menu" && isNavigationItemCurrent(pathname, item),
  );

  return (
    <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
      <SheetTrigger
        className={cn(
          "menu-toggle hidden h-11 w-11 border-0 bg-transparent p-2 max-lg:block",
          "[&_span]:mx-0 [&_span]:my-1.25 [&_span]:block [&_span]:h-px [&_span]:bg-ink",
        )}
        aria-label="Open navigation"
      >
        <span />
        <span />
        <span />
      </SheetTrigger>
      <SheetContent
        side="right"
        className={cn(
          "mobile-nav-sheet w-[min(88vw,380px)]! max-w-none! rounded-none border-l border-line bg-paper p-0 text-ink",
          "gap-0 overflow-y-auto overscroll-contain [&_[data-slot=sheet-close]]:text-ink",
          "[&_[data-slot=sheet-close]]:fixed [&_[data-slot=sheet-close]]:top-4 [&_[data-slot=sheet-close]]:right-4",
          "[&_[data-slot=sheet-close]]:z-3 [&_[data-slot=sheet-close]]:h-8 [&_[data-slot=sheet-close]]:w-8",
        )}
      >
        <SheetHeader className="mobile-nav-header sticky top-0 z-1 border-b border-line bg-paper px-6 pt-7 pb-5.5">
          <SheetTitle className="text-[18px] font-medium text-ink">
            Menu
          </SheetTitle>
          <SheetDescription className="text-[14px] text-ink-muted">
            Explore Currency Alliance.
          </SheetDescription>
        </SheetHeader>
        <nav
          className="mobile-navigation px-6 pt-2 pb-6"
          aria-label="Mobile navigation"
        >
          <Accordion.Root defaultValue={currentMenu ? [currentMenu.id] : []}>
            {navigationItems.map((item) =>
              item.type === "menu" ? (
                <Accordion.Item
                  key={item.id}
                  value={item.id}
                  className="border-b border-line"
                >
                  <Accordion.Header className="m-0">
                    <Accordion.Trigger
                      data-current={
                        isNavigationItemCurrent(pathname, item) ? "" : undefined
                      }
                      className={cn(
                        "group flex min-h-14 w-full items-center justify-between gap-4 bg-transparent py-3 text-left",
                        "text-[16px] font-bold text-ink hover:text-teal-dark data-current:text-teal-dark",
                        "focus-visible:outline-2 focus-visible:outline-teal focus-visible:outline-offset-[-2px]",
                      )}
                    >
                      {item.label}
                      <ChevronDown
                        size={16}
                        aria-hidden="true"
                        className="shrink-0 transition-transform duration-180 group-data-panel-open:rotate-180"
                      />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Panel className="data-ending-style:hidden">
                    <div className="space-y-5 pt-1 pb-5">
                      {item.sections.map((section) => (
                        <div
                          key={section.label ?? item.id}
                          role={section.label ? "group" : undefined}
                          aria-label={section.label}
                        >
                          {section.label && (
                            <p className="mb-2 text-[12px] leading-[1.5] font-extrabold tracking-[0.08em] text-teal-dark uppercase">
                              {section.label}
                            </p>
                          )}
                          <ul className="m-0 list-none p-0">
                            {section.links.map((link) => (
                              <MobileMenuLink
                                key={link.href}
                                link={link}
                                pathname={pathname}
                                onNavigate={closeMenu}
                              />
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </Accordion.Panel>
                </Accordion.Item>
              ) : (
                <div key={item.id} className="border-b border-line">
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    aria-current={
                      isCurrentNavigationLink(pathname, item.href)
                        ? "page"
                        : undefined
                    }
                    className={cn(
                      "flex min-h-14 items-center py-3 text-[16px] font-bold text-ink",
                      "hover:text-teal-dark aria-[current=page]:text-teal-dark",
                      "decoration-teal decoration-2 underline-offset-4 aria-[current=page]:underline",
                    )}
                  >
                    {item.label}
                  </Link>
                </div>
              ),
            )}
          </Accordion.Root>
        </nav>
        <NavigationActions layout="mobile" onNavigate={closeMenu} />
      </SheetContent>
    </Sheet>
  );
}
