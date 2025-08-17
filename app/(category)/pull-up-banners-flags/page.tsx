import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

// ---------- SEO & Social Metadata ----------
export const metadata: Metadata = {
  title: "Pull-Up Banners & Flags | Custom Displays | MSE Printing",
  description:
    "High-quality, portable pull-up banners and flags designed to grab attention and elevate your brand visibility. Durable, vibrant, custom printed in Minneapolis & nationwide.",
  keywords: [
    "pull-up banners Minneapolis",
    "custom flags printing",
    "event banners Minnesota",
    "portable banner stands",
    "MSE Printing pull-up banners",
    "branded flags Minneapolis",
    "storefront display banners",
    "trade show banners Minnesota",
    "promotional flags printing",
    "durable pull-up banners",
  ],
  applicationName: "MSE Printing",
  category: "Pull-Up Banners & Flags",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/pull-up-banners-flags",
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
    title: "Pull-Up Banners & Flags | Custom Displays | MSE Printing",
    description:
      "Durable and vibrant pull-up banners and flags for events, promotions, and storefronts. Custom printed by MSE Printing.",
    url: "https://www.mseprinting.com/pull-up-banners-flags",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/common-images/additional/pull_up_banners_flags_right.webp",
        width: 800,
        height: 630,
        alt: "Custom pull-up banners and flags by MSE Printing in Minneapolis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pull-Up Banners & Flags | Custom Displays | MSE Printing",
    description:
      "Order durable, vibrant pull-up banners and flags for events or promotions from MSE Printing.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/common-images/additional/pull_up_banners_flags_right.webp",
        alt: "Pull-up banners and flags by MSE Printing, Minneapolis",
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
    "@id": "https://www.mseprinting.com/pull-up-banners-flags#service",
    name: "Pull-Up Banners & Flags",
    description:
      "Custom pull-up banners and flags by MSE Printing. Durable, portable, and vibrant solutions for events, promotions, and storefronts in Minneapolis and nationwide.",
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
    serviceType: "Pull-Up Banners & Flags",
    category: "Print Services",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Pull-Up Banner & Flag Services",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/pull-up-banners-flags#pull-up-banners",
          itemOffered: {
            "@type": "Service",
            name: "Pull-Up Banners",
            description:
              "Portable banners for trade shows, events, and promotions.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/pull-up-banners-flags#flags",
          itemOffered: {
            "@type": "Service",
            name: "Custom Flags",
            description:
              "Vibrant, durable flags for storefronts, events, and outdoor advertising.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/pull-up-banners-flags#design-services",
          itemOffered: {
            "@type": "Service",
            name: "Design Services",
            description:
              "Professional design support for custom banners and flags.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/pull-up-banners-flags",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Pull-Up Banners & Flags",
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
const PullUpBannersFlags = async () => {
  const data = await getCategoryPagesData("/pull-up-banners-flags");
  const pageData = data.PullUpBannersFlagsPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return (
    <>
      <ServiceSchema />
      <PageStructure
        pageData={pageData}
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

export default PullUpBannersFlags;
