// app/fulfillment-services/pick-pack/page.tsx
import React from "react";
import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";
import { getFooterData } from "db/GetFooterData";
import { buildServiceBreadcrumbs } from "lib/breadcrumbs";

/* ─────────────── SEO METADATA ─────────────── */
export const metadata: Metadata = {
  title: "Pick & Pack | MSE Printing",
  description:
    "Streamline your shipping process with professional pick & pack services from MSE Printing. Efficient, accurate order fulfillment tailored to your needs.",
  applicationName: "MSE Printing",
  category: "Fulfillment Services",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/fulfillment-services/pick-pack",
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
  // Put site verification and LocalBusiness/geo once in app/layout.tsx, not per page.
  openGraph: {
    title: "Pick & Pack | MSE Printing",
    description:
      "Fast, accurate, and scalable—MSE Printing’s pick & pack services ensure every order is fulfilled with care and delivered on time.",
    url: "https://www.mseprinting.com/fulfillment-services/pick-pack",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/fulfillment-services-images/additional/pick_pack_right.webp",
        width: 1200,
        height: 630,
        alt: "MSE Printing - Pick & Pack order fulfillment service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pick & Pack | MSE Printing",
    description:
      "Pick & pack order fulfillment from MSE Printing. Accurate sorting, labeling, packaging, and shipping tailored for your business.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/fulfillment-services-images/additional/pick_pack_right.webp",
        alt: "Packaging station used for pick and pack service at MSE Printing",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
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
    "@id": "https://www.mseprinting.com/fulfillment-services/pick-pack#service",
    name: "Pick & Pack Services",
    description:
      "Accurate, fast, and customized pick & pack solutions by MSE Printing. Ideal for businesses needing reliable fulfillment of print and merchandise orders.",
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
    serviceType: "Pick & Pack Fulfillment",
    category: "Order Fulfillment",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Pick & Pack Services",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/fulfillment-services/pick-pack#manual",
          itemOffered: {
            "@type": "Service",
            name: "Manual Pick & Pack",
            description:
              "Skilled staff fulfill orders by hand with precision and care, ideal for custom or fragile items.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/fulfillment-services/pick-pack#automated",
          itemOffered: {
            "@type": "Service",
            name: "Automated Labeling & Shipping",
            description:
              "Barcoded items processed for fast and accurate shipping, integrated with carriers and tracking.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/fulfillment-services/pick-pack",
      availability: "https://schema.org/InStock",
      itemOffered: { "@type": "Service", name: "Pick & Pack Services" },
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
export default async function PickPack() {
  const data = await getCategoryPagesData("/fulfillment-services/pick-pack");
  const pageData = data.PickPackPageData?.[0];
  const { footerContentData } = await getFooterData();
  const breadcrumbs = buildServiceBreadcrumbs(
    "fulfillment-services/pick-pack",
    footerContentData
  );

  if (!pageData) {
    // Avoid a thin 200; return a true 404 to prevent soft-404 signals
    notFound();
  }

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
