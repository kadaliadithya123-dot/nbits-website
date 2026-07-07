import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { PageHero } from "@/components/site/shared";
import { trackFormSubmit } from "@/lib/analytics";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — NBITS Solutions" },
      {
        name: "description",
        content:
          "Tell us about your goals — internship, partnership or a project — and our team will reach out within 24 hours.",
      },
      { property: "og:title", content: "Contact — NBITS Solutions" },
      {
        property: "og:description",
        content: "Let's build together. Reach NBITS by email, phone or the form.",
      },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Let's"
        accent="build together"
        sub="Tell us about your goals — internship, partnership or a project — and our team will reach out within 24 hours."
      />
      <Contact />
    </>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const next: Record<string, string> = {};
    const name = String(f.get("name") || "").trim();
    const email = String(f.get("email") || "").trim();
    const message = String(f.get("message") || "").trim();
    if (name.length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid email.";
    if (message.length < 10) next.message = "Please share a few more details.";
    setErrors(next);
    if (Object.keys(next).length === 0) {
      trackFormSubmit("contact", "success");
      setSent(true);
      (e.currentTarget as HTMLFormElement).reset();
      setTimeout(() => setSent(false), 6000);
    } else {
      trackFormSubmit("contact", "error", { fields: Object.keys(next).join(",") });
    }
  }

  return (
    <section className="relative pb-24 md:pb-32">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:px-8 lg:grid-cols-2">
        <div data-reveal>
          <div className="text-gold font-display text-xs uppercase tracking-[0.4em]">Reach us</div>
          <h2 className="mt-4 text-3xl md:text-5xl">
            We reply within <span className="text-gradient">24 hours</span>
          </h2>
          <p className="mt-4 max-w-md text-foreground/70">
            Whether it's a course inquiry or an enterprise engagement, our team is here to help.
          </p>
          <div className="mt-8 space-y-4 text-sm text-foreground/85">
            <ContactRow icon="✉" label="hr@nbits.in" href="mailto:hr@nbits.in" />
            <ContactRow icon="✉" label="hradmin@nbits.in" href="mailto:hradmin@nbits.in" />
            <ContactRow icon="✆" label="+91 81427 53345" href="https://wa.me/918142753345" />
            <ContactRow
              icon="⌂"
              label="Corporate: Dwarakanagar 1st Lane, Sri Mukha Complex 2nd Floor, Beside Budhil Park Hotel, Visakhapatnam"
            />
            <ContactRow icon="◎" label="www.nbits.in" href="https://www.nbits.in" />
          </div>
        </div>

        <form
          onSubmit={submit}
          className="glass-strong grid gap-4 rounded-3xl p-7 md:p-8"
          data-reveal
          noValidate
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Full Name" name="name" placeholder="Your full name" error={errors.name} />
            <Field
              label="Email"
              name="email"
              type="email"
              placeholder="you@company.com"
              error={errors.email}
            />
          </div>
          <Field label="Subject" name="subject" placeholder="Internship, project or partnership" />
          <Field
            label="Your Message"
            name="message"
            placeholder="Tell us about your project or interest…"
            textarea
            error={errors.message}
          />
          <button
            type="submit"
            className="btn-brand hover:btn-brand-hover mt-2 rounded-xl py-3.5 text-sm font-semibold"
          >
            Send Message
          </button>
          <div role="status" aria-live="polite" className="min-h-5 text-sm">
            {sent && (
              <span className="text-gold">✓ Thanks — we'll be in touch within 24 hours.</span>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

function ContactRow({ icon, label, href }: { icon: string; label: string; href?: string }) {
  const inner = (
    <>
      <span
        className="grid h-10 w-10 shrink-0 place-items-center rounded-xl font-display"
        style={{ background: "color-mix(in oklab, white 6%, transparent)" }}
        aria-hidden
      >
        {icon}
      </span>
      <span className="min-w-0 truncate">{label}</span>
    </>
  );
  const cls = "glass flex items-center gap-4 rounded-2xl p-3 pr-5 transition hover:translate-x-1";
  return href ? (
    <a className={cls} href={href}>
      {inner}
    </a>
  ) : (
    <div className={cls}>{inner}</div>
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
