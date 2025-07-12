import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

/* ─────────────── SEO METADATA ─────────────── */
export const metadata: Metadata = {
  title: "Event Literature & Signs | MSE Print",
  description:
    "Make a bold impression at your next event with custom signage and printed materials by MSE Printing. Trade shows, expos, and conferences covered.",
  keywords: [
    "event signage Minneapolis",
    "trade show signs",
    "event printing services",
    "custom banners and brochures",
    "expo signage printing",
    "printed materials for events",
    "MSE Printing event graphics",
    "conference handouts and signs",
    "professional event displays",
    "literature and booth graphics",
  ],
  applicationName: "MSE Printing",
  category: "Event Printing Services",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/event-literature-signs",
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
    google: "ABCD1234xyz", // Replace with actual verification code
  },

  openGraph: {
    title: "Event Literature & Signs | MSE Print",
    description:
      "Trade show signs, brochures, banners, and more—professionally printed and ready to represent your brand at any event.",
    url: "https://www.mseprinting.com/event-literature-signs",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/common-images/additional/event_literature_signs_right.webp",
        width: 1200,
        height: 630,
        alt: "Event signage and literature from MSE Printing Minneapolis",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Event Literature & Signs | MSE Print",
    description:
      "Custom event materials from MSE Printing—signs, banners, brochures, and more, printed to elevate your presence.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/common-images/additional/event_literature_signs_right.webp",
        alt: "Custom printed event graphics and signage by MSE Printing",
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
    "@id": "https://www.mseprinting.com/event-literature-signs#service",
    name: "Event Literature & Signs",
    description:
      "Professional printing for event signs, trade show banners, brochures, and branded literature by MSE Printing. Serving Minneapolis and nationwide clients.",
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
    serviceType: "Event Printing",
    category: "Trade Show Materials",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Event Printing Solutions",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/event-literature-signs#banners",
          itemOffered: {
            "@type": "Service",
            name: "Event Banners & Posters",
            description:
              "Large-format graphics for booth backdrops and signage.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/event-literature-signs#literature",
          itemOffered: {
            "@type": "Service",
            name: "Brochures & Printed Materials",
            description:
              "Professional handouts, flyers, and branded literature for events.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/event-literature-signs",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Event Literature & Signs",
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

/* ─────────────── MAIN PAGE COMPONENT ─────────────── */
const EventLiteratureSigns = async () => {
  const data = await getCategoryPagesData("/event-literature-signs");
  const pageData = data.EventLiteratureSignsPageData?.[0];

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

export default EventLiteratureSigns;
