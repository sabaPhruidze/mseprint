import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";
import { getFooterData } from "db/GetFooterData";
import { buildServiceBreadcrumbs } from "lib/breadcrumbs";

// ---------- SEO & Social Metadata ----------
export const metadata: Metadata = {
  title:
    "Custom Marketing & Sales Kits Minneapolis | Brand Outreach | MSE Printing",
  description:
    "Custom-built marketing and sales kits to empower your outreach strategy by MSE Printing. Engage clients and boost brand recognition in Minneapolis and nationwide.",
  keywords: [
    "marketing kits Minneapolis",
    "sales kits Minnesota",
    "custom sales kits",
    "marketing collateral printing",
    "branded sales materials",
    "outreach kits printing Minneapolis",
    "MSE Printing sales kits",
    "presentation kits Minnesota",
    "brand kits Minneapolis",
    "trade show sales kits",
  ],
  applicationName: "MSE Printing",
  category: "Marketing & Sales Kits",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/marketing-sales-kits",
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
    title:
      "Custom Marketing & Sales Kits Minneapolis | Brand Outreach | MSE Printing",
    description:
      "Boost engagement and brand consistency with custom-crafted sales kits featuring print and digital tools.",
    url: "https://www.mseprinting.com/marketing-sales-kits",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/common-images/additional/marketing_sales_kits_right.webp",
        width: 1200,
        height: 630,
        alt: "Custom marketing and sales kits for brand engagement by MSE Printing in Minneapolis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Custom Marketing & Sales Kits Minneapolis | Brand Outreach | MSE Printing",
    description:
      "Professionally designed sales kits for events, client outreach, and trade shows. Print and digital solutions for every business.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/common-images/additional/marketing_sales_kits_right.webp",
        alt: "Branded marketing & sales kit by MSE Printing, Minneapolis",
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
    "@id": "https://www.mseprinting.com/marketing-sales-kits#service",
    name: "Custom Marketing & Sales Kits",
    description:
      "Marketing and sales kits by MSE Printing. Custom printed folders, inserts, promo items, and digital tools for events, trade shows, and client engagement in Minneapolis and nationwide.",
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
    serviceType: "Marketing & Sales Kits",
    category: "Sales Enablement",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Marketing & Sales Kit Services",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/marketing-sales-kits#folder-kits",
          itemOffered: {
            "@type": "Service",
            name: "Folder & Presentation Kits",
            description:
              "Custom-branded folders with inserts, product sheets, and business cards for professional presentations.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/marketing-sales-kits#promo-items",
          itemOffered: {
            "@type": "Service",
            name: "Promotional Item Kits",
            description:
              "Sales kits including branded promo products to support marketing campaigns and events.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/marketing-sales-kits#digital-tools",
          itemOffered: {
            "@type": "Service",
            name: "Digital & Print Integration",
            description:
              "Kits featuring both printed and digital content for seamless multi-channel outreach.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/marketing-sales-kits",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Custom Marketing & Sales Kits",
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
const MarketingSalesKits = async () => {
  const data = await getCategoryPagesData("/marketing-sales-kits");
  const pageData = data.MarketingSalesKitsPageData?.[0];
  const { footerContentData } = await getFooterData();
  const breadcrumbs = buildServiceBreadcrumbs(
    "marketing-sales-kits", // must match the DB `path`
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

export default MarketingSalesKits;
