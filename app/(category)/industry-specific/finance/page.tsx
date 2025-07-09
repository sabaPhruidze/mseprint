import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

/* ─────────────── SEO METADATA ─────────────── */
export const metadata: Metadata = {
  title: "Finance Printing | MSE Print",
  description:
    "Secure, compliant, and professional finance printing services tailored for financial institutions. Trusted by banks, credit unions, and investment firms.",
  keywords: [
    "finance printing services",
    "bank statement printing",
    "secure document printing",
    "compliance printing Minneapolis",
    "branded financial stationery",
    "financial disclosures printing",
    "custom envelopes for banks",
    "investment firm printing solutions",
    "regulated industry print services",
    "MSE Printing finance sector",
  ],
  applicationName: "MSE Printing",
  category: "Industry-Specific Printing",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/industry-specific/finance",
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
    google: "ABCD1234xyz", // Replace with your actual Search Console verification
  },

  openGraph: {
    title: "Finance Printing | MSE Print",
    description:
      "From statements to disclosures and branded stationery—MSE Printing delivers trusted printing services for the finance sector.",
    url: "https://www.mseprinting.com/industry-specific/finance",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/industry-specific-images/additional/finance_right.webp",
        width: 1200,
        height: 630,
        alt: "MSE Printing - Finance Printing Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Finance Printing | MSE Print",
    description:
      "Compliant, secure, and on-brand printing solutions for financial organizations—statements, disclosures, and more.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/industry-specific-images/additional/finance_right.webp",
        alt: "Secure finance sector printing by MSE Printing",
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
    "@id": "https://www.mseprinting.com/industry-specific/finance#service",
    name: "Finance Printing",
    description:
      "Secure and professional printing services for financial institutions, including statements, disclosures, stationery, and compliant mailings.",
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
    serviceType: "Finance Sector Printing",
    category: "Secure Document Printing",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Finance Printing Options",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/industry-specific/finance#statements",
          itemOffered: {
            "@type": "Service",
            name: "Statement Printing",
            description:
              "Secure and compliant bank and customer statement printing with mailing integration.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/industry-specific/finance#stationery",
          itemOffered: {
            "@type": "Service",
            name: "Branded Stationery",
            description:
              "Custom-designed letterheads, envelopes, and forms to reinforce your financial brand.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/industry-specific/finance",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Finance Printing",
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
const Finance = async () => {
  const data = await getCategoryPagesData("/industry-specific/finance");
  const pageData = data.FinancePageData?.[0];

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

export default Finance;
