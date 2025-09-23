import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";
import { getFooterData } from "db/GetFooterData";
import { buildServiceBreadcrumbs } from "lib/breadcrumbs";

/* ─────────────── SEO METADATA ─────────────── */
export const metadata: Metadata = {
  title: "Healthcare Printing | MSE Print",
  description:
    "Clear, compliant, and compassionate healthcare printing solutions for medical professionals, clinics, and hospitals.",
  keywords: [
    "healthcare printing services",
    "HIPAA compliant printing",
    "hospital print materials",
    "medical form printing",
    "clinic appointment cards",
    "patient communication materials",
    "healthcare signage printing",
    "medical stationery design",
    "MSE Printing healthcare",
    "medical marketing print",
  ],
  applicationName: "MSE Printing",
  category: "Industry-Specific Printing",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/industry-specific/healthcare",
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

  openGraph: {
    title: "Healthcare Printing | MSE Print",
    description:
      "MSE Printing delivers HIPAA-compliant print materials for hospitals, clinics, and healthcare organizations—supporting patient care and operational efficiency.",
    url: "https://www.mseprinting.com/industry-specific/healthcare",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/industry-specific-images/additional/health_care_right.webp",
        width: 1200,
        height: 630,
        alt: "Healthcare printing materials from MSE Printing",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Healthcare Printing | MSE Print",
    description:
      "Compliant and compassionate healthcare printing services for hospitals, clinics, and private practices.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/industry-specific-images/additional/health_care_right.webp",
        alt: "Medical forms, signage, and patient materials from MSE Printing",
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
    "@id": "https://www.mseprinting.com/industry-specific/healthcare#service",
    name: "Healthcare Printing",
    description:
      "Comprehensive healthcare printing services including patient communication, appointment cards, HIPAA-compliant forms, and medical signage.",
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
    serviceType: "Healthcare Printing",
    category: "Medical Printing",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Healthcare Print Solutions",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/industry-specific/healthcare#forms",
          itemOffered: {
            "@type": "Service",
            name: "Medical Forms",
            description:
              "HIPAA-compliant printed forms for hospitals, clinics, and medical offices.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/industry-specific/healthcare#signage",
          itemOffered: {
            "@type": "Service",
            name: "Healthcare Signage",
            description:
              "Directional and informational signage designed for patient-friendly environments.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/industry-specific/healthcare",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Healthcare Printing",
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
const HealthCare = async () => {
  const data = await getCategoryPagesData("/industry-specific/healthcare");
  const pageData = data.HealthcarePageData?.[0];
  const { footerContentData } = await getFooterData();
  const breadcrumbs = buildServiceBreadcrumbs(
    "industry-specific/healthcare", // must match the DB `path`
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

export default HealthCare;
