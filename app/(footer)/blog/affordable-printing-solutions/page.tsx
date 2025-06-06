import React from "react";
import { Metadata, Viewport } from "next";
import { getBlogPagesData } from "db/getBlogPagesData";
import PageStructure from "components/common/PageStructure";

/* ─────────────── SEO METADATA ─────────────── */
export const metadata: Metadata = {
  title: "Affordable Printing Solutions | MSE Print",
  description:
    "Discover affordable printing services for businesses in Minneapolis. MSE Print delivers professional quality at a price that fits your budget.",
  keywords: [
    "affordable printing Minneapolis",
    "budget printing solutions",
    "cheap business cards",
    "low-cost brochures",
    "cost-effective flyers",
    "minneapolis print shop",
    "discount printing services",
    "custom print deals",
    "MSE budget prints",
    "digital printing Minneapolis",
  ],
  applicationName: "MSE Printing",
  category: "Affordable Printing",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/blog/affordable-printing-solutions",
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
    title: "Affordable Printing Solutions | MSE Print",
    description:
      "Professional quality printing tailored for your business needs and budget. Explore MSE Print's cost-efficient solutions in Minneapolis.",
    url: "https://www.mseprinting.com/blog/affordable-printing-solutions",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/blog/pages/additional/affordable-printing-solutions.webp",
        width: 1200,
        height: 630,
        alt: "Affordable business printing in Minneapolis including cards, brochures, and signage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Affordable Printing Solutions | MSE Print",
    description:
      "Budget-friendly print services that make your brand look professional without overspending.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/blog/pages/additional/affordable-printing-solutions.webp",
        alt: "Cost-effective printing services for Minneapolis businesses",
      },
    ],
  },
  other: {
    "geo.region": "US-MN",
    "geo.placename": "Minneapolis",
    "geo.position": "45.0230;-93.2790",
    ICBM: "45.0230, -93.2790",
    "business:contact_data:street_address": "3839 N Washington Ave Ste. 101",
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
    "@id":
      "https://www.mseprinting.com/blog/affordable-printing-solutions#service",
    name: "Affordable Printing Solutions",
    description:
      "Affordable printing options for Minneapolis businesses including flyers, brochures, cards, and more. Professional results at budget pricing.",
    provider: {
      "@type": "LocalBusiness",
      "@id": "https://www.mseprinting.com/#business",
      name: "MSE Printing",
      url: "https://www.mseprinting.com",
      telephone: "763-542-8812",
      email: "info@mseprinting.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "3839 N Washington Ave Ste. 101",
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
    serviceType: "Affordable Printing",
    category: "Budget Printing Services",
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/blog/affordable-printing-solutions",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Affordable Printing Solutions",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      reviewCount: "52",
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
const AffordablePrintingSolutions = async () => {
  const data = await getBlogPagesData("/blog/affordable-printing-solutions");
  const pageData = data.BlogAffordablePrintingSolutionsPageData?.[0];

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

export default AffordablePrintingSolutions;
