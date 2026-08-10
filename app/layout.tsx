import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { AppProvider } from "./app-provider";

import "../public/assets/css/animate.css";
import "swiper/css";
import "swiper/css/navigation";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://inclusivegrowth.org.et"),
  title: { default: "Inclusive Growth (IG) | Inclusive Technology & Disability Empowerment in Ethiopia", template: "%s | Inclusive Growth Ethiopia" },
  description: "Inclusive Growth Ethiopia NGO advances disability inclusion, inclusive technology, and the empowerment of women and youth with disabilities in Addis Ababa and across Ethiopia.",
  keywords: ["Inclusive Growth Ethiopia NGO", "Disability Inclusion Addis Ababa", "Inclusive Technology PWD Ethiopia", "Women and Youth with Disabilities Empowerment", "Civil Society Organization Registry 7648"],
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "en_ET", url: "/", siteName: "Inclusive Growth", title: "Inclusive Growth (IG) | Opportunity for All, Barrier to None", description: "An Ethiopian civil society organization advancing inclusion, accessibility, and equitable opportunity.", images: [{ url: "/logo.png", width: 512, height: 512, alt: "Inclusive Growth NGO Logo - Opportunity for All, Barrier to None" }] },
  twitter: { card: "summary_large_image", title: "Inclusive Growth (IG) | Disability Empowerment in Ethiopia", description: "Inclusive Growth advances accessible, equitable opportunity for women, youth with disabilities, and marginalized communities.", images: ["/logo.png"] },
  robots: { index: true, follow: true }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org", "@type": "NGO", name: "Inclusive Growth (IG)", alternateName: "Inclusive Growth Ethiopia", url: "https://inclusivegrowth.org.et", logo: "https://inclusivegrowth.org.et/logo.png",
    description: "Inclusive Growth is an Ethiopian civil society organization dismantling barriers and empowering women, youth with disabilities, and marginalized communities through the 7-I-CHESTE pillars and I-CREATE S³ implementation engine.",
    identifier: { "@type": "PropertyValue", propertyID: "ACSO Registry Number", value: "7648" }, address: { "@type": "PostalAddress", addressLocality: "Addis Ababa", addressCountry: "ET" }, telephone: ["+251913119669", "+251911278048"], email: ["inclusivgrowth@gmail.com", "dinkayehu.asefa@inclusivegrowth.org.et"], slogan: "Opportunity for All, Barrier to None!"
  };
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      </head>
      <body className={cn("bg-background min-h-screen font-sans antialiased")}>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
