import React from "react";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import CardsPagesStructure from "components/common/CardsPagesStructure";
import { Metadata, Viewport } from "next";

// ---------- SEO & Social Metadata ----------
export const metadata: Metadata = {
  title: "Printing & Copying Services | Fast Quality | MSE Printing",
  description:
    "Fast, high-quality printing and copying solutions from MSE Printing. Perfect for documents, presentations, and everyday business needs in Minneapolis & nationwide.",
  keywords: [
    "printing services Minneapolis",
    "copying services Minnesota",
    "business document printing",
    "presentation printing Minneapolis",
    "color copies Minnesota",
    "MSE Printing copying",
    "black and white printing",
    "bulk copying services",
    "custom printing Minneapolis",
    "same day printing Minnesota",
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
  verification: {
    google: "ABCD1234xyz", // ← replace with your Search Console verification code
  },
  openGraph: {
    title: "Printing & Copying Services | Fast Quality | MSE Printing",
    description:
      "Reliable and professional printing and copying services at MSE Printing. From color prints to black-and-white copies, we handle jobs of any size with speed and precision.",
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
    title: "Printing & Copying Services | Fast Quality | MSE Printing",
    description:
      "Business printing, copying, and color or B/W solutions from MSE Printing.",
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
    "@id": "https://www.mseprinting.com/printing-copying#service",
    name: "Printing & Copying Services",
    description:
      "Fast, high-quality printing and copying for businesses and individuals. Color and black-and-white solutions for documents, presentations, and more from MSE Printing in Minneapolis and nationwide.",
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
              "Vivid, full-color prints for presentations, marketing, and displays.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/printing-copying#bw-copying",
          itemOffered: {
            "@type": "Service",
            name: "Black & White Copying",
            description:
              "Efficient, high-volume black-and-white copying for everyday needs.",
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
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

// ---------- Main Page Component ----------
const PrintingCopying = async () => {
  const data = await getCategoryPagesData("/printing-copying");
  const pageData = data.PrintingCopyingPageData?.[0];
  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return (
    <>
      <ServiceSchema />
      <CardsPagesStructure pageData={pageData} />
    </>
  );
};

export default PrintingCopying;
