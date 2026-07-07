import { useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";

export function useReveal() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });

    const raf = requestAnimationFrame(() => {
      const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-in");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -5% 0px" },
      );

      els.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
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
