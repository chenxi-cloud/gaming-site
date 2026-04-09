import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
