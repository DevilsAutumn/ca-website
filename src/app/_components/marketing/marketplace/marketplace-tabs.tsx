import {
  ContentTabs,
  type ContentTab,
} from "@/app/_components/ui/content-tabs";

export function MarketplaceTabs({ items }: { items: ContentTab[] }) {
  return (
    <ContentTabs
      items={items}
      appearance="dark"
      label="Explore loyalty partnership examples"
    />
  );
}
