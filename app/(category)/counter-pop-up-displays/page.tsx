import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";
import { getFooterData } from "db/GetFooterData";
import { buildServiceBreadcrumbs } from "lib/breadcrumbs";

/* ─────────────── SEO METADATA ─────────────── */
export const metadata: Metadata = {
  title: "Counter & Pop-up Displays | MSE Printing",
  description:
    "Create instant impact with portable counter and pop-up displays from MSE Printing. Ideal for trade shows, events, and retail environments.",
  keywords: [
    "counter displays Minneapolis",
    "pop-up displays for events",
    "trade show displays",
    "portable display printing",
    "custom event signage",
    "MSE Printing displays",
    "event booth graphics",
    "collapsible counter graphics",
    "retail pop-up stands",
    "marketing display printing",
  ],
  applicationName: "MSE Printing",
  category: "Trade Show & Display Graphics",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/counter-pop-up-displays",
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
    title: "Counter & Pop-up Displays | MSE Printing",
    description:
      "Custom-designed counter and pop-up displays to make your brand shine at events, trade shows, or in-store promotions. Easy to transport, fast to set up.",
    url: "https://www.mseprinting.com/counter-pop-up-displays",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/common-images/counter_pop_up_displays.webp",
        width: 1200,
        height: 630,
        alt: "Custom printed counter and pop-up display from MSE Printing",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Counter & Pop-up Displays | MSE Printing",
    description:
      "Portable displays by MSE Printing for events, trade shows, and retail marketing. Make a big impact on a small footprint.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/common-images/counter_pop_up_displays.webp",
        alt: "Pop-up display stand created by MSE Printing for promotional use",
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
    "@id": "https://www.mseprinting.com/counter-pop-up-displays#service",
    name: "Counter & Pop-up Displays",
    description:
      "Portable and visually striking counter and pop-up displays designed and printed by MSE Printing. Perfect for retail spaces, trade shows, and promotional events.",
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
    serviceType: "Display Graphics",
    category: "Event Display Printing",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Display Options",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/counter-pop-up-displays#counter",
          itemOffered: {
            "@type": "Service",
            name: "Counter Displays",
            description:
              "Custom branded counters for promotional events and product showcases.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/counter-pop-up-displays#pop-up",
          itemOffered: {
            "@type": "Service",
            name: "Pop-up Displays",
            description:
              "Collapsible, transportable displays that set up in seconds for any venue.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/counter-pop-up-displays",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Counter & Pop-up Displays",
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
const CounterPopUpDisplays = async () => {
  const data = await getCategoryPagesData("/counter-pop-up-displays");
  const pageData = data.CounterPopUpDisplaysPageData?.[0];
  const { footerContentData } = await getFooterData();
  const breadcrumbs = buildServiceBreadcrumbs(
    "counter-pop-up-displays", // must match the DB `path`
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

export default CounterPopUpDisplays;
