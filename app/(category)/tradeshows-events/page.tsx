import React from "react";
import { Metadata, Viewport } from "next";
import { getSpecialPagesData } from "db/GetSpecialPagesData";
import CardsPagesStructure from "components/common/CardsPagesStructure";

import { getFooterData } from "db/GetFooterData";
import { buildServiceBreadcrumbs } from "lib/breadcrumbs";

// Fully corrected Metadata for SEO & Social Sharing (title < 70 chars)
export const metadata: Metadata = {
  title: "Tradeshow & Event Printing Solutions | MSE Printing",
  description:
    "Captivate your audience with impactful tradeshow and event printing solutions from MSE Printing—on time, on brand, and stress-free.",
  keywords: [
    "tradeshow printing Minneapolis",
    "event printing solutions",
    "custom event signage",
    "booth graphics",
    "direct mail for events",
    "exhibition materials",
    "MSE Printing events",
    "event logistics support",
    "conference printing",
    "trade show displays",
  ],
  applicationName: "MSE Printing",
  category: "Tradeshow & Event Printing",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/tradeshows-events",
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
    title: "Tradeshow & Event Printing Solutions | MSE Printing",
    description:
      "Elevate your event presence with booths, signage, direct mail, and logistics support from MSE Printing.",
    url: "https://www.mseprinting.com/tradeshows-events",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/tradeshows-events-images/table_counter_kiosk_displays.webp",
        width: 800,
        height: 630,
        alt: "Table, Counter, and Kiosk Displays by MSE Printing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tradeshow & Event Printing Solutions | MSE Printing",
    description:
      "Captivate your audience with custom event booths, signage, and printing solutions from MSE Printing.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/tradeshows-events-images/table_counter_kiosk_displays.webp",
        alt: "Table counter kiosk displays for events",
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
    "@id": "https://www.mseprinting.com/tradeshows-events#service",
    name: "Tradeshow & Event Printing",
    description:
      "Custom printing solutions for tradeshows and events—booth graphics, signage, direct mail, and logistics support by MSE Printing in Minneapolis, MN.",
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
    serviceType: "Tradeshow & Event Printing",
    category: "Event Printing Solutions",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Event Printing Solutions",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/tradeshows-events#booth-graphics",
          itemOffered: {
            "@type": "Service",
            name: "Booth Graphics",
            description: "Custom booth graphics for tradeshows and events.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/tradeshows-events#event-signage",
          itemOffered: {
            "@type": "Service",
            name: "Event Signage",
            description: "Signage solutions for conferences and exhibitions.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/tradeshows-events#direct-mail",
          itemOffered: {
            "@type": "Service",
            name: "Direct Mail",
            description:
              "Targeted mailing and logistics for events and attendees.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/tradeshows-events",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Tradeshow & Event Printing",
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

const TradeshowsEvents = async () => {
  const data = await getSpecialPagesData("/tradeshows-events");
  const pageData = data.TradeshowsEventsPageCardPageData?.[0];

  const { footerContentData } = await getFooterData();
  const breadcrumbs = buildServiceBreadcrumbs(
    "tradeshows-events", // must match the DB `path`
    footerContentData
  );

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return (
    <>
      <ServiceSchema />
      <CardsPagesStructure
        pageData={pageData}
        breadcrumbs={breadcrumbs}
        tokens={{
          city: "Minneapolis",
          state: "Minnesota",
          state_abbr: "MN",
          brand: "MSE Printing",
          phone: "763-542-8812",
        }}
      />
    </>
  );
};

export default TradeshowsEvents;
