import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";
import { getFooterData } from "db/GetFooterData";
import { buildServiceBreadcrumbs } from "lib/breadcrumbs";

// Fully corrected Metadata for SEO & Social Sharing (title < 70 chars)
export const metadata: Metadata = {
  title: "Window, Wall & Floor Graphics | MSE Printing",
  description:
    "Transform your space with custom window, wall, and floor graphics from MSE Printing. Durable, vibrant, and professional designs to elevate your brand.",
  keywords: [
    // CORE LOCAL INTENT
    "window graphics Minneapolis",
    "wall graphics Minneapolis",
    "floor graphics Minneapolis",
    "storefront window decals Minneapolis",
    "office wall graphics Minneapolis",
    "retail window signage Minneapolis",
    "floor decals Minneapolis",
    "window graphics near me",

    // PRODUCT/FEATURE VARIANTS
    "perforated window film Minneapolis",
    "one-way vision window graphics",
    "frosted window graphics Minneapolis",
    "etched glass vinyl Minneapolis",
    "privacy window film Minneapolis",
    "window perf Minneapolis",
    "removable window decals",
    "static cling window graphics",

    // WALL SOLUTIONS
    "custom wall murals Minneapolis",
    "wall wraps Minneapolis",
    "textured wall vinyl brick concrete",
    "3M wall graphics Minneapolis",
    "interior branded wall graphics",

    // FLOOR SOLUTIONS
    "slip-resistant floor graphics",
    "laminated floor decals",
    "wayfinding floor decals",
    "indoor floor signs Minneapolis",

    // GENERAL/STATE
    "wall graphics Minnesota",
    "storefront graphics Minnesota",
    "indoor graphics printing",
  ],
  applicationName: "MSE Printing",
  category: "Window, Wall & Floor Graphics",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/window-wall-floor-graphics",
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
    title: "Window, Wall & Floor Graphics | MSE Printing",
    description:
      "Custom printed graphics for windows, walls, and floors. Enhance your branding and customer experience with durable, vibrant designs from MSE Printing.",
    url: "https://www.mseprinting.com/window-wall-floor-graphics",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/common-images/additional/window_wall_floor_graphics_right.webp",
        width: 800,
        height: 630,
        alt: "Vibrant window, wall, and floor graphics by MSE Printing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Window, Wall & Floor Graphics | MSE Printing",
    description:
      "Upgrade your business space with custom window, wall, and floor graphics from MSE Printing, Minneapolis.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/common-images/additional/window_wall_floor_graphics_right.webp",
        alt: "Custom window graphics by MSE Printing, Minneapolis",
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
    "@id": "https://www.mseprinting.com/window-wall-floor-graphics#service",
    name: "Window, Wall & Floor Graphics",
    description:
      "Durable, vibrant graphics for windows, walls, and floors. Custom business decals, murals, and floor signs by MSE Printing in Minneapolis, MN.",
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
    serviceType: [
      "Window Graphics",
      "Storefront Window Decals",
      "Perforated Window Film",
      "Frosted / Etched Glass Vinyl",
      "Privacy Window Film",
      "Wall Murals",
      "Wall Wraps",
      "Textured Wall Vinyl (Brick/Concrete)",
      "Floor Graphics",
      "Slip-Resistant Floor Decals",
      "Wayfinding Floor Decals",
    ],
    knowsAbout: [
      "perforated window film Minneapolis",
      "frosted window graphics Minneapolis",
      "etched glass vinyl Minneapolis",
      "privacy window film Minneapolis",
      "one-way vision window graphics",
      "custom wall murals Minneapolis",
      "wall wraps Minneapolis",
      "3M wall graphics",
      "slip-resistant laminated floor decals",
      "wayfinding floor graphics",
    ],
    category: "Graphics & Signage",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Window, Wall & Floor Graphics",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/window-wall-floor-graphics#window-decals",
          itemOffered: {
            "@type": "Service",
            name: "Window Decals",
            description: "Custom window decals and storefront graphics.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/window-wall-floor-graphics#wall-murals",
          itemOffered: {
            "@type": "Service",
            name: "Wall Murals",
            description:
              "Branded wall murals and custom wall art for businesses.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/window-wall-floor-graphics#floor-graphics",
          itemOffered: {
            "@type": "Service",
            name: "Floor Graphics",
            description: "Durable floor decals and directional signage.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/window-wall-floor-graphics",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Window, Wall & Floor Graphics",
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

const WindowWallFloorGraphics = async () => {
  const data = await getCategoryPagesData("/window-wall-floor-graphics");
  const pageData = data.WindowWallFloorGraphicsPageData?.[0];
  const { footerContentData } = await getFooterData();
  const breadcrumbs = buildServiceBreadcrumbs(
    "window-wall-floor-graphics", // must match the DB `path`
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

export default WindowWallFloorGraphics;
