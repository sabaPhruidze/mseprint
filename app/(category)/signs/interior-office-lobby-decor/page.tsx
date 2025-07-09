import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

// Fully Corrected Metadata for SEO and Social Sharing
export const metadata: Metadata = {
  title: "Interior Office & Lobby Décor | MSE Printing",
  description:
    "Custom interior office and lobby décor from MSE Printing—reflect your brand, enhance your workspace, and make a lasting impression on clients and employees.",
  keywords: [
    "interior office decor",
    "lobby décor Minneapolis",
    "custom wall graphics Minneapolis",
    "branded office signage",
    "corporate interior design",
    "office lobby signs",
    "workspace branding",
    "custom décor Minneapolis",
    "interior signs Minnesota",
    "MSE Printing décor solutions",
  ],
  applicationName: "MSE Printing",
  category: "Interior Décor Services",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/signs/interior-office-lobby-decor",
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
    title: "Interior Office & Lobby Décor | MSE Printing",
    description:
      "Enhance your workplace with custom wall graphics, branded signage, and interior décor by MSE Printing in Minneapolis. Fast, professional solutions to impress clients and employees.",
    url: "https://www.mseprinting.com/signs/interior-office-lobby-decor",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/signs-images/additional/interior_office_lobby_decor_right.webp",
        width: 800,
        height: 630,
        alt: "Interior office and lobby décor by MSE Printing in Minneapolis, MN",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Office & Lobby Décor | MSE Printing",
    description:
      "Custom interior décor, wall graphics, and branded signage from MSE Printing, Minneapolis. Impress your clients and employees.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/signs-images/additional/interior_office_lobby_decor_right.webp",
        alt: "Interior office décor by MSE Printing in Minneapolis",
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

// Theme color & viewport
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  colorScheme: "normal",
};

// Schema.org Service Schema for structured data
const ServiceSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id":
      "https://www.mseprinting.com/signs/interior-office-lobby-decor#service",
    name: "Interior Office & Lobby Décor",
    description:
      "Custom office and lobby décor services including wall graphics, branded signage, and interior design for workplaces. Enhance aesthetics and brand impact with MSE Printing.",
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
      {
        "@type": "City",
        name: "Minneapolis",
      },
      {
        "@type": "State",
        name: "Minnesota",
      },
      {
        "@type": "Country",
        name: "United States",
      },
    ],
    serviceType: "Interior Décor & Signage Services",
    category: "Commercial Interior Décor",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Interior Décor Services",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/signs/interior-office-lobby-decor#wall-graphics",
          itemOffered: {
            "@type": "Service",
            name: "Custom Wall Graphics",
            description:
              "Branded and decorative wall graphics for offices and lobbies",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/signs/interior-office-lobby-decor#lobby-signage",
          itemOffered: {
            "@type": "Service",
            name: "Lobby Signage",
            description:
              "Professional, high-impact signage for business lobbies",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/signs/interior-office-lobby-decor#branding",
          itemOffered: {
            "@type": "Service",
            name: "Workspace Branding",
            description: "Complete branding solutions for office interiors",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/signs/interior-office-lobby-decor",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Interior Office & Lobby Décor",
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

const InteriorOfficeLobbyDecor = async () => {
  const data = await getCategoryPagesData("/signs/interior-office-lobby-decor");
  const pageData = data.InteriorOfficeLobbyDecorPageData?.[0];

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

export default InteriorOfficeLobbyDecor;
