import React from "react";
import { Metadata, Viewport } from "next";
import CardsPagesStructure from "components/common/CardsPagesStructure";
import { getSpecialPagesData } from "db/GetSpecialPagesData";

/* ─────────────── SEO METADATA ─────────────── */
export const metadata: Metadata = {
  title: "Industry-Specific Printing | MSE Print",
  description:
    "Tailored print solutions for real estate, legal, healthcare, finance, and more—customized to meet your industry's needs with clarity, compliance, and impact.",
  keywords: [
    "industry printing services",
    "real estate printing",
    "legal printing",
    "healthcare printing",
    "education printing",
    "finance printing",
    "retail printing",
    "restaurant printing",
    "political campaign printing",
    "custom business printing solutions",
  ],
  applicationName: "MSE Printing",
  category: "Specialty Printing Services",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/industry-specific",
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
    google: "ABCD1234xyz", // Replace with your real Google verification string
  },

  openGraph: {
    title: "Industry-Specific Printing | MSE Print",
    description:
      "From real estate to education, MSE Printing delivers sector-focused materials that ensure clarity, compliance, and impact.",
    url: "https://www.mseprinting.com/industry-specific",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/industry-specific-images/real_estate.webp",
        width: 1200,
        height: 630,
        alt: "MSE Printing – Industry-Specific Real Estate Materials",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Industry-Specific Printing | MSE Print",
    description:
      "Explore expert print services tailored to real estate, law, healthcare, finance, education, and more.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/industry-specific-images/real_estate.webp",
        alt: "Sector-specific printed materials by MSE Printing",
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
    "@type": "CollectionPage",
    "@id": "https://www.mseprinting.com/industry-specific#collection",
    name: "Industry-Specific Printing",
    description:
      "Specialized printing services for various industries including legal, real estate, healthcare, education, retail, finance, political, and restaurants.",
    url: "https://www.mseprinting.com/industry-specific",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Real Estate Printing",
          url: "https://www.mseprinting.com/industry-specific/real-estate",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Legal Printing",
          url: "https://www.mseprinting.com/industry-specific/legal",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Healthcare Printing",
          url: "https://www.mseprinting.com/industry-specific/healthcare",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Finance Printing",
          url: "https://www.mseprinting.com/industry-specific/finance",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Education Printing",
          url: "https://www.mseprinting.com/industry-specific/education",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Restaurant Printing",
          url: "https://www.mseprinting.com/industry-specific/restaurants",
        },
        {
          "@type": "ListItem",
          position: 7,
          name: "Retail Printing",
          url: "https://www.mseprinting.com/industry-specific/retail",
        },
        {
          "@type": "ListItem",
          position: 8,
          name: "Political Printing",
          url: "https://www.mseprinting.com/industry-specific/political",
        },
      ],
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
const IndustrySpecific = async () => {
  const data = await getSpecialPagesData("/industry-specific");
  const pageData = data.IndustrySpecificCardPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return (
    <>
      <ServiceSchema />
      <CardsPagesStructure pageData={pageData} />
    </>
  );
};

export default IndustrySpecific;
