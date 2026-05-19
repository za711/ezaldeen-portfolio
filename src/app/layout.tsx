import type { Metadata } from "next";
import { Cairo, IBM_Plex_Mono, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/animations/CustomCursor";
import PageTransition from "@/components/animations/PageTransition";
import ScrollProgress from "@/components/animations/ScrollProgress";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { LanguageProvider } from "@/components/layout/LanguageProvider";
import { profile } from "@/data/profile";
import { siteKeywords } from "@/lib/constants";
import { SpeedInsights } from "@vercel/speed-insights/next";

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-arabic",
  display: "swap",
  preload: false
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
  preload: true
});

const ibmMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-mono",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Eng. Ezaldeen Albadai | مهندس مدني ومنسق مشاريع أول",
  description: "Portfolio of Eng. Ezaldeen Nasser Saad Albadai, Senior Project Coordinator and Civil Engineer specializing in humanitarian WASH, infrastructure, livelihoods, and donor reporting.",
  keywords: siteKeywords,
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  openGraph: {
    title: "Eng. Ezaldeen Albadai | مهندس مدني ومنسق مشاريع أول",
    description: profile.summary.en,
    type: "profile",
    locale: "ar_YE",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ezaldeen Albadai Portfolio" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Eng. Ezaldeen Albadai",
    description: profile.summary.en,
    images: ["/og-image.png"]
  },
  robots: "index, follow"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={[cairo.variable, ibmPlexArabic.variable, ibmMono.variable, "font-sans"].join(" ")}>
        <LanguageProvider>
          <ScrollProgress />
          <CustomCursor />
          <Header />
          <PageTransition>{children}</PageTransition>
          <Footer />
        </LanguageProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
