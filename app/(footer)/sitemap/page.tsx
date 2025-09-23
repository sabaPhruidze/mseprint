import Link from "next/link";
import { getFooterData } from "db/GetFooterData";
import { ServicesPathTypes } from "types/commonTypes";
import { buildStaticBreadcrumbs } from "lib/breadcrumbs";

export const metadata = {
  title: "Sitemap | MSE Graphics",
  description:
    "Complete sitemap of MSE Graphics – find every product & service page from one place.",
  keywords: [
    "sitemap",
    "site navigation",
    "all pages",
    "MSE Graphics sitemap",
    "services sitemap",
    "product listing",
    "quick navigation",
    "page directory",
    "website structure",
    "MSE Graphics",
  ],
  applicationName: "MSE Graphics",
  category: "Sitemap",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: { canonical: "https://www.mseprinting.com/sitemap" },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "Sitemap | MSE Graphics",
    description:
      "Explore every product and service page on the MSE Graphics website in one place.",
    url: "https://www.mseprinting.com/sitemap",
    siteName: "MSE Graphics",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/footer-images/sitemap.webp",
        width: 800,
        height: 630,
        alt: "MSE Graphics Sitemap Overview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sitemap | MSE Graphics",
    description: "Explore every product and service page in one place.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/footer-images/sitemap.webp",
        alt: "Sitemap for MSE Graphics",
      },
    ],
  },
  other: {
    "geo.region": "US-MN",
    "geo.placename": "Minneapolis",
    "geo.position": "45.0230;-93.2790",
    ICBM: "45.0230, -93.2790",
    "business:contact_data:street_address": "3839 Washington Ave N Ste. 103",
    "business:contact_data:locality": "Minneapolis",
    "business:contact_data:region": "MN",
    "business:contact_data:postal_code": "55412",
    "business:contact_data:country_name": "USA",
    "business:contact_data:phone_number": "763-542-8812",
    "og:email": "info@mseprinting.com",
    "og:phone_number": "763-542-8812",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  authors: [{ name: "MSE Graphics", url: "https://www.mseprinting.com" }],
  creator: "MSE Graphics",
  publisher: "MSE Graphics",
} as const;

/* — Schema.org WebPage structured data — */
const WebPageSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.mseprinting.com/sitemap#webpage",
    url: "https://www.mseprinting.com/sitemap",
    name: "Sitemap",
    description:
      "Complete sitemap of MSE Graphics – find every product & service page from one place.",
    publisher: {
      "@type": "Organization",
      name: "MSE Graphics",
      url: "https://www.mseprinting.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.mseprinting.com/favicon.ico",
      },
    },
    inLanguage: "en-US",
    datePublished: "2024-01-01", // Update as appropriate
    dateModified: "2025-05-24", // Update dynamically if possible
    image: ["https://www.mseprinting.com/images/footer-images/sitemap.webp"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

// Helper that groups items by parent_id – guards against undefined
const groupChildren = (items: ServicesPathTypes[]) => {
  const map = new Map<number, ServicesPathTypes[]>();
  items.forEach((it) => {
    if (typeof it.parent_id === "number") {
      const pid = it.parent_id; // now guaranteed to be a number
      if (!map.has(pid)) map.set(pid, []);
      map.get(pid)!.push(it);
    }
  });
  return map;
};

const TOP_LEVEL_STATIC = [
  { title: "Home", path: "/" },
  { title: "About Us", path: "/about-us" },
  { title: "Contact Us", path: "/contact-us" },
  { title: "Request a Quote", path: "/request-quote" },
  { title: "Place an Order", path: "/send-file" },
] as const;

const FOOTER_STATIC = [
  { title: "Accessibility", path: "/accessibility" },
  { title: "Blog", path: "/blog" },
  { title: "Privacy Policy", path: "/privacy-policy" },
  { title: "Terms & Conditions", path: "/terms-conditions" },
  { title: "EOE & Diversity", path: "/eoe-diversity" },
  { title: "Environmental Message", path: "/environmental-message" },
] as const;

// Show these under the "Blog" item in the footer section
const BLOG_POSTS = [
  {
    title: "Affordable Printing Solutions",
    path: "/blog/affordable-printing-solutions",
  },
  {
    title: "Booklet Printing Services",
    path: "/blog/booklet-printing-services",
  },
  {
    title: "Corporate Printing Solutions",
    path: "/blog/corporate-printing-solutions",
  },
  { title: "Legal Document Printing", path: "/blog/legal-document-printing" },
  { title: "Local Printing Services", path: "/blog/local-printing-services" },
  {
    title: "Notepad Printing Services",
    path: "/blog/notepad-printing-services",
  },
  {
    title: "Professional Printing Services",
    path: "/blog/professional-printing-services",
  },
] as const;

export default async function Sitemap() {
  const { footerContentData } = await getFooterData();
  const serviceData = footerContentData as ServicesPathTypes[];

  const breadcrumbs = buildStaticBreadcrumbs("Sitemap", "/sitemap");

  const parentItems = serviceData
    .filter((it) => it.parent_id === null)
    .sort((a, b) => a.id - b.id);
  const childrenMap = groupChildren(serviceData);

  return (
    <>
      <WebPageSchema />
      <main className="max-w-screen-lg mx-auto px-4 py-10">
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex flex-wrap gap-2 text-sm text-gray-600">
            {breadcrumbs.map((bc, i) => {
              const isLast = i === breadcrumbs.length - 1;
              return (
                <li key={bc.href} className="flex items-center">
                  {i > 0 && <span className="mx-1">›</span>}
                  {isLast ? (
                    <span aria-current="page" className="font-semibold">
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
        <h1 className="text-4xl font-bold mb-8 text-center">SITEMAP</h1>

        <nav aria-label="Sitemap">
          <ul className="space-y-3 text-blue-600 list-disc">
            {TOP_LEVEL_STATIC.map((link) => (
              <li key={link.path} className="text-red">
                <Link href={link.path} className="hover:underline ml-2">
                  {link.title}
                </Link>
              </li>
            ))}

            {parentItems.map((parent) => (
              <li
                key={parent.id}
                className="text-blue-600 pl-4 list-disc list-inside"
              >
                <Link
                  href={`/${parent.path}`}
                  className="text-blue-600 font-semibold hover:underline "
                >
                  {parent.title}
                </Link>

                {childrenMap.get(parent.id)?.length && (
                  <ul className="mt-2 ml-6 space-y-1 list-disc list-inside">
                    {childrenMap
                      .get(parent.id)!
                      .sort((a, b) => a.id - b.id)
                      .map((child) => (
                        <li key={child.id} className="text-green-600">
                          <Link
                            href={`/${child.path}`}
                            className="hover:underline"
                          >
                            {child.title}
                          </Link>
                        </li>
                      ))}
                  </ul>
                )}
              </li>
            ))}

            {FOOTER_STATIC.map((link) => {
              const isBlog = link.title === "Blog";
              return (
                <li key={link.path} className="text-red">
                  <Link href={link.path} className="hover:underline ml-2">
                    {link.title}
                  </Link>

                  {/* If it's the Blog item, show child posts beneath it */}
                  {isBlog && (
                    <ul className="mt-2 ml-8 space-y-1 list-disc list-inside">
                      {BLOG_POSTS.map((post) => (
                        <li key={post.path} className="text-green-600">
                          <Link href={post.path} className="hover:underline">
                            {post.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </main>
    </>
  );
}
