import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

// Fully corrected Metadata for SEO & Social Sharing
export const metadata: Metadata = {
  title: "Tradeshow & Event Signs | MSE Printing",
  description:
    "Stand out at tradeshows and events with eye-catching signage by MSE Printing. Custom booth graphics, banners, and event signs for maximum brand impact.",
  keywords: [
    "tradeshow signs Minneapolis",
    "event signage",
    "custom booth graphics",
    "trade show banners Minnesota",
    "conference signage Minneapolis",
    "event booth signs",
    "expo signs",
    "MSE Printing tradeshow",
    "custom event graphics",
    "exhibition signage",
  ],
  applicationName: "MSE Printing",
  category: "Tradeshow & Event Signs",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/tradeshow-event-signs",
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
    title: "Tradeshow & Event Signs | MSE Printing",
    description:
      "Custom tradeshow and event signs designed to attract attention and enhance your brand visibility. Banners, booth graphics, and displays from MSE Printing, Minneapolis.",
    url: "https://www.mseprinting.com/tradeshow-event-signs",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/signs-images/additional/tradeshow_event_signs_right.webp",
        width: 800,
        height: 630,
        alt: "MSE Printing - Tradeshow & Event Booth Graphics in Minneapolis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tradeshow & Event Signs | MSE Printing",
    description:
      "Stand out at events with custom tradeshow signs, banners, and booth graphics from MSE Printing, Minneapolis.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/signs-images/additional/tradeshow_event_signs_right.webp",
        alt: "Custom event signage from MSE Printing in Minneapolis",
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

// Service Schema for Google Rich Results & Local SEO
const ServiceSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.mseprinting.com/tradeshow-event-signs#service",
    name: "Tradeshow & Event Signs",
    description:
      "Custom tradeshow and event signage solutions from MSE Printing, including booth graphics, banners, and displays for expos and conferences.",
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
    serviceType: "Tradeshow and Event Signage",
    category: "Event Signs",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Event Signage",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/tradeshow-event-signs#booth-graphics",
          itemOffered: {
            "@type": "Service",
            name: "Booth Graphics",
            description:
              "Custom booth graphics for tradeshows and exhibitions.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/tradeshow-event-signs#banners",
          itemOffered: {
            "@type": "Service",
            name: "Banners",
            description: "Vibrant banners for event booths and displays.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/tradeshow-event-signs#event-displays",
          itemOffered: {
            "@type": "Service",
            name: "Event Displays",
            description:
              "Complete display solutions for conferences and expos.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/tradeshow-event-signs",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Tradeshow & Event Signs",
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

const TradeshowEventSigns = async () => {
  const data = await getCategoryPagesData("/tradeshow-event-signs");
  const pageData = data.TradeshowEventSignsPageData?.[0];

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

export default TradeshowEventSigns;
