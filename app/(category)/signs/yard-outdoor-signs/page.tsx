import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

// Fully corrected metadata for SEO and Social Sharing
export const metadata: Metadata = {
  title: "Yard & Outdoor Signs | MSE Printing",
  description:
    "Boost your business visibility with high-impact yard signs, A-frames, and custom outdoor displays built to withstand any weather from MSE Printing.",
  keywords: [
    "yard signs Minneapolis",
    "outdoor business signs",
    "custom yard signs Minnesota",
    "weatherproof signage Minneapolis",
    "A-frame signs",
    "yard display printing",
    "real estate yard signs",
    "event signage outdoor",
    "durable outdoor signs",
    "MSE Printing outdoor solutions",
  ],
  applicationName: "MSE Printing",
  category: "Outdoor Signage",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/signs/yard-outdoor-signs",
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
    google: "ABCD1234xyz", // Replace with your Google Search Console verification string
  },
  openGraph: {
    title: "Yard & Outdoor Signs | MSE Printing",
    description:
      "Custom outdoor signage including weatherproof yard signs, A-frames, and promotional displays tailored for businesses and events in Minneapolis.",
    url: "https://www.mseprinting.com/signs/yard-outdoor-signs",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/signs-images/additional/yard_outdoor_signs_right.webp",
        width: 800,
        height: 630,
        alt: "MSE Printing - Weatherproof Yard and Outdoor Signs in Minneapolis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yard & Outdoor Signs | MSE Printing",
    description:
      "Promote your business outdoors with custom yard signs and durable displays from MSE Printing. Built for Minnesota weather.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/signs-images/additional/yard_outdoor_signs_right.webp",
        alt: "Outdoor yard sign printed by MSE Printing in Minneapolis",
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

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  colorScheme: "normal",
};

// Service Schema for Local SEO & Google Rich Results
const ServiceSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.mseprinting.com/signs/yard-outdoor-signs#service",
    name: "Yard & Outdoor Signs",
    description:
      "Weatherproof yard and outdoor signage, including A-frame signs, custom displays, and event signage by MSE Printing in Minneapolis, MN.",
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
    serviceType: "Outdoor Signage",
    category: "Yard and Event Signs",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Outdoor Signage",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/signs/yard-outdoor-signs#yard-signs",
          itemOffered: {
            "@type": "Service",
            name: "Custom Yard Signs",
            description:
              "Full-color, weather-resistant yard signs for businesses, events, and real estate.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/signs/yard-outdoor-signs#a-frame",
          itemOffered: {
            "@type": "Service",
            name: "A-Frame Signs",
            description:
              "Durable A-frame sidewalk signs for outdoor advertising.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/signs/yard-outdoor-signs#event-signage",
          itemOffered: {
            "@type": "Service",
            name: "Outdoor Event Signage",
            description:
              "Weatherproof signage solutions for events and promotions.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/signs/yard-outdoor-signs",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Yard & Outdoor Signs",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "31",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

const YardOutdoorSigns = async () => {
  const data = await getCategoryPagesData("/signs/yard-outdoor-signs");
  const pageData = data.YardOutdoorSignsPageData?.[0];

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

export default YardOutdoorSigns;
