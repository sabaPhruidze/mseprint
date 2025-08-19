import React from "react";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { getFooterData } from "db/GetFooterData";
import { buildServiceBreadcrumbs } from "lib/breadcrumbs";

import { getCategoryPagesData } from "db/getCategoryPagesData";
import CardsPagesStructure from "components/common/CardsPagesStructure";

export const metadata: Metadata = {
  title: "Printing & Copying Services in Minneapolis | MSE Printing",
  description:
    "Same‑day, high‑quality printing and copying services for businesses and individuals in Minneapolis & nationwide. Color & B/W, bulk jobs, binding and more.",
  keywords: [
    "printing Minneapolis",
    "copying Minneapolis",
    "minneapolis printing services",
    "minnesota copying services",
    "business document printing",
    "bulk printing Minneapolis",
    "color copies Minneapolis",
    "black and white printing",
    "same day printing Minneapolis",
    "MSE Printing",
  ],
  applicationName: "MSE Printing",
  category: "Printing & Copying Services",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/printing-copying",
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
    title: "Printing & Copying Services in Minneapolis | MSE Printing",
    description:
      "Reliable, professional printing and copying services at MSE Printing. From color prints to B/W copies, we handle jobs of any size with speed and precision.",
    url: "https://www.mseprinting.com/printing-copying",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/home-images/additional/printing_copying_right.webp",
        width: 800,
        height: 630,
        alt: "Professional printing and copying at MSE Printing Minneapolis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Printing & Copying Services in Minneapolis | Fast & High‑Quality | MSE Printing",
    description:
      "Business printing & copying solutions from MSE Printing. Color or B/W, bulk or small runs – fast turnaround.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/home-images/additional/printing_copying_right.webp",
        alt: "Printing and copying services by MSE Printing, Minneapolis",
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

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  colorScheme: "light dark",
};

const ServiceSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.mseprinting.com/printing-copying#service",
    name: "Printing & Copying Services in Minneapolis",
    description:
      "Fast, high‑quality printing and copying for businesses and individuals. Color and B/W solutions for documents, presentations, and more from MSE Printing in Minneapolis and nationwide.",
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
    serviceType: "Printing & Copying Services",
    category: "Print Services",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Printing & Copying Services",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/printing-copying#color-printing",
          itemOffered: {
            "@type": "Service",
            name: "Color Printing",
            description:
              "Vivid, full‑color prints for presentations, marketing materials, and displays.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/printing-copying#bw-copying",
          itemOffered: {
            "@type": "Service",
            name: "Black & White Copying",
            description:
              "Efficient, high‑volume black‑and‑white copying for everyday business needs.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/printing-copying#document-binding",
          itemOffered: {
            "@type": "Service",
            name: "Document Binding",
            description:
              "Professional binding options for reports, manuals, and booklets.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/printing-copying",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Printing & Copying Services",
      },
    },
  };

  return (
    <Script
      id="schema-printing-copying"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

// ---------- Main Page Component ----------
const PrintingCopyingPage = async () => {
  const data = await getCategoryPagesData("/printing-copying");
  const pageData = data.PrintingCopyingPageData?.[0];
  const { footerContentData } = await getFooterData();
  const breadcrumbs = buildServiceBreadcrumbs(
    "printing-copying", // must match the DB `path`
    footerContentData
  );

  if (!pageData) {
    return <p>Data not available. Please check back soon.</p>;
  }

  return (
    <main>
      <ServiceSchema />
      <CardsPagesStructure
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
    </main>
  );
};

export default PrintingCopyingPage;
