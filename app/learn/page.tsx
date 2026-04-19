import type { Metadata } from "next";
import LearnPageClient from "./LearnPageClient";

export const metadata: Metadata = {
  title: "Learn More About Nex Browser",
  description:
    "Discover why Nex Browser is the best choice for privacy-focused, high-performance browsing on Windows. Learn about our features, privacy controls, and performance optimizations.",
  openGraph: {
    title: "Learn More About Nex Browser",
    description:
      "Discover why Nex Browser is the best choice for privacy-focused, high-performance browsing on Windows.",
    url: "https://nex24.vercel.app",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Learn More About Nex Browser",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Learn More About Nex Browser",
    description:
      "Discover why Nex Browser is the best choice for privacy-focused, high-performance browsing on Windows.",
  },
  alternates: {
    canonical: "https://nex24.vercel.app",
  },
};

export default function LearnPage() {
  return <LearnPageClient />;
}
