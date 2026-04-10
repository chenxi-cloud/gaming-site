import type { Metadata } from "next";
import { ArticleAttribution } from "@/app/components/ArticleAttribution";
import { ArticleYouTube } from "@/app/components/ArticleYouTube";
import { Breadcrumbs } from "@/app/components/Breadcrumbs";
import { WikiLink } from "@/app/components/WikiLink";

const title =
  "The 5 Hottest Gambling Creators on YouTube—Streams That Broke the Internet";

export const metadata: Metadata = {
  title: `${title} | GamingLogic`,
  description:
    "Roshtein, LetsGiveItASpin, Xposed, ClassyBeef, Fruity Slots: who they are, why they pop off, and the viral clips worth watching.",
};

const breadcrumbItems = [{ label: "Home", href: "/" }, { label: title }];

const VIDEOS = {
  roshtein: "I9f8qTgDn0c",
  letsGiveItASpin: "wQrpZCIG2ns",
  xposed: "bY2-e41MnwE",
  classyBeef: "QUg8-zDeYmI",
  fruitySlots: "BmepbuZpoaw",
} as const;

export default function TopGamblingYouTubeCreatorsPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 px-6 py-10 md:px-8">
      <article className="max-w-3xl mx-auto">
        <Breadcrumbs items={breadcrumbItems} />
        <ArticleAttribution />

        <header className="mb-12">
          <p className="text-sm font-medium text-yellow-500/90 mb-3">Article 1</p>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-50 leading-tight">
            {title}
          </h1>
          <p className="mt-4 text-neutral-500 leading-relaxed">
            YouTube and slots are a weird marriage of math, memes, and pure
            adrenaline. If you want to know who actually owns the trending tab in
            casino content—not just who shouts the loudest—start here. Below are
            five creators who consistently pull millions of eyeballs, plus one
            &quot;fire&quot; clip each that explains the vibe faster than any
            paragraph could.
          </p>
        </header>

        <div className="space-y-14">
          <section>
            <h2 className="text-xl font-bold text-neutral-100 mb-4">
              1. Roshtein — high stakes, high drama, signature hat
            </h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              Love him or meme him,{" "}
              <strong className="text-neutral-300">Roshtein</strong> is basically
              the face of online slot streaming for a lot of people. The fit is
              unmistakable (yes, the hat), the energy is turned up to eleven, and
              the bet sizes are the kind that make chat spam question marks in
              real time. He leans hard into{" "}
              <WikiLink page="Online_gambling">crypto casino</WikiLink> sessions
              and was early to the whole &quot;
              <WikiLink page="Video_slot_machine">bonus buy</WikiLink>&quot;
              meta—hit the feature, skip the grind, pray for the max. It is
              theatrical, polarizing, and absolutely built for clips.
            </p>
            <p className="text-sm text-neutral-500 mb-2">
              Viral moment: the personal-record break—north of{" "}
              <strong className="text-neutral-400">$16M</strong> on one hit.
            </p>
            <ArticleYouTube
              id={VIDEOS.roshtein}
              title="Roshtein — record-breaking slot win"
            />
          </section>

          <section>
            <h2 className="text-xl font-bold text-neutral-100 mb-4">
              2. LetsGiveItASpin / Kim Hultman — ex-dealer energy, actually
              explains stuff
            </h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              <strong className="text-neutral-300">Kim Hultman</strong> (
              LetsGiveItASpin) co-founded{" "}
              <strong className="text-neutral-300">CasinoGrounds</strong>, and it
              shows: his streams feel less like pure chaos and more like a
              friend who used to work the floor and will happily nerd out on how
              a game is stitched together. You will catch{" "}
              <WikiLink page="Return_to_player">RTP</WikiLink> talk, volatility
              chat, and plenty of{" "}
              <WikiLink page="Online_gambling">live dealer</WikiLink> tables when
              the mood hits. If your site cares about fairness and mechanics—not
              just flex wins—this is the creator whose backlog doubles as a
              primer.
            </p>
            <p className="text-sm text-neutral-500 mb-2">
              Viral moment: Monopoly Live—big multiplier swing that turns the
              session into a story arc.
            </p>
            <ArticleYouTube
              id={VIDEOS.letsGiveItASpin}
              title="LetsGiveItASpin — Monopoly Live high multiplier comeback"
            />
          </section>

          <section>
            <h2 className="text-xl font-bold text-neutral-100 mb-4">
              3. Xposed / Cody Burnett — Gen-Z volume, crypto-native, zero chill
            </h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              <strong className="text-neutral-300">Cody &quot;Xposed&quot;
              Burnett</strong> does not do &quot;muted reactions.&quot; It is
              loud, sweaty, meme-ready, and extremely online: high-volatility
              slots, game-show wheels like Crazy Time, high-stakes live{" "}
              <WikiLink page="Blackjack">blackjack</WikiLink>—the full buffet.
              The bit is emotional honesty cranked past 100%: huge Ws, huge Ls,
              and chat riding every swing. If Roshtein is the blockbuster,
              Xposed is the Twitch-era rollercoaster cam.
            </p>
            <p className="text-sm text-neutral-500 mb-2">
              Viral moment: down bad, then a seven-figure plot twist—chat
              absolutely loses it.
            </p>
            <ArticleYouTube
              id={VIDEOS.xposed}
              title="Xposed — million-dollar comeback moment"
            />
          </section>

          <section>
            <h2 className="text-xl font-bold text-neutral-100 mb-4">
              4. ClassyBeef — squad goals, punishment arcs, max-win chaos
            </h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              <strong className="text-neutral-300">ClassyBeef</strong> is not a
              solo act—it is a crew that has been grinding since 2019 with the
              chemistry of a party stream. They lean into{" "}
              <WikiLink page="Variance">high-volatility</WikiLink> slots, running
              jokes, forfeits, and the kind of banter that keeps you watching even
              between bonuses. When the machine finally coughs up a{" "}
              <strong className="text-neutral-300">max win</strong>, the room
              explodes in sync. It is half casino, half improv show.
            </p>
            <p className="text-sm text-neutral-500 mb-2">
              Viral moment: max win hits—pure hype compilation energy.
            </p>
            <ArticleYouTube
              id={VIDEOS.classyBeef}
              title="ClassyBeef — max win reactions"
            />
          </section>

          <section>
            <h2 className="text-xl font-bold text-neutral-100 mb-4">
              5. Fruity Slots — British humor, reviews, bonus hunts done right
            </h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              <strong className="text-neutral-300">Fruity Slots</strong> (
              Josh, Jamie, Scotty, and the gang) bring a different flavor: less
              &quot;YOLO one spin,&quot; more &quot;let&apos;s actually test this
              release.&quot; Expect new-slot first impressions, cheeky commentary,
              and marathon{" "}
              <strong className="text-neutral-300">bonus hunt</strong> sessions
              where they bank a pile of features and rip them open in one go. If
              GamingLogic is about understanding games—not only chasing
              jackpots—their videos line up with that brain pretty well.
            </p>
            <p className="text-sm text-neutral-500 mb-2">
              Viral moment: Money Train 3—world-class multiplier highlight reel.
            </p>
            <ArticleYouTube
              id={VIDEOS.fruitySlots}
              title="Fruity Slots — Money Train 3 huge multiplier"
            />
          </section>

          <section className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-5 text-sm text-neutral-500 leading-relaxed">
            <p>
              <strong className="text-neutral-400">Heads-up:</strong> streams are
              entertainment, not financial advice. Odds don&apos;t care how funny
              the host is—play only what you can afford to lose, and keep
              regional rules in mind. Embeds load the official YouTube player
              after you click play (lite embed for speed).
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
