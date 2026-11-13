import type { ReactNode } from "react";
import { ContentTabs } from "@/app/_components/ui/content-tabs";

type ServiceTab = {
  id: string;
  label: string;
  content: ReactNode;
};

export function ServiceTabs({ items }: { items: ServiceTab[] }) {
  return (
    <ContentTabs
      items={items.map(({ id, ...item }) => ({ value: id, ...item }))}
      appearance="light"
      label="Loyalty services"
      keepMounted
    />
  );
}
