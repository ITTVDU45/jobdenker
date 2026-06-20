import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { StickyNav } from "@/components/layout/StickyNav";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jobdenker.de"),
  title: {
    default: "Jobdenker | KI-gestützte Recruiting Software",
    template: "%s | Jobdenker",
  },
  description:
    "Jobdenker automatisiert Recruiting, Personalvermittlung, KI-Matching, CV-Erstellung, Akquise, WhatsApp-Kommunikation und internationale Bewerberprozesse.",
  keywords: ["Recruiting Software", "KI Personalvermittlung", "AI Recruiting", "Bewerbermanagement", "KI Matching"],
  openGraph: {
    title: "Jobdenker | Vermittlung, die denkt.",
    description: "KI-gestütztes Recruiting für den internationalen Arbeitsmarkt.",
    url: "https://jobdenker.de",
    siteName: "Jobdenker",
    locale: "de_DE",
    type: "website",
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#07221C",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
      <body>
        <StickyNav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

