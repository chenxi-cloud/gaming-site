import Link from "next/link";

const articles = [
  {
    href: "/articles/top-gambling-youtube-creators",
    label: "Article 1",
    title:
      "The 5 Hottest Gambling Creators on YouTube—Streams That Broke the Internet",
    excerpt:
      "Roshtein to Fruity Slots: who dominates casino YouTube, why they hit, and lite-embedded viral clips.",
  },
  {
    href: "/articles/high-volatility-slots-guide",
    label: "Article 2",
    title:
      "High Volatility Slots: What They Are, Who They Suit, and How to Approach Them",
    excerpt:
      "Volatility in plain language, who high-variance games fit, a reference table of popular titles, and bankroll/session habits.",
  },
  {
    href: "/articles/deciphering-rtp-slot-payout-mechanics",
    label: "Article 3",
    title:
      "Deciphering RTP: The Mathematical Backbone of Slot Payout Mechanics",
    excerpt:
      "Return to player (RTP), house edge, theoretical vs. actual RTP, and how progressive jackpots change the math.",
  },
  {
    href: "/articles/volatility-variance-managing-risk-modern-gaming",
    label: "Article 4",
    title: "Volatility and Variance: Managing Risk in Modern Gaming",
    excerpt:
      "Risk profiles, low vs. high volatility, near-miss design, and bet-to-bankroll ratios for surviving variance.",
  },
  {
    href: "/articles/rng-algorithms-fairness-auditing",
    label: "Article 5",
    title: "Behind the Virtual Reels: RNG Algorithms and Fairness Auditing",
    excerpt:
      "PRNG vs. TRNG, reel mapping, eCOGRA-style auditing, and debunking hot and cold machines.",
  },
  {
    href: "/articles/strategic-selection-provider-analysis",
    label: "Article 6",
    title:
      "The Architecture of Winning: Strategic Selection and Provider Analysis",
    excerpt:
      "Megaways, cluster pays, studio math signatures, and weighing bonus buys vs. organic triggers.",
  },
] as const;

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 p-8">
      <div className="max-w-4xl mx-auto mb-10 rounded-xl border border-amber-500/40 bg-amber-950/30 px-5 py-4 text-center text-sm text-amber-100/90 md:text-base">
        <p className="font-semibold text-amber-200">Site under construction</p>
        <p className="mt-2 text-amber-100/80">
          We are building a professional hub for casino and betting games—deep dives,
          clear explanations, and the most rigorous analysis we can offer.
        </p>
      </div>

      <section className="max-w-4xl mx-auto text-center py-12 md:py-20">
        <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
          GamingLogic
        </h1>
        <p className="text-xl text-neutral-400">
          Professional game data and play guides—making sense of random number
          generators (RNG), RTP, and how the math actually works.
        </p>
      </section>

      <section className="max-w-4xl mx-auto pb-16" aria-labelledby="articles-heading">
        <h2
          id="articles-heading"
          className="text-2xl font-bold text-neutral-100 mb-6 text-center md:text-left"
        >
          Articles
        </h2>
        <ul className="space-y-4">
          {articles.map((article) => (
            <li key={article.href}>
              <Link
                href={article.href}
                className="group block rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 transition-colors hover:border-yellow-600/50 hover:bg-neutral-900/70"
              >
                <p className="text-xs font-medium uppercase tracking-wide text-yellow-500/90 mb-2">
                  {article.label}
                </p>
                <h3 className="text-lg font-bold text-neutral-100 group-hover:text-yellow-400 transition-colors">
                  {article.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-500 leading-relaxed">
                  {article.excerpt}
                </p>
                <span className="mt-4 inline-block text-sm font-semibold text-yellow-500 group-hover:text-yellow-400">
                  Read article →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <footer className="max-w-4xl mx-auto border-t border-neutral-800 pt-12 pb-8">
        <h2 className="text-2xl font-bold mb-4 text-neutral-200">About us</h2>
        <p className="text-neutral-500 mb-6">
          Connect with us on the communities below.
        </p>
        <ul className="space-y-3 text-neutral-300">
          <li>
            <a
              href="https://github.com/chenxi-cloud"
              target="_blank"
              rel="me noopener noreferrer"
              className="text-yellow-500 hover:text-yellow-400 underline underline-offset-2"
            >
              GitHub (chenxi-cloud)
            </a>
          </li>
          <li>
            <a
              href="https://ftp.golden-forum.com/memberlist.php?mode=viewprofile&u=227796"
              target="_blank"
              rel="me noopener noreferrer"
              className="text-yellow-500 hover:text-yellow-400 underline underline-offset-2"
            >
              Golden-forum
            </a>
          </li>
          <li>
            <a
              href="https://community.m5stack.com/user/chenxisigema001"
              target="_blank"
              rel="me noopener noreferrer"
              className="text-yellow-500 hover:text-yellow-400 underline underline-offset-2"
            >
              M5Stack community
            </a>
          </li>
        </ul>
      </footer>
    </main>
  );
}
