import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";
import { getFooterData } from "db/GetFooterData";
import { buildServiceBreadcrumbs } from "lib/breadcrumbs";

/* ─────────────── SEO METADATA ─────────────── */
export const metadata: Metadata = {
  title: "Inventory Management | MSE Print",
  description:
    "Track, store, and manage with confidence using MSE Printing’s inventory management solutions. Real-time visibility, scalable storage, and seamless fulfillment.",
  keywords: [
    "inventory management Minneapolis",
    "fulfillment warehouse USA",
    "print inventory tracking",
    "custom inventory storage",
    "order fulfillment integration",
    "business inventory solutions",
    "MSE Printing storage",
    "real-time inventory control",
    "product warehousing Minneapolis",
    "inventory and shipping services",
  ],
  applicationName: "MSE Printing",
  category: "Fulfillment Services",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical:
      "https://www.mseprinting.com/fulfillment-services/inventory-management",
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
    google: "ABCD1234xyz", // Replace with your real verification code
  },

  openGraph: {
    title: "Inventory Management | MSE Print",
    description:
      "Gain control of your stock with real-time tracking, scalable storage, and seamless fulfillment integration from MSE Printing.",
    url: "https://www.mseprinting.com/fulfillment-services/inventory-management",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/fulfillment-services-images/additional/inventory_management_right.webp",
        width: 1200,
        height: 630,
        alt: "Inventory tracking dashboard by MSE Printing",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Inventory Management | MSE Print",
    description:
      "Smart inventory control and fulfillment services tailored to your business. Trusted by brands nationwide.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/fulfillment-services-images/additional/inventory_management_right.webp",
        alt: "Warehouse shelves and tracking software for MSE Printing clients",
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
      "https://www.mseprinting.com/fulfillment-services/inventory-management#service",
    name: "Inventory Management",
    description:
      "Inventory control, warehousing, and fulfillment services for businesses. MSE Printing offers scalable solutions with real-time tracking and integration support.",

    /* provider is already a LocalBusiness → attach rating here */
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
    serviceType: "Inventory Management",
    category: "Fulfillment & Logistics",

    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Inventory & Fulfillment Services",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/fulfillment-services/inventory-management#realtime",
          itemOffered: {
            "@type": "Service",
            name: "Real-Time Inventory Tracking",
            description:
              "24/7 online visibility into your stock levels and order status through a secure portal.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/fulfillment-services/inventory-management#storage",
          itemOffered: {
            "@type": "Service",
            name: "Warehouse Storage",
            description:
              "Scalable shelf and bin storage options for your printed materials and promotional items.",
          },
        },
      ],
    },

    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/fulfillment-services/inventory-management",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Inventory Management",
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
const InventoryManagement = async () => {
  const data = await getCategoryPagesData(
    "/fulfillment-services/inventory-management"
  );
  const pageData = data.InventoryManagementPageData?.[0];
  const { footerContentData } = await getFooterData();
  const breadcrumbs = buildServiceBreadcrumbs(
    "fulfillment-services/inventory-management", // must match the DB `path`
    footerContentData
  );

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return (
    <>
      <ServiceSchema />
      <PageStructure
        pageData={pageData}
        breadcrumbs={breadcrumbs} // ← ADD
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
};

export default InventoryManagement;
