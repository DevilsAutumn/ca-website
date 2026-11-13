import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { siteIndexable, siteName, siteOrigin } from "@/lib/seo/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: siteName,
  robots: siteIndexable ? undefined : { index: false, follow: false },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} h-full antialiased`}>
      <body>{children}</body>
    </html>
  );
}
