import "server-only";

import type { CSSProperties, ReactNode } from "react";
import { createHighlighterCore, type HighlighterCore } from "shiki/core";
import { createJavaScriptRegexEngine } from "shiki/engine/javascript";

type HighlightedLine = {
  number: number;
  content: ReactNode;
};

let highlighter: Promise<HighlighterCore> | undefined;

function getHighlighter() {
  highlighter ??= createHighlighterCore({
    themes: [
      import("shiki/themes/github-light.mjs"),
      import("shiki/themes/github-dark.mjs"),
    ],
    langs: [import("shiki/langs/python.mjs")],
    engine: createJavaScriptRegexEngine({ forgiving: true }),
  });

  return highlighter;
}

export async function highlightCode(
  code: string,
  language: "python",
): Promise<HighlightedLine[]> {
  "use cache";

  const shiki = await getHighlighter();
  const { tokens } = shiki.codeToTokens(code, {
    lang: language,
    themes: { light: "github-light", dark: "github-dark" },
    defaultColor: false,
  });

  return tokens.map((line, index) => ({
    number: index + 1,
    content: line.map((token) => (
      <span
        key={token.offset}
        style={token.htmlStyle as CSSProperties}
        className="text-(--shiki-light) dark:text-(--shiki-dark)"
      >
        {token.content}
      </span>
    )),
  }));
}
