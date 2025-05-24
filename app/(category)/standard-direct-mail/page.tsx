import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

// Fully corrected Metadata for SEO & Social Sharing
export const metadata: Metadata = {
  title: "Standard Direct Mail | MSE Printing",
  description:
    "Deliver high-impact marketing directly to your audience with MSE Printing’s professional direct mail services. Targeted postcards, letters, and mailers—delivered with postal precision.",
  keywords: [
    "direct mail Minneapolis",
    "standard direct mail",
    "targeted mailing services",
    "direct mail marketing",
    "custom postcards Minneapolis",
    "letter mailers Minnesota",
    "bulk mailing services",
    "mail marketing Minneapolis",
    "postal mail solutions",
    "MSE Printing direct mail",
  ],
  applicationName: "MSE Printing",
  category: "Direct Mail Services",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/standard-direct-mail",
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
    google: "ABCD1234xyz", // Replace with your Search Console verification string
  },
  openGraph: {
    title: "Standard Direct Mail | MSE Printing",
    description:
      "Targeted mailing solutions from MSE Printing—design, print, and deliver postcards, letters, and more with postal precision. Effective direct mail marketing for Minneapolis and beyond.",
    url: "https://www.mseprinting.com/standard-direct-mail",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/common-images/additional/standard_direct_mail_right.webp",
        width: 800,
        height: 630,
        alt: "MSE Printing - Standard Direct Mail Marketing Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Standard Direct Mail | MSE Printing",
    description:
      "Deliver marketing that works—custom direct mail, postcards, and letters sent with professional precision by MSE Printing.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/common-images/additional/standard_direct_mail_right.webp",
        alt: "Direct mail service from MSE Printing in Minneapolis",
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

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  colorScheme: "normal",
};

// Service Schema for Google Rich Results & Local SEO
const ServiceSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.mseprinting.com/standard-direct-mail#service",
    name: "Standard Direct Mail",
    description:
      "Professional direct mail services from MSE Printing—design, print, and delivery of postcards, letters, and mailers for targeted marketing.",
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
    serviceType: "Direct Mail Marketing",
    category: "Direct Mail Services",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Direct Mail Services",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/standard-direct-mail#postcards",
          itemOffered: {
            "@type": "Service",
            name: "Postcard Mailing",
            description:
              "Design, print, and delivery of postcards for targeted marketing.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/standard-direct-mail#letters",
          itemOffered: {
            "@type": "Service",
            name: "Letter Mailing",
            description:
              "Personalized letters sent to customer lists for outreach.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/standard-direct-mail#bulk-mail",
          itemOffered: {
            "@type": "Service",
            name: "Bulk Mail Services",
            description:
              "Cost-effective bulk mail campaigns with postal discounts.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/standard-direct-mail",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Standard Direct Mail",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "43",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

const StandardDirectMail = async () => {
  const data = await getCategoryPagesData("/standard-direct-mail");
  const pageData = data.StandardDirectMailPageData?.[0];

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

export default StandardDirectMail;
