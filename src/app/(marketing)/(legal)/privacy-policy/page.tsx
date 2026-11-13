import { pageMetadata } from "@/lib/seo/metadata";
import { LegalDocumentView } from "../_components/legal-document";
import { privacyPolicy } from "../_content/privacy-policy";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: "Read the Currency Alliance Privacy Policy.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return <LegalDocumentView document={privacyPolicy} />;
}
