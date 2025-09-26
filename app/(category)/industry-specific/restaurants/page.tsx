import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";
import { getFooterData } from "db/GetFooterData";
import { buildServiceBreadcrumbs } from "lib/breadcrumbs";

/* ─────────────── SEO METADATA ─────────────── */
export const metadata: Metadata = {
  title: "Restaurant Printing | MSE Print",
  description:
    "Menus, marketing, and more—MSE Printing powers your restaurant’s brand with professional print services that impress and endure.",
  keywords: [
    "restaurant printing Minneapolis",
    "menu printing Minneapolis",
    "restaurant menu printing Minneapolis",
    "laminated menus Minneapolis",
    "waterproof synthetic menus",
    "takeout menu printing Minneapolis",
    "QR code menu printing",
    "table tent printing Minneapolis",
    "restaurant signage Minneapolis",
    "window clings and decals Minneapolis",
    "door hanger printing for restaurants",
    "branded food packaging Minneapolis",
    "food labels and stickers Minneapolis",
    "tamper-evident labels Minneapolis",
    "menu boards and inserts Minneapolis",
    "catering and bar menus Minneapolis",
    "Twin Cities restaurant printing",
    "MSE Printing restaurant solutions",
  ],
  applicationName: "MSE Printing",
  category: "Industry-Specific Printing",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/industry-specific/restaurants",
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
    title: "Restaurant Printing | MSE Print",
    description:
      "From laminated dine-in menus to branded packaging and takeout materials, MSE Printing helps restaurants stand out and stay consistent.",
    url: "https://www.mseprinting.com/industry-specific/restaurants",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/industry-specific-images/additional/restaurant_right.webp",
        width: 1200,
        height: 630,
        alt: "MSE Printing services for restaurants including menus and packaging",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Restaurant Printing | MSE Print",
    description:
      "High-quality print solutions for restaurants: menus, signage, takeout materials, and branded packaging from MSE Printing.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/industry-specific-images/additional/restaurant_right.webp",
        alt: "Custom restaurant menus and marketing materials printed by MSE Printing",
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
    "@id": "https://www.mseprinting.com/industry-specific/restaurants#service",
    name: "Restaurant Printing",
    description:
      "Comprehensive restaurant printing services including dine-in menus, takeout menus, signage, branded packaging, and promotional materials.",
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
    serviceType: "Restaurant Printing",
    category: "Food & Beverage Industry Print",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Restaurant Print Materials",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/industry-specific/restaurants#menus",
          itemOffered: {
            "@type": "Service",
            name: "Menu Printing",
            description:
              "Laminated, takeout, or folded menus professionally designed and printed.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/industry-specific/restaurants#packaging",
          itemOffered: {
            "@type": "Service",
            name: "Branded Packaging",
            description:
              "Custom-printed food packaging including bags, boxes, and labels.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/industry-specific/restaurants#signage",
          itemOffered: {
            "@type": "Service",
            name: "Restaurant Signage",
            description:
              "Window graphics, banners, and table signs that support your brand and ambiance.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/industry-specific/restaurants",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Restaurant Printing",
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
const Restaurants = async () => {
  const data = await getCategoryPagesData("/industry-specific/restaurants");
  const pageData = data.RestaurantsPageData?.[0];
  const { footerContentData } = await getFooterData();
  const breadcrumbs = buildServiceBreadcrumbs(
    "industry-specific/restaurants", // must match the DB `path`
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

export default Restaurants;
