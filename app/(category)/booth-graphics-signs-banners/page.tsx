import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

export const metadata: Metadata = {
  title: "Printing Minneapolis & USA | Custom Signs, Banners, Booth Graphics ",
  description:
    "Top-rated Minneapolis print shop for custom booth graphics, trade-show banners, business signs and large-format printing. Fast turnaround, nationwide shipping. Free quote: 763-542-8812.",
  keywords: [
    "printing services Minneapolis",
    "print shop Minneapolis",
    "custom printing Minneapolis",
    "large format printing",
    "trade show graphics Minneapolis",
    "banner printing Minneapolis",
    "custom signs Twin Cities",
    "booth graphics Minneapolis",
    "commercial printing services USA",
    "printing company Minnesota",
  ],
  applicationName: "MSE Printing",
  category: "Printing Services",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/booth-graphics-signs-banners",
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
    google: "ABCD1234xyz", // ← replace with your Search Console string
  },

  /* ─────────────── OPEN GRAPH ─────────────── */
  openGraph: {
    title: "Printing Minneapolis & USA | Custom Signs, Banners, Booth Graphics",
    description:
      "Professional booth graphics, banners and signage printed in Minneapolis-St. Paul with same-day service and UPS/FedEx nationwide delivery.",
    url: "https://www.mseprinting.com/booth-graphics-signs-banners", // ← matches canonical
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/common-images/booth_graphics_signs_banners.webp",
        width: 1200,
        height: 630,
        alt: "Technicians at MSE Printing producing large-format booth graphics in Minneapolis",
      },
      {
        url: "https://www.mseprinting.com/images/common-images/additional/booth_graphics_signs_banners_right.webp",
        width: 800,
        height: 600,
        alt: "MSE Printing sample of Custom Signs, Banners, Booth Graphics printing in Minneapolis, Minnesota",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Printing Minneapolis & USA | Custom Signs, Banners, Booth Graphics",
    description:
      "Minneapolis’ trusted partner for high-impact booth graphics, banners & signage since 2002.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/common-images/booth_graphics_signs_banners.webp",
        alt: "Large-format banner printed by MSE Printing in Minneapolis",
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

// 🔥 NEW: Service Schema Component (for specific services)
const ServiceSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.mseprinting.com/booth-graphics-signs-banners#service",
    name: "Booth Graphics, Signs & Banners",
    description:
      "Professional booth graphics, custom signs, and banners for trade shows, events, and business marketing. High-quality printing with fast turnaround in Minneapolis.",
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
      {
        "@type": "City",
        name: "Minneapolis",
      },
      {
        "@type": "State",
        name: "Minnesota",
      },
      {
        "@type": "Country",
        name: "United States",
      },
    ],
    serviceType: "Printing Services",
    category: "Commercial Printing",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Booth Graphics Services",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/booth-graphics-signs-banners#trade-show",
          itemOffered: {
            "@type": "Service", // ⬅️ changed
            name: "Trade Show Booth Graphics",
            description:
              "Custom designed booth graphics for trade shows and exhibitions",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/booth-graphics-signs-banners#signs",
          itemOffered: {
            "@type": "Service", // ⬅️ changed
            name: "Custom Business Signs",
            description: "Professional business signage and display signs",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/booth-graphics-signs-banners#banners",
          itemOffered: {
            "@type": "Service", // ⬅️ changed
            name: "Event Banners",
            description:
              "High-quality banners for events, promotions, and advertising",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/booth-graphics-signs-banners",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Custom Booth Graphics, Signs & Banners",
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

const BoothGraphicsSignsBanners = async () => {
  const data = await getCategoryPagesData("/booth-graphics-signs-banners");
  const pageData = data.BoothGraphicsSignsBannersPageData?.[0];

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

export default BoothGraphicsSignsBanners;
