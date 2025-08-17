import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";
import { getFooterData } from "db/GetFooterData";
import { buildServiceBreadcrumbs } from "lib/breadcrumbs";

/* ─────────────── SEO METADATA ─────────────── */
export const metadata: Metadata = {
  title: "Brochures & Collateral | MSE Print",
  description:
    "Discover professionally designed brochures and marketing collateral by MSE Printing. Effective, polished, and custom printed to elevate your brand.",
  keywords: [
    "brochure printing Minneapolis",
    "custom brochures Minnesota",
    "marketing collateral design",
    "business brochures",
    "sales materials printing",
    "folded brochures",
    "rack cards and flyers",
    "corporate brochures Minneapolis",
    "MSE Printing marketing materials",
    "high-quality collateral printing",
  ],
  applicationName: "MSE Printing",
  category: "Marketing Materials",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/brochures-collateral",
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
    google: "ABCD1234xyz", // Replace with your real Search Console verification string
  },

  openGraph: {
    title: "Brochures & Collateral | MSE Print",
    description:
      "High-quality brochures and marketing collateral designed to elevate your brand and engage your audience. Fast, affordable service in Minneapolis and beyond.",
    url: "https://www.mseprinting.com/brochures-collateral",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/home-images/card_brochures_collaterals.webp",
        width: 1200,
        height: 630,
        alt: "Professionally printed brochures and collateral from MSE Printing Minneapolis",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Brochures & Collateral | MSE Print",
    description:
      "Custom brochures, rack cards, and corporate collateral by MSE Printing. Perfect for branding and sales support.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/home-images/card_brochures_collaterals.webp",
        alt: "Brochures and marketing collateral printed by MSE Printing in Minneapolis",
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
    "@id": "https://www.mseprinting.com/brochures-collateral#service",
    name: "Brochures & Collateral",
    description:
      "Premium brochures, rack cards, and marketing collateral designed and printed by MSE Printing in Minneapolis. Effective sales and brand tools for businesses and organizations.",
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
    serviceType: "Brochure & Collateral Printing",
    category: "Marketing Materials",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Brochure & Collateral Options",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/brochures-collateral#brochures",
          itemOffered: {
            "@type": "Service",
            name: "Folded Brochures",
            description:
              "Tri-fold, Z-fold, and bi-fold brochures in various sizes.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/brochures-collateral#rack-cards",
          itemOffered: {
            "@type": "Service",
            name: "Rack Cards & Flyers",
            description:
              "Compact handouts perfect for displays, events, and point-of-sale promotions.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/brochures-collateral",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Brochures & Collateral",
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
const BrochuresCollateral = async () => {
  const data = await getCategoryPagesData("/brochures-collateral");
  const pageData = data.BrochuresCollateralPageData?.[0];
  const { footerContentData } = await getFooterData();
  const breadcrumbs = buildServiceBreadcrumbs(
    "brochures-collateral", // must match the DB `path`
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

export default BrochuresCollateral;
