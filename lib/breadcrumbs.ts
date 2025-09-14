import type { ServicesPathTypes } from "types/commonTypes";

export type Crumb = { href: string; label: string };

/** Normalize a slug/path: trim whitespace and strip leading/trailing slashes */
function normPath(p: string): string {
  return String(p || "").trim().replace(/^\/+|\/+$/g, "");
}

/** Site-relative href with a single leading slash (and URI-encoded) */
function normalizeHref(p?: string): string {
  const s = normPath(String(p || ""));
  return s ? `/${encodeURI(s)}` : "/";
}

/** Absolute URL from a base + possibly messy href.
 * If href is already absolute, returns a trimmed version of it. */
function absUrl(base: string, href: string): string {
  const h = String(href || "").trim();
  if (/^https?:\/\//i.test(h)) return h;
  const b = String(base || "").replace(/\/+$/, "");
  const rel = normalizeHref(h);
  return `${b}${rel === "/" ? "" : rel}`;
}

/**
 * Path-chain overrides for exceptional cases where DB parent_id is known wrong.
 * - Keys: leaf page slugs (no leading slash).
 * - Values: ordered ancestor slugs (top → bottom), *excluding* the leaf.
 */
const PATH_CHAIN_OVERRIDES: Record<string, string[]> = {
  // /brochures-collateral → Home / Printing & Copying / Brochures & Collateral
  "brochures-collateral": ["printing-copying"],
  // If you ever need banners-posters forced:
  // "banners-posters": ["signs"],
};

/** Deduplicate crumbs while preserving order (href+label pair) */
function dedupeCrumbs(list: Crumb[]): Crumb[] {
  const seen = new Set<string>();
  const out: Crumb[] = [];
  for (const c of list) {
    const href = normalizeHref(c.href);
    const key = `${href}|${c.label}`;
    if (!seen.has(key)) {
      seen.add(key);
      out.push({ href, label: c.label });
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

  // 1) If explicit override exists, validate each ancestor against DB.
  const rawOverride = PATH_CHAIN_OVERRIDES[curSlug];
  if (rawOverride && rawOverride.length) {
    const validAncestors = rawOverride
      .map((slug) => normPath(slug))
      .filter((slug) => {
        const exists = byPath.has(slug);
        if (!exists && process.env.NODE_ENV !== "production") {
          // eslint-disable-next-line no-console
          console.warn(
            `[breadcrumbs] Missing override ancestor in DB: "${slug}" for leaf "${curSlug}"`
          );
        }
        return exists;
      });

    for (const ancestorSlug of validAncestors) {
      const a = byPath.get(ancestorSlug)!;
      crumbs.push({ href: normalizeHref(a.path), label: a.title });
    }

    // Finally the leaf
    crumbs.push({ href: normalizeHref(node.path), label: node.title });
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
    crumbs.push({ href: normalizeHref(it.path), label: it.title });
  }

  return dedupeCrumbs(crumbs);
}

/** Simple helper for blog pages */
export function buildBlogBreadcrumbs(title: string, slug: string): Crumb[] {
  return [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: normalizeHref(`/blog/${normPath(slug)}`), label: title },
  ];
}

/** One-off crumbs (e.g., Sitemap) */
export function buildStaticBreadcrumbs(label: string, href: string): Crumb[] {
  return [
    { href: "/", label: "Home" },
    { href: normalizeHref(href), label },
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
    item: absUrl(siteBaseUrl, c.href),
  }));
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };
}
