import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Poppins } from "next/font/google";
import { headers } from "next/headers";

import { Analytics } from "@/components/seo/Analytics";
import { languageAlternates } from "@/lib/seo";
import "./globals.css";

const defaultTitle = "Langia Online | Premium Language Training";
const defaultDescription =
  "Premium online language training in English, French, Spanish, and Portuguese for adults, kids, teens, and companies.";
const defaultSocialImage = {
  url: "/images/marketing-2026/home/hero-airport-professional-desktop-v2.png",
  width: 1831,
  height: 859,
  alt: "A professional preparing for an international opportunity",
};

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://langia.online",
  ),
  applicationName: "Langia Online",
  icons: {
    icon: [{ url: "/images/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/images/favicon.svg",
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  title: defaultTitle,
  description: defaultDescription,
  alternates: {
    canonical: "/es",
    languages: languageAlternates("/"),
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Langia Online",
    images: [defaultSocialImage],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const requestHeaders = await headers();
  const routeLanguage = requestHeaders.get("x-langia-locale") ?? "es";
  const documentLanguage = routeLanguage === "pt" ? "pt-BR" : routeLanguage;

  return (
    <html
      lang={documentLanguage}
      data-scroll-behavior="smooth"
      className={`${plusJakartaSans.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
