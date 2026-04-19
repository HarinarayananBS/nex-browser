import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import PageTransition from "./components/PageTransition";
import { ThemeProvider } from "./components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nex24.vercel.app/"),
  title: {
    default: " Browser - Privacy-Focused Browser for Windows",
    template: "%s | Nex Browser",
  },
  description:
    "Nex Browser: A fast, privacy-focused web browser for Windows. Built with performance and user control in mind.",
  keywords: [
    "Nex Browser",
    "Windows browser",
    "Web browser",
    "Fast browser",
    "Privacy browser",
    "Modern browser",
    "Private browser",
    "Secure browser",
    "Browser download",
    "Windows 10 browser",
    "Windows 11 browser",
    "Chromium browser",
    "Privacy-focused browser",
    "Tracker blocking",
    "Hari",
    "Hari browser",
    "technology",
    "open source browser",
  ],
  authors: [{ name: "Hari", url: "https://portfolio-harinarayananbs-projects.vercel.app/" }],
  creator: "Hari",
  publisher: "Hari",
  alternates: {
    canonical: "https://nex24.vercel.app/",
    types: {
      "application/rss+xml": "https://nex24.vercel.app/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nex24.vercel.app/",
    siteName: "Nex Browser",
    title: "Nex Browser - Fast, Privacy-Focused Browser",
    description:
      "Nex Browser: A fast, privacy-focused web browser for Windows. Built with performance and user control in mind.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Nex Browser - Fast, Privacy-First Web Browser",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nex Browser - Fast, Privacy-Focused Browser",
    description:
      "Nex Browser: A fast, privacy-focused web browser for Windows. Built with performance and user control in mind.",
    images: ["/og.png"],
    creator: "@Hari",
    site: "@Hari",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Technology",
  classification: "Web Browser",
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Nex Browser",
    "mobile-web-app-capable": "yes",
    "theme-color": "#0ea5ea",
    "color-scheme": "dark light",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Nex Browser",
    applicationCategory: "BrowserApplication",
    operatingSystem: "Windows",
    description:
      "Nex Browser: A fast, privacy-focused web browser for Windows. Built with performance and user control in mind.",
    url: "https://nex24.vercel.app/",
    downloadUrl: "https://nex24.vercel.app/",
    author: {
      "@type": "Person",
      name: "Hari",
      url: "http://harinarayananbs.vercel.app/",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      ratingCount: "1",
    },
    featureList: [
      "Automatic tracker blocking",
      "Minimal resource usage",
      "Built-in privacy controls",
      "Clean interface",
      "Windows optimized",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          storageKey="lux-browser-theme"
          disableTransitionOnChange={false}
        >
          <Script
            id="structured-data"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <PageTransition>{children}</PageTransition>
        </ThemeProvider>
      </body>
    </html>
  );
}
