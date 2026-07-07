import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { trackCTA } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "./navigation";
import { SERVICES } from "@/components/site/data";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";

export function RevealStyles() {
  return (
    <style>{`
      [data-reveal]{opacity:0;transform:translateY(28px);transition:opacity .9s cubic-bezier(.2,.7,.2,1),transform .9s cubic-bezier(.2,.7,.2,1)}
      [data-reveal].is-in{opacity:1;transform:none}
      .stagger>*{opacity:0;transform:translateY(20px);transition:opacity .7s ease,transform .7s ease}
      .stagger.is-in>*{opacity:1;transform:none}
      .stagger.is-in>*:nth-child(1){transition-delay:.05s}
      .stagger.is-in>*:nth-child(2){transition-delay:.12s}
      .stagger.is-in>*:nth-child(3){transition-delay:.19s}
      .stagger.is-in>*:nth-child(4){transition-delay:.26s}
      .stagger.is-in>*:nth-child(5){transition-delay:.33s}
      .stagger.is-in>*:nth-child(6){transition-delay:.4s}
      .stagger.is-in>*:nth-child(7){transition-delay:.47s}
      .stagger.is-in>*:nth-child(8){transition-delay:.54s}
      .stagger.is-in>*:nth-child(9){transition-delay:.61s}
    `}</style>
  );
}

export function useReveal() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
    const raf = requestAnimationFrame(() => {
      const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("is-in");
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -5% 0px" },
      );

      els.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) {
          el.classList.add("is-in");
        } else {
          io.observe(el);
        }
      });
      (window as unknown as { __revealIO?: IntersectionObserver }).__revealIO = io;
    });

    return () => {
      cancelAnimationFrame(raf);
      const io = (window as unknown as { __revealIO?: IntersectionObserver }).__revealIO;
      io?.disconnect();
    };
  }, [pathname]);
}

export function BrandMark({ size = 40 }: { size?: number }) {
  return (
    <img
      src="/nbit-logo-transparent.png"
      alt="NBIT Solutions logo"
      width={size}
      height={size}
      className="object-contain"
      style={{ width: size, height: size }}
    />
  );
}

export function BrandText({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-0 font-display", className)}>
      <span className="text-[color:var(--brand-blue)]">N</span>
      <span
        className="bg-clip-text text-transparent"
        style={{ backgroundImage: "linear-gradient(90deg, var(--gold), #f59e0b, var(--gold))" }}
      >
        BITS
      </span>
    </span>
  );
}

export function renderBrandedText(text: string) {
  if (!text.includes("NBITS")) {
    return text;
  }

  return text.split(/(NBITS)/g).map((part, index) =>
    part === "NBITS" ? <BrandText key={index} /> : part,
  );
}

export function SectionHeading({
  eyebrow,
  title,
  accent,
  sub,
}: {
  eyebrow: ReactNode;
  title: ReactNode;
  accent: ReactNode;
  sub?: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center" data-reveal>
      <div className="text-gold font-display text-xs uppercase tracking-[0.4em]">{eyebrow}</div>
      <h2 className="mt-4 text-3xl md:text-5xl">
        {title} <span className="text-gradient">{accent}</span>
      </h2>
      {sub && <p className="mt-4 text-foreground/70">{sub}</p>}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  accent,
  sub,
}: {
  eyebrow: ReactNode;
  title: ReactNode;
  accent: ReactNode;
  sub?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-36 pb-16 md:pt-44 md:pb-24">
      <div className="grid-bg absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-4xl px-4 text-center md:px-8" data-reveal>
        <div className="text-gold font-display text-xs uppercase tracking-[0.4em]">{eyebrow}</div>
        <h1 className="mt-5 text-4xl leading-[1.05] md:text-6xl">
          {title} <span className="text-gradient">{accent}</span>
        </h1>
        {sub && <p className="mx-auto mt-5 max-w-2xl text-lg text-foreground/70">{sub}</p>}
      </div>
    </section>
  );
}

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const p = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      setProgress(p);
      setScrolled(h.scrollTop > 30);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        className="fixed left-0 top-0 z-[60] h-[3px] transition-[width] duration-100"
        style={{ width: `${progress}%`, background: "var(--gradient-brand)" }}
        aria-hidden
      />
      <header className="fixed inset-x-0 top-0 z-50">
        <nav
          className={`mx-3 mt-3 flex items-center justify-between rounded-2xl px-4 py-3 transition-all md:mx-6 md:px-6 ${
            scrolled ? "glass-strong shadow-glow" : "glass"
          }`}
        >
          <Link to="/" className="flex items-center gap-3">
            <BrandMark />
            <div className="leading-tight">
              <div className="font-display text-base md:text-lg">
                <BrandText />
              </div>
              <div className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                Solutions
              </div>
            </div>
          </Link>
          <ul className="hidden items-center gap-8 text-sm text-foreground/80 lg:flex">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  activeProps={{ className: "text-foreground" }}
                  className="relative transition hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[image:var(--gradient-brand)] after:transition-[width] hover:after:w-full"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <Link
              to="/apply"
              className="btn-brand hover:btn-brand-hover hidden rounded-xl px-4 py-2.5 text-sm font-semibold md:inline-flex"
            >
              Apply Now
            </Link>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              className="glass grid h-11 w-11 place-items-center rounded-xl lg:hidden"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                {menuOpen ? (
                  <path d="M6 6l12 12M18 6L6 18" />
                ) : (
                  <path d="M3 6h18M3 12h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>
        </nav>
        {menuOpen && (
          <div className="glass mx-3 mt-2 rounded-2xl p-4 lg:hidden">
            <ul className="grid gap-3 text-foreground/85">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} onClick={() => setMenuOpen(false)} className="block py-1">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/apply"
                  onClick={() => {
                    setMenuOpen(false);
                    trackCTA("nav_apply_now_mobile", { location: "mobile_nav" });
                  }}
                  className="btn-brand mt-2 inline-flex rounded-xl px-4 py-2.5 text-sm font-semibold"
                >
                  Apply Now
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
}

function Footer() {
  const [serviceOpen, setServiceOpen] = useState(false);
  const [serviceDetails, setServiceDetails] = useState<(typeof SERVICES)[number] | null>(null);

  return (
    <footer className="relative mt-16 border-t border-white/10 pt-16 pb-10">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-4 md:px-8">
        <div>
          <div className="flex items-center gap-3">
            <BrandMark />
            <div className="font-display text-lg text-gradient">
              <BrandText /> Solutions
            </div>
          </div>
          <p className="mt-4 text-sm text-foreground/60">
            Nested Blocks Innovation & Technical Solutions Pvt Ltd. Bridging innovation with
            industry skills.
          </p>
          <div className="mt-5 flex gap-2">
            {["in", "X", "▶", "f"].map((s) => (
              <a
                key={s}
                href="#"
                aria-label={`Social ${s}`}
                className="glass grid h-10 w-10 place-items-center rounded-xl text-sm transition hover:-translate-y-0.5"
              >
                {s}
              </a>
            ))}
          </div>
          <div className="mt-6 space-y-2 text-sm text-foreground/70">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=hr@nbits.in"
              className="block hover:text-foreground"
              target="_blank"
              rel="noreferrer noopener"
            >
              hr@nbits.in
            </a>
            <a
              href="https://wa.me/918142753345"
              className="block hover:text-foreground"
              target="_blank"
              rel="noreferrer noopener"
            >
              +91 81427 53345
            </a>
          </div>
        </div>
        <div>
          <div className="font-display mb-4">Explore</div>
          <ul className="space-y-2 text-sm text-foreground/70">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-display mb-4">Services</div>
          <ul className="space-y-2 text-sm text-foreground/70">
            {SERVICES.slice(0, 5).map((s) => (
              <li key={s.title}>
                <button
                  type="button"
                  onClick={() => {
                    setServiceDetails(s);
                    setServiceOpen(true);
                  }}
                  className="text-left hover:text-foreground"
                >
                  {s.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-display mb-4">Address</div>
          <div className="space-y-2 text-sm text-foreground/70">
            <div>1st Lane, near V-Hotel, Dwaraka Nagar</div>
            <div>Visakhapatnam, Andhra Pradesh 530016</div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col justify-between gap-3 border-t border-white/10 px-4 pt-6 text-xs text-muted-foreground md:flex-row md:px-8">
        <div>
          © {new Date().getFullYear()} NBITS Solutions Pvt Ltd. All rights reserved.
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground">
            Privacy
          </a>
          <a href="#" className="hover:text-foreground">
            Terms
          </a>
          <span>Designed by NextGen Devs</span>
        </div>
      </div>
      <Sheet open={serviceOpen} onOpenChange={setServiceOpen}>
        <SheetContent side="right" className="max-w-xl">
          <SheetHeader>
            <SheetTitle>{serviceDetails?.title}</SheetTitle>
            <SheetDescription>{serviceDetails?.body}</SheetDescription>
          </SheetHeader>
          <div className="mt-6 space-y-4 text-sm text-foreground/80">
            <p>{serviceDetails?.details}</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <SheetClose className="btn-brand hover:btn-brand-hover rounded-xl px-4 py-2 text-sm font-semibold">
              Close
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </footer>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  useReveal();
  return (
    <>
      <RevealStyles />
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
