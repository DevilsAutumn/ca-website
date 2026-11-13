import { ChevronDown } from "lucide-react";
import type { LegalSection } from "../_lib/legal-types";

function ContentsLinks({ sections }: { sections: readonly LegalSection[] }) {
  return (
    <nav aria-label="On this page">
      <ul className="m-0 list-none space-y-1 p-0">
        {sections.map(({ id, title }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className="block border-l-2 border-transparent px-3 py-1.5 text-sm leading-6 text-ink-muted transition-colors hover:border-teal hover:bg-paper hover:text-ink focus-visible:border-teal"
            >
              {title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function LegalContents({
  sections,
}: {
  sections: readonly LegalSection[];
}) {
  return (
    <aside className="min-w-0 lg:sticky lg:top-8 lg:self-start">
      <details className="group border border-line bg-surface p-4 lg:hidden">
        <summary className="flex min-h-8 cursor-pointer list-none items-center justify-between gap-4 text-sm font-extrabold [&::-webkit-details-marker]:hidden">
          On this page
          <ChevronDown
            size={18}
            aria-hidden="true"
            className="shrink-0 transition-transform group-open:rotate-180"
          />
        </summary>
        <div className="mt-3 max-h-96 overflow-y-auto border-t border-line pt-3">
          <ContentsLinks sections={sections} />
        </div>
      </details>
      <div className="hidden max-h-[calc(100svh-4rem)] overflow-y-auto pr-3 lg:block">
        <p className="mb-4 pl-3 text-sm font-extrabold">On this page</p>
        <ContentsLinks sections={sections} />
      </div>
    </aside>
  );
}
