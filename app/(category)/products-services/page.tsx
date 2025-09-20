import React from "react";
import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";
import { getFooterData } from "db/GetFooterData";
import { buildServiceBreadcrumbs } from "lib/breadcrumbs";

export const revalidate = 86400;

/* ───────── SEO & Social Metadata ───────── */
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
  openGraph: {
    title: "Printing Products & Services in Minneapolis | MSE Printing",
    description:
      "From offset and digital printing to direct mail, labels, packaging, and creative services—MSE Printing delivers full-service support for your brand.",
    url: "https://www.mseprinting.com/products-services",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      // რეკომენდებული 1200x630 (მართკუთხედი)
      {
        url: "/images/products-services-images/og/products-services-1200x630.jpg",
        width: 1200,
        height: 630,
        alt: "MSE Printing Products & Services in Minneapolis – Printing, Signs, Direct Mail",
      },
      // სურვილისამებრ კვადრატული fallback პლატფორმებისთვის
      {
        url: "/images/products-services-images/og/products-services-1200x1200.jpg",
        width: 1200,
        height: 1200,
        alt: "MSE Printing – Products & Services (square preview)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Products & Services | MSE Printing",
    description:
      "Discover all printing, signage, mailing, labels, packaging, and marketing solutions with MSE Printing.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      // რეკომენდებული 1200x675 (Twitter large)
      {
        url: "/images/products-services-images/og/products-services-1200x675.jpg",
        alt: "MSE Printing Products & Services – Twitter Card",
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

/* ───────── BreadcrumbList (Structured Data) ───────── */
const BreadcrumbSchema = () => {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.mseprinting.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products & Services",
        item: "https://www.mseprinting.com/products-services",
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

/* ───────── CollectionPage + ItemList (Structured Data) ───────── */
const CollectionSchema = () => {
  // გამოიყენე რეალური, არსებულ გვერდებზე მიმაგრებული URL-ები
  const items = [
    {
      name: "Printing & Copying",
      url: "https://www.mseprinting.com/printing-copying",
    },
    {
      name: "Signs, Banners & Posters",
      url: "https://www.mseprinting.com/signs",
    },
    {
      name: "Direct Mail & Mailing Services",
      url: "https://www.mseprinting.com/direct-mail",
    },
    {
      name: "Labels & Packaging",
      url: "https://www.mseprinting.com/labels-packaging",
    },
    {
      name: "Tradeshows & Events",
      url: "https://www.mseprinting.com/tradeshows-events",
    },
    {
      name: "Marketing Services",
      url: "https://www.mseprinting.com/marketing-services",
    },
    {
      name: "Fulfillment Services",
      url: "https://www.mseprinting.com/fulfillment",
    },
    { name: "Industry Specific", url: "https://www.mseprinting.com/industry" },
  ];

  const data = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://www.mseprinting.com/products-services#collection",
    url: "https://www.mseprinting.com/products-services",
    name: "Products & Services",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: items.map((it, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: { "@type": "Service", name: it.name, url: it.url },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
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
    notFound();
  }

  return (
    <>
      <ServiceSchema />
      <BreadcrumbSchema />
      <CollectionSchema />
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
