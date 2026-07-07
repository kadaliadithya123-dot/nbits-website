import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { STATS, SERVICES, KEY_FACTORS } from "@/components/site/data";
import { SectionHeading } from "@/components/site/shared";
import { CTABanner } from "@/components/site/CTABanner";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "NBITS Solutions — Bridging Innovation with Industry Skills" },
      {
        name: "description",
        content:
          "Premium industry-focused training, real-world internships and end-to-end IT services in AI, Cloud, Cyber Security, Full Stack and more.",
      },
      {
        property: "og:title",
        content: "NBITS Solutions — Bridging Innovation with Industry Skills",
      },
      {
        property: "og:description",
        content: "Innovate. Develop. Empower — training, internships and IT services.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <HighlightsPreview />
      <ServicesPreview />
      <CTABanner />
    </>
  );
}

function Hero() {
  const particlesRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const host = particlesRef.current;
    if (!host) return;
    for (let i = 0; i < 24; i++) {
      const s = document.createElement("span");
      s.className = "animate-float-up absolute rounded-full";
      s.style.left = Math.random() * 100 + "%";
      s.style.width = "6px";
      s.style.height = "6px";
      s.style.background = "radial-gradient(circle, var(--brand-cyan), transparent 70%)";
      s.style.animationDelay = Math.random() * 14 + "s";
      s.style.opacity = (0.3 + Math.random() * 0.6).toFixed(2);
      host.appendChild(s);
    }
    return () => {
      host.innerHTML = "";
    };
  }, []);

  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-28 md:pb-24">
      <div className="grid-bg absolute inset-0" aria-hidden />
      <div ref={particlesRef} className="pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 md:px-8 lg:grid-cols-[1.1fr_1fr]">
        <div data-reveal>
          <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs text-foreground/80">
            <span
              className="h-2 w-2 animate-pulse rounded-full"
              style={{ background: "var(--brand-cyan)" }}
            />
            Nested Blocks Innovation & Technical Solutions
          </span>
          <h1 className="mt-6 text-4xl leading-[1.05] md:text-6xl lg:text-7xl">
            Bridging <span className="text-gradient">Innovation</span>
            <br />
            with <span className="text-gradient">Industry Skills</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-foreground/70">
            NBITS Solutions transforms education and technology into powerful career opportunities.
            Premium training, real-world internships, and end-to-end engineering services — designed
            to launch students and scale businesses.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/internships"
              className="btn-brand hover:btn-brand-hover rounded-xl px-6 py-3.5 text-sm font-semibold"
            >
              Explore Internships
            </Link>
            <Link
              to="/services"
              className="glass rounded-xl px-6 py-3.5 text-sm font-semibold text-foreground/90 hover:text-foreground"
            >
              Our Services
            </Link>
          </div>
          <div className="mt-12 grid max-w-lg grid-cols-2 gap-4 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="text-gradient font-display text-2xl md:text-3xl">{s.value}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-[420px] md:h-[540px]" data-reveal>
          <div className="absolute inset-0 grid place-items-center">
            <div className="relative h-[320px] w-[320px] md:h-[460px] md:w-[460px]">
              <div className="absolute inset-0 rounded-full border border-white/10" />
              <div className="absolute inset-10 rounded-full border border-white/10" />
              <div className="absolute inset-20 rounded-full border border-white/10" />
              <div className="absolute inset-0 grid place-items-center">
                <img
                  src="/nbit-logo-transparent.png"
                  alt="NBIT Solutions"
                  className="h-32 w-32 object-contain md:h-40 md:w-40"
                />
              </div>
              <div className="animate-spin-slow absolute inset-0">
                {["AI / ML", "Cloud", "Web Dev", "IoT"].map((t, i) => {
                  const pos = [
                    "-top-3 left-1/2 -translate-x-1/2",
                    "top-1/2 -right-3 -translate-y-1/2",
                    "-bottom-3 left-1/2 -translate-x-1/2",
                    "top-1/2 -left-3 -translate-y-1/2",
                  ][i];
                  return (
                    <span
                      key={t}
                      className={`absolute inline-flex rounded-full px-3 py-1.5 text-xs ${pos}`}
                    >
                      <span
                        className="animate-counter-spin font-semibold text-white"
                        style={{ textShadow: "0 0 8px rgba(255,255,255,0.6)" }}
                      >
                        {t}
                      </span>
                    </span>
                  );
                })}
              </div>
              <div className="animate-spin-reverse absolute inset-10">
                {["Python", "React", "Data", "Security"].map((t, i) => {
                  const pos = [
                    "-top-2 right-4",
                    "bottom-0 -left-1",
                    "-bottom-2 right-8",
                    "top-2 -left-3",
                  ][i];
                  return (
                    <span
                      key={t}
                      className={`absolute inline-flex rounded-full px-2.5 py-1 text-[11px] ${pos}`}
                    >
                      <span
                        className="animate-counter-spin-reverse font-semibold text-white"
                        style={{ textShadow: "0 0 8px rgba(255,255,255,0.6)" }}
                      >
                        {t}
                      </span>
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = ["INNOVATE", "DEVELOP", "DEPLOY", "GROW", "SUPPORT"];
  return (
    <section className="border-y border-white/5 py-6" aria-label="Our pillars">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-4 text-xs uppercase tracking-[0.35em] text-muted-foreground md:px-8">
        {items.map((t, i) => (
          <span key={t} className="flex items-center gap-6">
            <span className="text-gold font-display text-sm">{t}</span>
            {i < items.length - 1 && <span className="text-gold/40">◆</span>}
          </span>
        ))}
      </div>
    </section>
  );
}

function HighlightsPreview() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="Why NBITS"
          title="What defines"
          accent="our approach"
          sub="Six pillars behind every program and every project we deliver."
        />
        <div className="stagger mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3" data-reveal>
          {KEY_FACTORS.slice(0, 3).map((f) => (
            <article
              key={f.n}
              className="glass group relative overflow-hidden rounded-3xl p-7 transition duration-500 hover:-translate-y-1"
            >
              <div className="text-gold font-display text-3xl">{f.n}</div>
              <h3 className="mt-4 text-xl">{f.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">{f.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/about"
            className="glass inline-flex rounded-xl px-6 py-3 text-sm font-semibold"
          >
            Learn more about NBITS →
          </Link>
        </div>
      </div>
    </section>
  );
}

function ServicesPreview() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title="Featured"
          accent="Services"
          sub="A complete stack of solutions for ambitious teams and learners."
        />
        <div className="stagger mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" data-reveal>
          {SERVICES.slice(0, 6).map((s) => (
            <article
              key={s.title}
              className="glass group relative overflow-hidden rounded-3xl p-7 transition duration-500 hover:-translate-y-1"
            >
              <div
                className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${s.grad} font-display text-xl text-white shadow-glow`}
              >
                {s.icon}
              </div>
              <h3 className="mt-5 text-xl">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/70">{s.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="glass inline-flex rounded-xl px-6 py-3 text-sm font-semibold"
          >
            View all services →
          </Link>
        </div>
      </div>
    </section>
  );
}
