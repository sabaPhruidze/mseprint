import type { ServicesPathTypes } from "types/commonTypes";

export type Crumb = { href: string; label: string };

/** Normalize a path/slug: strip leading/trailing slashes */
function normPath(p: string): string {
  return String(p || "").replace(/^\/|\/$/g, "");
}

/** Ensure a site-relative href begins with a single leading slash */
function toHref(p: string): string {
  const s = normPath(p);
  return s ? `/${s}` : "/";
}

/** Absolute URL from a site-relative href ("/...") */
function abs(base: string, href: string): string {
  const b = base.replace(/\/$/, "");
  const h = toHref(href);
  return `${b}${h === "/" ? "" : h}`;
}

/**
 * Path-chain overrides for exceptional cases where DB parent_id is known to be wrong.
 * - Keys: leaf page slugs (no leading slash).
 * - Values: ordered list of ancestor slugs (top → bottom), *excluding* the leaf.
 *
 * NOTE: We removed the incorrect "printing-copying/signs" override that caused /printing-copying/signs 404s.
 * Only keep TRUE, existing ancestors here.
 */
const PATH_CHAIN_OVERRIDES: Record<string, string[]> = {
  // Example: /brochures-collateral → Home / Printing & Copying / Brochures & Collateral
  "brochures-collateral": ["printing-copying"],

  // If you need a forced chain for banners-posters, it should be:
  // "banners-posters": ["signs"],  // (only if you *must* override DB parents)
};

/** Deduplicate crumbs while preserving order (href+label pair) */
function dedupeCrumbs(list: Crumb[]): Crumb[] {
  const seen = new Set<string>();
  const out: Crumb[] = [];
  for (const c of list) {
    const key = `${toHref(c.href)}|${c.label}`;
    if (!seen.has(key)) {
      seen.add(key);
      out.push({ href: toHref(c.href), label: c.label });
    }
  }
  return out;
}

/** Build breadcrumbs for service pages using footerContentData hierarchy, with safe overrides */
export function buildServiceBreadcrumbs(
  currentPath: string,
  serviceData: ServicesPathTypes[]
): Crumb[] {
  const byId = new Map<number, ServicesPathTypes>();
  const byPath = new Map<string, ServicesPathTypes>();

  for (const item of serviceData) {
    byId.set(item.id, item);
    byPath.set(normPath(item.path), item);
  }

  const curSlug = normPath(currentPath);
  const node = byPath.get(curSlug);

  // Always start with Home
  const crumbs: Crumb[] = [{ href: "/", label: "Home" }];

  if (!node) return crumbs; // no data; show just Home

  // 1) If we have an explicit path-chain override, validate each ancestor against DB.
  const rawOverride = PATH_CHAIN_OVERRIDES[curSlug];
  if (rawOverride && rawOverride.length) {
    const validAncestors = rawOverride
      .map((slug) => normPath(slug))
      .filter((slug) => {
        const exists = byPath.has(slug);
        if (!exists && process.env.NODE_ENV !== "production") {
          // Log only in non-prod to avoid noisy logs
          // eslint-disable-next-line no-console
          console.warn(
            `[breadcrumbs] Missing override ancestor in DB: "${slug}" for leaf "${curSlug}"`
          );
        }
        return exists;
      });

    for (const ancestorSlug of validAncestors) {
      const a = byPath.get(ancestorSlug)!;
      crumbs.push({ href: toHref(a.path), label: a.title });
    }

    // Finally the leaf
    crumbs.push({ href: toHref(node.path), label: node.title });
    return dedupeCrumbs(crumbs);
  }

  // 2) Default: climb the DB tree via parent_id (with simple cycle protection)
  const visited = new Set<number>();
  const chain: ServicesPathTypes[] = [];
  let cur: ServicesPathTypes | undefined = node;

  while (cur) {
    if (visited.has(cur.id)) break; // cycle guard
    visited.add(cur.id);
    chain.unshift(cur);
    if (cur.parent_id == null) break;
    cur = byId.get(cur.parent_id);
  }

  for (const it of chain) {
    crumbs.push({ href: toHref(it.path), label: it.title });
  }

  return dedupeCrumbs(crumbs);
}

/** Simple helper for blog pages */
export function buildBlogBreadcrumbs(title: string, slug: string): Crumb[] {
  return [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: `/blog/${normPath(slug)}`, label: title },
  ];
}

/** One-off crumbs (e.g., Sitemap) */
export function buildStaticBreadcrumbs(label: string, href: string): Crumb[] {
  return [
    { href: "/", label: "Home" },
    { href: toHref(href), label },
  ];
}

/** Emit BreadcrumbList JSON-LD from crumbs */
export function buildBreadcrumbListJsonLd(
  crumbs: Crumb[],
  siteBaseUrl: string
) {
  const itemListElement = crumbs.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: c.label,
    item: abs(siteBaseUrl, c.href),
  }));
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };
}
