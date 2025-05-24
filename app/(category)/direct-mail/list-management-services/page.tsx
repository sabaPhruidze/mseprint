import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

/* ─────────────── SEO METADATA ─────────────── */
export const metadata: Metadata = {
  title: "List Management Services | MSE Print",
  description:
    "Optimize your mailing list for accuracy, deliverability, and better campaign results with MSE Printing’s expert list management solutions.",
  keywords: [
    "list management services",
    "mailing list cleaning",
    "address list de-duplication",
    "data segmentation Minneapolis",
    "USPS mailing list optimization",
    "bulk mail list accuracy",
    "direct mail data services",
    "NCOA list update Minneapolis",
    "postal list verification USA",
    "campaign response targeting",
  ],
  applicationName: "MSE Printing",
  category: "Mailing & Data Services",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical:
      "https://www.mseprinting.com/direct-mail/list-management-services",
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
    title: "List Management Services | MSE Print",
    description:
      "Ensure every message hits the right mailbox with professional list cleaning, de-duplication, and segmentation services from MSE Printing.",
    url: "https://www.mseprinting.com/direct-mail/list-management-services",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/direct-mail-images/additional/list_management_services_right.webp",
        width: 1200,
        height: 630,
        alt: "Mailing list data processing and segmentation by MSE Printing",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "List Management Services | MSE Print",
    description:
      "Improve delivery and ROI with clean, deduplicated, and segmented mailing lists from MSE Printing.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/direct-mail-images/additional/list_management_services_right.webp",
        alt: "Professional list management tools from MSE Printing",
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
    "@id":
      "https://www.mseprinting.com/direct-mail/list-management-services#service",
    name: "List Management Services",
    description:
      "Mailing list services that include cleaning, validation, de-duplication, and segmentation. Improve your direct mail ROI with accurate data from MSE Printing.",
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
    serviceType: "List Management",
    category: "Direct Mail Services",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Mailing List Services",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/direct-mail/list-management-services#cleaning",
          itemOffered: {
            "@type": "Service",
            name: "List Cleaning & Validation",
            description:
              "Correct formatting, remove invalid or undeliverable addresses, and prepare for postal automation.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/direct-mail/list-management-services#segmentation",
          itemOffered: {
            "@type": "Service",
            name: "Segmentation & Targeting",
            description:
              "Split your data for more effective, personalized direct mail campaigns.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/direct-mail/list-management-services",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "List Management Services",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "27",
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
const ListManagementServices = async () => {
  const data = await getCategoryPagesData(
    "/direct-mail/list-management-services"
  );
  const pageData = data.ListManagementServicesPageData?.[0];

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

export default ListManagementServices;
