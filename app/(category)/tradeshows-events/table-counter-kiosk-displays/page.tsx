import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";
import { getFooterData } from "db/GetFooterData";
import { buildServiceBreadcrumbs } from "lib/breadcrumbs";

// Fully corrected Metadata for SEO & Social Sharing (title < 70 chars)
export const metadata: Metadata = {
  title: "Table, Counter & Kiosk Display Solutions | MSE Printing",
  description:
    "Maximize visibility in compact spaces with custom tabletop, counter, and kiosk displays from MSE Printing. Branded mini signage, kiosk wraps, and more.",
  keywords: [
    "table displays",
    "countertop displays",
    "kiosk wraps",
    "mini signage Minneapolis",
    "compact display solutions",
    "custom event displays",
    "MSE Printing tabletop signs",
    "trade show kiosk graphics",
    "portable displays",
    "branded counter signs",
  ],
  applicationName: "MSE Printing",
  category: "Display Solutions",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical:
      "https://www.mseprinting.com/tradeshows-events/table-counter-kiosk-displays",
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
    title: "Table, Counter & Kiosk Display Solutions | MSE Printing",
    description:
      "Turn any surface into a standout promotional platform with branded mini signage, kiosk wraps, and compact display solutions from MSE Printing.",
    url: "https://www.mseprinting.com/tradeshows-events/table-counter-kiosk-displays",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/tradeshows-events-images/additional/table_counter_kiosk_displays_right.webp",
        width: 800,
        height: 630,
        alt: "Branded table, counter, and kiosk displays from MSE Printing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Table, Counter & Kiosk Display Solutions | MSE Printing",
    description:
      "Branded mini signage, kiosk wraps, and compact displays for events—maximize visibility in small spaces with MSE Printing.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/tradeshows-events-images/additional/table_counter_kiosk_displays_right.webp",
        alt: "Table and kiosk display by MSE Printing, Minneapolis",
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

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  colorScheme: "normal",
};

// Service Schema for Google Rich Results & Local SEO
const ServiceSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id":
      "https://www.mseprinting.com/tradeshows-events/table-counter-kiosk-displays#service",
    name: "Table, Counter & Kiosk Displays",
    description:
      "Custom tabletop, counter, and kiosk display solutions—branded mini signage, wraps, and portable displays for events, retail, and trade shows by MSE Printing in Minneapolis, MN.",
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
    serviceType: "Tabletop and Kiosk Display Solutions",
    category: "Compact Displays",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Display Solutions",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/tradeshows-events/table-counter-kiosk-displays#tabletop-signs",
          itemOffered: {
            "@type": "Service",
            name: "Tabletop Signs",
            description:
              "Custom tabletop displays for events, counters, and trade shows.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/tradeshows-events/table-counter-kiosk-displays#kiosk-wraps",
          itemOffered: {
            "@type": "Service",
            name: "Kiosk Wraps",
            description: "Branded kiosk wraps for compact promotional spaces.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/tradeshows-events/table-counter-kiosk-displays#mini-signage",
          itemOffered: {
            "@type": "Service",
            name: "Mini Signage",
            description: "Portable mini signage for branding and promotions.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/tradeshows-events/table-counter-kiosk-displays",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Table, Counter & Kiosk Displays",
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

const TableCounterKioskDisplays = async () => {
  const data = await getCategoryPagesData(
    "/tradeshows-events/table-counter-kiosk-displays"
  );
  const pageData = data.TableCounterKioskDisplaysPageData?.[0];
  const { footerContentData } = await getFooterData();
  const breadcrumbs = buildServiceBreadcrumbs(
    "tradeshows-events/table-counter-kiosk-displays", // must match the DB `path`
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

export default TableCounterKioskDisplays;
