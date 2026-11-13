"use client";
import { cn } from "@/lib/utils";
import { useState, type ReactNode } from "react";
export function PlatformStackInteraction({
  children,
}: {
  children: ReactNode;
}) {
  const [hovered, setHovered] = useState(false);
  const [opened, setOpened] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const expanded = hovered || opened;
  return (
    <button
      className={cn(
        "home-network-stack relative block w-[min(100%,520px)] aspect-[5/3] shrink-0 bg-transparent text-inherit",
        "[font:inherit] text-left cursor-pointer pointer-events-none p-0 border-0 border-none focus-visible:outline-2",
        "focus-visible:outline-solid focus-visible:outline-teal focus-visible:outline-offset-[4px]",
        "focus-visible:rounded-[6px]",
      )}
      type="button"
      data-platform-stack
      data-expanded={expanded}
      data-interacted={hasInteracted}
      aria-label="Explore the loyalty API, rules engine, and settlement layers"
      aria-expanded={expanded}
      onPointerEnter={(event) => {
        if (event.pointerType !== "touch") {
          setHasInteracted(true);
          setHovered(true);
        }
      }}
      onPointerLeave={(event) => {
        if (event.pointerType !== "touch") setHovered(false);
      }}
      onClick={(event) => {
        setHasInteracted(true);
        if (event.detail === 0 || !hovered) setOpened((current) => !current);
      }}
      onBlur={() => setOpened(false)}
    >
      {children}
    </button>
  );
}
