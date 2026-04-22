import type { Metadata } from "next";
import { ArticleAttribution } from "@/app/components/ArticleAttribution";
import { Breadcrumbs } from "@/app/components/Breadcrumbs";
import { WikiLink } from "@/app/components/WikiLink";

const title = "Behind the Virtual Reels: RNG Algorithms and Fairness Auditing";

export const metadata: Metadata = {
  title: `${title} | GamingLogic`,
  description:
    "PRNG vs. TRNG, how numbers map to reel outcomes, third-party auditing, and why hot and cold machines are a myth.",
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: title },
];

export default function ArticleRngPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 px-6 py-10 md:px-8">
      <article className="max-w-3xl mx-auto">
        <Breadcrumbs items={breadcrumbItems} />
        <ArticleAttribution />

        <header className="mb-12">
          <p className="text-sm font-medium text-yellow-500/90 mb-3">
            Article 6
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-50 leading-tight">
            {title}
          </h1>
        </header>

        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-bold text-neutral-100 mt-0 mb-4">
              Introduction
            </h2>
            <p className="text-neutral-400 leading-relaxed">
              The heart of every modern{" "}
              <WikiLink page="Slot_machine">slot machine</WikiLink> is the{" "}
              <WikiLink page="Random_number_generation">
                Random Number Generator
              </WikiLink>{" "}
              (<abbr title="Random number generator">RNG</abbr>). In an era of
              digital gaming, the RNG ensures that every spin is an independent
              event, free from the influence of past results or future
              expectations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-neutral-100 mt-10 mb-4">
              PRNG vs. TRNG
            </h2>
            <p className="text-neutral-400 leading-relaxed">
              Most <WikiLink page="Online_gambling">online casinos</WikiLink> use{" "}
              <WikiLink page="Pseudorandom_number_generator">
                Pseudo-Random Number Generators
              </WikiLink>{" "}
              (PRNG). These are algorithms that start with a &quot;seed&quot;
              value and use complex mathematical formulas to produce a sequence of
              numbers that appear random.{" "}
              <WikiLink page="Hardware_random_number_generator">
                True Random Number Generators
              </WikiLink>{" "}
              (TRNG), while rarer, rely on physical phenomena like{" "}
              <WikiLink page="Atmospheric_noise">atmospheric noise</WikiLink>. In
              regulated markets, PRNGs are calibrated to be indistinguishable from
              true randomness.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-neutral-100 mt-10 mb-4">
              The Mapping Process
            </h2>
            <p className="text-neutral-400 leading-relaxed">
              How does a number become a spin? The RNG produces a number (often
              between 1 and several billion). This number is then mapped to
              specific coordinates on the virtual reels. If the RNG produces
              &quot;1,045,231,&quot; the software translates this into a
              specific arrangement of symbols. This process happens in
              milliseconds, long before the reels stop spinning visually.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-neutral-100 mt-10 mb-4">
              Regulation and Third-Party Auditing
            </h2>
            <p className="text-neutral-400 leading-relaxed">
              Professionalism in gambling is upheld by organizations like{" "}
              <WikiLink page="ECOGRA">eCOGRA</WikiLink> and iTech Labs. These
              agencies audit the source code and the{" "}
              <WikiLink page="Return_to_player">RTP</WikiLink> output of games.
              They run millions of simulations to ensure the RNG is not biased
              and that the game delivers its promised mathematical return. Such
              labs operate in the broader context of{" "}
              <WikiLink page="Online_gambling">online gambling</WikiLink>{" "}
              regulation and game certification.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-neutral-100 mt-10 mb-4">
              Debunking the &quot;Hot Machine&quot; Myth
            </h2>
            <p className="text-neutral-400 leading-relaxed">
              Because of the RNG, &quot;hot&quot; and &quot;cold&quot; machines
              are a cognitive bias known as the{" "}
              <WikiLink page="Gambler's_fallacy">Gambler&apos;s Fallacy</WikiLink>
              . Since the RNG resets the probability with every millisecond, the
              outcome of the previous spin has zero mathematical impact on the
              next.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
