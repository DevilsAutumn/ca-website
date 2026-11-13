import { pageMetadata } from "@/lib/seo/metadata";
import { LegalDocumentView } from "../_components/legal-document";
import { termsOfUse } from "../_content/terms-of-use";

export const metadata = pageMetadata({
  title: "Terms of Use",
  description:
    "Read the Currency Alliance Terms of Use, including the service and pricing schedules.",
  path: "/terms",
});

export default function TermsOfUsePage() {
  return <LegalDocumentView document={termsOfUse} />;
}
