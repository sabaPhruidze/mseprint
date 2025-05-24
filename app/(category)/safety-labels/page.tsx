import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

// ---------- SEO & Social Metadata ----------
export const metadata: Metadata = {
  title: "Safety Labels | Durable Compliance | MSE Printing",
  description:
    "Compliant, durable safety labels crafted to protect and inform with clarity by MSE Printing. Engineered for resilience and compliance, ensuring workplace safety and meeting industry regulations.",
  keywords: [
    "safety labels printing",
    "compliance labels Minnesota",
    "durable safety stickers",
    "workplace safety labels",
    "OSHA compliant labels",
    "MSE Printing safety labels",
    "industrial safety stickers",
    "equipment warning labels",
    "custom hazard labels",
    "label printing Minneapolis",
  ],
  applicationName: "MSE Printing",
  category: "Safety Labels",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/safety-labels",
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
    title: "Safety Labels | Durable Compliance | MSE Printing",
    description:
      "Engineered for resilience and compliance, MSE Printing’s safety labels help ensure workplace safety and meet industry regulations.",
    url: "https://www.mseprinting.com/safety-labels",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/common-images/additional/safety_labels_right.webp",
        width: 1200,
        height: 630,
        alt: "Durable safety label printing by MSE Printing in Minneapolis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Safety Labels | Durable Compliance | MSE Printing",
    description:
      "Order safety and compliance labels engineered for durability and regulations from MSE Printing.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/common-images/additional/safety_labels_right.webp",
        alt: "Safety labels by MSE Printing, Minneapolis",
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
    "@id": "https://www.mseprinting.com/safety-labels#service",
    name: "Safety Labels",
    description:
      "Durable, compliant safety label printing by MSE Printing. Protect, inform, and meet industry standards for equipment, workplaces, and more in Minneapolis and nationwide.",
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
    serviceType: "Safety Labels",
    category: "Print Services",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Safety Label Services",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/safety-labels#compliance-labels",
          itemOffered: {
            "@type": "Service",
            name: "Compliance Safety Labels",
            description:
              "Labels meeting OSHA and industry regulations for workplace safety.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/safety-labels#custom-warning-labels",
          itemOffered: {
            "@type": "Service",
            name: "Custom Warning Labels",
            description:
              "Personalized hazard and warning labels for equipment, machinery, and facilities.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/safety-labels#durable-labels",
          itemOffered: {
            "@type": "Service",
            name: "Durable Labels",
            description:
              "Weatherproof, chemical-resistant labels for industrial and outdoor use.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/safety-labels",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Safety Labels",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "14",
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
const SafetyLabels = async () => {
  const data = await getCategoryPagesData("/safety-labels");
  const pageData = data.SafetyLabelsPageData?.[0];

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

export default SafetyLabels;
