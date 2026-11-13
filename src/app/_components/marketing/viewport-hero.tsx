"use client";

import { useLayoutEffect, useRef, type ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export function ViewportHero({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"section">) {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const header = document.querySelector<HTMLElement>(".site-header");
    if (!section || !header) return;

    const updateHeight = () => {
      section.style.setProperty(
        "--site-header-height",
        `${header.getBoundingClientRect().height}px`,
      );
    };

    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={cn(
        "flex min-h-[calc(100svh-var(--site-header-height))]",
        "[--site-header-height:8rem] max-lg:[--site-header-height:7.125rem]",
        "max-[541px]:[--site-header-height:10.5rem]",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}
