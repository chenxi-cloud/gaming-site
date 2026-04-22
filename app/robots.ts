import type { MetadataRoute } from "next";
import { resolveSiteBaseUrl } from "@/lib/resolve-site-base";

export const dynamic = "force-dynamic";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const base = await resolveSiteBaseUrl();
  let host: string | undefined;
  try {
    host = new URL(base).host;
  } catch {
    host = undefined;
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    ...(host ? { host } : {}),
    sitemap: `${base}/sitemap_v2.xml`,
  };
}
