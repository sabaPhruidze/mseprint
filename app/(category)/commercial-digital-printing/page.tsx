import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";
import { getFooterData } from "db/GetFooterData";
import { buildServiceBreadcrumbs } from "lib/breadcrumbs";

/* ─────────────── SEO METADATA ─────────────── */
export const metadata: Metadata = {
  title: "Commercial Digital Printing | MSE Printing",
  description:
    "Fast, high-quality commercial digital printing in Minneapolis. Short-run, variable data, and quick turnarounds from MSE Printing.",
  keywords: [
    "commercial digital printing",
    "digital printing Minneapolis",
    "short-run printing Minnesota",
    "variable data printing",
    "on-demand printing",
    "business printing solutions",
  ],
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/commercial-digital-printing",
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
    title: "Commercial Digital Printing | MSE Printing",
    description:
      "Commercial digital printing services with quick turnaround, crisp color, and flexible quantities from MSE Printing in Minneapolis.",
    url: "https://www.mseprinting.com/commercial-digital-printing",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/home-images/digital_printing.webp",
        width: 1200,
        height: 630,
        alt: "MSE Printing – Commercial Digital Printing press in operation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Digital Printing | MSE Printing",
    description:
      "High-quality, fast commercial digital printing in Minneapolis. Short-run, variable data, and on-demand solutions.",
    images:
      "https://www.mseprinting.com/images/home-images/digital_printing.webp",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
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
const ServiceSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.mseprinting.com/commercial-digital-printing#service",
    name: "Commercial Digital Printing",
    description:
      "Fast, cost-effective digital printing services for small and medium print runs. Ideal for marketing, business, and personalized materials. High-quality results from MSE Printing.",
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
    serviceType: "Digital Printing",
    category: "Commercial Printing Services",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Printing Options",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/commercial-digital-printing#short-run",
          itemOffered: {
            "@type": "Service",
            name: "Short-Run Printing",
            description:
              "Quick turnaround on small to medium volume print jobs for promotions and internal use.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/commercial-digital-printing#personalized",
          itemOffered: {
            "@type": "Service",
            name: "Personalized Print Materials",
            description:
              "Variable data printing for name-specific or customer-specific marketing materials.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/commercial-digital-printing",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Commercial Digital Printing",
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
        name: "Services",
        item: "https://www.mseprinting.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Commercial Digital Printing",
        item: "https://www.mseprinting.com/commercial-digital-printing",
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

/* ─────────────── MAIN PAGE COMPONENT ───────────────
   NOTE: Ensure PageStructure renders the main copy on the server
   (no "use client" for the primary content), so Google sees it in the HTML. */
const CommercialDigitalPrinting = async () => {
  const data = await getCategoryPagesData("/commercial-digital-printing");
  const pageData = data.CommercialDigitalPrintingPageData?.[0];
  const { footerContentData } = await getFooterData();
  const breadcrumbs = buildServiceBreadcrumbs(
    "commercial-digital-printing",
    footerContentData
  );

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return (
    <>
      <ServiceSchema />
      <BreadcrumbSchema />
      <PageStructure
        pageData={pageData}
        breadcrumbs={breadcrumbs}
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

export default CommercialDigitalPrinting;
