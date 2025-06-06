import React from "react";
import { Metadata, Viewport } from "next";
import { getBlogPagesData } from "db/getBlogPagesData";
import PageStructure from "components/common/PageStructure";

/* ─────────────── SEO METADATA ─────────────── */
export const metadata: Metadata = {
  title: "Notepad Printing Services | MSE Print",
  description:
    "Boost your brand visibility with custom notepad printing in Minneapolis. MSE Print offers full-color, branded notepads for offices, giveaways, and events.",
  keywords: [
    "custom notepads",
    "branded notepad printing",
    "memo pad printing",
    "Minneapolis notepad printers",
    "sticky note printing",
    "notepad giveaways",
    "legal pads",
    "personalized notepads",
    "notepad design",
    "eco-friendly notepads",
  ],
  applicationName: "MSE Printing",
  category: "Notepad Printing",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/blog/notepad-printing-services",
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
    title: "Notepad Printing Services | MSE Print",
    description:
      "Branded notepad printing in Minneapolis for trade shows, team use, and client gifts. Glued, spiral, sticky, and legal pads customized to your brand.",
    url: "https://www.mseprinting.com/blog/notepad-printing-services",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/blog/pages/additional/notepad-printing-services.webp",
        width: 1200,
        height: 630,
        alt: "Custom notepads printed by MSE Printing with logos and binding options",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Notepad Printing Services | MSE Print",
    description:
      "Design and print your own branded notepads with MSE Printing. Great for promotions, meetings, and everyday branding.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/blog/pages/additional/notepad-printing-services.webp",
        alt: "Branded sticky notes and notepad printing for Minneapolis businesses",
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
    "@id": "https://www.mseprinting.com/blog/notepad-printing-services#service",
    name: "Notepad Printing Services",
    description:
      "Full-service custom notepad printing in Minneapolis—from sticky notes to legal pads and branded memo books, MSE delivers.",
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
    serviceType: "Notepad Printing",
    category: "Custom Office Supplies",
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/blog/notepad-printing-services",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Notepad Printing Services",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "39",
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
const NotepadPrintingServices = async () => {
  const data = await getBlogPagesData("/blog/notepad-printing-services");
  const pageData = data.BlogNotepadPrintingServicesPageData?.[0];

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

export default NotepadPrintingServices;
