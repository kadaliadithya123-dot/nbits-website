import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { COURSES } from "@/components/site/data";
import { PageHero } from "@/components/site/shared";
import { CTABanner } from "@/components/site/CTABanner";

export const Route = createFileRoute("/courses")({
  component: CoursesPage,
  head: () => ({
    meta: [
      { title: "Courses & Programs — NBITS Solutions" },
      {
        name: "description",
        content:
          "Industry-focused short and long-term internships across AI, Data, Cloud, Web, Hardware, Blockchain, Business and Design.",
      },
      { property: "og:title", content: "Courses & Programs — NBITS Solutions" },
      {
        property: "og:description",
        content: "18+ programs with a 3-level curriculum: Beginner, Intermediate and Advanced.",
      },
    ],
    links: [{ rel: "canonical", href: "/courses" }],
  }),
});

function CoursesPage() {
  const [active, setActive] = useState("All");
  const tags = ["All", ...Array.from(new Set(COURSES.map((c) => c.tag)))];
  const filtered = active === "All" ? COURSES : COURSES.filter((c) => c.tag === active);

  return (
    <>
      <PageHero
        eyebrow="Course Catalog"
        title="Industry-focused"
        accent="Courses"
        sub="Short-term and long-term internships across engineering, business and life sciences."
      />
      <section className="relative pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="flex flex-wrap justify-center gap-2" data-reveal>
            {tags.map((t) => (
              <button
                key={t}
                onClick={() => setActive(t)}
                className={`rounded-full px-4 py-2 text-xs uppercase tracking-[0.2em] transition ${
                  active === t
                    ? "btn-brand text-white"
                    : "glass text-foreground/70 hover:text-foreground"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="stagger mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" data-reveal>
            {filtered.map((c) => (
              <article
                key={c.title}
                className="glass group relative overflow-hidden rounded-3xl p-6 transition hover:-translate-y-1"
              >
                <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.25em]">
                  <span className="text-gold">{c.tag}</span>
                  <span className="text-muted-foreground">{c.weeks}</span>
                </div>
                <h3 className="mt-4 text-lg">{c.title}</h3>
                <p className="mt-2 text-sm text-foreground/70">{c.body}</p>
                <div className="mt-5 h-px w-full bg-white/10" />
                <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                  <span>3-Level Curriculum</span>
                  <Link to="/contact" className="text-gradient font-semibold">
                    Enroll →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
