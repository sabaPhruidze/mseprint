import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

// ---------- SEO & Social Metadata ----------
export const metadata: Metadata = {
  title: "Envelope Printing | MSE Printing",
  description:
    "Custom envelope printing solutions that elevate your brand’s professional image. Business envelopes, return envelopes, window and custom sizes in Minneapolis & nationwide.",
  keywords: [
    "envelope printing Minneapolis",
    "custom envelope printing Minnesota",
    "branded envelopes",
    "business envelope printing",
    "return envelopes Minneapolis",
    "window envelopes Minnesota",
    "MSE Printing envelopes",
    "corporate envelope design",
    "stationery envelope printing",
    "custom sized envelopes",
  ],
  applicationName: "MSE Printing",
  category: "Envelope Printing",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical:
      "https://www.mseprinting.com/printing-copying/custom-envelope-printing",
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
    title: "Envelope Printing | MSE Printing",
    description:
      "Professionally printed envelopes that showcase your brand identity from the moment they're delivered.",
    url: "https://www.mseprinting.com/printing-copying/custom-envelope-printing",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/printing-copying-images/additional/envelope_printing_right.webp",
        width: 1200,
        height: 630,
        alt: "Envelope printing by MSE Printing in Minneapolis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Envelope Printing | MSE Printing",
    description:
      "Order business and custom envelopes with your logo and branding from MSE Printing.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/printing-copying-images/additional/envelope_printing_right.webp",
        alt: "Envelope printing by MSE Printing, Minneapolis",
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
    "@id":
      "https://www.mseprinting.com/printing-copying/custom-envelope-printing#service",
    name: "Envelope Printing",
    description:
      "Custom branded envelope printing by MSE Printing. Business envelopes, window envelopes, and specialty sizes for Minneapolis and nationwide.",
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
    serviceType: "Envelope Printing",
    category: "Print Services",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Envelope Printing Services",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/printing-copying/custom-envelope-printing#business-envelopes",
          itemOffered: {
            "@type": "Service",
            name: "Business Envelope Printing",
            description:
              "High-quality business envelopes for correspondence, invoices, and marketing.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/printing-copying/custom-envelope-printing#custom-sizes",
          itemOffered: {
            "@type": "Service",
            name: "Custom Size Envelopes",
            description:
              "Personalized sizes, window options, and finishes for unique branding.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/printing-copying/custom-envelope-printing#return-envelopes",
          itemOffered: {
            "@type": "Service",
            name: "Return & Reply Envelopes",
            description:
              "Branded return and reply envelopes for mailings and campaigns.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/printing-copying/custom-envelope-printing",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Envelope Printing",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "15",
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
const CustomEnvelopePrinting = async () => {
  const data = await getCategoryPagesData(
    "/printing-copying/custom-envelope-printing"
  );
  const pageData = data.CustomEnvelopePrintingPageData?.[0];

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

export default CustomEnvelopePrinting;
