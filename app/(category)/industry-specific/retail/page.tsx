import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

/* ─────────────── SEO METADATA ─────────────── */
export const metadata: Metadata = {
  title: "Retail Printing | MSE Print",
  description:
    "Drive foot traffic and build brand recognition with powerful retail printing from MSE Printing. From signage to packaging, we help retailers stand out.",
  keywords: [
    "retail printing services",
    "store signage printing",
    "retail packaging design",
    "in-store promotions",
    "point-of-purchase displays",
    "branded bags and boxes",
    "custom retail flyers",
    "sale signs printing",
    "seasonal promo printing",
    "MSE Printing for retailers",
  ],
  applicationName: "MSE Printing",
  category: "Industry-Specific Printing",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/industry-specific/retail",
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
    google: "ABCD1234xyz", // Replace with actual verification token
  },

  openGraph: {
    title: "Retail Printing | MSE Print",
    description:
      "From signage and packaging to seasonal promos and branded materials—MSE Printing equips retailers with everything needed to attract and retain customers.",
    url: "https://www.mseprinting.com/industry-specific/retail",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/industry-specific-images/additional/retail_right.webp",
        width: 1200,
        height: 630,
        alt: "Retail signage and print collateral from MSE Printing",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Retail Printing | MSE Print",
    description:
      "Signage, packaging, promo materials—MSE Printing helps retail brands attract attention and increase conversions.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/industry-specific-images/additional/retail_right.webp",
        alt: "Custom printed signage and displays for retail by MSE Printing",
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
    "@id": "https://www.mseprinting.com/industry-specific/retail#service",
    name: "Retail Printing",
    description:
      "Professional retail printing services including in-store signage, packaging, point-of-sale displays, seasonal promotions, and branded print collateral.",
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
    serviceType: "Retail Printing",
    category: "Retail Print Services",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Retail Print Products",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/industry-specific/retail#signage",
          itemOffered: {
            "@type": "Service",
            name: "Retail Signage",
            description:
              "Custom signage including banners, window clings, hanging signs, and floor decals.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/industry-specific/retail#packaging",
          itemOffered: {
            "@type": "Service",
            name: "Branded Packaging",
            description:
              "Printed packaging solutions such as boxes, bags, labels, and wraps.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/industry-specific/retail#promotions",
          itemOffered: {
            "@type": "Service",
            name: "Seasonal Promotions",
            description:
              "Flyers, posters, and promo materials that help drive seasonal sales and campaigns.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/industry-specific/retail",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Retail Printing",
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
const Retail = async () => {
  const data = await getCategoryPagesData("/industry-specific/retail");
  const pageData = data.RetailPageData?.[0];

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

export default Retail;
