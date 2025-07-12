import React from "react";
import { Metadata, Viewport } from "next";
import { getBlogPagesData } from "db/getBlogPagesData";
import PageStructure from "components/common/PageStructure";

/* ─────────────── SEO METADATA ─────────────── */
export const metadata: Metadata = {
  title: "Corporate Printing Solutions | MSE Print",
  description:
    "Discover high-impact corporate printing solutions by MSE Print in Minneapolis. From business cards to large-format graphics, ensure professional results.",
  keywords: [
    "corporate printing Minneapolis",
    "business printing services",
    "marketing materials",
    "custom stationery",
    "large-format corporate prints",
    "brochure printing",
    "professional printing Minneapolis",
    "MSE corporate printing",
    "office printing solutions",
    "annual report printing",
  ],
  applicationName: "MSE Printing",
  category: "Corporate Printing",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/blog/corporate-printing-solutions",
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
    title: "Corporate Printing Solutions | MSE Print",
    description:
      "Minneapolis-based professional printing for corporate branding, marketing, and operations. Business cards, brochures, manuals, and more.",
    url: "https://www.mseprinting.com/blog/corporate-printing-solutions",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/blog/pages/additional/corporate-printing-solutions.webp",
        width: 1200,
        height: 630,
        alt: "Corporate print services including stationery, brochures, and large-format graphics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Printing Solutions | MSE Print",
    description:
      "Boost your corporate identity with expertly produced materials by MSE Printing. Fast turnaround and precision guaranteed.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/blog/pages/additional/corporate-printing-solutions.webp",
        alt: "High-quality business and marketing print materials for corporations in Minneapolis",
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
    "@id": "https://www.mseprinting.com/blog-ppsfmcc#service",
    name: "Corporate Printing Solutions",
    description:
      "Corporate printing services tailored for Minneapolis businesses—business cards, manuals, brochures, and large-format signage.",
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
    serviceType: "Corporate Printing",
    category: "Corporate Printing Services",
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/blog-ppsfmcc",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Corporate Printing Solutions",
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
const CorporatePrintingSolutions = async () => {
  const data = await getBlogPagesData("/blog/corporate-printing-solutions");
  const pageData = data.blogCorporatePrintingSolutions?.[0];

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

export default CorporatePrintingSolutions;
