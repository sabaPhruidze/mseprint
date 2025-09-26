import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";
import { getFooterData } from "db/GetFooterData";
import { buildServiceBreadcrumbs } from "lib/breadcrumbs";

/* ─────────────── SEO METADATA ─────────────── */
export const metadata: Metadata = {
  title: "Education Printing | MSE Printing",
  description:
    "Enhance learning, promote events, and streamline school operations with professional education printing from MSE Printing.",
  keywords: [
    "education printing Minneapolis",
    "school printing Minneapolis MN",
    "university printing Twin Cities",
    "K-12 printing Minnesota",
    "campus printing services Minneapolis",
    "school newsletters printing",
    "brochures for schools",
    "classroom posters printing",
    "workbook printing Minneapolis",
    "course packet printing",
    "student handbooks printing",
    "spiral binding workbooks",
    "saddle-stitched booklets",
    "perfect bound catalogs",
    "graduation programs printing",
    "commencement program printing",
    "theater playbills school",
    "athletic banners Minneapolis",
    "campus signage printing",
    "ADA & wayfinding signs school",
    "door and room signs campus",
    "window graphics school",
    "wall graphics school",
    "floor graphics campus",
    "event posters school",
    "open house flyers printing",
    "fundraiser materials printing",
    "alumni newsletters printing",
    "direct mail for schools",
    "EDDM school mailers Minneapolis",
    "targeted direct mail education",
    "variable data printing postcards",
    "mailing services Minneapolis schools",
    "color copies Minneapolis",
    "black and white copies Minneapolis",
    "lamination service Minneapolis",
    "booklet printing Minneapolis",
    "banner printing for schools",
    "education printing St. Paul MN",
    "school printing Bloomington MN",
    "school printing Edina MN",
    "education printing Plymouth MN",
    "education printing Maple Grove",
    "school printing Brooklyn Park MN",
    "education printing St. Louis Park",
    "school printing Eagan MN",
    "education printing Woodbury MN",
    "education printing Roseville MN",
    "Minnesota school printing services",
    "Twin Cities education printing",
    "Minneapolis campus print shop",
    "fast school printing Minneapolis",
    "same-day school printing Minneapolis",
    "FERPA-friendly printing services",
  ],
  applicationName: "MSE Printing",
  category: "Industry-Specific Printing",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/industry-specific/education",
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
    title: "Education Printing | MSE Printing",
    description:
      "From classrooms to campuses—MSE Printing delivers quality printed materials that empower student success and strengthen school identity.",
    url: "https://www.mseprinting.com/industry-specific/education",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/industry-specific-images/additional/education_right.webp",
        width: 1200,
        height: 630,
        alt: "Educational print solutions by MSE Printing",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Education Printing | MSE Printing",
    description:
      "Trusted by schools and universities—MSE Printing helps institutions communicate and educate through professionally printed materials.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/industry-specific-images/additional/education_right.webp",
        alt: "Printed school and university materials by MSE Printing",
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
    "@id": "https://www.mseprinting.com/industry-specific/education#service",
    name: "Education Printing",
    description:
      "Printing services for schools, universities, and educational institutions. Includes newsletters, campus signage, brochures, and classroom materials.",
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
    serviceType: "Education Printing",
    category: "Industry Printing",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Education Print Materials",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/industry-specific/education#newsletters",
          itemOffered: {
            "@type": "Service",
            name: "School Newsletters",
            description:
              "Custom newsletters for internal communication and community engagement.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/industry-specific/education#signage",
          itemOffered: {
            "@type": "Service",
            name: "Campus Signage",
            description:
              "Wayfinding and branding signage for schools and universities.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/industry-specific/education",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Education Printing",
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
const Education = async () => {
  const data = await getCategoryPagesData("/industry-specific/education");
  const pageData = data.EducationPageData?.[0];
  const { footerContentData } = await getFooterData();
  const breadcrumbs = buildServiceBreadcrumbs(
    "industry-specific/education", // must match the DB `path`
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

export default Education;
