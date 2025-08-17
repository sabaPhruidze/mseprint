import type { ServicesPathTypes } from "types/commonTypes";

export type Crumb = { href: string; label: string };

/** Build breadcrumbs for service pages using footerContentData hierarchy */
export function buildServiceBreadcrumbs(currentPath: string, serviceData: ServicesPathTypes[]): Crumb[] {
  // index by id and by path (normalize slashes)
  const byId = new Map<number, ServicesPathTypes>();
  const byPath = new Map<string, ServicesPathTypes>();

  for (const item of serviceData) {
    byId.set(item.id, item);
    const normPath = String(item.path).replace(/^\/|\/$/g, "");
    byPath.set(normPath, item);
  }

  const norm = currentPath.replace(/^\/|\/$/g, "");
  const node = byPath.get(norm);

  const crumbs: Crumb[] = [{ href: "/", label: "Home" }];

  if (!node) {
    // Fallback: Home only (or infer from segments if you prefer)
    return crumbs;
  }

  // climb up via parent_id
  const chain: ServicesPathTypes[] = [];
  let cur: ServicesPathTypes | undefined = node;
  while (cur) {
    chain.unshift(cur);
    if (cur.parent_id == null) break;
    cur = byId.get(cur.parent_id);
  }

  for (const it of chain) {
    crumbs.push({ href: `/${it.path}`, label: it.title });
  }
  return crumbs;
}

/** Simple helper for blog pages */
export function buildBlogBreadcrumbs(title: string, slug: string): Crumb[] {
  return [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: `/blog/${slug}`, label: title },
  ];
}

/** One-off crumbs (e.g., Sitemap) */
export function buildStaticBreadcrumbs(label: string, href: string): Crumb[] {
  return [
    { href: "/", label: "Home" },
    { href, label },
  ];
}
