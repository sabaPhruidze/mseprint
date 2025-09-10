import type { ServicesPathTypes } from "types/commonTypes";

export type Crumb = { href: string; label: string };

/** Normalize a path to a slug with no leading/trailing slashes */
function normPath(p: string): string {
  return String(p || "").replace(/^\/|\/$/g, "");
}

/** Absolute URL from a site-relative href ("/...") */
function abs(base: string, href: string): string {
  return `${base.replace(/\/$/, "")}${href === "/" ? "" : href}`;
}

/**
 * Some pages are mis-parented in the DB (parent_id points to Tradeshows & Events).
 * Use path-level overrides to force the correct ancestry.
 *
 * Keys and values are normalized slugs (no leading slash).
 * Values are the ordered list of ancestor slugs (top → bottom, excluding the leaf).
 */
const PATH_CHAIN_OVERRIDES: Record<string, string[]> = {
  // Fixes reported issues:
  // /brochures-collateral → Home / Printing & Copying / Brochures & Collateral
  "brochures-collateral": ["printing-copying"],

  // /banners-posters → Home / Printing & Copying / Signs / Banners & Posters
  "banners-posters": ["printing-copying", "printing-copying/signs"],

  // Add future exceptions here as needed...
};

/** Build breadcrumbs for service pages using footerContentData hierarchy, with overrides */
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

  // 1) If we have an explicit path-chain override, honor it and skip DB parents.
  const overrideChain = PATH_CHAIN_OVERRIDES[curSlug];
  if (overrideChain && overrideChain.length) {
    for (const ancestorSlug of overrideChain) {
      const a = byPath.get(normPath(ancestorSlug));
      if (a) crumbs.push({ href: `/${normPath(a.path)}`, label: a.title });
      else
        // Fallback: derive label from slug if the ancestor is missing in DB
        crumbs.push({
          href: `/${normPath(ancestorSlug)}`,
          label: normPath(ancestorSlug).split("/").pop()!.replace(/-/g, " "),
        });
    }
    // Finally the leaf:
    crumbs.push({ href: `/${normPath(node.path)}`, label: node.title });
    return dedupeCrumbs(crumbs);
  }

  // 2) Default: climb the DB tree via parent_id
  // Add simple cycle protection just in case.
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
    crumbs.push({ href: `/${normPath(it.path)}`, label: it.title });
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
    { href, label },
  ];
}

/** Remove accidental duplicates while preserving order */
function dedupeCrumbs(list: Crumb[]): Crumb[] {
  const seen = new Set<string>();
  const out: Crumb[] = [];
  for (const c of list) {
    const key = `${c.href}|${c.label}`;
    if (!seen.has(key)) {
      seen.add(key);
      out.push(c);
    }
  }
  return out;
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
