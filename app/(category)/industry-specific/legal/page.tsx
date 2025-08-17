import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";
import { getFooterData } from "db/GetFooterData";
import { buildServiceBreadcrumbs } from "lib/breadcrumbs";

/* ─────────────── SEO METADATA ─────────────── */
export const metadata: Metadata = {
  title: "Legal Printing | MSE Print",
  description:
    "Confidential, precise, and fast legal printing solutions tailored for attorneys, courts, and legal professionals.",
  keywords: [
    "legal printing services",
    "case file printing",
    "contract printing Minneapolis",
    "exhibit binder production",
    "confidential document printing",
    "law firm print services",
    "litigation support printing",
    "MSE Printing legal documents",
    "court-ready legal materials",
    "legal scanning and copying",
  ],
  applicationName: "MSE Printing",
  category: "Industry-Specific Printing",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/industry-specific/legal",
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
    google: "ABCD1234xyz", // Replace with your actual verification token
  },

  openGraph: {
    title: "Legal Printing | MSE Print",
    description:
      "From case files and contracts to exhibit binders and document scanning—MSE Printing supports legal professionals with secure, accurate, and professional print services.",
    url: "https://www.mseprinting.com/industry-specific/legal",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/industry-specific-images/additional/legal_right.webp",
        width: 1200,
        height: 630,
        alt: "Secure legal document printing services at MSE Printing",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Legal Printing | MSE Print",
    description:
      "Trusted legal printing services for attorneys and law firms. Confidential, compliant, and ready on deadline.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/industry-specific-images/additional/legal_right.webp",
        alt: "Confidential legal printing by MSE Printing",
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
    "@id": "https://www.mseprinting.com/industry-specific/legal#service",
    name: "Legal Printing",
    description:
      "Confidential and accurate legal printing solutions for attorneys, courts, and law firms—featuring secure file handling, contract printing, exhibit binders, and scanning services.",
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
    serviceType: "Legal Printing",
    category: "Confidential Document Services",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Legal Print Services",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/industry-specific/legal#casefiles",
          itemOffered: {
            "@type": "Service",
            name: "Case File Printing",
            description:
              "High-volume legal case documents prepared and bound for court.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/industry-specific/legal#exhibits",
          itemOffered: {
            "@type": "Service",
            name: "Exhibit Binders",
            description:
              "Tabbing, binding, and organizing legal exhibits for court presentation.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/industry-specific/legal",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Legal Printing",
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
const Legal = async () => {
  const data = await getCategoryPagesData("/industry-specific/legal");
  const pageData = data.LegalPageData?.[0];
  const { footerContentData } = await getFooterData();
  const breadcrumbs = buildServiceBreadcrumbs(
    "industry-specific/legal", // must match the DB `path`
    footerContentData
  );

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return (
    <>
      <ServiceSchema />
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

export default Legal;
