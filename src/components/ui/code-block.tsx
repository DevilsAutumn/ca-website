import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

function CodeBlock({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="code-block"
      className={cn(
        "group/code-block relative flex w-full min-w-0 flex-col overflow-hidden rounded-lg border border-input text-sm text-foreground",
        "has-[>[data-slot=code-block-content]:focus-visible]:ring-3",
        "has-[>[data-slot=code-block-content]:focus-visible]:ring-ring/50",
        "has-[>[data-slot=code-block-content]:focus-visible]:border-ring dark:bg-input/30",
        className,
      )}
      {...props}
    />
  );
}

function CodeBlockHeader({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="code-block-header"
      className={cn(
        "flex min-w-0 shrink-0 items-center gap-2 px-3 pt-3 text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
}

function CodeBlockTitle({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="code-block-title"
      className={cn(
        "min-w-0 truncate font-sans text-sm font-medium text-foreground",
        "[&_svg]:pointer-events-none [&_svg]:inline-block [&_svg]:align-middle [&_svg:not([class*='size-'])]:size-3.5",
        className,
      )}
      {...props}
    />
  );
}

function CodeBlockContent({
  className,
  children,
  lineNumbers = false,
  ...props
}: ComponentProps<"pre"> & { lineNumbers?: boolean }) {
  return (
    <pre
      data-slot="code-block-content"
      data-numbered={lineNumbers || undefined}
      dir="ltr"
      tabIndex={0}
      className={cn(
        "min-h-0 min-w-0 overflow-auto px-3 py-3 text-start font-mono leading-relaxed outline-none [counter-reset:line_0]",
        "group-has-data-[slot=code-block-header]/code-block:pt-2",
        className,
      )}
      {...props}
    >
      <code
        data-slot="code-block-code"
        className="grid min-h-lh min-w-max content-start in-data-numbered:grid-cols-[auto_1fr]"
      >
        {children}
      </code>
    </pre>
  );
}

function CodeBlockLine({
  className,
  children,
  ...props
}: ComponentProps<"span">) {
  const empty =
    children === undefined ||
    children === null ||
    children === "" ||
    (Array.isArray(children) && children.length === 0);

  return (
    <span
      data-slot="code-block-line"
      className={cn(
        "relative -mx-3 block min-h-lh px-3 before:min-w-6 before:text-end before:text-muted-foreground",
        "in-data-numbered:col-span-2 in-data-numbered:grid in-data-numbered:grid-cols-subgrid in-data-numbered:gap-x-3",
        "in-data-numbered:[counter-increment:line] in-data-numbered:before:content-[counter(line)]",
        "in-data-numbered:before:select-none in-data-numbered:supports-[content:counter(line)_/_'']:before:content-[counter(line)_/_'']",
        className,
      )}
      {...props}
    >
      <span data-slot="code-block-line-content" className="min-w-0">
        {empty ? "\n" : children}
      </span>
    </span>
  );
}

export {
  CodeBlock,
  CodeBlockHeader,
  CodeBlockTitle,
  CodeBlockContent,
  CodeBlockLine,
};
