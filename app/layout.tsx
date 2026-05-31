import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "René Lamberti — Creative Director",
  description:
    "Creative Direction for the AI age. Campaigns, content and prototypes built with senior creative thinking and AI-powered workflows. Berlin-based Creative Director with 20+ years of experience.",
  keywords: [
    "Creative Director",
    "AI Creative Direction",
    "Campaign Concepts",
    "AI Content Creation",
    "Brand Creation",
    "Berlin",
    "René Lamberti",
  ],
  authors: [{ name: "René Lamberti" }],
  openGraph: {
    title: "René Lamberti — Creative Director",
    description:
      "Creative Direction for the AI age. Campaigns, content and prototypes built with senior creative thinking and AI-powered workflows.",
    url: "https://renelamberti.de",
    siteName: "René Lamberti",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "René Lamberti — Creative Director",
    description:
      "Creative Direction for the AI age. Campaigns, content and prototypes built with senior creative thinking and AI-powered workflows.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
