import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

/* ─────────────── SEO METADATA ─────────────── */
export const metadata: Metadata = {
  title: "Banners & Posters | MSE Print",
  description:
    "Explore premium banners and posters by MSE Print for impactful advertising and strong brand presence. Fast turnaround available in Minneapolis & nationwide.",
  keywords: [
    "banner printing Minneapolis",
    "custom banners Minneapolis",
    "poster printing",
    "large format posters",
    "marketing banners",
    "promotional posters",
    "retail posters Minneapolis",
    "outdoor banners Minnesota",
    "event signage",
    "MSE Printing banners",
  ],
  applicationName: "MSE Printing",
  category: "Large Format Printing",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/banners-posters",
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
    google: "ABCD1234xyz", // Replace with your Search Console verification
  },

  openGraph: {
    title: "Banners & Posters | MSE Print",
    description:
      "High-quality banners and posters that enhance visibility and promote your brand effectively. Ideal for businesses, events, and campaigns.",
    url: "https://www.mseprinting.com/banners-posters",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/home-images/card_banners_posters.webp",
        width: 1200,
        height: 630,
        alt: "MSE Printing technician producing custom banners and posters in Minneapolis",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Banners & Posters | MSE Print",
    description:
      "Custom printed banners and posters by MSE Printing to maximize brand visibility. Same-day service available.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/home-images/additional/banners_posters_right.webp",
        alt: "Large-format poster and banner printing by MSE Printing in Minnesota",
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
    "@id": "https://www.mseprinting.com/banners-posters#service",
    name: "Banners & Posters",
    description:
      "Custom printed banners and posters in Minneapolis for marketing, retail, events, and promotions. High-impact visuals and durable materials by MSE Printing.",
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
    serviceType: "Large Format Printing",
    category: "Banner and Poster Printing",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Banner and Poster Printing Options",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/banners-posters#vinyl",
          itemOffered: {
            "@type": "Service",
            name: "Vinyl Banners",
            description:
              "Durable outdoor banners with eyelets or pole pockets.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/banners-posters#event-posters",
          itemOffered: {
            "@type": "Service",
            name: "Event Posters",
            description:
              "Custom posters for retail, promotions, or informational displays.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/banners-posters",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Banners & Posters",
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
const BannersPosters = async () => {
  const data = await getCategoryPagesData("/banners-posters");
  const pageData = data.BannersPostersPageData?.[0];

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

export default BannersPosters;
