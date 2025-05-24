import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import CardsPagesStructure from "components/common/CardsPagesStructure";

// Fully corrected Metadata for SEO & Social Sharing
export const metadata: Metadata = {
  title: "Signs | MSE Printing",
  description:
    "Discover high-quality signage solutions by MSE Printing. Eye-catching signs for businesses, events, real estate, and more—delivered fast in Minneapolis & USA.",
  keywords: [
    "custom signs Minneapolis",
    "business signage",
    "indoor signs Minnesota",
    "outdoor signage Minneapolis",
    "event signage",
    "MSE Printing signs",
    "real estate signs",
    "trade show signs",
    "professional sign printing",
    "high-quality signage solutions",
  ],
  applicationName: "MSE Printing",
  category: "Signs",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/signs",
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
    google: "ABCD1234xyz", // Replace with your actual Google Search Console code
  },
  openGraph: {
    title: "Signs | MSE Printing",
    description:
      "High-quality signage solutions from MSE Printing. Custom indoor and outdoor signs for businesses and events in Minneapolis and beyond.",
    url: "https://www.mseprinting.com/signs",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/home-images/signs.webp",
        width: 800,
        height: 630,
        alt: "MSE Printing - Custom Business and Event Signs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Signs | MSE Printing",
    description:
      "Explore high-quality signage solutions—custom signs, banners, and displays to elevate your brand. Fast turnaround from MSE Printing.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/home-images/signs.webp",
        alt: "Eye-catching custom sign by MSE Printing in Minneapolis",
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

// Service Schema for local SEO and Google Rich Results
const ServiceSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.mseprinting.com/signs#service",
    name: "Signs",
    description:
      "Comprehensive signage solutions by MSE Printing—custom indoor and outdoor signs for businesses, events, and real estate in Minneapolis, MN.",
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
    serviceType: "Signage Solutions",
    category: "Business and Event Signs",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Signage Solutions",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/signs#indoor-signs",
          itemOffered: {
            "@type": "Service",
            name: "Indoor Signs",
            description:
              "Custom indoor signage for offices, retail, and events.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/signs#outdoor-signs",
          itemOffered: {
            "@type": "Service",
            name: "Outdoor Signs",
            description:
              "Weatherproof outdoor signs for business and promotional use.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/signs#real-estate-signs",
          itemOffered: {
            "@type": "Service",
            name: "Real Estate Signs",
            description:
              "High-visibility yard signs and displays for real estate listings.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/signs",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Signs",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "52",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

const Signs = async () => {
  const data = await getCategoryPagesData("/signs");
  const pageData = data.SignsPageData?.[0];

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

export default Signs;
