import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

// Fully corrected Metadata for SEO & Social Sharing (title < 70 chars)
export const metadata: Metadata = {
  title: "Custom Gifts, Awards & Incentives | MSE Printing",
  description:
    "Celebrate milestones and inspire loyalty with personalized gifts, trophies, and awards by MSE Printing.",
  keywords: [
    "custom gifts Minneapolis",
    "corporate awards",
    "employee incentives Minnesota",
    "personalized trophies",
    "award plaques",
    "recognition gifts",
    "custom appreciation kits",
    "branded corporate gifts",
    "employee rewards",
    "MSE Printing awards",
  ],
  applicationName: "MSE Printing",
  category: "Gifts, Awards & Incentives",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical:
      "https://www.mseprinting.com/tradeshows-events/gifts-awards-incentives",
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
    title: "Custom Gifts, Awards & Incentives | MSE Printing",
    description:
      "From custom trophies to employee appreciation kits, MSE Printing helps you deliver meaningful recognition through personalized gifts and awards.",
    url: "https://www.mseprinting.com/tradeshows-events/gifts-awards-incentives",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/tradeshows-events-images/additional/gifts_awards_incentives_right.webp",
        width: 800,
        height: 630,
        alt: "Custom trophies, awards, and corporate gifts by MSE Printing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Gifts, Awards & Incentives | MSE Printing",
    description:
      "Reward, recognize, and inspire with personalized gifts and awards from MSE Printing, Minneapolis.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/tradeshows-events-images/additional/gifts_awards_incentives_right.webp",
        alt: "Personalized awards and gifts by MSE Printing",
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
    "@id":
      "https://www.mseprinting.com/tradeshows-events/gifts-awards-incentives#service",
    name: "Gifts, Awards & Incentives",
    description:
      "Personalized gifts, awards, trophies, and incentive kits for employee recognition, events, and branding by MSE Printing in Minneapolis, MN.",
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
    serviceType: "Custom Gifts and Awards",
    category: "Recognition & Incentives",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Gifts & Awards",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/tradeshows-events/gifts-awards-incentives#trophies",
          itemOffered: {
            "@type": "Service",
            name: "Custom Trophies",
            description:
              "Personalized trophies for corporate events and competitions.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/tradeshows-events/gifts-awards-incentives#awards",
          itemOffered: {
            "@type": "Service",
            name: "Branded Awards",
            description:
              "Plaques, medals, and recognition awards with your logo.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/tradeshows-events/gifts-awards-incentives#incentive-kits",
          itemOffered: {
            "@type": "Service",
            name: "Incentive Kits",
            description: "Employee appreciation kits and branded gift sets.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/tradeshows-events/gifts-awards-incentives",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Gifts, Awards & Incentives",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "22",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

const GiftsAwardsIncentives = async () => {
  const data = await getCategoryPagesData(
    "/tradeshows-events/gifts-awards-incentives"
  );
  const pageData = data.GiftsAwardsIncentivesPageData?.[0];

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

export default GiftsAwardsIncentives;
