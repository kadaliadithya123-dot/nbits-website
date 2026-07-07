import { createFileRoute } from "@tanstack/react-router";
import { KEY_FACTORS, TIMELINE, TESTIMONIALS } from "@/components/site/data";
import { BrandText, SectionHeading, PageHero } from "@/components/site/shared";
import { CTABanner } from "@/components/site/CTABanner";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About NBITS — Innovation Meets Industry" },
      {
        name: "description",
        content:
          "NBITS is a progressive IT solutions and skill development organisation blending academic knowledge with industry practices.",
      },
      { property: "og:title", content: "About NBITS — Innovation Meets Industry" },
      {
        property: "og:description",
        content: "Learn about our mission, vision, and journey from foundation to future-ready.",
      },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About NBITS"
        title="A future-focused"
        accent="technology partner"
        sub="Building a continuous learning loop from curriculum to capstone — preparing students to ship real products while helping companies harness AI, cloud and modern platforms."
      />
      <About />
      <KeyFactorsSection />
      <Timeline />
      <Testimonials />
      <CTABanner />
    </>
  );
}

function About() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:px-8 lg:grid-cols-2">
        <div data-reveal className="relative">
          <div className="glass-strong rounded-3xl p-8 md:p-10">
            <div className="text-gold font-display text-xs uppercase tracking-[0.4em]">
              Who We Are
            </div>
            <p className="mt-4 text-foreground/85">
              NBITS is a progressive IT solutions and skill development organisation focused on
              delivering innovative technology services and career-oriented training programs. We
              specialise in Software Development, Artificial Intelligence, Data Science, Cloud
              Computing and Digital Transformation.
            </p>
            <p className="mt-4 text-foreground/70">
              Our operational model combines academic knowledge with industry practices, ensuring
              participants gain practical exposure and hands-on experience aligned with modern
              workplace expectations.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="glass rounded-2xl p-5">
                <div className="text-gradient font-display text-lg">Mission</div>
                <p className="mt-2 text-sm text-foreground/70">
                  Empower learners and organisations through quality education, practical experience
                  and technology-driven solutions that create lasting value.
                </p>
              </div>
              <div className="glass rounded-2xl p-5">
                <div className="text-gradient font-display text-lg">Vision</div>
                <p className="mt-2 text-sm text-foreground/70">
                  Become a global leader in technology, skill development and innovation, empowering
                  excellence and sustainable growth.
                </p>
              </div>
            </div>
          </div>
          <div
            className="pointer-events-none absolute -top-8 -right-8 hidden h-40 w-40 rounded-full opacity-60 blur-3xl md:block"
            style={{ background: "var(--gradient-brand)" }}
            aria-hidden
          />
        </div>
        <div data-reveal>
          <div className="text-gold font-display text-xs uppercase tracking-[0.4em]">
            Our Difference
          </div>
          <h2 className="mt-4 text-3xl md:text-5xl">
            Where learning becomes <span className="text-gradient">launch-ready</span>
          </h2>
          <p className="mt-5 text-lg text-foreground/70">
            We build a continuous learning loop — from curriculum to capstone — preparing students
            to ship real products while helping companies harness AI, cloud and modern web
            platforms.
          </p>
          <ul className="mt-6 space-y-3 text-foreground/80">
            {[
              "Industry-aligned, project-driven curriculum",
              "Mentorship by senior engineers and domain experts",
              "End-to-end product engineering & consulting services",
              "Live projects, internships and certification support",
            ].map((t, i) => (
              <li key={t} className="flex items-start gap-3">
                <span
                  className="mt-2 h-2 w-2 shrink-0 rounded-full"
                  style={{
                    background: [
                      "var(--brand-cyan)",
                      "var(--brand-blue)",
                      "var(--brand-purple)",
                      "var(--gold)",
                    ][i],
                  }}
                />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function KeyFactorsSection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="Key Factors"
          title="What defines"
          accent="our approach"
          sub="Six pillars behind every program and every project we deliver."
        />
        <div className="stagger mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3" data-reveal>
          {KEY_FACTORS.map((f) => (
            <article
              key={f.n}
              className="glass group relative overflow-hidden rounded-3xl p-7 transition duration-500 hover:-translate-y-1"
            >
              <div
                className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
                style={{ background: "var(--gradient-brand)" }}
              />
              <div className="text-gold font-display text-3xl">{f.n}</div>
              <h3 className="mt-4 text-xl">{f.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">{f.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <SectionHeading
          eyebrow="Development Timeline"
          title="Our"
          accent="Journey"
          sub="From foundation to future — the NBITS growth path."
        />
        <div className="relative mt-16">
          <div
            className="absolute top-0 bottom-0 left-6 w-px md:left-1/2"
            style={{ background: "var(--gradient-brand)", opacity: 0.3 }}
            aria-hidden
          />
          <ol className="space-y-10" data-reveal>
            {TIMELINE.map((t, i) => {
              const left = i % 2 === 0;
              return (
                <li key={t.title} className="relative pl-16 md:pl-0">
                  <div
                    className={`md:grid md:grid-cols-2 md:gap-10 ${left ? "" : "md:[&>*:first-child]:col-start-2"}`}
                  >
                    <div className={`glass rounded-3xl p-6 md:p-7 ${left ? "md:text-right" : ""}`}>
                      <div className="text-gold font-display text-xs uppercase tracking-[0.35em]">
                        {t.year}
                      </div>
                      <h3 className="mt-3 text-xl">{t.title}</h3>
                      <p className="mt-2 text-sm text-foreground/70">{t.body}</p>
                    </div>
                  </div>
                  <span
                    className="absolute top-6 left-6 grid h-4 w-4 -translate-x-1/2 place-items-center rounded-full md:left-1/2"
                    style={{ background: "var(--gradient-brand)" }}
                    aria-hidden
                  />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <SectionHeading
          eyebrow="Voices"
          title="What people"
          accent="say"
          sub="Stories from students, mentors and partners."
        />
        <div className="stagger mt-14 grid gap-6 md:grid-cols-3" data-reveal>
          {TESTIMONIALS.map((t) => (
            <article key={t.name} className="glass relative rounded-3xl p-7">
              <div className="text-gradient font-display text-4xl leading-none">“</div>
              <p className="mt-2 text-foreground/85">{t.quote}</p>
              <div className="mt-6 flex items-center gap-3">
                <div
                  className="h-10 w-10 rounded-full"
                  style={{ background: "var(--gradient-brand)" }}
                  aria-hidden
                />
                <div>
                  <div className="font-display text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
