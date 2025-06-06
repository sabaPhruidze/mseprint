import React from "react";
import { Metadata, Viewport } from "next";
import { getBlogPagesData } from "db/getBlogPagesData";
import PageStructure from "components/common/PageStructure";

/* ─────────────── SEO METADATA ─────────────── */
export const metadata: Metadata = {
  title: "Legal Document Printing | MSE Print",
  description:
    "Fast, confidential legal document printing services in Minneapolis. MSE Print supports law firms and attorneys with courtroom-ready briefs, exhibits, and pleadings.",
  keywords: [
    "legal document printing",
    "Minneapolis legal printers",
    "court filing prints",
    "secure legal print services",
    "law firm document printing",
    "confidential copying",
    "discovery printing",
    "appellate brief printing",
    "contract printing",
    "tabbed exhibits",
  ],
  applicationName: "MSE Printing",
  category: "Legal Printing",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/blog/legal-document-printing",
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
    google: "ABCD1234xyz",
  },
  openGraph: {
    title: "Legal Document Printing | MSE Print",
    description:
      "Professional legal printing in Minneapolis including briefs, exhibits, contracts, and more—secure, accurate, and court-compliant.",
    url: "https://www.mseprinting.com/blog/legal-document-printing",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/blog/pages/additional/legal-document-printing.webp",
        width: 1200,
        height: 630,
        alt: "Secure and professional legal document printing services by MSE Printing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal Document Printing | MSE Print",
    description:
      "Get law office-ready document printing with fast turnaround, confidentiality, and full compliance. Minneapolis-based legal print services.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/blog/pages/additional/legal-document-printing.webp",
        alt: "Legal contract and exhibit print services in Minneapolis",
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
    "@id": "https://www.mseprinting.com/blog/legal-document-printing#service",
    name: "Legal Document Printing",
    description:
      "Confidential legal document printing for law firms and attorneys—briefs, exhibits, contracts, and more printed to spec.",
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
    serviceType: "Legal Printing",
    category: "Legal Print Services",
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/blog/legal-document-printing",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Legal Document Printing",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "54",
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
const LegalDocumentPrinting = async () => {
  const data = await getBlogPagesData("/blog/legal-document-printing");
  const pageData = data.BlogLegalDocumentPrintingPageData?.[0];

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

export default LegalDocumentPrinting;
