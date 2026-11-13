import "server-only";

import { DomUtils } from "htmlparser2";
import {
  parseWordPressArticle,
  renderWordPressArticle,
} from "@/lib/wordpress-content";
import { getWordPressImageUrl } from "@/lib/wordpress-images";

export function getArticleContent(html: string) {
  const nodes = parseWordPressArticle(html);
  const firstBlock = nodes.find(DomUtils.isTag);
  const firstImage =
    firstBlock?.name === "p"
      ? DomUtils.findOne((node) => node.name === "img", firstBlock.children)
      : null;
  // Existing case studies place a 150-pixel brand thumbnail in the opening paragraph.
  const logo =
    firstImage?.attribs.width === "150" &&
    firstImage.attribs.height === "150" &&
    firstImage.attribs.class?.split(/\s+/).includes("size-thumbnail")
      ? getWordPressImageUrl(firstImage.attribs.src)
      : null;

  return {
    logo,
    body: renderWordPressArticle(nodes, {
      omittedImage: logo ? firstImage : null,
    }),
  };
}
