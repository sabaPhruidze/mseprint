import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

/* ─────────────── SEO METADATA ─────────────── */
export const metadata: Metadata = {
  title: "Commercial Offset Printing | MSE Print",
  description:
    "Professional commercial offset printing services from MSE Printing. Superior quality, high-volume runs, and long-term brand consistency.",
  keywords: [
    "offset printing Minneapolis",
    "commercial offset printing",
    "high-volume printing",
    "long run printing services",
    "bulk printing solutions",
    "brochure printing offset",
    "catalog offset printing USA",
    "business offset press",
    "cost-effective printing",
    "MSE Printing offset",
  ],
  applicationName: "MSE Printing",
  category: "Offset Printing Services",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/commercial-offset-printing",
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
    google: "ABCD1234xyz", // Replace with your Google Search Console verification string
  },

  openGraph: {
    title: "Commercial Offset Printing | MSE Print",
    description:
      "Full-service offset printing solutions for businesses seeking high-quality, cost-effective prints with exceptional color control.",
    url: "https://www.mseprinting.com/commercial-offset-printing",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/home-images/additional/offset_printing_right.webp",
        width: 800,
        height: 630,
        alt: "Offset printing press at MSE Printing in Minneapolis",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Commercial Offset Printing | MSE Print",
    description:
      "Offset printing for brochures, booklets, catalogs, and more. Trusted by businesses for consistent, high-volume printing.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/home-images/additional/offset_printing_right.webp",
        alt: "Commercial offset printing service by MSE Printing",
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
    "@id": "https://www.mseprinting.com/commercial-offset-printing#service",
    name: "Commercial Offset Printing",
    description:
      "Premium offset printing for brochures, catalogs, magazines, and more. Ideal for high-volume runs with precise color matching and professional finish. Delivered by MSE Printing in Minneapolis.",
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
    serviceType: "Offset Printing",
    category: "Commercial Printing",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Offset Printing Products",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/commercial-offset-printing#brochures",
          itemOffered: {
            "@type": "Service",
            name: "Offset Brochure Printing",
            description:
              "High-quality brochures printed in bulk using offset techniques.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/commercial-offset-printing#catalogs",
          itemOffered: {
            "@type": "Service",
            name: "Catalog & Booklet Printing",
            description:
              "Multi-page booklets and catalogs with precise color control and durable binding.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/commercial-offset-printing",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Commercial Offset Printing",
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
const CommercialOffsetPrinting = async () => {
  const data = await getCategoryPagesData("/commercial-offset-printing");
  const pageData = data.CommercialOffsetPrintingPageData?.[0];

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

export default CommercialOffsetPrinting;
