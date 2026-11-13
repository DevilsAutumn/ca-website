export type LegalNode =
  | string
  | {
      tag: "p" | "strong" | "em" | "a" | "ol" | "ul" | "li" | "br" | "h3";
      children: LegalNode[];
      href?: string;
      id?: string;
      type?: "1" | "a" | "i";
      start?: number;
    };

export type LegalSection = {
  id: string;
  title: string;
  content: LegalNode[];
};

export type LegalDocument = {
  title: string;
  href: string;
  introduction: LegalNode[];
  sections: LegalSection[];
};
