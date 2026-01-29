// app/online-ordering-portals/page.tsx
import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";
import { getFooterData } from "db/GetFooterData";
import { buildServiceBreadcrumbs } from "lib/breadcrumbs";

export const revalidate = 86400;

const BASE_URL = "https://www.mseprinting.com";
const PAGE_PATH = "/online-ordering-portals";
const PAGE_URL = `${BASE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${BASE_URL}/images/home-images/online_ordering.webp`;

/* ───────── SEO & Social Metadata ───────── */
export const metadata: Metadata = {
  title: "Online Ordering Portals in Minneapolis | MSE Printing",
  description:
    "Streamline printing and marketing with custom online ordering portals from MSE Printing. Simplify ordering, boost productivity, and keep brand consistency in Minneapolis & nationwide.",
  keywords: [
    "online ordering portals Minneapolis",
    "online ordering portal printing",
    "web to print portal",
    "custom ordering portal",
    "branded ordering portal",
    "marketing materials ordering portal",
    "print procurement portal",
    "online print ordering system",
    "MSE Printing online ordering",
    "Minneapolis printing portal",
  ],
  applicationName: "MSE Printing",
  category: "Online Ordering Portals",
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: PAGE_URL,
  },
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
    title: "Online Ordering Portals in Minneapolis | MSE Printing",
    description:
      "Customized online ordering solutions designed to enhance operations, productivity, and brand consistency.",
    url: PAGE_URL,
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Online ordering portal interface by MSE Printing in Minneapolis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Ordering Portals in Minneapolis | MSE Printing",
    description:
      "Empower your business with branded, secure online ordering portals from MSE Printing. Efficient, accurate, always available.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: OG_IMAGE,
        alt: "Custom online ordering portal by MSE Printing, Minneapolis",
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
  icons: { icon: "/favicon.ico", apple: "/favicon.ico" },
  authors: [{ name: "MSE Printing", url: BASE_URL }],
  creator: "MSE Printing",
  publisher: "MSE Printing",
};

/* ───────── Viewport Theme Colors ───────── */
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  colorScheme: "light dark",
};

/* ───────── Structured Data (WebPage + Service + Breadcrumb) ───────── */
const ServiceSchema = () => {
  const businessId = `${BASE_URL}/#business`;
  const websiteId = `${BASE_URL}/#website`;

  const graph = [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Online Ordering Portals in Minneapolis | MSE Printing",
      description:
        "Streamline printing and marketing with custom online ordering portals from MSE Printing. Simplify ordering, boost productivity, and keep brand consistency in Minneapolis & nationwide.",
      isPartOf: { "@type": "WebSite", "@id": websiteId },
      primaryImageOfPage: { "@type": "ImageObject", url: OG_IMAGE },
      inLanguage: "en-US",
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumbs` },
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Online Ordering Portals",
      image: OG_IMAGE,
      description:
        "Custom online ordering portals by MSE Printing. Streamline print and marketing processes, maintain brand consistency, and simplify business ordering in Minneapolis and nationwide.",
      provider: { "@type": "LocalBusiness", "@id": businessId },
      areaServed: [
        { "@type": "City", name: "Minneapolis" },
        { "@type": "State", name: "Minnesota" },
        { "@type": "Country", name: "United States" },
      ],
      serviceType: "Online Ordering Portals",
      category: "Web to Print Solutions",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Online Ordering Portal Services",
        itemListElement: [
          {
            "@type": "Offer",
            url: PAGE_URL,
            itemOffered: {
              "@type": "Service",
              name: "Custom Portal Development",
              description:
                "Build tailored online portals for efficient, secure ordering and management of business materials.",
            },
          },
          {
            "@type": "Offer",
            url: PAGE_URL,
            itemOffered: {
              "@type": "Service",
              name: "Brand Integration",
              description:
                "Ensure consistent branding and user experience across all ordering platforms.",
            },
          },
          {
            "@type": "Offer",
            url: PAGE_URL,
            itemOffered: {
              "@type": "Service",
              name: "Support & Maintenance",
              description:
                "Ongoing portal support, updates, and training for your business needs.",
            },
          },
        ],
      },
      offers: {
        "@type": "Offer",
        url: PAGE_URL,
        availability: "https://schema.org/InStock",
        itemOffered: { "@type": "Service", name: "Online Ordering Portals" },
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumbs`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Online Ordering Portals", item: PAGE_URL },
      ],
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": graph,
        }),
      }}
    />
  );
};

/* ───────── Main Page Component ───────── */
export default async function OnlineOrderingPortals() {
  const data = await getCategoryPagesData(PAGE_PATH);
  const pageData = data.OnlineOrderingPortalsPageData?.[0];

  const { footerContentData } = await getFooterData();
  const breadcrumbs = buildServiceBreadcrumbs(
    "online-ordering-portals",
    footerContentData
  );

  if (!pageData) notFound();

  return (
    <>
      <ServiceSchema />
      <PageStructure
        pageData={pageData}
        breadcrumbs={breadcrumbs}
        tokens={{
          city: "Minneapolis",
          state: "Minnesota",
          state_abbr: "MN",
          brand: "MSE Printing",
          phone: "763-542-8812",
        }}
      />
    </>
  );
}
