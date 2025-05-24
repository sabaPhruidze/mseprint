import React from "react";
import { Metadata, Viewport } from "next";
import { getSpecialPagesData } from "db/GetSpecialPagesData";
import CardsPagesStructure from "components/common/CardsPagesStructure";

/* ─────────────── SEO METADATA ─────────────── */
export const metadata: Metadata = {
  title: "Fulfillment Services | MSE Print",
  description:
    "Fast, accurate, and scalable product fulfillment services from MSE Printing—warehouse to doorstep, handled with care.",
  keywords: [
    "product fulfillment services",
    "order fulfillment Minneapolis",
    "eCommerce fulfillment USA",
    "warehouse logistics solutions",
    "inventory management",
    "pick and pack services",
    "shipping and delivery Minneapolis",
    "custom fulfillment partner",
    "MSE Printing logistics",
    "scalable warehousing and fulfillment",
  ],
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
  verification: {
    google: "ABCD1234xyz", // Replace with your real Google verification string
  },

  openGraph: {
    title: "Fulfillment Services | MSE Print",
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
    title: "Fulfillment Services | MSE Print",
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
    "@id": "https://www.mseprinting.com/fulfillment-services#service",
    name: "Fulfillment Services",
    description:
      "Full-service product fulfillment including warehousing, inventory management, pick & pack, and shipping. MSE Printing delivers scalable solutions from Minneapolis.",
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
      itemOffered: {
        "@type": "Service",
        name: "Fulfillment Services",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "58",
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
const FulfillmentServices = async () => {
  const data = await getSpecialPagesData("/fulfillment-services");
  const pageData = data.FulfillmentServicesCardPageData?.[0];

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

export default FulfillmentServices;
