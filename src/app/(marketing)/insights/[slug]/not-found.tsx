import { ArrowLeft } from "lucide-react";
import { TextLink } from "@/app/_components/ui/text-link";

export default function InsightNotFound() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-14 sm:px-10 sm:py-20">
      <h1 className="mb-5 text-[clamp(38px,6vw,72px)] leading-[1.04]">
        Article not found
      </h1>
      <TextLink href="/insights">
        <ArrowLeft size={16} aria-hidden="true" /> All insights
      </TextLink>
    </section>
  );
}
