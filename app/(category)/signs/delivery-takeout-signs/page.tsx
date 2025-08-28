// app/signs/delivery-takeout-signs/page.tsx
import React from "react";
import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";
import { getFooterData } from "db/GetFooterData";
import { buildServiceBreadcrumbs } from "lib/breadcrumbs";

export const revalidate = 86400;

/* ───────── SEO & Social Metadata (Fix 2) ───────── */
export const metadata: Metadata = {
  title: "Delivery & Takeout Signs in Minneapolis | MSE Printing",
  description:
    "Durable, branded delivery and takeout signs to help customers find you fast and streamline food-service operations. Designed and printed by MSE Printing.",
  applicationName: "MSE Printing",
  category: "Delivery & Takeout Signs",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/signs/delivery-takeout-signs",
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
    title: "Delivery & Takeout Signs | Food Service | MSE Printing",
    description:
      "Durable and branded delivery & takeout signage that helps customers find you and boosts operations.",
    url: "https://www.mseprinting.com/signs/delivery-takeout-signs",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/signs-images/additional/delivery_takeout_signs_right.webp",
        width: 800,
        height: 630,
        alt: "Delivery and takeout signs by MSE Printing in Minneapolis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Delivery & Takeout Signs | Food Service | MSE Printing",
    description:
      "Order durable, branded delivery and takeout signs for food service from MSE Printing.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/signs-images/additional/delivery_takeout_signs_right.webp",
        alt: "Delivery & Takeout Signs by MSE Printing, Minneapolis",
      },
    ],
  },
  icons: { icon: "/favicon.ico", apple: "/favicon.ico" },
  authors: [{ name: "MSE Printing", url: "https://www.mseprinting.com" }],
  creator: "MSE Printing",
  publisher: "MSE Printing",
};

/* ───────── Viewport Theme Colors ───────── */
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  colorScheme: "light dark",
};

/* ───────── Service Schema Structured Data ───────── */
const ServiceSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.mseprinting.com/signs/delivery-takeout-signs#service",
    name: "Delivery & Takeout Signs",
    description:
      "Professional delivery and takeout sign printing by MSE Printing. Durable, branded signage for restaurants and food service in Minneapolis and nationwide.",
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
    serviceType: "Delivery & Takeout Signs",
    category: "Print Services",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Delivery & Takeout Sign Services",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/signs/delivery-takeout-signs#delivery-signs",
          itemOffered: {
            "@type": "Service",
            name: "Delivery Signs",
            description:
              "Custom signage for restaurants and delivery operations.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/signs/delivery-takeout-signs#takeout-signs",
          itemOffered: {
            "@type": "Service",
            name: "Takeout Signs",
            description:
              "Branded signs to guide customers to takeout and pickup areas.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/signs/delivery-takeout-signs#branding",
          itemOffered: {
            "@type": "Service",
            name: "Branding & Custom Design",
            description:
              "Professional design services for food service signage.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/signs/delivery-takeout-signs",
      availability: "https://schema.org/InStock",
      itemOffered: { "@type": "Service", name: "Delivery & Takeout Signs" },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

/* ───────── Main Page Component ───────── */
export default async function DeliveryTakeoutSigns() {
  const data = await getCategoryPagesData("/signs/delivery-takeout-signs");
  const pageData = data.DeliveryTakeoutSignsPageData?.[0];

  const { footerContentData } = await getFooterData();
  const breadcrumbs = buildServiceBreadcrumbs(
    "signs/delivery-takeout-signs",
    footerContentData
  );

  if (!pageData) {
    // Avoid thin 200 → return a real 404 to prevent soft-404 signals
    notFound();
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
}
