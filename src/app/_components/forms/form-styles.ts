import { cn } from "@/lib/utils";

export const formControlClassName = cn(
  "block min-h-12 w-full min-w-0 border border-ink-muted/75 bg-surface-soft px-3.5 text-[16px] text-ink",
  "focus:border-teal focus:outline-2 focus:outline-offset-2 focus:outline-teal aria-invalid:border-destructive",
);
