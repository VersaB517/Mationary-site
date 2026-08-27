import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { site } from "@/content/site";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display-face",
  display: "swap",
  axes: ["SOFT", "opsz"],
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans-face",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? site.url;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.nameTitleCase} — ${site.tagline}`,
    template: `%s — ${site.nameTitleCase}`,
  },
  description: `${site.descriptor} ${site.supportingLine}`,
  keywords: [
    "AI build studio",
    "build an app with AI",
    "build AI agents without coding",
    "AI app building help",
    "AI automation help",
    "nontechnical founders",
    "Rochester NY AI help",
  ],
  applicationName: site.nameTitleCase,
  authors: [{ name: site.nameTitleCase }],
  creator: site.nameTitleCase,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: site.nameTitleCase,
    title: `${site.nameTitleCase} — ${site.tagline}`,
    description: `${site.descriptor} ${site.supportingLine}`,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.nameTitleCase} — ${site.tagline}`,
    description: site.descriptor,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#fbf9f6",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="min-h-screen antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-5 focus:py-2 focus:text-sm focus:text-paper"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
