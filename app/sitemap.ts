import type { MetadataRoute } from "next";
import { headers } from "next/headers";

/**
 * Sitemap `<loc>` must be absolute URLs (sitemaps.org protocol) — relative paths
 * are not valid for crawlers.
 *
 * Base URL resolution (domain can change without editing this file):
 * 1. NEXT_PUBLIC_SITE_URL — set in env when you want a fixed canonical host.
 * 2. Else: current request Host + x-forwarded-proto (works per deployment domain).
 * 3. Else: VERCEL_URL, then a static fallback.
 */
export const dynamic = "force-dynamic";

function stripTrailingSlash(url: string): string {
  return url.replace(/\/$/, "");
}

async function resolveBaseUrl(): Promise<string> {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) return stripTrailingSlash(fromEnv);

  const h = await headers();
  const hostRaw =
    h.get("x-forwarded-host")?.split(",")[0]?.trim() ?? h.get("host")?.trim();
  if (hostRaw) {
    const protoRaw =
      h.get("x-forwarded-proto")?.split(",")[0]?.trim() ?? "https";
    const scheme =
      protoRaw === "http" || protoRaw === "https" ? protoRaw : "https";
    return stripTrailingSlash(`${scheme}://${hostRaw}`);
  }

  if (process.env.VERCEL_URL) {
    return stripTrailingSlash(
      `https://${process.env.VERCEL_URL.replace(/\/$/, "")}`,
    );
  }

  return "https://gaminglogic.sg";
}

const articlePaths = [
  "/articles/top-gambling-youtube-creators",
  "/articles/top-10-gambling-hubs-players-visit",
  "/articles/high-volatility-slots-guide",
  "/articles/deciphering-rtp-slot-payout-mechanics",
  "/articles/volatility-variance-managing-risk-modern-gaming",
  "/articles/rng-algorithms-fairness-auditing",
  "/articles/strategic-selection-provider-analysis",
] as const;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = await resolveBaseUrl();
  const lastModified = new Date();

  const home: MetadataRoute.Sitemap = [
    {
      url: base,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  const articles: MetadataRoute.Sitemap = articlePaths.map((path) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...home, ...articles];
}
