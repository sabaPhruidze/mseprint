import React from "react";
import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";
import { getFooterData } from "db/GetFooterData";
import { buildServiceBreadcrumbs } from "lib/breadcrumbs";

export const metadata: Metadata = {
  title: "List Management Services | MSE Printing",
  description:
    "Improve direct mail ROI with accurate, deliverable data. We provide list cleaning, validation, de-duplication, NCOA updates, and segmentation for targeted campaigns.",
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
  },
  icons: { icon: "/favicon.ico", apple: "/favicon.ico" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  colorScheme: "normal",
};

function StructuredData() {
  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id":
      "https://www.mseprinting.com/direct-mail/list-management-services#service",
    name: "List Management Services",
    description:
      "Mailing list cleaning, validation, de-duplication, NCOA updates, and segmentation for USPS-ready direct mail and higher response rates.",
    provider: {
      "@type": "LocalBusiness",
      "@id": "https://www.mseprinting.com/#business",
      name: "MSE Printing",
      url: "https://www.mseprinting.com",
      telephone: "763-542-8812",
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
    serviceType: "List Management",
    category: "Direct Mail Services",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Mailing List Services",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/direct-mail/list-management-services#cleaning",
          itemOffered: {
            "@type": "Service",
            name: "List Cleaning & Validation",
            description:
              "Fix formatting, remove invalid/undeliverable addresses, and standardize to USPS guidelines.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/direct-mail/list-management-services#segmentation",
          itemOffered: {
            "@type": "Service",
            name: "Segmentation & Targeting",
            description:
              "Segment by geography, demographics, or behavior to increase response and reduce waste.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/direct-mail/list-management-services#ncoa",
          itemOffered: {
            "@type": "Service",
            name: "NCOA Updates",
            description:
              "National Change of Address processing to keep lists current and improve deliverability.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/direct-mail/list-management-services#dedupe",
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
      url: "https://www.mseprinting.com/direct-mail/list-management-services",
      availability: "https://schema.org/InStock",
      itemOffered: { "@type": "Service", name: "List Management Services" },
    },
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
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
        item: "https://www.mseprinting.com/direct-mail/list-management-services",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
    </>
  );
}

/* ─────────────── MAIN PAGE COMPONENT ─────────────── */
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

  // Avoid thin 200s (soft-404): return a proper 404 if there is no content
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
