import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";
import { getFooterData } from "db/GetFooterData"; // ← ADD
import { buildServiceBreadcrumbs } from "lib/breadcrumbs"; // ← ADD

/* ─────────────── SEO METADATA ─────────────── */
export const metadata: Metadata = {
  title: "Advanced Mailing Services | MSE Print",
  description:
    "Full-service mailing solutions including print, fulfillment, data processing, and USPS coordination by MSE Printing.",
  keywords: [
    "mailing services Minneapolis",
    "direct mail solutions",
    "bulk mail processing",
    "USPS coordination Minneapolis",
    "print and mailing company Minnesota",
    "mail fulfillment Minneapolis",
    "MSE Printing mailing services",
    "advanced mailing campaigns",
    "mail house services USA",
    "custom mailing Minneapolis",
  ],
  applicationName: "MSE Printing",
  category: "Mailing Services",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/advanced-mailing-services",
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
    google: "ABCD1234xyz", // Replace with actual verification string
  },

  openGraph: {
    title: "Advanced Mailing Services | MSE Print",
    description:
      "Streamline mailing campaigns with MSE Printing—from data and design to delivery. Ideal for businesses, nonprofits, and agencies.",
    url: "https://www.mseprinting.com/advanced-mailing-services",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/common-images/additional/advanced_mailing_services_right.webp",
        width: 1200,
        height: 630,
        alt: "MSE Printing - Advanced Mailing Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Advanced Mailing Services | MSE Print",
    description:
      "Efficient, expert mailing support by MSE Printing for all industries. Mailing data, printing, fulfillment, and USPS delivery.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/common-images/additional/advanced_mailing_services_right.webp",
        alt: "MSE Printing handles nationwide mailing campaigns from Minneapolis",
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
    "@id": "https://www.mseprinting.com/advanced-mailing-services#service",
    name: "Advanced Mailing Services",
    description:
      "Full-service mailing support including direct mail printing, fulfillment, data processing, and USPS coordination from MSE Printing in Minneapolis.",
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
    category: "Direct Mail Fulfillment",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Advanced Mailing Service Packages",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/advanced-mailing-services#data-processing",
          itemOffered: {
            "@type": "Service",
            name: "Mailing Data Processing",
            description:
              "Clean, sort, and prep mailing lists for USPS delivery.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/advanced-mailing-services#print-fulfillment",
          itemOffered: {
            "@type": "Service",
            name: "Print Fulfillment",
            description:
              "Printing, folding, inserting, labeling, and bundling.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/advanced-mailing-services#usps-coordination",
          itemOffered: {
            "@type": "Service",
            name: "USPS Coordination",
            description:
              "Handling permits, postal forms, and entry point optimization.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/advanced-mailing-services",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Complete Mailing Solutions",
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
const AdvancedMailingServices = async () => {
  const data = await getCategoryPagesData("/advanced-mailing-services");
  const pageData = data.AdvancedMailingServicesPageData?.[0];

  const { footerContentData } = await getFooterData();
  const breadcrumbs = buildServiceBreadcrumbs(
    "advanced-mailing-services",
    footerContentData
  );

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return (
    <>
      <PageStructure
        pageData={pageData}
        breadcrumbs={breadcrumbs} // ← ADD
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

export default AdvancedMailingServices;
