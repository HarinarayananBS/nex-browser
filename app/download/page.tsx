import type { Metadata } from "next";
import DownloadPageClient from "./DownloadPageClient";

export const metadata: Metadata = {
  title: "Download Nex Browser",
  description:
    "Download Nex Browser for Windows. Get the latest version with privacy controls, tracker blocking, and optimized performance.",
  keywords: [
    "download Nex Browser",
    "Nex Browser Windows",
    "browser download",
    "privacy browser download",
    "Windows browser download",
    "free browser download",
  ],
  openGraph: {
    title: "Download Nex Browser",
    description:
      "Download Nex Browser for Windows. Get the latest version with privacy controls, tracker blocking, and optimized performance.",
    url: "https://nex24.vercel.app/download",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Download Nex Browser",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Download Nex Browser",
    description:
      "Download Nex Browser for Windows. Get the latest version with privacy controls, tracker blocking, and optimized performance.",
  },
  alternates: {
    canonical: "https://nex24.vercel.app/",
  },
};

type GitHubAsset = {
  name: string;
  browser_download_url: string;
  size: number;
};

type GitHubRelease = {
  tag_name: string;
  name?: string;
  body?: string;
  published_at: string;
  html_url: string;
  assets: GitHubAsset[];
};

async function getLatestRelease(): Promise<GitHubRelease | null> {
  try {
    const res = await fetch(
      "https://github.com/HarinarayananBS/nex-browser-experience/releases/latest",
      {
        next: { revalidate: 3600 },
        headers: { Accept: "application/vnd.github+json" },
      }
    );
    if (!res.ok) return null;
    const data = (await res.json()) as GitHubRelease;
    return data;
  } catch {
    return null;
  }
}

export default async function DownloadPage() {
  const release = await getLatestRelease();

  return <DownloadPageClient release={release} />;
}
