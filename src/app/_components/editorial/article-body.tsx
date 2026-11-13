import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function ArticleBody({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={cn(
        "min-w-0 text-[clamp(17px,1.5vw,20px)] leading-[1.75] wrap-break-word text-ink-soft",
        "[&_p]:my-0 [&_p+p]:mt-5 [&_h2]:mt-9 [&_h2]:mb-3 [&_h2]:text-[clamp(26px,3vw,34px)] [&_h2]:leading-[1.15] [&_h2]:text-ink",
        "[&_h3]:mt-7 [&_h3]:mb-2 [&_h3]:text-2xl [&_h4]:mt-6 [&_h4]:mb-2 [&_h4]:font-extrabold [&_[id]]:scroll-mt-6",
        "[&_a]:font-bold [&_a]:text-teal-dark [&_a]:underline [&_a]:underline-offset-4",
        "[&_blockquote]:my-7 [&_blockquote]:border-l-2 [&_blockquote]:border-teal [&_blockquote]:pl-5",
        "[&_ol]:my-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_ul]:my-5 [&_ul]:list-disc [&_ul]:pl-6 [&_figure]:my-6 [&_figcaption]:text-sm",
        "[&_table]:w-full [&_table]:border-collapse [&_table]:text-left [&_table]:text-base [&_table]:leading-relaxed",
        "[&_th]:bg-paper [&_:is(th,td)]:border [&_:is(th,td)]:border-line [&_:is(th,td)]:px-3 [&_:is(th,td)]:py-2 [&_:is(th,td)]:align-top",
        className,
      )}
    />
  );
}
