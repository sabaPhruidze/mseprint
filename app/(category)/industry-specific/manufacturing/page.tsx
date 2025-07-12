import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

/* ─────────────── SEO METADATA ─────────────── */
export const metadata: Metadata = {
  title: "Manufacturing Printing | MSE Print",
  description:
    "Durable, high-performance print solutions for industrial operations and logistics. From labels to manuals, we've got manufacturing covered.",
  keywords: [
    "manufacturing printing services",
    "industrial label printing",
    "weatherproof labels",
    "equipment manuals printing",
    "facility signage",
    "durable industrial print",
    "MSE Printing manufacturing",
    "instruction sheet printing",
    "machinery tags and stickers",
    "warehouse signage printing",
  ],
  applicationName: "MSE Printing",
  category: "Industry-Specific Printing",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/industry-specific/manufacturing",
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
    google: "ABCD1234xyz", // Replace with actual Search Console token
  },

  openGraph: {
    title: "Manufacturing Printing | MSE Print",
    description:
      "From weatherproof labels to instruction manuals and facility signage, MSE Printing supports manufacturers with rugged, efficient print services.",
    url: "https://www.mseprinting.com/industry-specific/manufacturing",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/industry-specific-images/additional/manufacturing_right.webp",
        width: 1200,
        height: 630,
        alt: "Industrial printing services by MSE Printing",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Manufacturing Printing | MSE Print",
    description:
      "Custom labels, tags, manuals, and signage built for durability—tailored to manufacturing and logistics environments.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/industry-specific-images/additional/manufacturing_right.webp",
        alt: "MSE Printing durable industrial print products",
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
    "@id":
      "https://www.mseprinting.com/industry-specific/manufacturing#service",
    name: "Manufacturing Printing",
    description:
      "Durable printing solutions for the manufacturing industry including weatherproof labels, instruction manuals, equipment tags, and facility signage.",
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
    serviceType: "Industrial Printing",
    category: "Manufacturing Print Services",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Manufacturing Print Products",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/industry-specific/manufacturing#labels",
          itemOffered: {
            "@type": "Service",
            name: "Weatherproof Labels",
            description:
              "Durable labels for equipment, packaging, and storage in harsh environments.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/industry-specific/manufacturing#manuals",
          itemOffered: {
            "@type": "Service",
            name: "Instruction Manuals",
            description:
              "Custom-printed manuals and assembly guides designed for industrial products.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/industry-specific/manufacturing#signage",
          itemOffered: {
            "@type": "Service",
            name: "Facility Signage",
            description:
              "Custom safety, compliance, and directional signs printed for warehouses and factories.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/industry-specific/manufacturing",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Manufacturing Printing",
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
const Manufacturing = async () => {
  const data = await getCategoryPagesData("/industry-specific/manufacturing");
  const pageData = data.ManufacturingPageData?.[0];

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

export default Manufacturing;
