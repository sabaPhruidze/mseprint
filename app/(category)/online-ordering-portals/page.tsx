// app/online-ordering-portals/page.tsx
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
  title: "Online Ordering Portals in Minneapolis | MSE Printing",
  description:
    "Streamline printing and marketing with custom online ordering portals from MSE Printing. Simplify ordering, boost productivity, and keep brand consistency in Minneapolis & nationwide.",
  applicationName: "MSE Printing",
  category: "Online Ordering Portals",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/online-ordering-portals",
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
    title: "Online Ordering Portals in Minneapolis | MSE Printing",
    description:
      "Customized online ordering solutions designed to enhance operations, productivity, and brand consistency.",
    url: "https://www.mseprinting.com/online-ordering-portals",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        // ← keeps your original link
        url: "https://www.mseprinting.com/images/home-images/online_ordering.webp",
        width: 1200,
        height: 630,
        alt: "Online ordering portal interface by MSE Printing in Minneapolis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Ordering Portals in Minneapolis | MSE Printing",
    description:
      "Empower your business with branded, secure online ordering portals from MSE Printing. Efficient, accurate, always available.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        // ← keeps your original link
        url: "https://www.mseprinting.com/images/home-images/online_ordering.webp",
        alt: "Custom online ordering portal by MSE Printing, Minneapolis",
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

/* ───────── Structured Data (WebPage + Service + Breadcrumb) ───────── */
const ServiceSchema = () => {
  const base = "https://www.mseprinting.com/online-ordering-portals";
  const businessId = "https://www.mseprinting.com/#business";
  const image =
    // ← keeps your original link
    "https://www.mseprinting.com/images/home-images/online_ordering.webp";

  const graph = [
    {
      "@type": "WebPage",
      "@id": `${base}#webpage`,
      url: base,
      name: "Online Ordering Portals in Minneapolis | MSE Printing",
      description:
        "Streamline printing and marketing with custom online ordering portals from MSE Printing. Simplify ordering, boost productivity, and keep brand consistency in Minneapolis & nationwide.",
      isPartOf: {
        "@type": "WebSite",
        "@id": "https://www.mseprinting.com/#website",
      },
      primaryImageOfPage: { "@type": "ImageObject", url: image },
      inLanguage: "en-US",
      breadcrumb: { "@id": `${base}#breadcrumbs` },
    },
    {
      "@type": "Service",
      "@id": `${base}#service`,
      name: "Online Ordering Portals",
      image,
      description:
        "Custom online ordering portals by MSE Printing. Streamline print and marketing processes, maintain brand consistency, and simplify business ordering in Minneapolis and nationwide.",
      provider: { "@type": "LocalBusiness", "@id": businessId },
      areaServed: [
        { "@type": "City", name: "Minneapolis" },
        { "@type": "State", name: "Minnesota" },
        { "@type": "Country", name: "United States" },
      ],
      serviceType: "Online Ordering Portals",
      category: "Web to Print Solutions",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Online Ordering Portal Services",
        itemListElement: [
          {
            "@type": "Offer",
            url: base,
            itemOffered: {
              "@type": "Service",
              name: "Custom Portal Development",
              description:
                "Build tailored online portals for efficient, secure ordering and management of business materials.",
            },
          },
          {
            "@type": "Offer",
            url: base,
            itemOffered: {
              "@type": "Service",
              name: "Brand Integration",
              description:
                "Ensure consistent branding and user experience across all ordering platforms.",
            },
          },
          {
            "@type": "Offer",
            url: base,
            itemOffered: {
              "@type": "Service",
              name: "Support & Maintenance",
              description:
                "Ongoing portal support, updates, and training for your business needs.",
            },
          },
        ],
      },
      offers: {
        "@type": "Offer",
        url: base,
        availability: "https://schema.org/InStock",
        itemOffered: { "@type": "Service", name: "Online Ordering Portals" },
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${base}#breadcrumbs`,
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
          name: "Online Ordering Portals",
          item: base,
        },
      ],
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": graph,
        }),
      }}
    />
  );
};

/* ───────── Main Page Component ───────── */
export default async function OnlineOrderingPortals() {
  const data = await getCategoryPagesData("/online-ordering-portals");
  const pageData = data.OnlineOrderingPortalsPageData?.[0];

  const { footerContentData } = await getFooterData();
  const breadcrumbs = buildServiceBreadcrumbs(
    "online-ordering-portals",
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
