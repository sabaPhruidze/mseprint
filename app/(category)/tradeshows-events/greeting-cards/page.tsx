import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

// Fully corrected Metadata for SEO & Social Sharing (title < 70 chars)
export const metadata: Metadata = {
  title: "Custom Greeting Cards for All Occasions | MSE Printing",
  description:
    "Thoughtful, custom greeting cards that add a personal touch to every occasion. Celebrate, appreciate, and connect with MSE Printing.",
  keywords: [
    "custom greeting cards",
    "personalized cards Minneapolis",
    "holiday cards Minnesota",
    "business greeting cards",
    "thank you cards",
    "birthday cards printing",
    "event invitations",
    "custom printed cards",
    "MSE Printing greeting cards",
    "greeting card design",
  ],
  applicationName: "MSE Printing",
  category: "Greeting Cards",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/tradeshows-events/greeting-cards",
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
    google: "ABCD1234xyz", // Replace with your Search Console verification string
  },
  openGraph: {
    title: "Custom Greeting Cards for All Occasions | MSE Printing",
    description:
      "Celebrate, appreciate, and connect with beautiful greeting cards designed and printed to make a lasting impression by MSE Printing.",
    url: "https://www.mseprinting.com/tradeshows-events/greeting-cards",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/tradeshows-events-images/additional/greeting_cards_right.webp",
        width: 800,
        height: 630,
        alt: "Custom greeting cards printed by MSE Printing in Minneapolis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Greeting Cards for All Occasions | MSE Printing",
    description:
      "Make every occasion memorable with custom greeting cards from MSE Printing, Minneapolis.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/tradeshows-events-images/additional/greeting_cards_right.webp",
        alt: "Greeting cards by MSE Printing, Minneapolis",
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
    "@id":
      "https://www.mseprinting.com/tradeshows-events/greeting-cards#service",
    name: "Greeting Cards",
    description:
      "Custom greeting cards for holidays, business, and special occasions—designed and printed by MSE Printing in Minneapolis, MN.",
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
    serviceType: "Greeting Card Printing",
    category: "Cards & Invitations",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Greeting Cards",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/tradeshows-events/greeting-cards#holiday-cards",
          itemOffered: {
            "@type": "Service",
            name: "Holiday Cards",
            description:
              "Personalized holiday greeting cards for business or family.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/tradeshows-events/greeting-cards#thank-you-cards",
          itemOffered: {
            "@type": "Service",
            name: "Thank You Cards",
            description: "Custom thank you cards for client or personal use.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/tradeshows-events/greeting-cards#event-invitations",
          itemOffered: {
            "@type": "Service",
            name: "Event Invitations",
            description:
              "Printed invitations for weddings, events, and business occasions.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/tradeshows-events/greeting-cards",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Greeting Cards",
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

const GreetingCards = async () => {
  const data = await getCategoryPagesData("/tradeshows-events/greeting-cards");
  const pageData = data.GreetingCardsPageData?.[0];

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

export default GreetingCards;
