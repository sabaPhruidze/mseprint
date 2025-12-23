import Link from "next/link";
import { normalizeHref, absUrl } from "src/helpers/urls";

export type BreadcrumbItem = { href: string; label: string };

export default function Breadcrumbs({
  breadcrumbs,
  baseUrl = "https://www.mseprinting.com/",
}: {
  breadcrumbs?: BreadcrumbItem[];
  baseUrl?: string;
}) {
  if (!breadcrumbs?.length) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((bc, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: bc.label,
      item: bc.href.startsWith("http")
        ? bc.href.trim()
        : absUrl(baseUrl, bc.href),
    })),
  };

  return (
    <nav
      aria-label="Breadcrumb"
      className="absolute top-[0px] left-[2px] z-20 px-2 py-1 rounded bg-black/30 backdrop-blur-sm"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ol className="flex flex-wrap gap-1 text-[12px] sm:text-sm text-white/90">
        {breadcrumbs.map((bc, i) => {
          const isLast = i === breadcrumbs.length - 1;
          return (
            <li key={`${bc.href}-${i}`} className="flex items-center">
              {i > 0 && <span className="mx-1">›</span>}
              {isLast ? (
                <span aria-current="page" className="font-semibold">
                  {bc.label}
                </span>
              ) : (
                <Link
                  href={normalizeHref(bc.href)}
                  className="underline-offset-2 hover:underline"
                >
                  {bc.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
