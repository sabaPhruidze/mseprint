// app/fulfillment-services/page.tsx
import React from "react";
import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { getSpecialPagesData } from "db/GetSpecialPagesData";
import CardsPagesStructure from "components/common/CardsPagesStructure";
import { getFooterData } from "db/GetFooterData";
import { buildServiceBreadcrumbs } from "lib/breadcrumbs";

/* ─────────────── SEO METADATA ─────────────── */
export const metadata: Metadata = {
  title: "Kitting & Fulfillment Services | MSE Printing",
  description:
    "Fast, accurate, and scalable product fulfillment from MSE Printing—inventory, kitting, pick & pack, and shipping handled with care.",
  applicationName: "MSE Printing",
  category: "Fulfillment Services",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/fulfillment-services",
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
  // Put verification tokens once, site-wide (e.g., app/layout.tsx), not per page.
  openGraph: {
    title: "Kitting & Fulfillment Services | MSE Printing",
    description:
      "Discover efficient warehousing, kitting, and shipping services tailored to your brand’s logistics needs with MSE Printing.",
    url: "https://www.mseprinting.com/fulfillment-services",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/fulfillment-services-images/product_fulfillment.webp",
        width: 1200,
        height: 630,
        alt: "Product Fulfillment Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kitting & Fulfillment Services | MSE Printing",
    description:
      "From warehouse to doorstep—MSE Printing provides dependable fulfillment services tailored to your needs.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/fulfillment-services-images/product_fulfillment.webp",
        alt: "MSE Printing - Fulfillment Services",
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
    "@id": "https://www.mseprinting.com/fulfillment-services#service",
    name: "Kitting & Fulfillment",
    description:
      "Full-service product fulfillment including warehousing, inventory management, kitting, pick & pack, and shipping. MSE Printing delivers scalable solutions from Minneapolis.",
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
    category: "Fulfillment & Logistics",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Fulfillment Services Catalog",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/fulfillment-services#inventory",
          itemOffered: {
            "@type": "Service",
            name: "Inventory Management",
            description:
              "Real-time tracking and secure warehousing for your products.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/fulfillment-services#pickpack",
          itemOffered: {
            "@type": "Service",
            name: "Pick & Pack",
            description:
              "Accurate and efficient order fulfillment with branded packaging.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/fulfillment-services#shipping",
          itemOffered: {
            "@type": "Service",
            name: "Shipping & Delivery",
            description:
              "Nationwide delivery using USPS, UPS, FedEx with tracking.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/fulfillment-services",
      availability: "https://schema.org/InStock",
      itemOffered: { "@type": "Service", name: "Kitting & Fulfillment" },
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
export default async function FulfillmentServices() {
  const data = await getSpecialPagesData("/fulfillment-services");
  const pageData = data.FulfillmentServicesCardPageData?.[0];
  const { footerContentData } = await getFooterData();
  const breadcrumbs = buildServiceBreadcrumbs(
    "fulfillment-services",
    footerContentData
  );

  if (!pageData) {
    // Don’t emit a thin 200 page; return a real 404 to avoid soft-404
    notFound();
  }

  return (
    <>
      <ServiceSchema />
      <CardsPagesStructure
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
