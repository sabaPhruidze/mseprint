import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

/* ─────────────── SEO METADATA ─────────────── */
export const metadata: Metadata = {
  title: "Business Forms | MSE Print",
  description:
    "Streamline operations with custom business forms by MSE Printing. Professionally designed for invoices, receipts, contracts, and more.",
  keywords: [
    "custom business forms Minneapolis",
    "NCR forms printing",
    "invoice printing",
    "receipt booklets",
    "contract forms Minneapolis",
    "carbonless form printing",
    "business form printer Minnesota",
    "custom forms USA",
    "form printing company",
    "professional business documentation",
  ],
  applicationName: "MSE Printing",
  category: "Business Printing",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/business-forms",
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
    google: "ABCD1234xyz", // Replace with actual Search Console token
  },

  openGraph: {
    title: "Business Forms | MSE Print",
    description:
      "Customizable business forms designed to support efficient operations and professional documentation. NCR, carbonless, and branded formats available.",
    url: "https://www.mseprinting.com/business-forms",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/home-images/card_business_forms.webp",
        width: 1200,
        height: 630,
        alt: "Professionally printed business forms from MSE Printing in Minneapolis",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Business Forms | MSE Print",
    description:
      "NCR forms, invoices, and professional documentation customized by MSE Printing for your business needs.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/home-images/card_business_forms.webp",
        alt: "Custom business forms printed by MSE Printing Minneapolis",
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
    "@id": "https://www.mseprinting.com/business-forms#service",
    name: "Business Forms",
    description:
      "Custom printed business forms including carbonless forms, invoices, receipts, and contracts. Designed for efficiency and branded professionalism by MSE Printing.",
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
    serviceType: "Business Form Printing",
    category: "Custom Business Documents",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Business Form Types",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/business-forms#ncr",
          itemOffered: {
            "@type": "Service",
            name: "Carbonless NCR Forms",
            description:
              "Multi-part forms for duplicate records, ideal for invoices and receipts.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/business-forms#contracts",
          itemOffered: {
            "@type": "Service",
            name: "Contracts & Agreements",
            description:
              "Printed legal and business forms for internal or external use.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/business-forms",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Business Forms",
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
const BusinessForms = async () => {
  const data = await getCategoryPagesData("/business-forms");
  const pageData = data.BusinessFormsPageData?.[0];

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

export default BusinessForms;
