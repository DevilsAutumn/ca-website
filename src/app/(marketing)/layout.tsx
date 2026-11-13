import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { SiteFooter } from "../_components/layout/site-footer";
import { SiteHeader } from "../_components/navigation/site-header";
export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <a
        className={cn(
          "skip-link absolute left-4 top-2.5 z-100 bg-ink text-white text-[14px] font-extrabold",
          "transform-[translateY(-160%)] transition-[transform] duration-180 ease-[ease] py-2.5 px-3.5",
          "focus:transform-[translateY(0)]",
        )}
        href="#main-content"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content">{children}</main>
      <SiteFooter />
    </>
  );
}
