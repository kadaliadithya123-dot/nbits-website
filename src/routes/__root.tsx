import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { initScrollDepthTracking } from "../lib/analytics";
import { SiteLayout } from "@/components/site/shared";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-gradient">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="btn-brand hover:btn-brand-hover inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="btn-brand hover:btn-brand-hover inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold"
          >
            Try again
          </button>
          <a
            href="/"
            className="glass inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold text-foreground"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "NBITS Solutions — Bridging Innovation with Industry Skills" },
      {
        name: "description",
        content:
          "NBITS Solutions Pvt Ltd — Nested Blocks Innovation & Technical Solutions. Premium industry-focused training, real-world internships and end-to-end IT services in AI, Cloud, Cyber Security, Full Stack and more.",
      },
      { name: "author", content: "NBITS Solutions Pvt Ltd" },
      { name: "theme-color", content: "#0b1020" },
      {
        property: "og:title",
        content: "NBITS Solutions — Bridging Innovation with Industry Skills",
      },
      {
        property: "og:description",
        content:
          "Industry-focused internships, skill development and IT services. Innovate. Develop. Empower.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "NBITS Solutions" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "NBITS Solutions — Bridging Innovation with Industry Skills",
      },
      {
        name: "twitter:description",
        content: "Premium training, internships and IT services from NBITS Solutions Pvt Ltd.",
      },
      {
        name: "description",
        content:
          "Builds premium, modern websites with elegant design, advanced features, and professional branding.",
      },
      {
        property: "og:description",
        content:
          "Builds premium, modern websites with elegant design, advanced features, and professional branding.",
      },
      {
        name: "twitter:description",
        content:
          "Builds premium, modern websites with elegant design, advanced features, and professional branding.",
      },
      {
        property: "og:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/0f355316-1b64-47d8-bf32-cdf2eca03cf8/id-preview-26289529--401d447f-b9ea-4ac1-ba55-4686ce9e646d.lovable.app-1782935024649.png",
      },
      {
        name: "twitter:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/0f355316-1b64-47d8-bf32-cdf2eca03cf8/id-preview-26289529--401d447f-b9ea-4ac1-ba55-4686ce9e646d.lovable.app-1782935024649.png",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700;800&family=Inter:wght@300;400;500;600;700;800&display=swap",
      },
    ],
    scripts: [
      ...(import.meta.env.VITE_GA_MEASUREMENT_ID
        ? [
            {
              src: `https://www.googletagmanager.com/gtag/js?id=${import.meta.env.VITE_GA_MEASUREMENT_ID}`,
              async: true,
            },
            {
              children: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${import.meta.env.VITE_GA_MEASUREMENT_ID}',{send_page_view:true});`,
            },
          ]
        : []),
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "NBITS Solutions Pvt Ltd",
          alternateName: "Nested Blocks Innovation & Technical Solutions",
          url: "/",
          slogan: "Bridging Innovation with Industry Skills",
          description:
            "Progressive IT solutions and skill development organization offering training, internships and enterprise technology services.",
          contactPoint: [
            {
              "@type": "ContactPoint",
              telephone: "+91-8142753345",
              email: "hr@nbits.in",
              contactType: "customer service",
              areaServed: "IN",
            },
          ],
          address: {
            "@type": "PostalAddress",
            streetAddress: "Dwarakanagar 1st Lane, Sri Mukha Complex 2nd Floor, Beside Budhil Park Hotel",
            addressLocality: "Visakhapatnam",
            addressRegion: "Andhra Pradesh",
            postalCode: "530016",
            addressCountry: "IN",
          },
        }),
      },
      // Fallback: if the client router hasn't initialized yet, clicks on internal links
      // should perform a full page navigation so the user sees content immediately.
      {
        children: `(function(){try{document.addEventListener('click',function(e){var t=e.target;while(t&&t.nodeName!=='A')t=t.parentElement; if(!t) return; var href=t.getAttribute('href'); if(!href||href.indexOf('http')===0||href.indexOf('#')===0) return; if(window && window.$_TSR && window.$_TSR.initialized) return; e.preventDefault(); window.location.href = t.href;}, true);}catch(e){}})();`,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  const router = useRouter();

  useEffect(() => initScrollDepthTracking(), []);

  // Dev-only logs to diagnose client navigation/hydration issues
  useEffect(() => {
    try {
      // eslint-disable-next-line no-console
      console.log('[DEV] RootComponent mounted', { hasRouter: !!router, location: typeof window !== 'undefined' ? window.location.href : null, _TSR: (typeof window !== 'undefined' && (window as any).$_TSR) || null });
      const onClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement | null;
        if (!target) return;
        const a = target.closest && (target.closest('a') as HTMLAnchorElement | null);
        if (a) {
          // eslint-disable-next-line no-console
          console.log('[DEV] anchor clicked', { href: a.getAttribute('href'), hrefFull: a.href });
        }
      };
      document.addEventListener('click', onClick, true);
      return () => document.removeEventListener('click', onClick, true);
    } catch (e) {
      // ignore
    }
  }, [router]);

  return (
    <QueryClientProvider client={queryClient}>
      <SiteLayout>
        <Outlet />
      </SiteLayout>
    </QueryClientProvider>
  );
}
