import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

// Fully corrected Metadata for SEO & Social Sharing
export const metadata: Metadata = {
  title: "Targeted Direct Mail | MSE Printing",
  description:
    "Send smarter with targeted direct mail campaigns from MSE Printing. Reach the right audience with data-driven precision and maximize your marketing ROI.",
  keywords: [
    "targeted direct mail",
    "direct mail campaigns Minneapolis",
    "precision direct mail",
    "custom mailing services",
    "data-driven marketing Minneapolis",
    "mail marketing Minnesota",
    "personalized mailers",
    "direct mail advertising",
    "MSE Printing targeted mail",
    "minneapolis direct mail company",
  ],
  applicationName: "MSE Printing",
  category: "Direct Mail Services",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/targeted-direct-mail",
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
    title: "Targeted Direct Mail | MSE Printing",
    description:
      "Reach the right audience at the right time with precision-targeted direct mail campaigns designed to drive results from MSE Printing, Minneapolis.",
    url: "https://www.mseprinting.com/targeted-direct-mail",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/direct-mail-images/additional/targeted_direct_mail_right.webp",
        width: 800,
        height: 630,
        alt: "MSE Printing - Targeted Direct Mail Campaigns in Minneapolis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Targeted Direct Mail | MSE Printing",
    description:
      "Smarter, targeted direct mail campaigns from MSE Printing. Personalize your message and maximize your marketing impact.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/direct-mail-images/additional/targeted_direct_mail_right.webp",
        alt: "Targeted direct mailer by MSE Printing, Minneapolis",
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
    "@id": "https://www.mseprinting.com/targeted-direct-mail#service",
    name: "Targeted Direct Mail",
    description:
      "Precision-targeted direct mail campaigns by MSE Printing—data-driven, personalized mailers and campaigns for higher response rates in Minneapolis, MN.",
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
    serviceType: "Targeted Direct Mail Marketing",
    category: "Direct Mail Services",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Targeted Mail Services",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/targeted-direct-mail#personalized-campaigns",
          itemOffered: {
            "@type": "Service",
            name: "Personalized Campaigns",
            description:
              "Data-driven mail campaigns customized to audience profiles.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/targeted-direct-mail#mailing-list-management",
          itemOffered: {
            "@type": "Service",
            name: "Mailing List Management",
            description:
              "Audience list targeting, cleaning, and segmentation for campaigns.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/targeted-direct-mail#variable-data-printing",
          itemOffered: {
            "@type": "Service",
            name: "Variable Data Printing",
            description:
              "Personalized printing for each mailer for increased engagement.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/targeted-direct-mail",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Targeted Direct Mail",
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

const TargetedDirectMail = async () => {
  const data = await getCategoryPagesData("/targeted-direct-mail");
  const pageData = data.TargetedDirectMailPageData?.[0];

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

export default TargetedDirectMail;
