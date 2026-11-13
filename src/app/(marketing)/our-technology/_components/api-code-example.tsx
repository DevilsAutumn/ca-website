import { FileCode2 } from "lucide-react";
import {
  CodeBlock,
  CodeBlockContent,
  CodeBlockHeader,
  CodeBlockLine,
  CodeBlockTitle,
} from "@/components/ui/code-block";
import { highlightCode } from "@/lib/highlighter";
import { cn } from "@/lib/utils";
import { accrualRequestExample } from "../_content/api-example";

export async function ApiCodeExample() {
  const lines = await highlightCode(accrualRequestExample, "python");

  return (
    <CodeBlock
      className={cn(
        "dark rounded-[4px] border-line-dark bg-[color-mix(in_srgb,var(--white)_3%,var(--ink))] text-white",
        "dark:bg-[color-mix(in_srgb,var(--white)_3%,var(--ink))] max-[801px]:max-w-150",
        "has-[>[data-slot=code-block-content]:focus-visible]:border-teal-pale",
        "has-[>[data-slot=code-block-content]:focus-visible]:ring-teal-pale/40",
      )}
      aria-label="Python example: issue points with a direct accrual"
    >
      <CodeBlockHeader className="border-b border-line-dark px-5 py-4 max-[541px]:px-4">
        <CodeBlockTitle className="flex items-center gap-2 text-[13px] text-teal-pale">
          <FileCode2 size={16} strokeWidth={1.5} aria-hidden="true" />
          accrual.py
        </CodeBlockTitle>
        <span className="ms-auto text-[12px] text-dark-muted">Python</span>
      </CodeBlockHeader>
      <CodeBlockContent
        lineNumbers
        className={cn(
          "px-5 py-5 text-[12px] leading-[1.85] group-has-data-[slot=code-block-header]/code-block:pt-5",
          "max-[541px]:px-4",
        )}
        aria-label="Direct accrual API request"
      >
        {lines.map((line) => (
          <CodeBlockLine key={line.number}>{line.content}</CodeBlockLine>
        ))}
      </CodeBlockContent>
    </CodeBlock>
  );
}
