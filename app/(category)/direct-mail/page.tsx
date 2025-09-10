import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import CardsPagesStructure from "components/common/CardsPagesStructure";

import { getFooterData } from "db/GetFooterData";
import { buildServiceBreadcrumbs } from "lib/breadcrumbs";

/* ─────────────── SEO METADATA ─────────────── */
export const metadata: Metadata = {
  title: "Direct Mail & Mailing Services | MSE Printing",
  description:
    "Professional direct mail and mailing services by MSE Printing. End-to-end solutions for design, list management, printing, and USPS delivery.",
  keywords: [
    "direct mail Minneapolis",
    "mailing services USA",
    "targeted mail marketing",
    "bulk mail printing",
    "business mailing services",
    "USPS mail coordination",
    "direct marketing campaigns",
    "custom mail design printing",
    "MSE Printing mail solutions",
    "mailing list segmentation",
  ],
  applicationName: "MSE Printing",
  category: "Direct Mail Services",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/direct-mail",
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
    google: "ABCD1234xyz", // Replace with your actual verification string
  },

  openGraph: {
    title: "Direct Mail & Mailing Services | MSE Printing",
    description:
      "Boost brand awareness and engagement with MSE Printing's direct mail solutions. Expert printing, processing, and USPS coordination.",
    url: "https://www.mseprinting.com/direct-mail",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/home-images/additional/card_direct_mail_right.webp",
        width: 1200,
        height: 630,
        alt: "Direct mail marketing services provided by MSE Printing Minneapolis",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Direct Mail & Mailing Services | MSE Printing",
    description:
      "End-to-end direct mail solutions by MSE Printing. Printing, targeting, and USPS mailing—all in one place.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/home-images/additional/card_direct_mail_right.webp",
        alt: "Custom direct mail design and mailing by MSE Printing",
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
    "@id": "https://www.mseprinting.com/direct-mail#service",
    name: "Direct Mail & Mailing Services",
    description:
      "MSE Printing provides professional direct mail services including design, list processing, printing, and USPS delivery. Reach your audience with efficiency and impact.",
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
    serviceType: "Mailing Services",
    category: "Direct Mail Marketing",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Direct Mail Solutions",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/direct-mail#design",
          itemOffered: {
            "@type": "Service",
            name: "Mail Design & Layout",
            description:
              "Custom-designed postcards, letters, and brochures for direct marketing success.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/direct-mail#fulfillment",
          itemOffered: {
            "@type": "Service",
            name: "Print Fulfillment & Mailing",
            description:
              "Printing, sorting, and mailing services using USPS-optimized processes.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/direct-mail",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Direct Mail & Mailing Services",
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
const DirectMailMailingServices = async () => {
  const data = await getCategoryPagesData("/direct-mail");
  const pageData = data.DirectMailMailingServicesPageData?.[0];
  const { footerContentData } = await getFooterData();
  const breadcrumbs = buildServiceBreadcrumbs(
    "direct-mail", // must match the DB `path`
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

export default DirectMailMailingServices;
