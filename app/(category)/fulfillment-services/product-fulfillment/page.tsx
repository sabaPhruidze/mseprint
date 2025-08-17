import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

/* ─────────────── SEO METADATA ─────────────── */
export const metadata: Metadata = {
  title: "Product Fulfillment | MSE Print",
  description:
    "Deliver confidence with flexible and reliable product fulfillment services from MSE Printing. From storage to shipping, we handle it all.",
  keywords: [
    "product fulfillment Minneapolis",
    "order fulfillment USA",
    "custom packaging services",
    "business fulfillment provider",
    "brand-aligned shipping",
    "eCommerce fulfillment",
    "MSE Printing fulfillment center",
    "warehouse and shipping solutions",
    "branded order fulfillment",
    "direct-to-customer shipping",
  ],
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
  verification: {
    google: "ABCD1234xyz", // Replace with actual Search Console verification string
  },

  openGraph: {
    title: "Product Fulfillment | MSE Print",
    description:
      "Reliable, flexible, and brand-aligned—MSE Printing takes your product the final mile with professional fulfillment solutions.",
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
    title: "Product Fulfillment | MSE Print",
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
      itemOffered: {
        "@type": "Service",
        name: "Product Fulfillment",
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
const ProductFulfillment = async () => {
  const data = await getCategoryPagesData(
    "/fulfillment-services/product-fulfillment"
  );
  const pageData = data.ProductFulfillmentPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return (
    <>
      <ServiceSchema />
      <PageStructure
        pageData={pageData}
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

export default ProductFulfillment;
