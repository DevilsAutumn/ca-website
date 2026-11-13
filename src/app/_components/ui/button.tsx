import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary";

type ButtonAppearance = {
  variant?: ButtonVariant;
};

type ButtonLinkProps = ComponentProps<typeof Link> & ButtonAppearance;
type ButtonProps = ComponentProps<"button"> & ButtonAppearance;

const buttonClassName = cn(
  "button inline-flex max-w-full min-h-11 items-center justify-center gap-3.25 border border-solid",
  "border-transparent px-4.5 py-3.25 text-[13px] leading-[1.4] font-extrabold tracking-[0.01em]",
  "transition-[transform,background-color,color,border-color] duration-180 ease-[ease]",
  "hover:transform-[translateY(-2px)] focus-visible:outline-2 focus-visible:outline-solid",
  "focus-visible:outline-teal focus-visible:outline-offset-3 [&>.arrow]:shrink-0",
);

const buttonVariants = {
  primary: "button-primary bg-teal text-white hover:bg-teal-dark",
  secondary:
    "button-secondary border-ink bg-transparent text-ink hover:bg-ink hover:text-white [&>.arrow]:text-teal",
} satisfies Record<ButtonVariant, string>;

export function Button({
  variant = "primary",
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        buttonClassName,
        buttonVariants[variant],
        "disabled:pointer-events-none disabled:opacity-60",
        className,
      )}
      {...props}
    />
  );
}

export function ButtonLink({
  variant = "primary",
  className,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(buttonClassName, buttonVariants[variant], className)}
      {...props}
    />
  );
}
