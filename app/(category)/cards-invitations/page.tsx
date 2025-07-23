import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

/* ─────────────── SEO METADATA ─────────────── */
export const metadata: Metadata = {
  title: "Cards & Invitations Printing in Minneapolis MN",
  description:
    "Design and print beautiful cards & invitations in Minneapolis, MN. Wedding, holiday, and business stationery printed locally at MSE Printing.",
  keywords: [
    "custom cards Minneapolis",
    "invitation printing",
    "wedding invitations",
    "holiday cards printing",
    "business invitation cards",
    "event invitation printing",
    "thank you cards Minneapolis",
    "MSE Printing invitations",
    "personalized greeting cards",
    "premium custom cards USA",
    "cards & invitations Minneapolis",
    "invitation printing Minneapolis MN",
    "custom greeting cards Minneapolis",
    "wedding invitation printers Minneapolis",
    "holiday cards printing",
    "business invitations",
  ],
  applicationName: "MSE Printing",
  category: "Custom Cards & Invitations",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/cards-invitations",
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
    google: "ABCD1234xyz", // Replace with real Google Search Console verification
  },

  openGraph: {
    title: "Cards & Invitations | MSE Print",
    description:
      "Create elegant, heartfelt cards and invitations with custom finishes and expert printing from MSE Printing. Available locally and nationwide.",
    url: "https://www.mseprinting.com/cards-invitations",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/common-images/cards_invitations.webp",
        width: 1200,
        height: 630,
        alt: "Custom event invitations and greeting cards by MSE Printing Minneapolis",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Cards & Invitations | MSE Print",
    description:
      "Celebrate every moment with beautifully printed invitations and custom cards by MSE Printing.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/common-images/cards_invitations.webp",
        alt: "Elegant printed invitations and cards from MSE Printing",
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

const ServiceSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.mseprinting.com/cards-invitations#service",
    name: "Cards & Invitations",
    description:
      "Custom printed cards and invitations including wedding invites, holiday cards, event stationery, and business greetings. Designed and printed by MSE Printing in Minneapolis.",
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
    serviceType: "Card & Invitation Printing",
    category: "Event Printing",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Card & Invitation Options",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/cards-invitations#wedding",
          itemOffered: {
            "@type": "Service",
            name: "Wedding Invitations",
            description:
              "Elegant invitations customized for weddings and formal events.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/cards-invitations#holiday",
          itemOffered: {
            "@type": "Service",
            name: "Holiday & Greeting Cards",
            description:
              "Personalized seasonal and thank-you cards for businesses and individuals.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/cards-invitations",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Cards & Invitations",
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
const CardsInvitations = async () => {
  const data = await getCategoryPagesData("/cards-invitations");
  const pageData = data.CardsInvitationsPageData?.[0];

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

export default CardsInvitations;
