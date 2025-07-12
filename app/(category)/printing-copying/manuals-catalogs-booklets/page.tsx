import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

// ---------- SEO & Social Metadata ----------
export const metadata: Metadata = {
  title: "Manuals, Catalogs & Booklets | Custom Printing | MSE Printing",
  description:
    "Professional manuals, catalogs, and booklets for training, education, and marketing by MSE Printing. Precision design, quality print, fast turnaround in Minneapolis & nationwide.",
  keywords: [
    "manual printing Minneapolis",
    "catalog printing Minnesota",
    "custom booklet printing",
    "training manual printing",
    "educational booklets Minneapolis",
    "MSE Printing catalogs",
    "marketing booklet printing",
    "product manual design",
    "booklet binding Minneapolis",
    "instruction booklets Minnesota",
  ],
  applicationName: "MSE Printing",
  category: "Manuals, Catalogs & Booklets",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical:
      "https://www.mseprinting.com/printing-copying/manuals-catalogs-booklets",
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
    google: "ABCD1234xyz", // ← replace with your Search Console verification code
  },
  openGraph: {
    title: "Manuals, Catalogs & Booklets | Custom Printing | MSE Printing",
    description:
      "Custom manuals, catalogs, and booklets designed to educate, engage, and impress. Printed with precision by MSE Printing.",
    url: "https://www.mseprinting.com/printing-copying/manuals-catalogs-booklets",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/printing-copying-images/additional/card_manuals_catalogs_booklets_right.webp",
        width: 1200,
        height: 630,
        alt: "Manuals, catalogs, and booklets by MSE Printing in Minneapolis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manuals, Catalogs & Booklets | Custom Printing | MSE Printing",
    description:
      "Order custom manuals, catalogs, and booklets with fast turnaround and quality design from MSE Printing.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/printing-copying-images/additional/card_manuals_catalogs_booklets_right.webp",
        alt: "Manuals, catalogs, and booklets by MSE Printing, Minneapolis",
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

// ---------- Viewport Theme Colors ----------
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  colorScheme: "normal",
};

// ---------- Service Schema Structured Data ----------
const ServiceSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id":
      "https://www.mseprinting.com/printing-copying/manuals-catalogs-booklets#service",
    name: "Manuals, Catalogs & Booklets",
    description:
      "Custom printing of manuals, catalogs, and booklets by MSE Printing. Educational, marketing, and training materials printed with quality and care in Minneapolis and nationwide.",
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
    serviceType: "Manuals, Catalogs & Booklets",
    category: "Print Services",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Manuals, Catalogs & Booklets Services",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/printing-copying/manuals-catalogs-booklets#manuals",
          itemOffered: {
            "@type": "Service",
            name: "Manual Printing",
            description:
              "Training, equipment, and user manual printing for every industry.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/printing-copying/manuals-catalogs-booklets#catalogs",
          itemOffered: {
            "@type": "Service",
            name: "Catalog Printing",
            description:
              "Professional catalogs for products, events, and organizations.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/printing-copying/manuals-catalogs-booklets#booklets",
          itemOffered: {
            "@type": "Service",
            name: "Booklet Printing",
            description:
              "Custom booklets for marketing, education, and more—various sizes and bindings.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/printing-copying/manuals-catalogs-booklets",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Manuals, Catalogs & Booklets",
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

// ---------- Main Page Component ----------
const ManualsCatalogsBooklets = async () => {
  const data = await getCategoryPagesData(
    "/printing-copying/manuals-catalogs-booklets"
  );
  const pageData = data.ManualsCatalogsBookletsPageData?.[0];

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

export default ManualsCatalogsBooklets;
