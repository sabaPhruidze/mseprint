import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";
import { getFooterData } from "db/GetFooterData";
import { buildServiceBreadcrumbs } from "lib/breadcrumbs";

/* ─────────────── SEO METADATA ─────────────── */
export const metadata: Metadata = {
  title: "Political Printing | MSE Print",
  description:
    "Drive voter engagement with high-impact political printing from MSE Printing. Campaign materials that inform, inspire, and influence.",
  keywords: [
    "political printing services",
    "campaign flyers and mailers",
    "voter outreach printing",
    "yard signs for elections",
    "door hangers for campaigns",
    "political postcard printing",
    "election signage Minneapolis",
    "political campaign marketing",
    "custom print for political campaigns",
    "MSE Printing political services",
  ],
  applicationName: "MSE Printing",
  category: "Industry-Specific Printing",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/industry-specific/political",
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
    title: "Political Printing | MSE Print",
    description:
      "MSE Printing provides fast, targeted print materials that help campaigns gain visibility, build trust, and win votes.",
    url: "https://www.mseprinting.com/industry-specific/political",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/industry-specific-images/additional/political_right.webp",
        width: 1200,
        height: 630,
        alt: "Political campaign materials printed by MSE Printing",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Political Printing | MSE Print",
    description:
      "Campaign flyers, yard signs, mailers, and more—printed quickly and accurately to help you reach voters effectively.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/industry-specific-images/additional/political_right.webp",
        alt: "Election and campaign printing by MSE Printing",
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
    "@id": "https://www.mseprinting.com/industry-specific/political#service",
    name: "Political Printing",
    description:
      "Election and political campaign printing solutions including flyers, mailers, door hangers, signage, and promotional materials. Fast turnaround and targeted delivery.",
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
    serviceType: "Political Campaign Printing",
    category: "Election Materials",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Political Print Materials",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/industry-specific/political#flyers",
          itemOffered: {
            "@type": "Service",
            name: "Campaign Flyers & Postcards",
            description:
              "Engaging, full-color flyers and postcards designed for outreach and awareness.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/industry-specific/political#yardsigns",
          itemOffered: {
            "@type": "Service",
            name: "Yard Signs",
            description:
              "Durable yard signs with campaign branding to increase name recognition.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/industry-specific/political#doorhangers",
          itemOffered: {
            "@type": "Service",
            name: "Door Hangers",
            description:
              "Targeted neighborhood marketing tools printed and ready for distribution.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/industry-specific/political",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Political Printing",
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
const Political = async () => {
  const data = await getCategoryPagesData("/industry-specific/political");
  const pageData = data.PoliticalPageData?.[0];
  const { footerContentData } = await getFooterData();
  const breadcrumbs = buildServiceBreadcrumbs(
    "industry-specific/political", // must match the DB `path`
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

export default Political;
