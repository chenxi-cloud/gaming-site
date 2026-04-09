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
  title: "GamingLogic.sg | 顶级博彩玩法指南与数据知识库",
  description: "提供最全的博彩游戏指南，包括老虎机(Slots)、百家乐、体育投注等核心玩法解析及RNG数据透明化报告。",
  keywords: ["博彩百科", "Slots技巧", "百家乐赢钱逻辑", "RNG解析", "博弈数据"],
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
