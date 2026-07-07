import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { CTABanner } from "@/components/site/CTABanner";
import { PageHero, SectionHeading } from "@/components/site/shared";

type CertificateItem = {
  title: string;
  subtitle: string;
  image: string;
  alt: string;
};

const CERTIFICATES: CertificateItem[] = [
  {
    title: "SPICE Part A",
    subtitle: "Approval letter for the SPICE Part A recognition",
    image: "/certificates/Spice+ Part A_Approval Letter_AC3391473.png",
    alt: "SPICE Part A approval certificate",
  },
  {
    title: "SPICE Part B",
    subtitle: "Approval letter for the SPICE Part B recognition",
    image: "/certificates/SPICE + Part B_Approval Letter_AC3455754.png",
    alt: "SPICE Part B approval certificate",
  },
  {
    title: "INC-34 / AOA v1",
    subtitle: "Institutional certificate preview for INC-34 AOA version 1",
    image: "/certificates/INC-34_1-25501107699 AOAv1.png",
    alt: "INC-34 AOA certificate",
  },
  {
    title: "INC-33 / MOA v1",
    subtitle: "Institutional certificate preview for INC-33 MOA version 1",
    image: "/certificates/INC-33_1-25501674709 MOA v1.png",
    alt: "INC-33 MOA certificate",
  },
];

export const Route = createFileRoute("/certifications")({
  component: CertificationsPage,
  head: () => ({
    meta: [
      { title: "Certifications — NBITS" },
      {
        name: "description",
        content: "Explore our verified certificate gallery, including SPICE and institutional recognitions.",
      },
    ],
    links: [{ rel: "canonical", href: "/certifications" }],
  }),
});

function CertificationsPage() {
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateItem | null>(null);

  return (
    <>
      <PageHero
        eyebrow="Recognitions"
        title="Our"
        accent="certifications"
        sub="A view-only gallery of approved recognitions and institutional certificates we proudly share with learners and partners."
      />

      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeading
            eyebrow="Certified Achievement"
            title="Verified"
            accent="documents"
            sub="Tap any card to preview the full certificate image in a larger view."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4" data-reveal>
            {CERTIFICATES.map((certificate) => (
              <button
                key={certificate.title}
                type="button"
                onClick={() => setSelectedCertificate(certificate)}
                className="group text-left"
              >
                <div className="glass overflow-hidden rounded-3xl border border-white/10 transition duration-300 hover:-translate-y-1 hover:border-[color:var(--brand-cyan)]/60">
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={certificate.image}
                      alt={certificate.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <div className="text-gold font-display text-[10px] uppercase tracking-[0.35em]">
                        Certificate
                      </div>
                      <h3 className="mt-2 text-xl text-white">{certificate.title}</h3>
                      <p className="mt-2 text-sm text-white/80">{certificate.subtitle}</p>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedCertificate && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 p-4"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="relative w-full max-w-5xl rounded-[28px] border border-white/10 bg-background/95 p-3 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedCertificate(null)}
              className="absolute right-4 top-4 z-10 rounded-full border border-white/10 bg-black/50 p-2 text-white transition hover:bg-black/70"
              aria-label="Close certificate preview"
            >
              ✕
            </button>
            <img
              src={selectedCertificate.image}
              alt={selectedCertificate.alt}
              className="max-h-[78vh] w-full rounded-[20px] object-contain"
            />
            <div className="px-2 py-4 text-center">
              <h3 className="text-xl font-semibold">{selectedCertificate.title}</h3>
              <p className="mt-2 text-sm text-foreground/70">{selectedCertificate.subtitle}</p>
            </div>
          </div>
        </div>
      )}

      <CTABanner />
    </>
  );
}
