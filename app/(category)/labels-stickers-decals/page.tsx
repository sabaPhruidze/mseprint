import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";
import { getFooterData } from "db/GetFooterData";
import { buildServiceBreadcrumbs } from "lib/breadcrumbs";

// ---------- SEO & Social Metadata ----------
export const metadata: Metadata = {
  title: "Custom Labels & Stickers Printing in Minneapolis, MN | MSE Printing",
  description:
    "Custom product labels, stickers, and decals in Minneapolis, MN — waterproof, roll or sheet, vinyl/clear/window options, die-cut & kiss-cut, barcode/QR, tamper-evident. Fast, high-quality printing by MSE Printing.",
  keywords: [
    "custom labels Minneapolis",
    "label printing Minneapolis",
    "sticker printing Minneapolis",
    "custom decals Minneapolis",
    "labels Minneapolis MN",
    "stickers Minneapolis MN",
    "decals Minneapolis MN",
    "label printing near me",
    "sticker printing near me",
    "product labels Minneapolis",
    "packaging labels Minneapolis",
    "bottle labels Minneapolis",
    "food labels Minneapolis",
    "cosmetic labels Minneapolis",
    "roll labels Minneapolis",
    "sheet labels Minneapolis",
    "short run labels Minneapolis",
    "waterproof labels Minneapolis",
    "vinyl stickers Minneapolis",
    "clear stickers Minneapolis",
    "window decals Minneapolis",
    "custom sticker sheets Minneapolis",
    "die cut stickers Minneapolis",
    "kiss cut stickers Minneapolis",
    "tamper-evident labels Minneapolis",
    "barcode labels Minneapolis",
    "QR code stickers Minneapolis",
    "UL compliant labels Minneapolis",
    "brand stickers Minneapolis",
    "custom branding stickers Minneapolis",
    "custom decals Minnesota",
    "label printing Minnesota",
    "sticker printing Minnesota",
  ],
  applicationName: "MSE Printing",
  category: "Labels, Stickers & Decals",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/labels-stickers-decals",
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
      "Custom Labels & Stickers Printing in Minneapolis, MN | MSE Printing",
    description:
      "High-quality custom labels, stickers, and decals for products, packaging, and promotions — waterproof, roll/sheet, vinyl/clear/window.",
    url: "https://www.mseprinting.com/labels-stickers-decals",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/common-images/labels_stickers_decals.webp",
        width: 1200,
        height: 630,
        alt: "Custom labels, stickers, and decals for product packaging by MSE Printing in Minneapolis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Custom Labels & Stickers Printing in Minneapolis, MN | MSE Printing",
    description:
      "Boost your brand with waterproof roll/sheet labels, vinyl & clear stickers, and window decals by MSE Printing.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/common-images/labels_stickers_decals.webp",
        alt: "Branded labels and stickers by MSE Printing, Minneapolis",
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
    "@id": "https://www.mseprinting.com/labels-stickers-decals#service",
    name: "Custom Labels, Stickers & Decals",
    description:
      "Custom labels, stickers, and decals by MSE Printing. Designed and printed for products, packaging, branding, and promotion in Minneapolis and nationwide.",
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
      "Custom Labels",
      "Stickers",
      "Decals",
      "Waterproof Labels",
      "Roll Labels",
      "Sheet Labels",
      "Vinyl Stickers",
      "Clear Stickers",
      "Window Decals",
      "Tamper-Evident Labels",
      "Barcode Labels",
      "QR Code Stickers",
    ],
    knowsAbout: [
      "label printing Minneapolis",
      "sticker printing Minneapolis",
      "custom decals Minneapolis",
      "die cut stickers",
      "kiss cut stickers",
      "waterproof labels",
      "roll vs sheet labels",
      "vinyl and clear stickers",
      "window decals",
      "barcode and QR labels",
      "tamper-evident security labels",
    ],
    category: "Product Branding",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Labels, Stickers & Decals Services",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/labels-stickers-decals#label-printing",
          itemOffered: {
            "@type": "Service",
            name: "Label Printing",
            description:
              "Custom label printing for bottles, jars, retail, and product packaging. Multiple materials and adhesives.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/labels-stickers-decals#sticker-printing",
          itemOffered: {
            "@type": "Service",
            name: "Sticker Printing",
            description:
              "Die-cut, clear, vinyl, and custom stickers for promotions, packaging, and events.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/labels-stickers-decals#decal-printing",
          itemOffered: {
            "@type": "Service",
            name: "Decal Printing",
            description:
              "Window, product, and custom decals for branding and visibility. Indoor/outdoor options available.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/labels-stickers-decals",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Custom Labels, Stickers & Decals",
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
const LabelsStickersDecals = async () => {
  const data = await getCategoryPagesData("/labels-stickers-decals");
  const pageData = data.LabelsStickersDecalsPageData?.[0];
  const { footerContentData } = await getFooterData();
  const breadcrumbs = buildServiceBreadcrumbs(
    "labels-stickers-decals", // must match the DB `path`
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

export default LabelsStickersDecals;
