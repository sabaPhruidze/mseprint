import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

// Fully corrected Metadata for SEO & Social Sharing (title < 70 chars)
export const metadata: Metadata = {
  title:
    "Greeting Cards Printing in Minneapolis MN | Custom Cards | MSE Printing",
  description:
    "Custom greeting cards printed in Minneapolis, MN—holiday, thank-you, birthday, business and more. Design & print locally with MSE Printing for fast turnaround and premium quality.",
  keywords: [
    "greeting cards Minneapolis",
    "custom greeting cards Minneapolis MN",
    "holiday card printing Minneapolis",
    "business greeting cards Minnesota",
    "thank you cards Minneapolis",
    "birthday cards printing",
    "event invitations Minneapolis",
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
    google: "ABCD1234xyz", // leave your Search Console string
  },
  openGraph: {
    title: "Greeting Cards Printing in Minneapolis MN | MSE Printing",
    description:
      "Beautiful custom greeting cards designed and printed locally in Minneapolis by MSE Printing.",
    url: "https://www.mseprinting.com/tradeshows-events/greeting-cards",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/tradeshows-events-images/additional/greeting_cards_right.webp",
        width: 800,
        height: 630,
        alt: "Custom greeting cards printed in Minneapolis MN by MSE Printing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Greeting Cards Printing in Minneapolis MN | MSE Printing",
    description:
      "Make every occasion special with locally printed greeting cards from MSE Printing in Minneapolis.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/tradeshows-events-images/additional/greeting_cards_right.webp",
        alt: "Greeting cards printed in Minneapolis MN by MSE Printing",
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
      "@id":
        "https://www.mseprinting.com/tradeshows-events/greeting-cards#service",
      name: "Greeting Cards Printing in Minneapolis MN",
      description:
        "Design, print, and finishing of custom greeting cards for holidays, business, and special occasions—serving Minneapolis and the Twin Cities.",
      serviceType: "Greeting Card Printing",
      provider: { "@id": "https://www.mseprinting.com/#localbusiness" },
      areaServed: [
        { "@type": "City", name: "Minneapolis" },
        { "@type": "State", name: "Minnesota" },
        { "@type": "Country", name: "United States" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Greeting Card Options",
        itemListElement: [
          {
            "@type": "Offer",
            url: "https://www.mseprinting.com/tradeshows-events/greeting-cards#holiday-cards",
            itemOffered: {
              "@type": "Service",
              name: "Holiday Cards",
              description:
                "Personalized holiday greeting cards for clients, family, and friends.",
            },
          },
          {
            "@type": "Offer",
            url: "https://www.mseprinting.com/tradeshows-events/greeting-cards#thank-you-cards",
            itemOffered: {
              "@type": "Service",
              name: "Thank-You Cards",
              description:
                "Custom thank-you cards to express gratitude with style.",
            },
          },
          {
            "@type": "Offer",
            url: "https://www.mseprinting.com/tradeshows-events/greeting-cards#event-invitations",
            itemOffered: {
              "@type": "Service",
              name: "Event Invitations",
              description:
                "Printed invitations for weddings, corporate events, and parties.",
            },
          },
        ],
      },
      offers: {
        "@type": "Offer",
        url: "https://www.mseprinting.com/tradeshows-events/greeting-cards",
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
