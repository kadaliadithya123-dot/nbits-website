import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SERVICES } from "@/components/site/data";
import { PageHero } from "@/components/site/shared";
import { CTABanner } from "@/components/site/CTABanner";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — NBITS Solutions" },
      {
        name: "description",
        content:
          "End-to-end IT services: software, AI/ML, data science, cyber security, cloud, IoT, web development, digital marketing and internship programs.",
      },
      { property: "og:title", content: "Services — NBITS Solutions" },
      {
        property: "og:description",
        content: "A complete stack of solutions for ambitious teams and learners.",
      },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

type Service = (typeof SERVICES)[number];

function ServicesPage() {
  const [open, setOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Our"
        accent="Services"
        sub="A complete stack of solutions for ambitious teams and learners."
      />
      <section className="relative pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="stagger grid gap-6 sm:grid-cols-2 lg:grid-cols-3" data-reveal>
            {SERVICES.map((s) => (
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
                <button
                  type="button"
                  onClick={() => {
                    setSelectedService(s);
                    setOpen(true);
                  }}
                  className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground transition hover:text-foreground"
                >
                  Learn more <span>→</span>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="right" className="max-w-xl">
          <SheetHeader>
            <SheetTitle>{selectedService?.title}</SheetTitle>
            <SheetDescription>{selectedService?.body}</SheetDescription>
          </SheetHeader>
          <div className="mt-6 space-y-4 text-sm text-foreground/80">
            <p>{selectedService?.details}</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <SheetClose className="btn-brand hover:btn-brand-hover rounded-xl px-4 py-2 text-sm font-semibold">
              Close
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
