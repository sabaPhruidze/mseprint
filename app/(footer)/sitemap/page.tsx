import type { Metadata } from "next";
import Link from "next/link";
import { getFooterData } from "db/GetFooterData";
import type { ServicesPathTypes } from "types/commonTypes";
import { buildStaticBreadcrumbs } from "lib/breadcrumbs";

const BASE_URL = "https://www.mseprinting.com";

export const metadata: Metadata = {
  title: "Sitemap | MSE Printing",
  description:
    "HTML sitemap for MSE Printing. Browse services, key pages, and blog resources in one place.",
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: `${BASE_URL}/sitemap` },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Sitemap | MSE Printing",
    description:
      "Explore services, key pages, and blog resources on the MSE Printing website.",
    url: `${BASE_URL}/sitemap`,
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
  },
};

function normalizeHref(path: string) {
  if (!path) return "/";
  const p = path.startsWith("/") ? path : `/${path}`;
  return p.replace(/\/{2,}/g, "/");
}

function byTitle(a: { title: string }, b: { title: string }) {
  return a.title.localeCompare(b.title);
}

function groupChildren(items: ServicesPathTypes[]) {
  const parents = items
    .filter((it) => it.parent_id === null)
    .sort((a, b) => a.title.localeCompare(b.title));

  const map = new Map<number, ServicesPathTypes[]>();
  for (const it of items) {
    if (typeof it.parent_id === "number") {
      if (!map.has(it.parent_id)) map.set(it.parent_id, []);
      map.get(it.parent_id)!.push(it);
    }
  }

  for (const [k, list] of map.entries()) {
    list.sort((a, b) => a.title.localeCompare(b.title));
    map.set(k, list);
  }

  return { parents, childrenMap: map };
}

const TOP_LEVEL_STATIC = [
  { title: "Home", path: "/" },
  { title: "Products & Services", path: "/products-services" },
  { title: "About Us", path: "/about-us" },
  { title: "Contact Us", path: "/contact-us" },
  { title: "Request a Quote", path: "/request-quote" },
  { title: "Send a File", path: "/send-file" },
  { title: "Blog", path: "/blog" },
] as const;

const FOOTER_STATIC = [
  { title: "Accessibility", path: "/accessibility" },
  { title: "Privacy Policy", path: "/privacy-policy" },
  { title: "Terms & Conditions", path: "/terms-conditions" },
  { title: "EOE & Diversity", path: "/eoe-diversity" },
  { title: "Environmental Message", path: "/environmental-message" },
] as const;

// The 8 pages you want indexed
const FEATURED_LINKS = [
  { title: "Product Fulfillment", path: "/fulfillment-services/product-fulfillment" },
  { title: "Social Media", path: "/marketing-services/social-media" },
  { title: "Video Production", path: "/marketing-services/video-production" },
  { title: "Online Ordering Portals", path: "/online-ordering-portals" },
  { title: "Professional Printing Services", path: "/blog/professional-printing-services" },
  { title: "Booklet Printing Services", path: "/blog/booklet-printing-services" },
  { title: "Notepad Printing Services", path: "/blog/notepad-printing-services" },
  { title: "Graphic Design", path: "/graphic-design" },
] as const;

export default async function SitemapPage() {
  const breadcrumbs = buildStaticBreadcrumbs("Sitemap", "/sitemap");

  const { footerContentData } = await getFooterData();
  const serviceData = (footerContentData ?? []) as ServicesPathTypes[];
  const { parents, childrenMap } = groupChildren(serviceData);

  return (
    <main className="max-w-6xl mx-auto px-4 py-10 text-gray-900 dark:text-gray-100">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex flex-wrap gap-2 text-sm text-gray-500 dark:text-gray-400">
          {breadcrumbs.map((bc, i) => {
            const isLast = i === breadcrumbs.length - 1;
            return (
              <li key={bc.href} className="flex items-center">
                {i > 0 && <span className="mx-2 text-gray-300 dark:text-gray-600">/</span>}
                {isLast ? (
                  <span aria-current="page" className="text-gray-900 dark:text-gray-100 font-medium">
                    {bc.label}
                  </span>
                ) : (
                  <Link href={bc.href} className="hover:underline">
                    {bc.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>

      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Sitemap
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2 max-w-2xl">
          Find the fastest path to the page you need — services, resources, and helpful guides.
        </p>
      </header>

      {/* Featured links */}
      <section className="mb-10 rounded-2xl border border-gray-200 dark:border-gray-800 p-5 sm:p-6 bg-white dark:bg-gray-900/40 shadow-sm">
        <h2 className="text-xl font-semibold mb-3">Popular pages</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Quick access to commonly visited pages and key services — useful for new visitors and returning customers.
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {FEATURED_LINKS.map((x) => {
            const href = normalizeHref(x.path);
            return (
              <li
                key={x.path}
                className="rounded-xl border border-gray-200 dark:border-gray-800 p-4 bg-white dark:bg-gray-950/30 hover:shadow-sm transition"
              >
                <Link href={href} className="font-medium hover:underline">
                  {x.title}
                </Link>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {href}
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      {/* Main sections */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Core pages */}
        <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-5 sm:p-6 bg-white dark:bg-gray-900/40 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Main navigation</h2>

          <ul className="space-y-2">
            {TOP_LEVEL_STATIC.slice().sort(byTitle).map((x) => (
              <li key={x.path}>
                <Link href={normalizeHref(x.path)} className="hover:underline">
                  {x.title}
                </Link>
              </li>
            ))}
          </ul>

          <hr className="my-6 border-gray-200 dark:border-gray-800" />

          <h3 className="text-lg font-semibold mb-3">Policies & info</h3>
          <ul className="space-y-2">
            {FOOTER_STATIC.slice().sort(byTitle).map((x) => (
              <li key={x.path}>
                <Link href={normalizeHref(x.path)} className="hover:underline">
                  {x.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-5 sm:p-6 bg-white dark:bg-gray-900/40 shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Services</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Explore service categories and sub-pages to find exactly what you need.
          </p>

          <div className="space-y-5">
            {parents.map((parent) => {
              const parentHref = normalizeHref(parent.path);
              const kids = childrenMap.get(parent.id) ?? [];

              return (
                <div
                  key={parent.id}
                  className="rounded-xl border border-gray-200 dark:border-gray-800 p-4 bg-white dark:bg-gray-950/30"
                >
                  <Link href={parentHref} className="font-semibold hover:underline">
                    {parent.title}
                  </Link>

                  {kids.length > 0 && (
                    <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {kids.map((child) => (
                        <li key={child.id} className="text-sm">
                          <Link
                            href={normalizeHref(child.path)}
                            className="text-gray-700 dark:text-gray-200 hover:underline"
                          >
                            {child.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
