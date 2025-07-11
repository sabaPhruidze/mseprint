import React from "react";
import { Metadata, Viewport } from "next";
import { getBlogPagesData } from "db/getBlogPagesData";
import PageStructure from "components/common/PageStructure";

/* ─────────────── SEO METADATA ─────────────── */
export const metadata: Metadata = {
  title: "Local Printing Services | MSE Print",
  description:
    "Get professional results with MSE Print’s local printing services in Minneapolis. Convenient, fast, and tailored for your business.",
  keywords: [
    "local printing Minneapolis",
    "printing near me",
    "Minneapolis print shop",
    "local business printing",
    "same day printing Minneapolis",
    "pickup printing",
    "walk-in printing services",
    "digital printing near me",
    "MSE local printing",
    "affordable local prints",
  ],
  applicationName: "MSE Printing",
  category: "Local Printing",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/blog/local-printing-services",
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
    title: "Local Printing Services | MSE Print",
    description:
      "Local printing services in Minneapolis for fast turnaround, walk-in support, and high-quality output. Your neighborhood print partner.",
    url: "https://www.mseprinting.com/blog/local-printing-services",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/blog/pages/additional/local-printing-services.webp",
        width: 1200,
        height: 630,
        alt: "Fast and reliable local printing services in Minneapolis by MSE Printing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Local Printing Services | MSE Print",
    description:
      "Speedy, reliable, and community-based printing services tailored for Minneapolis businesses.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/blog/pages/additional/local-printing-services.webp",
        alt: "Pickup and same-day printing solutions in Minneapolis",
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
    "@id": "https://www.mseprinting.com/blog/local-printing-services#service",
    name: "Local Printing Services",
    description:
      "Fast, walk-in local printing in Minneapolis. Business cards, brochures, reports, and more—ready on your schedule.",
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
    serviceType: "Local Printing",
    category: "Local Business Printing",
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/blog/local-printing-services",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Local Printing Services",
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
const LocalPrintingServices = async () => {
  const data = await getBlogPagesData("/blog/local-printing-services");
  const pageData = data.BlogLocalPrintingServicesPageData?.[0];

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

export default LocalPrintingServices;
