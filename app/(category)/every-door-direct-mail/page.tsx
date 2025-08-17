import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";
import { getFooterData } from "db/GetFooterData";
import { buildServiceBreadcrumbs } from "lib/breadcrumbs";

/* ─────────────── SEO METADATA ─────────────── */
export const metadata: Metadata = {
  title: "Every Door Direct Mail® | MSE Print",
  description:
    "Launch a high-visibility local campaign with Every Door Direct Mail® from MSE Printing—no list required. Target by zip code, routes, or neighborhoods.",
  keywords: [
    "EDDM Minneapolis",
    "Every Door Direct Mail",
    "no list direct mail campaign",
    "local mail marketing",
    "ZIP code targeting mail",
    "retail direct mail",
    "affordable direct mail USA",
    "USPS EDDM partner Minneapolis",
    "business postcard mailing",
    "saturation mailing service",
  ],
  applicationName: "MSE Printing",
  category: "Direct Mail Services",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/every-door-direct-mail",
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
    google: "ABCD1234xyz", // Replace with actual Search Console token
  },

  openGraph: {
    title: "Every Door Direct Mail® | MSE Print",
    description:
      "Reach every mailbox in your neighborhood with EDDM services from MSE Printing—affordable, efficient, and impactful. Ideal for local businesses and promotions.",
    url: "https://www.mseprinting.com/every-door-direct-mail",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/common-images/additional/every_door_direct_mail_right.webp",
        width: 1200,
        height: 630,
        alt: "Every Door Direct Mail print campaign by MSE Printing",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Every Door Direct Mail® | MSE Print",
    description:
      "EDDM service by MSE Printing—no mailing list needed. Target neighborhoods with custom postcards and flyers.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/common-images/additional/every_door_direct_mail_right.webp",
        alt: "Neighborhood-wide direct mail flyers by MSE Printing",
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
    "@id": "https://www.mseprinting.com/every-door-direct-mail#service",
    name: "Every Door Direct Mail®",
    description:
      "Every Door Direct Mail® (EDDM) services by MSE Printing—target local households without a mailing list. USPS-compliant design, print, bundling, and delivery.",
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
    serviceType: "Every Door Direct Mail®",
    category: "Local Mail Marketing",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "EDDM Options",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/every-door-direct-mail#design",
          itemOffered: {
            "@type": "Service",
            name: "EDDM Postcard Design",
            description:
              "Create engaging, USPS-compliant postcards for neighborhood saturation campaigns.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/every-door-direct-mail#distribution",
          itemOffered: {
            "@type": "Service",
            name: "EDDM Printing & Distribution",
            description:
              "Print, bundle, and deliver your EDDM postcards with full USPS coordination.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/every-door-direct-mail",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Every Door Direct Mail®",
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
const EveryDoorDirectMail = async () => {
  const data = await getCategoryPagesData("/every-door-direct-mail");
  const pageData = data.EveryDoorDirectMailPageData?.[0];
  const { footerContentData } = await getFooterData();
  const breadcrumbs = buildServiceBreadcrumbs(
    "every-door-direct-mail", // must match the DB `path`
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
        breadcrumbs={breadcrumbs}
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

export default EveryDoorDirectMail;
