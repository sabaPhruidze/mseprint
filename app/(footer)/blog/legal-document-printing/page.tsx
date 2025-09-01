import React from "react";
import { Metadata, Viewport } from "next";
import { getBlogPagesData } from "db/getBlogPagesData";
import PageStructure from "components/common/PageStructure";

/* ─────────────── SEO METADATA ─────────────── */
export const metadata: Metadata = {
  title: "Legal Document Printing in Minneapolis, MN | MSE Printing",
  description:
    "Fast, confidential legal document printing in Minneapolis, MN (USA). Courtroom-ready briefs, tabbed exhibits, pleadings, contracts, and discovery—printed accurately and on time.",
  keywords: [
    "legal document printing",
    "Minneapolis legal printing",
    "court filing prints",
    "secure legal print services",
    "law firm document printing",
    "confidential copying",
    "discovery printing",
    "appellate brief printing",
    "contract printing",
    "tabbed exhibits",
    "legal printing Minneapolis MN",
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
  // keep only if you actually verify this token at the site level
  verification: {
    google: "ABCD1234xyz",
  },
  openGraph: {
    title: "Legal Document Printing in Minneapolis, MN | MSE Printing",
    description:
      "Professional, secure legal printing in Minneapolis—briefs, exhibits, contracts, discovery, and more. Court-compliant and deadline-ready.",
    url: "https://www.mseprinting.com/blog/legal-document-printing", // matches canonical
    siteName: "MSE Printing",
    locale: "en_US",
    type: "article",
    publishedTime: "2025-08-07T00:00:00Z", // update from CMS if available
    modifiedTime: "2025-08-30T00:00:00Z", // update from CMS if available
    images: [
      {
        url: "https://www.mseprinting.com/images/blog/pages/additional/legal-document-printing.webp",
        width: 1200,
        height: 630,
        alt: "Secure legal document printing in Minneapolis, MN — MSE Printing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal Document Printing in Minneapolis, MN | MSE Printing",
    description:
      "Get law-office-ready printing with confidentiality, accurate tabs, Bates numbering, and fast turnaround in Minneapolis, MN (USA).",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images:
      "https://www.mseprinting.com/images/blog/pages/additional/legal-document-printing.webp",
  },
  other: {
    "geo.region": "US-MN",
    "geo.placename": "Minneapolis",
    "geo.position": "45.0230;-93.2790",
    ICBM: "45.0230, -93.2790",
    "business:contact_data:street_address": "3839 Washington Ave N Ste 103",
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

/* ─────────────── VIEWPORT ─────────────── */
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

/* ─────────────── STRUCTURED DATA / SCHEMA.ORG ─────────────── */
const ArticleSchema = ({
  headline,
  description,
  image,
  datePublished,
  dateModified,
}: {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
}) => {
  const data = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": "https://www.mseprinting.com/blog/legal-document-printing#article",
    mainEntityOfPage:
      "https://www.mseprinting.com/blog/legal-document-printing",
    headline,
    description,
    image,
    datePublished,
    dateModified,
    author: { "@type": "Organization", name: "MSE Printing" },
    publisher: {
      "@type": "Organization",
      name: "MSE Printing",
      logo: {
        "@type": "ImageObject",
        url: "https://www.mseprinting.com/images/logo/logo-1200x630.png",
      },
      telephone: "763-542-8812",
      address: {
        "@type": "PostalAddress",
        streetAddress: "3839 Washington Ave N Ste 103",
        addressLocality: "Minneapolis",
        addressRegion: "MN",
        postalCode: "55412",
        addressCountry: "US",
      },
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

const BreadcrumbSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.mseprinting.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://www.mseprinting.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Legal Document Printing",
        item: "https://www.mseprinting.com/blog/legal-document-printing",
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
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

  // Prefer dates from CMS if present, else fall back to OG values
  const published = "2025-08-07T00:00:00Z";
  const updated = "2025-09-01T00:00:00Z";

  return (
    <>
      <ArticleSchema
        headline="Legal Document Printing in Minneapolis, MN"
        description="Confidential, court-ready printing for briefs, tabbed exhibits, pleadings, contracts, and discovery—produced in Minneapolis, MN (USA) by MSE Printing."
        image="https://www.mseprinting.com/images/blog/pages/additional/legal-document-printing.webp"
        datePublished={published}
        dateModified={updated}
      />
      <BreadcrumbSchema />
      <PageStructure
        pageData={pageData}
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

export default LegalDocumentPrinting;
