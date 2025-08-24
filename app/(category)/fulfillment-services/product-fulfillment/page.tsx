// app/fulfillment-services/product-fulfillment/page.tsx
import React from "react";
import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";
import { getFooterData } from "db/GetFooterData";
import { buildServiceBreadcrumbs } from "lib/breadcrumbs";

/* ─────────────── SEO METADATA ─────────────── */
export const metadata: Metadata = {
  title: "Product Fulfillment | MSE Printing",
  description:
    "Deliver confidence with flexible and reliable product fulfillment services from MSE Printing. From storage to shipping, we handle it all.",
  applicationName: "MSE Printing",
  category: "Fulfillment Services",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical:
      "https://www.mseprinting.com/fulfillment-services/product-fulfillment",
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
  // Site verification + LocalBusiness/geo should live once in app/layout.tsx (site-wide), not per page.
  openGraph: {
    title: "Product Fulfillment in minneapolis | MSE Printing",
    description:
      "Reliable, flexible, and brand-aligned—MSE Printing takes your product the final mile with professional fulfillment solutions in minneapolis.",
    url: "https://www.mseprinting.com/fulfillment-services/product-fulfillment",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/fulfillment-services-images/additional/product_fulfillment_right.webp",
        width: 1200,
        height: 630,
        alt: "Product fulfillment and delivery service by MSE Printing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Product Fulfillment in minneapolis | MSE Printing",
    description:
      "MSE Printing handles your product fulfillment from shelf to shipment with speed and care. Trusted by brands across the U.S.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/fulfillment-services-images/additional/product_fulfillment_right.webp",
        alt: "Fulfillment warehouse and delivery station at MSE Printing",
      },
    ],
  },
  icons: { icon: "/favicon.ico", apple: "/favicon.ico" },
  authors: [{ name: "MSE Printing", url: "https://www.mseprinting.com" }],
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
    "@id":
      "https://www.mseprinting.com/fulfillment-services/product-fulfillment#service",
    name: "Product Fulfillment",
    description:
      "End-to-end product fulfillment services from storage to shipping. MSE Printing ensures accurate, brand-aligned, and timely delivery.",
    provider: {
      "@type": "LocalBusiness",
      "@id": "https://www.mseprinting.com/#business",
      name: "MSE Printing",
      url: "https://www.mseprinting.com",
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
          url: "https://www.mseprinting.com/fulfillment-services/product-fulfillment#packaging",
          itemOffered: {
            "@type": "Service",
            name: "Custom Packaging",
            description:
              "Branded packaging and protective wrapping tailored to your product line.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/fulfillment-services/product-fulfillment#delivery",
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
      url: "https://www.mseprinting.com/fulfillment-services/product-fulfillment",
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
  const data = await getCategoryPagesData(
    "/fulfillment-services/product-fulfillment"
  );
  const pageData = data.ProductFulfillmentPageData?.[0];

  // If you also want breadcrumbs here, re-enable the footer fetch + builder:
  // const { footerContentData } = await getFooterData();
  // const breadcrumbs = buildServiceBreadcrumbs('fulfillment-services/product-fulfillment', footerContentData);

  if (!pageData) {
    // Avoid a thin 200; return a true 404 to prevent soft-404 signals
    notFound();
  }

  return (
    <>
      <ServiceSchema />
      <PageStructure
        pageData={pageData}
        // breadcrumbs={breadcrumbs}
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
