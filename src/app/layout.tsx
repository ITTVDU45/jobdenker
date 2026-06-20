import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { StickyNav } from "@/components/layout/StickyNav";
import { ChatWidget } from "@/components/ui/ChatWidget";
import { ServiceWorker } from "@/components/ui/ServiceWorker";
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
  applicationName: "Jobdenker",
  appleWebApp: {
    capable: true,
    title: "Jobdenker",
    statusBarStyle: "default",
  },
  formatDetection: { telephone: false },
  icons: {
    icon: [
      { url: "/icons/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#12324a",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
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
        <ChatWidget />
        <ServiceWorker />
      </body>
    </html>
  );
}

