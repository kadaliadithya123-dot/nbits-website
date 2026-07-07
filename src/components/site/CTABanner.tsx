import { Link } from "@tanstack/react-router";
import { trackCTA } from "@/lib/analytics";
import { BrandText } from "@/components/site/shared";

export function CTABanner() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div
          className="glass-strong relative overflow-hidden rounded-[2rem] p-10 md:p-16"
          data-reveal
        >
          <div
            className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full opacity-40 blur-3xl"
            style={{ background: "var(--gradient-brand)" }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full opacity-30 blur-3xl"
            style={{ background: "var(--gradient-gold)" }}
            aria-hidden
          />
          <div className="relative grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
            <div>
              <div className="text-gold font-display text-xs uppercase tracking-[0.4em]">
                Ready to begin
              </div>
              <h2 className="mt-4 text-3xl md:text-5xl">
                Innovate. Develop. <span className="text-gradient">Empower.</span>
              </h2>
              <p className="mt-4 max-w-xl text-foreground/70">
                Whether you're a student ready to level up, an institution seeking a training
                partner, or a business scaling with technology — NBITS is your bridge to what's
                next.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link
                to="/contact"
                onClick={() => trackCTA("cta_banner_talk_to_us", { location: "cta_banner" })}
                className="btn-brand hover:btn-brand-hover rounded-xl px-6 py-3.5 text-sm font-semibold"
              >
                Talk to us
              </Link>
              <Link
                to="/courses"
                onClick={() => trackCTA("cta_banner_browse_courses", { location: "cta_banner" })}
                className="glass rounded-xl px-6 py-3.5 text-sm font-semibold"
              >
                Browse Courses
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
