// app/direct-mail/list-management-services/page.tsx
import React from "react";
import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";
import { getFooterData } from "db/GetFooterData";
import { buildServiceBreadcrumbs } from "lib/breadcrumbs";

export const revalidate = 86400; // ISR: daily

/* ───────── SEO & Social Metadata ───────── */
export const metadata: Metadata = {
  title: "List Management Services | MSE Printing",
  description:
    "Improve direct mail ROI with accurate, deliverable data. We provide list cleaning, validation, de-duplication, NCOA updates, and segmentation for targeted campaigns.",
  keywords: [
    "list management",
    "mailing list cleaning",
    "address validation",
    "NCOA",
    "CASS",
    "de-duplication",
    "direct mail data",
    "segmentation",
    "Minneapolis printing",
    "MSE Printing",
  ],
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical:
      "https://www.mseprinting.com/direct-mail/list-management-services",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "List Management Services | MSE Printing",
    description:
      "USPS-ready list cleaning, de-duplication, NCOA updates, and data segmentation to deliver more mail to the right households.",
    url: "https://www.mseprinting.com/direct-mail/list-management-services",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/direct-mail-images/additional/list_management_services_right.webp",
        width: 1200,
        height: 630,
        alt: "Mailing list data processing and segmentation by MSE Printing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "List Management Services | MSE Printing",
    description:
      "Clean, verify, and segment your lists for higher deliverability and response rates.",
    images: [
      "https://www.mseprinting.com/images/direct-mail-images/additional/list_management_services_right.webp",
    ],
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
  },
  icons: { icon: "/favicon.ico", apple: "/favicon.ico" },
  authors: [{ name: "MSE Printing", url: "https://www.mseprinting.com" }],
  creator: "MSE Printing",
  publisher: "MSE Printing",
};

/* ───────── Viewport ───────── */
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  colorScheme: "light dark",
};

/* ───────── Structured Data (@graph) ───────── */
function StructuredData() {
  const url =
    "https://www.mseprinting.com/direct-mail/list-management-services";

  const graph = [
    {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: "List Management Services | MSE Printing",
      description:
        "Mailing list cleaning, validation, de-duplication, NCOA updates, and segmentation for USPS-ready direct mail and higher response rates.",
      isPartOf: {
        "@type": "WebSite",
        "@id": "https://www.mseprinting.com/#website",
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://www.mseprinting.com/images/direct-mail-images/additional/list_management_services_right.webp",
      },
      inLanguage: "en-US",
      breadcrumb: { "@id": `${url}#breadcrumbs` },
    },
    {
      "@type": "Service",
      "@id": `${url}#service`,
      name: "List Management Services",
      serviceType: "List Management",
      category: "Direct Mail Services",
      description:
        "List cleaning & validation, NCOA updates, de-duplication, and segmentation for USPS-compliant, higher-deliverability direct mail.",
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
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Mailing List Services",
        itemListElement: [
          {
            "@type": "Offer",
            url: `${url}#cleaning`,
            itemOffered: {
              "@type": "Service",
              name: "List Cleaning & Validation",
              description:
                "Fix formatting, remove invalid/undeliverable addresses, and standardize to USPS guidelines.",
            },
          },
          {
            "@type": "Offer",
            url: `${url}#segmentation`,
            itemOffered: {
              "@type": "Service",
              name: "Segmentation & Targeting",
              description:
                "Segment by geography, demographics, or behavior to increase response and reduce waste.",
            },
          },
          {
            "@type": "Offer",
            url: `${url}#ncoa`,
            itemOffered: {
              "@type": "Service",
              name: "NCOA Updates",
              description:
                "National Change of Address processing to keep lists current and improve deliverability.",
            },
          },
          {
            "@type": "Offer",
            url: `${url}#dedupe`,
            itemOffered: {
              "@type": "Service",
              name: "De-duplication",
              description:
                "Remove duplicates across households and contacts to lower postage and printing costs.",
            },
          },
        ],
      },
      offers: {
        "@type": "Offer",
        url,
        availability: "https://schema.org/InStock",
        itemOffered: { "@type": "Service", name: "List Management Services" },
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumbs`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Direct Mail",
          item: "https://www.mseprinting.com/direct-mail",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "List Management Services",
          item: url,
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
}

/* ───────── MAIN PAGE ───────── */
const ListManagementServices = async () => {
  const data = await getCategoryPagesData(
    "/direct-mail/list-management-services"
  );
  const pageData = data?.ListManagementServicesPageData?.[0];

  const { footerContentData } = await getFooterData();
  const breadcrumbs = buildServiceBreadcrumbs(
    "direct-mail/list-management-services",
    footerContentData
  );

  if (!pageData) return notFound();

  return (
    <>
      <StructuredData />
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

export default ListManagementServices;
