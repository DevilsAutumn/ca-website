import { pageMetadata } from "@/lib/seo/metadata";
import { websiteStructuredData } from "@/lib/seo/structured-data";
import { ClosingSection } from "../_components/marketing/closing-section";
import { ComparisonSection } from "../_components/marketing/comparison-section";
import { HeroSection } from "../_components/marketing/hero-section";
import { MarketplaceSection } from "../_components/marketing/marketplace-section";
import { OperationsSection } from "../_components/marketing/operations-section";
import { OrientationSection } from "../_components/marketing/orientation-section";
import { PlatformSection } from "../_components/marketing/platform-section";
import { ProofSection } from "../_components/marketing/proof-section";
import { SignalStrip } from "../_components/marketing/signal-strip";
import { StoriesSection } from "../_components/marketing/stories-section";
import { JsonLd } from "../_components/seo/json-ld";

export const metadata = pageMetadata({
  title: "Loyalty Partnerships Platform",
  description:
    "Connect loyalty partners, let members earn and redeem across brands, and manage partnerships through one API-first loyalty platform.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <JsonLd data={websiteStructuredData} />
      <HeroSection />
      <SignalStrip />
      <PlatformSection />
      <MarketplaceSection />
      <ProofSection />
      <OperationsSection />
      <ComparisonSection />
      <OrientationSection />
      <StoriesSection />
      <ClosingSection />
    </>
  );
}
