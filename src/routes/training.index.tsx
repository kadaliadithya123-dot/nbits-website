import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/shared";
import { CTABanner } from "@/components/site/CTABanner";
import { BTECH_TRACKS, DEGREE_TRACKS, type Track } from "@/components/site/training-data";

export const Route = createFileRoute("/training/")({
  component: TrainingPage,
  head: () => ({
    meta: [
      { title: "Training Programs — NBITS Solutions" },
      {
        name: "description",
        content:
          "Industry-focused training programs mapped to your degree — B.Sc, B.Com, BA, BBA, BCA, BBM and B.Tech (CSE, ECE, IT, EEE, Mech, AI/ML and more).",
      },
      { property: "og:title", content: "Training Programs — NBITS Solutions" },
      {
        property: "og:description",
        content:
          "Choose your degree stream and explore matching internships and courses with full syllabi.",
      },
    ],
    links: [{ rel: "canonical", href: "/training" }],
  }),
});

function TrackCard({ track }: { track: Track }) {
  return (
    <article className="glass group relative overflow-hidden rounded-3xl p-6 transition hover:-translate-y-1">
      <div className="text-gold text-[11px] uppercase tracking-[0.28em]">{track.eyebrow}</div>
      <h3 className="mt-3 font-display text-2xl text-gradient">{track.label}</h3>
      <p className="mt-3 text-sm text-foreground/70">
        {track.courses.length} industry-focused programs mapped to this stream.
      </p>
      <div className="mt-5 h-px w-full bg-white/10" />
      <Link
        to="/training/$trackKey"
        params={{ trackKey: track.key }}
        className="mt-4 inline-block text-sm font-semibold text-gradient hover:opacity-90"
      >
        read more →
      </Link>
    </article>
  );
}

function TrainingPage() {
  return (
    <>
      <PageHero
        eyebrow="Training"
        title="Turning Knowledge into"
        accent="World-Changing Innovation"
        sub="Industry-focused training programs curated for every degree and B.Tech branch. Pick your stream and explore mapped courses with full syllabi."
      />

      <section className="relative pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="text-center" data-reveal>
            <div className="text-gold font-display text-xs uppercase tracking-[0.4em]">
              What we do
            </div>
            <h2 className="mt-3 text-2xl md:text-4xl">
              Programs for <span className="text-gradient">Degree</span> streams
            </h2>
          </div>
          <div className="stagger mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" data-reveal>
            {DEGREE_TRACKS.map((t) => (
              <TrackCard key={t.key} track={t} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="text-center" data-reveal>
            <div className="text-gold font-display text-xs uppercase tracking-[0.4em]">
              What we do
            </div>
            <h2 className="mt-3 text-2xl md:text-4xl">
              Programs for <span className="text-gradient">B.Tech</span> branches
            </h2>
          </div>
          <div className="stagger mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" data-reveal>
            {BTECH_TRACKS.map((t) => (
              <TrackCard key={t.key} track={t} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
