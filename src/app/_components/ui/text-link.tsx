import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
type TextLinkProps = ComponentProps<typeof Link> & {
  tone?: "default" | "light";
};
export function TextLink({
  className,
  tone = "default",
  ...props
}: TextLinkProps) {
  return (
    <Link
      className={cn(
        "inline-flex items-center gap-2.5 border-b border-solid border-ink pb-1.25 text-[13px] leading-[1.4]",
        "font-extrabold whitespace-nowrap text-ink transition-[color,border-color,transform] duration-180 ease-[ease]",
        "hover:border-teal-dark hover:text-teal-dark hover:transform-[translateY(-1px)]",
        tone === "light" &&
          "text-link-light border-white text-white hover:border-teal-pale hover:text-teal-pale",
        className,
      )}
      {...props}
    />
  );
}
