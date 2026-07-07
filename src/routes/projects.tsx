import { createFileRoute } from "@tanstack/react-router";
import { PROJECTS } from "@/components/site/data";
import { PageHero } from "@/components/site/shared";
import { CTABanner } from "@/components/site/CTABanner";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
  head: () => ({
    meta: [
      { title: "Projects — NBITS Solutions" },
      {
        name: "description",
        content:
          "Live projects and platforms built by NBITS teams and interns across AI, Web, Cloud, Security, IoT and Data.",
      },
      { property: "og:title", content: "Projects — NBITS Solutions" },
      {
        property: "og:description",
        content: "A glimpse of products and platforms shipped by NBITS.",
      },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
});

function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Featured Work"
        title="Live"
        accent="Projects"
        sub="A glimpse of products and platforms built by NBITS teams and interns."
      />
      <section className="relative pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="stagger grid gap-6 md:grid-cols-2 lg:grid-cols-3" data-reveal>
            {PROJECTS.map((p) => (
              <article
                key={p.title}
                className="glass group overflow-hidden rounded-3xl transition hover:-translate-y-1"
              >
                <div className={`relative h-44 bg-gradient-to-br ${p.grad}`}>
                  {p.image ? (
                    <div className="absolute inset-0 overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="mx-auto h-full w-full object-contain opacity-95"
                      />
                    </div>
                  ) : (
                    <>
                      <div className="absolute inset-0 grid-bg opacity-40" aria-hidden />
                      <div className="absolute inset-0 grid place-items-center">
                        <span className="text-gradient font-display text-4xl opacity-30 transition group-hover:opacity-70">
                          {p.tag}
                        </span>
                      </div>
                    </>
                  )}
                </div>
                <div className="p-6">
                  <div className="text-gold text-[11px] uppercase tracking-[0.3em]">{p.tag}</div>
                  <h3 className="mt-2 text-lg">{p.title}</h3>
                  <p className="mt-2 text-sm text-foreground/70">{p.body}</p>
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
