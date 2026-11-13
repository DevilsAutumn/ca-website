"use client";
import type { ReactNode } from "react";
import { Tabs } from "@base-ui/react/tabs";
import { cn } from "@/lib/utils";
export type ContentTab = {
  value: string;
  label: string;
  content: ReactNode;
};
type ContentTabsProps = {
  items: readonly ContentTab[];
  label: string;
  appearance: "light" | "dark";
  keepMounted?: boolean;
};
export function ContentTabs({
  items,
  label,
  appearance,
  keepMounted,
}: ContentTabsProps) {
  if (items.length === 0) return null;

  const light = appearance === "light";
  return (
    <Tabs.Root
      defaultValue={items[0].value}
      className="flex min-w-0 flex-col gap-0"
    >
      <Tabs.List
        activateOnFocus
        aria-label={label}
        className={cn(
          "flex h-auto w-full items-center justify-start gap-0 overflow-x-auto rounded-none border-b bg-transparent p-0",
          light
            ? cn(
                "border-t border-line",
                "max-[601px]:[scrollbar-width:thin] max-[601px]:[scrollbar-color:var(--teal)_var(--paper)]",
              )
            : "border-line-dark",
        )}
      >
        {items.map((item) => (
          <Tabs.Tab
            key={item.value}
            value={item.value}
            className={cn(
              "relative inline-flex h-auto min-w-max flex-1 items-center justify-center gap-1.5 rounded-none border-0",
              "border-b-2 border-solid border-b-transparent bg-transparent text-[15px] leading-[1.4] whitespace-nowrap",
              "focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-offset-[-5px]",
              "focus-visible:shadow-none",
              light
                ? cn(
                    "min-h-16 px-3 py-4.5 font-bold text-ink-muted transition-[background-color,color,border-color] duration-180",
                    "ease-[ease] hover:bg-surface-soft hover:text-teal-dark focus-visible:outline-teal",
                    "data-[active]:border-b-teal data-[active]:bg-paper data-[active]:text-teal-dark [&+button]:border-l",
                    "[&+button]:border-l-line",
                  )
                : cn(
                    "min-h-14.5 px-5 py-4 font-[650] text-dark-muted transition-[color,border-color] duration-180 ease-[ease]",
                    "hover:text-white focus-visible:outline-teal-pale data-[active]:border-b-teal-pale data-[active]:text-white",
                  ),
              light
                ? cn(
                    "max-[801px]:px-2 max-[801px]:py-4 max-[801px]:text-[13px] max-[601px]:min-h-14.5 max-[601px]:flex-[1_0_auto]",
                    "max-[601px]:px-4.5",
                  )
                : "max-[381px]:min-h-13.5 max-[381px]:px-2 max-[381px]:py-3.5 max-[381px]:text-[14px]",
            )}
          >
            {item.label}
          </Tabs.Tab>
        ))}
      </Tabs.List>
      {items.map((item) => (
        <Tabs.Panel
          key={item.value}
          value={item.value}
          keepMounted={keepMounted}
          className="m-0 flex-1 text-sm outline-none data-ending-style:hidden [&[hidden]]:hidden"
        >
          {item.content}
        </Tabs.Panel>
      ))}
    </Tabs.Root>
  );
}
