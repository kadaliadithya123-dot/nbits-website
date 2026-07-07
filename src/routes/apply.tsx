import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { PageHero } from "@/components/site/shared";
import { trackFormSubmit } from "@/lib/analytics";

export const Route = createFileRoute("/apply")({
  component: ApplyPage,
  head: () => ({
    meta: [
      { title: "Apply Now — NBITS Solutions" },
      {
        name: "description",
        content:
          "Apply for internships, training programs, courses or IT services at NBITS Solutions.",
      },
      { property: "og:title", content: "Apply Now — NBITS Solutions" },
      {
        property: "og:description",
        content: "Start your application for internships, training, courses or services.",
      },
    ],
    links: [{ rel: "canonical", href: "/apply" }],
  }),
});

const APPLY_TYPES = [
  "Internship",
  "Training Program",
  "Course",
  "Service / Project",
  "Partnership",
] as const;

function ApplyPage() {
  return (
    <>
      <PageHero
        eyebrow="Take the first step"
        title="Apply"
        accent="Now"
        sub="Tell us what you're looking for — an internship, training, course or a service engagement — and we'll guide you to the right program."
      />
      <ApplicationForm />
    </>
  );
}

function ApplicationForm() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [applyType, setApplyType] = useState<string>("Internship");

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const next: Record<string, string> = {};
    const name = String(f.get("name") || "").trim();
    const email = String(f.get("email") || "").trim();
    const phone = String(f.get("phone") || "").trim();
    const interest = String(f.get("interest") || "").trim();
    const message = String(f.get("message") || "").trim();

    if (name.length < 2) next.name = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid email.";
    if (phone.length < 6) next.phone = "Enter a valid phone number.";
    if (interest.length < 2) next.interest = "Please specify your area of interest.";
    if (message.length < 10) next.message = "Please share a few more details.";

    setErrors(next);
    if (Object.keys(next).length === 0) {
      trackFormSubmit("apply", "success", { type: applyType });
      setSent(true);
      (e.currentTarget as HTMLFormElement).reset();
      setApplyType("Internship");
      setTimeout(() => setSent(false), 6000);
    } else {
      trackFormSubmit("apply", "error", { fields: Object.keys(next).join(",") });
    }
  }

  return (
    <section className="relative pb-24 md:pb-32">
      <div className="mx-auto max-w-3xl px-4 md:px-8">
        <form
          onSubmit={submit}
          className="glass-strong grid gap-5 rounded-3xl p-7 md:p-10"
          data-reveal
          noValidate
        >
          <div>
            <label className="block">
              <span className="mb-1.5 block text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                I want to apply for
              </span>
              <select
                name="type"
                value={applyType}
                onChange={(e) => setApplyType(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition focus:border-[color:var(--brand-blue)] focus:bg-white/10"
              >
                {APPLY_TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Full Name" name="name" placeholder="Your full name" error={errors.name} />
            <Field
              label="Email"
              name="email"
              type="email"
              placeholder="you@email.com"
              error={errors.email}
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              label="Phone"
              name="phone"
              type="tel"
              placeholder="+91 98765 43210"
              error={errors.phone}
            />
            <Field label="College / Company" name="org" placeholder="Your institution or company" />
          </div>

          <Field
            label="Area of Interest"
            name="interest"
            placeholder="e.g. Full Stack Python, Cyber Security, Cloud Migration..."
            error={errors.interest}
          />

          <Field
            label="Why do you want to apply?"
            name="message"
            placeholder="Tell us about your goals, background and what you hope to achieve..."
            textarea
            error={errors.message}
          />

          <button
            type="submit"
            className="btn-brand hover:btn-brand-hover mt-1 rounded-xl py-3.5 text-sm font-semibold"
          >
            Submit Application
          </button>

          <div role="status" aria-live="polite" className="min-h-5 text-sm">
            {sent && (
              <span className="text-gold">
                ✓ Application received — our team will reach out within 24 hours.
              </span>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  error,
  textarea,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  error?: string;
  textarea?: boolean;
}) {
  const base =
    "w-full rounded-xl border bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition focus:border-[color:var(--brand-blue)] focus:bg-white/10";
  const cls = `${base} ${error ? "border-red-400/60" : "border-white/10"}`;
  return (
    <label className="block">
      <span className="mb-1.5 block text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
        {label}
      </span>
      {textarea ? (
        <textarea id={name} name={name} rows={5} placeholder={placeholder} className={cls} />
      ) : (
        <input id={name} name={name} type={type} placeholder={placeholder} className={cls} />
      )}
      {error && <span className="mt-1 block text-xs text-red-400">{error}</span>}
    </label>
  );
}
