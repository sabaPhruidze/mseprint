import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

/* ─────────────── SEO METADATA ─────────────── */
export const metadata: Metadata = {
  title: "Commercial Digital Printing | MSE Print",
  description:
    "Professional digital printing services from MSE Printing. High-quality, fast, and cost-effective printing solutions for businesses of all sizes.",
  keywords: [
    "digital printing Minneapolis",
    "commercial digital print services",
    "on-demand printing",
    "short run printing Minnesota",
    "business printing solutions",
    "custom digital print materials",
    "fast turnaround digital printing",
    "color digital printing USA",
    "digital print shop Minneapolis",
    "cost-effective commercial printing",
  ],
  applicationName: "MSE Printing",
  category: "Digital Printing Services",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/commercial-digital-printing",
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
    google: "ABCD1234xyz", // Replace with your Google verification string
  },

  openGraph: {
    title: "Commercial Digital Printing | MSE Print",
    description:
      "Digital printing revolutionizes the way businesses approach their printing needs, offering unmatched versatility, speed, and customization for small to medium-sized projects.",
    url: "https://www.mseprinting.com/commercial-digital-printing",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/home-images/digital_printing.webp",
        width: 1200,
        height: 630,
        alt: "MSE Printing - Commercial Digital Printing Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Commercial Digital Printing | MSE Print",
    description:
      "High-quality commercial digital printing with fast turnaround and customized options from MSE Printing in Minneapolis.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/home-images/digital_printing.webp",
        alt: "Commercial digital print press at MSE Printing Minneapolis",
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
    "@id": "https://www.mseprinting.com/commercial-digital-printing#service",
    name: "Commercial Digital Printing",
    description:
      "Fast, cost-effective digital printing services for small and medium print runs. Ideal for marketing, business, and personalized materials. High-quality results from MSE Printing.",
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
    serviceType: "Digital Printing",
    category: "Commercial Printing Services",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Printing Options",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/commercial-digital-printing#short-run",
          itemOffered: {
            "@type": "Service",
            name: "Short-Run Printing",
            description:
              "Quick turnaround on small to medium volume print jobs for promotions and internal use.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/commercial-digital-printing#personalized",
          itemOffered: {
            "@type": "Service",
            name: "Personalized Print Materials",
            description:
              "Variable data printing for name-specific or customer-specific marketing materials.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/commercial-digital-printing",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Commercial Digital Printing",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "39",
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
const CommercialDigitalPrinting = async () => {
  const data = await getCategoryPagesData("/commercial-digital-printing");
  const pageData = data.CommercialDigitalPrintingPageData?.[0];

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

export default CommercialDigitalPrinting;
