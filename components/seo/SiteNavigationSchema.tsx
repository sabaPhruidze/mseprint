import { ServicesPathTypes } from "../../types/commonTypes";
import { absUrl, normalizeHref } from "src/helpers/urls";

type Props = {
  servicesData: ServicesPathTypes[];
  baseUrl?: string;
  name?: string;
};

const uniqBy = <T,>(arr: T[], keyFn: (x: T) => string) => {
  const m = new Map<string, T>();
  for (const x of arr) m.set(keyFn(x), x);
  return Array.from(m.values());
};

export default function SiteNavigationSchema({
  servicesData,
  baseUrl = "https://www.mseprinting.com",
  name = "MSE Printing site navigation",
}: Props) {
  const cleaned = uniqBy(
    servicesData.filter((x) => String(x?.path ?? "").trim().length > 0),
    (x) => `${x.title}|${x.path}`
  );

  const parents = cleaned
    .filter((x) => !x.parent_id)
    .sort((a, b) => a.title.localeCompare(b.title));

  const children = cleaned.filter((x) => x.parent_id);

  const hasPart = parents.map((p) => {
    const subs = children
      .filter((c) => c.parent_id === p.id)
      .sort((a, b) => a.title.localeCompare(b.title))
      .map((c) => ({
        "@type": "SiteNavigationElement",
        name: c.title,
        url: absUrl(baseUrl, normalizeHref(c.path)),
      }));

    return {
      "@type": "SiteNavigationElement",
      name: p.title,
      url: absUrl(baseUrl, normalizeHref(p.path)),
      ...(subs.length ? { hasPart: subs } : {}),
    };
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    name,
    hasPart,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
