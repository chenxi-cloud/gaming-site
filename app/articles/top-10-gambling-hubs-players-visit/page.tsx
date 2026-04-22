import type { Metadata } from "next";
import Image from "next/image";
import { ArticleAttribution } from "@/app/components/ArticleAttribution";
import { Breadcrumbs } from "@/app/components/Breadcrumbs";

const title =
  "The 10 Gambling Hubs Players Actually Tab-Hop Between (No Cap, Just Traffic Vibes)";

export const metadata: Metadata = {
  title: `${title} | GamingLogic`,
  description:
    "A casual tour of ten mega-popular casino & betting portals—what each is good for, plus homepage screenshots and direct links.",
};

const breadcrumbItems = [{ label: "Home", href: "/" }, { label: title }];

type Hub = {
  name: string;
  url: string;
  vibe: string;
  /** Local file under /public/images/gambling-hubs/ */
  screenshot: string;
};

const hubs: Hub[] = [
  {
    name: "AskGamblers",
    url: "https://www.askgamblers.com/",
    screenshot: "/images/gambling-hubs/askgamblers.jpg",
    vibe: "The OG complaint + review circus. If a casino ghosted a payout, someone already wrote a novel about it in the forums. Main character energy for drama scrollers.",
  },
  {
    name: "Casino Guru",
    url: "https://www.casino.guru/",
    screenshot: "/images/gambling-hubs/casino-guru.jpg",
    vibe: "Clean UI, ruthless filters, and that “we read the T&Cs so you don’t have to” mood. Great when you want RTP tables without getting jumpscared by 12 pop-ups.",
  },
  {
    name: "Gambling.com",
    url: "https://www.gambling.com/",
    screenshot: "/images/gambling-hubs/gambling-com.jpg",
    vibe: "Big-brand polish: news, guides, odds explainers—it’s the LinkedIn cousin of gambling sites. Less chaotic meme energy, more “I have a spreadsheet for this.”",
  },
  {
    name: "VegasSlotsOnline",
    url: "https://www.vegasslotsonline.com/",
    screenshot: "/images/gambling-hubs/vegasslotsonline.jpg",
    vibe: "Slot demo Disneyland. You’re not here for philosophy; you’re here to click spin on a hundred titles and pretend you’re doing research. Respect.",
  },
  {
    name: "LCB (Latest Casino Bonuses)",
    url: "https://www.lcb.org/",
    screenshot: "/images/gambling-hubs/lcb.jpg",
    vibe: "Bonus hunters assemble. It’s messy in a fun way—lists, codes, community beef with operators. If FOMO had a homepage, it’d probably redirect here.",
  },
  {
    name: "Wizard of Odds",
    url: "https://wizardofodds.com/",
    screenshot: "/images/gambling-hubs/wizard-of-odds.jpg",
    vibe: "Math uncle of the internet. Blackjack charts, house-edge breakdowns, zero hype—just “here’s why that side bet is financially unwise.” We love a roast backed by probability.",
  },
  {
    name: "Oddschecker",
    url: "https://www.oddschecker.com/",
    screenshot: "/images/gambling-hubs/oddschecker.jpg",
    vibe: "Sports bettors live here. Line shopping without pretending you enjoy Excel. When everyone’s yelling about the same game, this is where the numbers get lined up side-by-side.",
  },
  {
    name: "Action Network",
    url: "https://www.actionnetwork.com/",
    screenshot: "/images/gambling-hubs/action-network.jpg",
    vibe: "DFS + picks + tools for people who treat sports like a season-long TV show. Fast takes, sharp charts, and enough notifications to keep your phone warm at night.",
  },
  {
    name: "Covers",
    url: "https://www.covers.com/",
    screenshot: "/images/gambling-hubs/covers.jpg",
    vibe: "Forum culture meets betting content—old-school vibes, hot takes, and community threads that age like milk… which is half the entertainment. Iconic for NFL/NBA sweat.",
  },
  {
    name: "VSiN",
    url: "https://www.vsin.com/",
    screenshot: "/images/gambling-hubs/vsin.jpg",
    vibe: "Vegas sports-betting brain trust on display—video, podcasts, education-first angles. When you want to sound smarter at the bar without doing a PhD, start here.",
  },
];

export default function Top10GamblingHubsPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 px-6 py-10 md:px-8">
      <article className="max-w-3xl mx-auto">
        <Breadcrumbs items={breadcrumbItems} />
        <ArticleAttribution />

        <header className="mb-10">
          <p className="text-sm font-medium text-yellow-500/90 mb-3">Article 2</p>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-50 leading-tight">
            {title}
          </h1>
          <p className="mt-4 text-neutral-400 leading-relaxed">
            Look, nobody “accidentally” opens ten gambling tabs at 1 a.m.—that’s
            curated chaos. Below is a totally unserious but honest rundown of the
            mega-hubs players keep bouncing between: what the vibe is, a{" "}
            <strong className="text-neutral-200">homepage screenshot</strong>{" "}
            (hosted on this site for fast loads), and the actual URL so you can
            click like an adult. 18+ only; we&apos;re not your lawyer, your
            accountant, or your dealer.
          </p>
        </header>

        <div className="space-y-16">
          {hubs.map((hub, index) => (
            <section key={hub.url} className="scroll-mt-8">
              <h2 className="text-xl font-bold text-neutral-100 mb-3">
                {index + 1}. {hub.name}
              </h2>
              <figure className="m-0 overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 shadow-inner">
                <Image
                  src={hub.screenshot}
                  alt={`Homepage screenshot: ${hub.name}`}
                  width={1200}
                  height={675}
                  className="aspect-video w-full object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 720px"
                />
              </figure>
              <p className="mt-4 text-neutral-400 leading-relaxed">{hub.vibe}</p>
              <p className="mt-3 text-sm">
                <span className="text-neutral-500">Direct link: </span>
                <a
                  href={hub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-all font-medium text-yellow-500 hover:text-yellow-400 underline underline-offset-2"
                >
                  {hub.url}
                </a>
              </p>
            </section>
          ))}
        </div>

        <section className="mt-16 rounded-xl border border-neutral-800 bg-neutral-900/40 p-5 text-sm text-neutral-500 leading-relaxed">
          <p>
            <strong className="text-neutral-400">Fine print, but make it human:</strong>{" "}
            GamingLogic isn&apos;t affiliated with the sites above. Screenshots
            were captured for editorial use and may drift from live homepages over
            time—always verify you&apos;re on the real domain. Play where it&apos;s
            legal for you, set limits, touch grass occasionally.
          </p>
        </section>
      </article>
    </main>
  );
}
