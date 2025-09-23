import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";
import { getFooterData } from "db/GetFooterData";
import { buildServiceBreadcrumbs } from "lib/breadcrumbs";

/* ─────────────── SEO METADATA ─────────────── */
export const metadata: Metadata = {
  title: "Real Estate Printing | MSE Print",
  description:
    "Sell faster and market smarter with professional real estate printing services from MSE Printing. Stand out with signs, brochures, folders, and more.",
  keywords: [
    "real estate printing",
    "property brochure printing",
    "open house signage",
    "realtor business cards",
    "real estate folders",
    "real estate signs",
    "MLS listing print materials",
    "MSE Printing real estate marketing",
    "property flyer design",
    "real estate agent printing services",
  ],
  applicationName: "MSE Printing",
  category: "Industry-Specific Printing",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/industry-specific/real-estate",
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
    title: "Real Estate Printing | MSE Print",
    description:
      "From signs and brochures to business cards and folders—MSE Printing provides professional materials to elevate your real estate brand.",
    url: "https://www.mseprinting.com/industry-specific/real-estate",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/industry-specific-images/additional/real_estate_right.webp",
        width: 1200,
        height: 630,
        alt: "Real estate signs, brochures, and marketing materials by MSE Printing",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Real Estate Printing | MSE Print",
    description:
      "Boost property visibility and agent branding with professional real estate print services from MSE Printing.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/industry-specific-images/additional/real_estate_right.webp",
        alt: "Custom real estate marketing collateral from MSE Printing",
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
    "@id": "https://www.mseprinting.com/industry-specific/real-estate#service",
    name: "Real Estate Printing",
    description:
      "Professional printing solutions for real estate agents and brokerages, including property brochures, yard signs, business cards, and presentation folders.",
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
    serviceType: "Real Estate Marketing Materials",
    category: "Print for Real Estate",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Real Estate Print Products",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/industry-specific/real-estate#brochures",
          itemOffered: {
            "@type": "Service",
            name: "Property Brochures",
            description:
              "High-quality, professionally designed brochures to highlight property features.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/industry-specific/real-estate#yardsigns",
          itemOffered: {
            "@type": "Service",
            name: "Real Estate Signs",
            description:
              "Durable signage for property listings and open house promotions.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/industry-specific/real-estate#folders",
          itemOffered: {
            "@type": "Service",
            name: "Presentation Folders",
            description:
              "Custom-branded folders to keep documents organized and client-ready.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/industry-specific/real-estate",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Real Estate Printing",
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
const RealEstate = async () => {
  const data = await getCategoryPagesData("/industry-specific/real-estate");
  const pageData = data.RealEstatePageData?.[0];
  const { footerContentData } = await getFooterData();
  const breadcrumbs = buildServiceBreadcrumbs(
    "industry-specific/real-estate", // must match the DB `path`
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

export default RealEstate;
