import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { brandConfig } from "@/config/brand";

export const metadata: Metadata = {
  metadataBase: new URL(brandConfig.url),
  title: {
    default: brandConfig.seo.defaultTitle,
    template: `%s | ${brandConfig.name}`
  },
  description: brandConfig.seo.defaultDescription,
  openGraph: {
    title: brandConfig.seo.defaultTitle,
    description: brandConfig.seo.defaultDescription,
    url: brandConfig.url,
    siteName: brandConfig.name,
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
