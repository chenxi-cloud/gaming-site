import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GamingLogic.sg | Casino Game Guides & Data Knowledge Base",
  description:
    "In-depth guides to casino games—slots, table games, sports betting—and transparent takes on RNG, RTP, and odds.",
  keywords: [
    "casino games",
    "slots guide",
    "RNG explained",
    "sports betting analysis",
    "table games strategy",
  ],
  verification: {
    google: "2g90qFIlxmuVHz6SjJ_bZKMCAScgED_8sXoX5mEvGQk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
