import { ServicesPathTypes } from "../../types/commonTypes";
import { absUrl, normalizeHref } from "src/helpers/urls";

type Props = {
  servicesData: ServicesPathTypes[];
  baseUrl?: string;
  name?: string;
};

export default function SiteNavigationSchema({
  servicesData,
  baseUrl = "https://www.mseprinting.com",
  name = "MSE Printing site navigation",
}: Props) {
  const parents = servicesData
    .filter((x) => !x.parent_id)
    .sort((a, b) => a.title.localeCompare(b.title));

  const children = servicesData.filter((x) => x.parent_id);

  const hasPart = parents.map((p) => {
    const sub = children
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
      ...(sub.length ? { hasPart: sub } : {}),
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
