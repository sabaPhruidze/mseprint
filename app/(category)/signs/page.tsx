import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import CardsPagesStructure from "components/common/CardsPagesStructure";

// Fully corrected Metadata for SEO & Social Sharing
export const metadata: Metadata = {
  title: "Custom Signs Printing in Minneapolis MN | MSE Printing",
  description:
    "Order custom indoor and outdoor signs printed in Minneapolis, MN. Business, event, and real-estate signage—all produced locally for fast turnaround by MSE Printing.",
  keywords: [
    "signs Minneapolis",
    "sign printing Minneapolis MN",
    "custom signs Minneapolis",
    "business signage Minneapolis",
    "indoor signs Minnesota",
    "outdoor signs Minneapolis",
    "event signage Minneapolis",
    "real estate signs Minneapolis",
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
  openGraph: {
    title: "Custom Signs Printing in Minneapolis MN | MSE Printing",
    description:
      "High-impact indoor & outdoor signs designed, printed, and delivered from Minneapolis by MSE Printing.",
    url: "https://www.mseprinting.com/signs",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/home-images/signs.webp",
        width: 800,
        height: 630,
        alt: "Custom business and event signs printed in Minneapolis MN by MSE Printing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Signs Printing in Minneapolis MN | MSE Printing",
    description:
      "Eye-catching signs and banners printed locally in Minneapolis. Get a fast quote from MSE Printing.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/home-images/signs.webp",
        alt: "Professional sign printing in Minneapolis MN by MSE Printing",
      },
    ],
  },
  other: {
    "geo.region": "US-MN",
    "geo.placename": "Minneapolis",
    "geo.position": "44.97997;-93.26384",
    ICBM: "44.97997, -93.26384",
    "business:contact_data:street_address": "3839 Washington Ave N Ste. 103",
    "business:contact_data:locality": "Minneapolis",
    "business:contact_data:region": "MN",
    "business:contact_data:postal_code": "55412",
    "business:contact_data:country_name": "USA",
    "business:contact_data:phone_number": "763-542-8812",
    "og:email": "info@mseprinting.com",
    "og:phone_number": "763-542-8812",
  },
  icons: { icon: "/favicon.ico", apple: "/favicon.ico" },
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

const ServiceSchema = () => {
  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://www.mseprinting.com/#localbusiness",
      name: "MSE Printing",
      url: "https://www.mseprinting.com",
      telephone: "763-542-8812",
      email: "info@mseprinting.com",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "3839 Washington Ave N Ste. 103",
        addressLocality: "Minneapolis",
        addressRegion: "MN",
        postalCode: "55412",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 44.97997,
        longitude: -93.26384,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://www.mseprinting.com/signs#service",
      name: "Sign Printing Services in Minneapolis MN",
      description:
        "Design, print, and installation of custom indoor & outdoor signs for businesses, events, and real-estate across Minneapolis and Minnesota.",
      serviceType: "Sign Printing",
      provider: { "@id": "https://www.mseprinting.com/#localbusiness" },
      areaServed: [
        { "@type": "City", name: "Minneapolis" },
        { "@type": "State", name: "Minnesota" },
        { "@type": "Country", name: "United States" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Sign Categories",
        itemListElement: [
          {
            "@type": "Offer",
            url: "https://www.mseprinting.com/signs#indoor-signs",
            itemOffered: {
              "@type": "Service",
              name: "Indoor Signs",
              description: "Custom office, retail, and lobby signage.",
            },
          },
          {
            "@type": "Offer",
            url: "https://www.mseprinting.com/signs#outdoor-signs",
            itemOffered: {
              "@type": "Service",
              name: "Outdoor Signs",
              description:
                "Weather-resistant storefront and promotional signs.",
            },
          },
          {
            "@type": "Offer",
            url: "https://www.mseprinting.com/signs#real-estate-signs",
            itemOffered: {
              "@type": "Service",
              name: "Real-Estate Signs",
              description:
                "High-visibility yard signs and riders for listings.",
            },
          },
        ],
      },
      offers: {
        "@type": "Offer",
        url: "https://www.mseprinting.com/signs",
        availability: "https://schema.org/InStock",
        priceCurrency: "USD",
      },
    },
  ];

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
