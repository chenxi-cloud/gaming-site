import { headers } from "next/headers";

export function stripTrailingSlash(url: string): string {
  return url.replace(/\/$/, "");
}

/**
 * Canonical site origin for sitemap / robots. Same rules as former sitemap-only logic.
 */
export async function resolveSiteBaseUrl(): Promise<string> {
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
