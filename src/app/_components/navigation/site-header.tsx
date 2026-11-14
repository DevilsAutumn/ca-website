import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { cn } from "@/lib/utils";
import { Arrow } from "../ui/arrow";
import { DesktopNavigation } from "./desktop-navigation";
import { MobileNavigation } from "./mobile-navigation";
import { NavigationActions } from "./navigation-actions";

export function SiteHeader() {
  return (
    <header className="site-header bg-paper relative z-20">
      <div
        className={cn(
          "announcement bg-ink text-teal-wash text-[13px] tracking-[0.02em] flex items-center justify-center",
          "leading-[1.5] py-2.5 px-[5vw] gap-3.25 [&_>_span]:text-teal-pale [&_>_span]:uppercase",
          "[&_>_span]:font-extrabold [&_>_span]:tracking-[0.15em] [&_>_span]:text-[12px] [&_a]:text-white",
          "[&_a]:underline [&_a]:underline-offset-[3px] [&_a]:ml-1.25 max-[541px]:justify-start max-[541px]:flex-wrap",
          "max-[541px]:py-2.25 max-[541px]:px-4.5 max-[541px]:gap-2 max-[541px]:[&_a]:basis-full max-[541px]:[&_a]:ml-0",
        )}
      >
        <span>New</span> Loyalty partnerships, without the long integration
        cycle{" "}
        <Link href="/#platform">
          See how it works{" "}
          <Arrow size={14} className="inline-block align-middle" />
        </Link>
      </div>
      <div
        className={cn(
          "nav-wrap max-w-7xl h-21.5 flex items-center justify-between m-auto py-0 px-10 max-lg:h-18.5",
          "max-lg:px-6",
        )}
      >
        <Link
          href="/"
          className="brand flex items-center text-[13px] leading-[1.03] tracking-[-0.04em] gap-2.25 [&_strong]:font-extrabold"
          aria-label="Currency Alliance home"
        >
          <Image
            src="/logo.svg"
            alt=""
            width={40}
            height={23}
            priority
            className="brand-mark w-10 h-auto object-contain"
          />
          <span>
            Currency
            <br />
            <strong>Alliance</strong>
          </span>
        </Link>

        <Suspense fallback={null}>
          <DesktopNavigation />
        </Suspense>

        <NavigationActions layout="desktop" />

        <Suspense fallback={null}>
          <MobileNavigation />
        </Suspense>
      </div>
    </header>
  );
}
