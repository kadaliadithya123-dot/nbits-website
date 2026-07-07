declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const GA_MEASUREMENT_ID: string | undefined =
  (import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined) || undefined;

export function gaEnabled(): boolean {
  return typeof window !== "undefined" && !!GA_MEASUREMENT_ID && !!window.gtag;
}

export function track(event: string, params: Record<string, unknown> = {}): void {
  if (typeof window === "undefined") return;
  if (!window.gtag) return;
  window.gtag("event", event, params);
}

export function trackCTA(label: string, extra: Record<string, unknown> = {}): void {
  track("cta_click", {
    cta_label: label,
    page_path: typeof window !== "undefined" ? window.location.pathname : "",
    ...extra,
  });
}

export function trackFormSubmit(
  formName: string,
  status: "success" | "error",
  extra: Record<string, unknown> = {},
): void {
  track("form_submit", {
    form_name: formName,
    status,
    page_path: typeof window !== "undefined" ? window.location.pathname : "",
    ...extra,
  });
}

export function initScrollDepthTracking(thresholds: number[] = [25, 50, 75, 100]): () => void {
  if (typeof window === "undefined") return () => {};
  const fired = new Set<number>();
  let ticking = false;

  const handler = () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(() => {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop || 0;
      const viewport = window.innerHeight || doc.clientHeight;
      const full = doc.scrollHeight - viewport;
      const pct = full > 0 ? Math.min(100, (scrollTop / full) * 100) : 0;
      for (const t of thresholds) {
        if (pct >= t && !fired.has(t)) {
          fired.add(t);
          track("scroll_depth", {
            percent: t,
            page_path: window.location.pathname,
          });
        }
      }
      ticking = false;
    });
  };

  window.addEventListener("scroll", handler, { passive: true });
  handler();
  return () => window.removeEventListener("scroll", handler);
}
