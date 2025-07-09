import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

// ---------- SEO & Social Metadata ----------
export const metadata: Metadata = {
  title:
    "Postcards & Direct Mailers Minneapolis | Print Campaigns | MSE Printing",
  description:
    "Reach customers directly with powerful postcard and mail campaigns printed by MSE Printing. High-quality print, fast turnaround, and expert targeting for Minneapolis & nationwide.",
  keywords: [
    "postcard printing Minneapolis",
    "direct mailers Minnesota",
    "direct mail campaigns",
    "custom postcards printing",
    "mail marketing Minneapolis",
    "MSE Printing direct mail",
    "bulk mail postcards",
    "personalized mailers",
    "business postcard printing",
    "targeted mail marketing",
  ],
  applicationName: "MSE Printing",
  category: "Postcards & Direct Mailers",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/postcards-direct-mailers",
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
    title:
      "Postcards & Direct Mailers Minneapolis | Print Campaigns | MSE Printing",
    description:
      "High-quality postcard and direct mail printing to deliver your message with impact, personalization, and professionalism.",
    url: "https://www.mseprinting.com/postcards-direct-mailers",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/common-images/additional/postcards_dirrect_mailers_right.webp",
        width: 1200,
        height: 630,
        alt: "Postcards and direct mailers printed by MSE Printing in Minneapolis",
      },
      {
        url: "https://www.mseprinting.com/images/common-images/additional/postcards_dirrect_mailers_sample.webp",
        width: 800,
        height: 600,
        alt: "Sample direct mail and postcard campaign by MSE Printing, Minnesota",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Postcards & Direct Mailers Minneapolis | Print Campaigns | MSE Printing",
    description:
      "Send impactful postcards and direct mailers with professional printing and mailing by MSE Printing.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/common-images/additional/postcards_dirrect_mailers_right.webp",
        alt: "Direct mail and postcard printing by MSE Printing, Minneapolis",
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
    "@id": "https://www.mseprinting.com/postcards-direct-mailers#service",
    name: "Postcards & Direct Mailers",
    description:
      "Custom postcards and direct mailers by MSE Printing. Professional printing, fast mailing, and campaign targeting for Minneapolis and nationwide businesses.",
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
    serviceType: "Postcards & Direct Mailers",
    category: "Print Marketing",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Postcards & Direct Mailers Services",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/postcards-direct-mailers#postcard-printing",
          itemOffered: {
            "@type": "Service",
            name: "Postcard Printing",
            description:
              "Custom postcards for mail campaigns, event invitations, and promotions.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/postcards-direct-mailers#direct-mail",
          itemOffered: {
            "@type": "Service",
            name: "Direct Mail Services",
            description:
              "Design, printing, and mailing of targeted direct mailers to grow your customer base.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/postcards-direct-mailers#personalization",
          itemOffered: {
            "@type": "Service",
            name: "Personalized Mailing",
            description:
              "Personalization and data management for more effective mail marketing.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/postcards-direct-mailers",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Postcards & Direct Mailers",
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
const PostcardsDirectMailers = async () => {
  const data = await getCategoryPagesData("/postcards-direct-mailers");
  const pageData = data.PostcardsDirectMailersPageData?.[0];

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

export default PostcardsDirectMailers;
