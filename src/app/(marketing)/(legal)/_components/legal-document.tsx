import Link from "next/link";
import { createElement, type ReactNode } from "react";
import { ArticleBody } from "@/app/_components/editorial/article-body";
import { TextLink } from "@/app/_components/ui/text-link";
import { siteLinks } from "@/lib/site-links";
import { cn } from "@/lib/utils";
import type { LegalDocument, LegalNode } from "../_lib/legal-types";
import { LegalContents } from "./legal-contents";

const documents = [
  { title: "Privacy Policy", href: siteLinks.privacyPolicy },
  { title: "Terms of Use", href: siteLinks.termsOfUse },
];

function renderNodes(
  nodes: readonly LegalNode[],
  parentKey: string,
): ReactNode[] {
  return nodes.map((node, index) => {
    if (typeof node === "string") return node;
    const key = `${parentKey}-${index}`;
    const props = {
      key,
      ...(node.id && { id: node.id }),
      ...(node.tag === "a" && { href: node.href }),
      ...(node.tag === "ol" && { type: node.type, start: node.start }),
    };

    return createElement(
      node.tag,
      props,
      node.tag === "br" ? undefined : renderNodes(node.children, key),
    );
  });
}

export function LegalDocumentView({ document }: { document: LegalDocument }) {
  return (
    <div className="bg-surface-soft">
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-14 sm:px-10 sm:pt-14 lg:pb-20">
        <header>
          <h1
            id="legal-title"
            className="mb-8 scroll-mt-8 text-[clamp(40px,6vw,72px)] leading-[1.06] tracking-[-0.06em]"
          >
            {document.title}
          </h1>
          <nav
            aria-label="Legal documents"
            className="flex flex-wrap gap-x-7 border-b border-line"
          >
            {documents.map(({ title, href }) => (
              <Link
                key={href}
                href={href}
                prefetch={false}
                aria-current={document.href === href ? "page" : undefined}
                className={cn(
                  "inline-flex min-h-12 items-center border-b-2 pb-3 text-sm font-extrabold transition-colors",
                  document.href === href
                    ? "border-teal text-teal-dark"
                    : "border-transparent text-ink-muted hover:border-ink-muted hover:text-ink",
                )}
              >
                {title}
              </Link>
            ))}
          </nav>
        </header>
        <div className="mt-7 grid min-w-0 gap-8 lg:mt-10 lg:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] lg:gap-14">
          <LegalContents sections={document.sections} />
          <article
            aria-labelledby="legal-title"
            className="min-w-0 max-w-[78ch]"
          >
            <ArticleBody
              className={cn(
                "text-base leading-[1.8] sm:text-[17px]",
                "[&_h2]:mt-0 [&_h2]:text-[clamp(24px,2.8vw,30px)] [&_h2]:leading-[1.3] [&_h2]:font-semibold [&_h2]:tracking-[-0.035em]",
                "[&_h3]:text-[22px] [&_h3]:leading-[1.4] [&_h3]:font-semibold [&_h3]:tracking-[-0.025em]",
                "[&_strong]:font-bold [&_li]:pl-1 [&_li+li]:mt-3 [&_li>p+p]:mt-4 [&_ol_ol]:my-4 [&_ol_ul]:my-4",
                "[&_ol[type=a]]:list-[lower-alpha] [&_ol[type=i]]:list-[lower-roman]",
              )}
            >
              <div>{renderNodes(document.introduction, "introduction")}</div>
              {document.sections.map(({ id, title, content }) => (
                <section
                  key={id}
                  id={id}
                  className="mt-10 scroll-mt-8 sm:mt-12"
                >
                  <h2>{title}</h2>
                  <div>{renderNodes(content, id)}</div>
                </section>
              ))}
            </ArticleBody>
            <TextLink href="#legal-title" className="mt-10 text-sm">
              Back to top
            </TextLink>
          </article>
        </div>
      </div>
    </div>
  );
}
