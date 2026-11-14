import { MoveUpRight } from "lucide-react";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function Arrow({
  className,
  size = 18,
  strokeWidth = 1.5,
  ...props
}: ComponentProps<typeof MoveUpRight>) {
  return (
    <MoveUpRight
      {...props}
      size={size}
      strokeWidth={strokeWidth}
      className={cn("arrow shrink-0", className)}
      aria-hidden="true"
      focusable="false"
    />
  );
}
