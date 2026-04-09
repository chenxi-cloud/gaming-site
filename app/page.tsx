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
          GamingLogic.sg
        </h1>
        <p className="text-xl text-neutral-400 mb-8">
          Professional game data and play guides—making sense of random number
          generators (RNG), RTP, and how the math actually works.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            type="button"
            className="bg-yellow-600 hover:bg-yellow-500 px-6 py-3 rounded-lg font-bold"
          >
            Game guides
          </button>
          <button
            type="button"
            className="border border-neutral-700 hover:bg-neutral-900 px-6 py-3 rounded-lg"
          >
            Odds &amp; calculators
          </button>
        </div>
      </section>

      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pb-16">
        <div className="p-6 border border-neutral-800 rounded-2xl hover:border-yellow-600/50 transition-colors">
          <h2 className="text-2xl font-bold mb-4">Slot games</h2>
          <p className="text-neutral-500">
            Volatility, RTP (return to player), and how pay mechanics and RNG shape
            what you see on the reels.
          </p>
        </div>
        <div className="p-6 border border-neutral-800 rounded-2xl hover:border-yellow-600/50 transition-colors">
          <h2 className="text-2xl font-bold mb-4">Table games</h2>
          <p className="text-neutral-500">
            Baccarat, blackjack, roulette—rules and strategy framed with clear
            probability, not hype.
          </p>
        </div>
        <div className="p-6 border border-neutral-800 rounded-2xl hover:border-yellow-600/50 transition-colors">
          <h2 className="text-2xl font-bold mb-4">Sports betting</h2>
          <p className="text-neutral-500">
            How lines and implied probability work, and how to read markets with a
            data-first mindset.
          </p>
        </div>
      </section>

      <footer className="max-w-4xl mx-auto border-t border-neutral-800 pt-12 pb-8">
        <h2 className="text-2xl font-bold mb-4 text-neutral-200">About us</h2>
        <p className="text-neutral-500 mb-6">
          Connect with us on the communities below.
        </p>
        <ul className="space-y-3 text-neutral-300">
          <li>
            <a
              href="https://ftp.golden-forum.com/memberlist.php?mode=viewprofile&u=227796"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-500 hover:text-yellow-400 underline underline-offset-2"
            >
              Golden-forum
            </a>
          </li>
          <li>
            <a
              href="https://community.m5stack.com/user/chenxisigema001"
              target="_blank"
              rel="noopener noreferrer"
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
