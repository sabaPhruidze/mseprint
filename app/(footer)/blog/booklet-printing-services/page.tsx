import React from "react";
import { Metadata, Viewport } from "next";
import { getBlogPagesData } from "db/getBlogPagesData";
import PageStructure from "components/common/PageStructure";

/* ─────────────── SEO METADATA ─────────────── */
export const metadata: Metadata = {
  title: "Booklet Printing Services | MSE Print",
  description:
    "Get custom booklet printing services in Minneapolis by MSE Print. Ideal for catalogs, reports, manuals, and more—delivered with professional quality.",
  keywords: [
    "booklet printing Minneapolis",
    "custom booklets",
    "manual printing",
    "event program printing",
    "catalog printing",
    "spiral bound booklets",
    "saddle stitch booklets",
    "perfect binding",
    "training booklets",
    "MSE booklet services",
  ],
  applicationName: "MSE Printing",
  category: "Booklet Printing",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/blog/booklet-printing-services",
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
  verification: {
    google: "ABCD1234xyz",
  },
  openGraph: {
    title: "Booklet Printing Services | MSE Print",
    description:
      "Professional booklet printing in Minneapolis for catalogs, reports, manuals, and promotional booklets with various binding options.",
    url: "https://www.mseprinting.com/blog/booklet-printing-services",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/blog/pages/additional/booklet-printing-services.webp",
        width: 1200,
        height: 630,
        alt: "Custom printed booklets including manuals, reports, and catalogs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Booklet Printing Services | MSE Print",
    description:
      "Get expert booklet printing in Minneapolis. Professional results for catalogs, event programs, and more.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/blog/pages/additional/booklet-printing-services.webp",
        alt: "Saddle-stitched and perfect-bound booklets printed by MSE Printing",
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
  colorScheme: "normal",
};

/* ─────────────── STRUCTURED DATA / SCHEMA.ORG ─────────────── */
const ServiceSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.mseprinting.com/blog/booklet-printing-services#service",
    name: "Booklet Printing Services",
    description:
      "High-quality booklet printing services in Minneapolis—perfect-bound, saddle-stitched, or spiral booklets for any professional need.",
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
    serviceType: "Booklet Printing",
    category: "Marketing Materials",
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/blog/booklet-printing-services",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Booklet Printing Services",
      },
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
const BookletPrintingServices = async () => {
  const data = await getBlogPagesData("/blog/booklet-printing-services");
  const pageData = data.BlogBookletPrintingServicesPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return (
    <>
      <ServiceSchema />
      <PageStructure pageData={pageData} />
    </>
  );
};

export default BookletPrintingServices;
