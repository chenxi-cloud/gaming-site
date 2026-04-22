#!/usr/bin/env node
/**
 * One-off: fetch homepage thumbnails via WordPress mShots and save under public/.
 * Run: node scripts/download-gambling-hub-screenshots.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const outDir = path.join(root, "public", "images", "gambling-hubs");

const hubs = [
  ["askgamblers", "https://www.askgamblers.com/"],
  ["casino-guru", "https://www.casino.guru/"],
  ["gambling-com", "https://www.gambling.com/"],
  ["vegasslotsonline", "https://www.vegasslotsonline.com/"],
  ["lcb", "https://www.lcb.org/"],
  ["wizard-of-odds", "https://wizardofodds.com/"],
  ["oddschecker", "https://www.oddschecker.com/"],
  ["action-network", "https://www.actionnetwork.com/"],
  ["covers", "https://www.covers.com/"],
  ["vsin", "https://www.vsin.com/"],
];

fs.mkdirSync(outDir, { recursive: true });

for (const [slug, siteUrl] of hubs) {
  const enc = encodeURIComponent(siteUrl);
  const shotUrl = `https://s.wordpress.com/mshots/v1/${enc}?w=1200`;
  const dest = path.join(outDir, `${slug}.jpg`);
  process.stdout.write(`${slug} ... `);
  try {
    const res = await fetch(shotUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; GamingLogicScreenshotBot/1.0; +https://gaminglogic.sg)",
      },
    });
    if (!res.ok) {
      console.log(`HTTP ${res.status}`);
      continue;
    }
    const buf = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(dest, buf);
    console.log(`${buf.length} bytes`);
  } catch (e) {
    console.log("error", e.message);
  }
}
