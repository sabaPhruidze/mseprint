import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

// ---------- SEO & Social Metadata ----------
export const metadata: Metadata = {
  title: "Legal Copying | Secure Legal Documents | MSE Printing",
  description:
    "Secure, accurate, and confidential legal copying services for law firms, courts, and legal professionals. Bates stamping, tabbing, scanning, and fast turnaround in Minneapolis & nationwide.",
  keywords: [
    "legal copying Minneapolis",
    "secure document copying Minnesota",
    "legal document duplication",
    "Bates stamping services",
    "confidential legal copying",
    "MSE Printing legal copying",
    "court document copying",
    "scanning legal documents",
    "legal tabbing services",
    "fast legal document copying",
  ],
  applicationName: "MSE Printing",
  category: "Legal Copying",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/printing-copying/legal-copying",
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
    google: "ABCD1234xyz", // ← replace with your Search Console verification code
  },
  openGraph: {
    title: "Legal Copying | Secure Legal Documents | MSE Printing",
    description:
      "Trusted legal document duplication and scanning services—Bates stamping, tabbing, secure handling, and fast turnaround.",
    url: "https://www.mseprinting.com/printing-copying/legal-copying",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/printing-copying-images/additional/legal_copying_right.webp",
        width: 800,
        height: 630,
        alt: "Legal document copying and scanning by MSE Printing in Minneapolis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal Copying | Secure Legal Documents | MSE Printing",
    description:
      "Confidential legal document copying, scanning, and Bates stamping by MSE Printing.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/printing-copying-images/additional/legal_copying_right.webp",
        alt: "Legal copying services by MSE Printing, Minneapolis",
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

// ---------- Viewport Theme Colors ----------
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  colorScheme: "normal",
};

// ---------- Service Schema Structured Data ----------
const ServiceSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.mseprinting.com/printing-copying/legal-copying#service",
    name: "Legal Copying",
    description:
      "Confidential legal copying, scanning, and Bates stamping by MSE Printing. Secure document handling and fast turnaround in Minneapolis and nationwide.",
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
    serviceType: "Legal Copying",
    category: "Print Services",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Legal Copying Services",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/printing-copying/legal-copying#document-duplication",
          itemOffered: {
            "@type": "Service",
            name: "Document Duplication",
            description:
              "Accurate copying and duplication of legal documents for law firms and courts.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/printing-copying/legal-copying#scanning",
          itemOffered: {
            "@type": "Service",
            name: "Legal Document Scanning",
            description:
              "Secure scanning and digital archiving of legal files and exhibits.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/printing-copying/legal-copying#bates-stamping",
          itemOffered: {
            "@type": "Service",
            name: "Bates Stamping & Tabbing",
            description:
              "Professional Bates stamping, tabbing, and binding for case preparation.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/printing-copying/legal-copying",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Legal Copying",
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

// ---------- Main Page Component ----------
const LegalCopying = async () => {
  const data = await getCategoryPagesData("/printing-copying/legal-copying");
  const pageData = data.LegalCopyingPageData?.[0];

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

export default LegalCopying;
