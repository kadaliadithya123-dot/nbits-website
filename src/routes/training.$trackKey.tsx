import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/shared";
import { CTABanner } from "@/components/site/CTABanner";
import { getCourse, getTrack, type Course } from "@/components/site/training-data";

export const Route = createFileRoute("/training/$trackKey")({
  component: TrackPage,
  loader: ({ params }) => {
    const track = getTrack(params.trackKey);
    if (!track) throw notFound();
    return { track };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Track not found — NBITS Solutions" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { track } = loaderData;
    return {
      meta: [
        { title: `${track.label} Training Programs — NBITS Solutions` },
        {
          name: "description",
          content: `Explore industry-focused ${track.eyebrow} ${track.label} training programs at NBITS Solutions — full 3-level syllabus, tools and outcomes.`,
        },
        {
          property: "og:title",
          content: `${track.label} Training Programs — NBITS Solutions`,
        },
        {
          property: "og:description",
          content: `Recommended programs for ${track.eyebrow} ${track.label} students.`,
        },
      ],
      links: [{ rel: "canonical", href: `/training/${track.key}` }],
    };
  },
  notFoundComponent: TrackNotFound,
});

function CourseAccordion({ course }: { course: Course }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03]">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <div>
          <div className="text-[11px] uppercase tracking-[0.24em] text-gold">
            {course.duration}
          </div>
          <div className="mt-1 font-display text-lg">{course.title}</div>
        </div>
        <span
          className={`text-sm font-semibold text-gradient transition ${open ? "rotate-90" : ""}`}
          aria-hidden
        >
          ▸
        </span>
      </button>
      {open && (
        <div className="border-t border-white/10 px-5 py-5">
          <p className="text-sm text-foreground/75">{course.overview}</p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {course.levels.map((lv) => (
              <div key={lv.level} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <div className="text-[10px] uppercase tracking-[0.22em] text-gold">{lv.level}</div>
                <div className="mt-1 text-sm font-semibold">{lv.title}</div>
                <ul className="mt-3 space-y-2 text-xs text-foreground/70">
                  {lv.weeks.map((w, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-gradient font-semibold">W{i + 1}</span>
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {course.tools && course.tools.length > 0 && (
            <div className="mt-5">
              <div className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                Tools & Technologies
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {course.tools.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-foreground/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}
          {course.outcomes && course.outcomes.length > 0 && (
            <ul className="mt-5 space-y-1 text-xs text-foreground/70">
              {course.outcomes.map((o) => (
                <li key={o}>• {o}</li>
              ))}
            </ul>
          )}
          <div className="mt-5">
            <Link
              to="/apply"
              className="btn-brand hover:btn-brand-hover inline-flex rounded-xl px-4 py-2 text-xs font-semibold"
            >
              Apply for {course.title}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

function TrackPage() {
  const { track } = Route.useLoaderData();
  const courses = track.courses
    .map((slug: string) => getCourse(slug))
    .filter((c: Course | undefined): c is Course => Boolean(c));


  return (
    <>
      <PageHero
        eyebrow={track.eyebrow}
        title={track.label}
        accent="Recommended Programs"
        sub={`Industry-focused programs curated for ${track.eyebrow} ${track.label} students. Click any program to view its full 3-level syllabus, tools and outcomes.`}
      />

      <section className="relative pb-16 md:pb-24">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <div className="mb-6 flex items-center justify-between" data-reveal>
            <Link
              to="/training"
              className="text-sm font-semibold text-gradient hover:opacity-90"
            >
              ← Back to Training
            </Link>
            <div className="text-xs uppercase tracking-[0.24em] text-foreground/60">
              {courses.length} programs
            </div>
          </div>
          <div className="space-y-3" data-reveal>
            {courses.map((c: Course) => (
              <CourseAccordion key={c.slug} course={c} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}

function TrackNotFound() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
        <h1 className="font-display text-3xl md:text-5xl">
          <span className="text-gradient">Track not found</span>
        </h1>
        <p className="mt-4 text-foreground/70">
          The training track you requested doesn't exist.
        </p>
        <div className="mt-8">
          <Link
            to="/training"
            className="btn-brand hover:btn-brand-hover inline-flex rounded-xl px-5 py-3 text-sm font-semibold"
          >
            Back to Training
          </Link>
        </div>
      </div>
    </section>
  );
}
