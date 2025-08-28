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
  title: "Printing Products & Services in Minneapolis | MSE Printing",
  description:
    "Explore printing, signage, mailing, labels, packaging, and more from MSE Printing. Offset, digital, and large format—serving Minneapolis & nationwide.",
  applicationName: "MSE Printing",
  category: "Products & Services",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/products-services",
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
  // Site verification + LocalBusiness/geo should live once in app/layout.tsx (site-wide), not per page.
  openGraph: {
    title: "Printing Products & Services in Minneapolis ",
    description:
      "From offset and digital printing to direct mail, labels, packaging, and creative services—MSE Printing delivers full-service support for your brand.",
    url: "https://www.mseprinting.com/products-services",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/products-services-images/additional/products_services_right.webp",
        width: 1200,
        height: 630,
        alt: "Products and services offered by MSE Printing in Minneapolis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Products & Services | MSE Printing",
    description:
      "Discover all printing, signage, and marketing solutions with MSE Printing.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/products-services-images/additional/products_services_right.webp",
        alt: "MSE Printing - Products & Services, Minneapolis",
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
    "@id": "https://www.mseprinting.com/products-services#service",
    name: "Products & Services",
    description:
      "Full-service printing, signage, mailing, packaging, and creative marketing solutions by MSE Printing in Minneapolis and nationwide.",
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
    serviceType: "Products & Services",
    category: "Print Services",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Products & Services Catalog",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/products-services#printing",
          itemOffered: {
            "@type": "Service",
            name: "Printing Solutions",
            description:
              "Offset, digital, and large format printing for any business or creative need.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/products-services#signage",
          itemOffered: {
            "@type": "Service",
            name: "Signage & Displays",
            description:
              "Indoor and outdoor signage, banners, and display graphics.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/products-services#direct-mail",
          itemOffered: {
            "@type": "Service",
            name: "Direct Mail & Marketing",
            description:
              "Direct mail, EDDM, and integrated marketing campaign support.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/products-services",
      availability: "https://schema.org/InStock",
      itemOffered: { "@type": "Service", name: "Products & Services" },
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
export default async function ProductsServices() {
  const data = await getCategoryPagesData("/products-services");
  const pageData = data.ProductsServicesPageData?.[0];

  const { footerContentData } = await getFooterData();
  const breadcrumbs = buildServiceBreadcrumbs(
    "products-services",
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
