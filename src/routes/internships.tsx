import { createFileRoute } from "@tanstack/react-router";
import { PROCESS_STEPS, FAQS } from "@/components/site/data";
import { SectionHeading, PageHero } from "@/components/site/shared";
import { CTABanner } from "@/components/site/CTABanner";

export const Route = createFileRoute("/internships")({
  component: InternshipsPage,
  head: () => ({
    meta: [
      { title: "Internships — NBITS Solutions" },
      {
        name: "description",
        content:
          "Structured, mentor-led internship cohorts with real deliverables. Learn, practise, build, deploy and get certified.",
      },
      { property: "og:title", content: "Internships — NBITS Solutions" },
      {
        property: "og:description",
        content: "A 5-step roadmap from foundational concepts to industry-ready certification.",
      },
    ],
    links: [{ rel: "canonical", href: "/internships" }],
  }),
});

function InternshipsPage() {
  return (
    <>
      <PageHero
        eyebrow="Internship Journey"
        title="A 5-step"
        accent="Roadmap"
        sub="From foundational concepts to industry-ready certification."
      />
      <Process />
      <FAQ />
      <CTABanner />
    </>
  );
}

function Process() {
  return (
    <section className="relative pb-24 md:pb-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="relative">
          <div
            className="absolute top-16 left-0 right-0 hidden h-px md:block"
            style={{ background: "var(--gradient-brand)", opacity: 0.4 }}
            aria-hidden
          />
          <div className="stagger grid gap-6 md:grid-cols-5" data-reveal>
            {PROCESS_STEPS.map((step) => (
              <div key={step.n} className="glass relative rounded-3xl p-6 text-center">
                <div
                  className="mx-auto grid h-14 w-14 place-items-center rounded-full font-display text-lg text-white"
                  style={{ background: "var(--gradient-brand)" }}
                >
                  {step.n}
                </div>
                <h4 className="mt-4 text-lg">{step.title}</h4>
                <p className="mt-2 text-xs text-foreground/60">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        <SectionHeading eyebrow="Answers" title="Frequently asked" accent="Questions" />
        <div className="mt-12 space-y-3" data-reveal>
          {FAQS.map((f) => (
            <details key={f.q} className="glass group rounded-2xl p-5 open:shadow-glow transition">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <span className="font-display text-base md:text-lg">{f.q}</span>
                <span className="text-gradient font-display text-xl transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-foreground/70">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
