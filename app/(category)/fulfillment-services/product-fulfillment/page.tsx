// app/fulfillment-services/product-fulfillment/page.tsx
import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";
import { getFooterData } from "db/GetFooterData";
import { buildServiceBreadcrumbs } from "lib/breadcrumbs";

const BASE_URL = "https://www.mseprinting.com";
const PAGE_PATH = "/fulfillment-services/product-fulfillment";
const PAGE_URL = `${BASE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${BASE_URL}/images/fulfillment-services-images/additional/product_fulfillment_right.webp`;

/* ─────────────── SEO METADATA ─────────────── */
export const metadata: Metadata = {
  title: "Product Fulfillment | MSE Printing",
  description:
    "Deliver confidence with flexible and reliable product fulfillment services from MSE Printing. From storage to shipping, we handle it all.",
  keywords: [
    "product fulfillment Minneapolis",
    "fulfillment services Minneapolis",
    "order fulfillment services",
    "pick and pack fulfillment",
    "warehousing and fulfillment",
    "kitting and fulfillment",
    "ecommerce fulfillment",
    "shipping fulfillment services",
    "inventory storage and shipping",
    "MSE Printing fulfillment",
  ],
  applicationName: "MSE Printing",
  category: "Fulfillment Services",
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
    title: "Product Fulfillment in Minneapolis | MSE Printing",
    description:
      "Reliable, flexible, and brand-aligned—MSE Printing takes your product the final mile with professional fulfillment solutions in Minneapolis.",
    url: PAGE_URL,
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Product fulfillment and delivery service by MSE Printing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Product Fulfillment in Minneapolis | MSE Printing",
    description:
      "MSE Printing handles your product fulfillment from shelf to shipment with speed and care. Trusted by brands across the U.S.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: OG_IMAGE,
        alt: "Fulfillment warehouse and delivery station at MSE Printing",
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

/* ─────────────── VIEWPORT COLOR MODE ─────────────── */
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  colorScheme: "light dark",
};

/* ─────────────── STRUCTURED DATA / SCHEMA.ORG ─────────────── */
const ServiceSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${PAGE_URL}#service`,
    name: "Product Fulfillment",
    description:
      "End-to-end product fulfillment services from storage to shipping. MSE Printing ensures accurate, brand-aligned, and timely delivery.",
    provider: {
      "@type": "LocalBusiness",
      "@id": `${BASE_URL}/#business`,
      name: "MSE Printing",
      url: BASE_URL,
      telephone: "763-542-8812",
      email: "info@mseprinting.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "3839 Washington Ave N Ste. 103",
        addressLocality: "Minneapolis",
        addressRegion: "MN",
        postalCode: "55412",
        addressCountry: "US",
      },
    },
    areaServed: [
      { "@type": "City", name: "Minneapolis" },
      { "@type": "State", name: "Minnesota" },
      { "@type": "Country", name: "United States" },
    ],
    serviceType: "Product Fulfillment",
    category: "Shipping & Logistics",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Fulfillment Services",
      itemListElement: [
        {
          "@type": "Offer",
          url: `${PAGE_URL}#packaging`,
          itemOffered: {
            "@type": "Service",
            name: "Custom Packaging",
            description:
              "Branded packaging and protective wrapping tailored to your product line.",
          },
        },
        {
          "@type": "Offer",
          url: `${PAGE_URL}#delivery`,
          itemOffered: {
            "@type": "Service",
            name: "Nationwide Shipping",
            description:
              "Reliable domestic shipping with tracking, using USPS, UPS, or FedEx.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: PAGE_URL,
      availability: "https://schema.org/InStock",
      itemOffered: { "@type": "Service", name: "Product Fulfillment" },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

/* ─────────────── MAIN PAGE COMPONENT ─────────────── */
export default async function ProductFulfillment() {
  const data = await getCategoryPagesData(PAGE_PATH);
  const pageData = data.ProductFulfillmentPageData?.[0];

  const { footerContentData } = await getFooterData();
  const breadcrumbs = buildServiceBreadcrumbs(
    "fulfillment-services/product-fulfillment",
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
