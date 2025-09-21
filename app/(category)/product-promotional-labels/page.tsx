import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";
import { getFooterData } from "db/GetFooterData";
import { buildServiceBreadcrumbs } from "lib/breadcrumbs";

// ---------- SEO & Social Metadata ----------
export const metadata: Metadata = {
  title: "Product Promotional Labels | Custom Labels | MSE Printing",
  description:
    "Boost visibility and drive sales with custom promotional labels by MSE Printing. Eye-catching designs to highlight offers, spark urgency, and increase conversions.",
  keywords: [
    "promotional labels printing",
    "custom product labels Minneapolis",
    "eye-catching product labels",
    "sale labels Minnesota",
    "offer labels printing",
    "product sticker design",
    "retail promotional labels",
    "urgent callout stickers",
    "MSE Printing product labels",
    "event promo labels",
  ],
  applicationName: "MSE Printing",
  category: "Product Promotional Labels",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/product-promotional-labels",
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
    title: "Product Promotional Labels | Custom Labels | MSE Printing",
    description:
      "Eye-catching promotional labels designed to highlight offers, spark urgency, and convert attention into action.",
    url: "https://www.mseprinting.com/product-promotional-labels",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/common-images/additional/premium_private_labels_right.webp",
        width: 800,
        height: 630,
        alt: "Product promotional label printing by MSE Printing in Minneapolis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Product Promotional Labels | Custom Labels | MSE Printing",
    description:
      "Get custom product labels that drive sales and boost promotions with MSE Printing.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/common-images/additional/premium_private_labels_right.webp",
        alt: "Promotional labels by MSE Printing, Minneapolis",
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
    "@id": "https://www.mseprinting.com/product-promotional-labels#service",
    name: "Product Promotional Labels",
    description:
      "Custom promotional label printing by MSE Printing. Highlight special offers, sales, and events with vivid, eye-catching labels in Minneapolis and nationwide.",
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
    serviceType: "Product Promotional Labels",
    category: "Print Services",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Promotional Label Services",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/product-promotional-labels#sale-labels",
          itemOffered: {
            "@type": "Service",
            name: "Sale & Offer Labels",
            description:
              "Custom labels for special offers, discounts, and limited-time promotions.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/product-promotional-labels#event-labels",
          itemOffered: {
            "@type": "Service",
            name: "Event & Promo Labels",
            description:
              "Eye-catching labels for product launches, seasonal events, and retail displays.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/product-promotional-labels#custom-design",
          itemOffered: {
            "@type": "Service",
            name: "Custom Design Labels",
            description:
              "Tailored designs, sizes, and shapes to match your promotional campaign needs.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/product-promotional-labels",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Product Promotional Labels",
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
const ProductPromotionalLabels = async () => {
  const data = await getCategoryPagesData("/product-promotional-labels");
  const pageData = data.ProductPromotionalLabelsPageData?.[0];
  const { footerContentData } = await getFooterData();
  const breadcrumbs = buildServiceBreadcrumbs(
    "product-promotional-labels", // must match the DB `path`
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

export default ProductPromotionalLabels;
