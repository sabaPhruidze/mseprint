import React from "react";
import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { getBlogPagesData } from "db/getBlogPagesData";
import PageStructure from "components/common/PageStructure";

/* ─────────────── SEO METADATA ─────────────── */
export const metadata: Metadata = {
  title:
    "Local Printing Guide — Same-Day & Pickup Options in Minneapolis | MSE Printing",
  description:
    "A practical guide to local printing in Minneapolis: same-day options, pickup/delivery, file prep, paper choices, and when to choose digital vs offset.",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/blog/local-printing-services",
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
    type: "article",
    url: "https://www.mseprinting.com/blog/local-printing-services",
    siteName: "MSE Printing",
    title: "Local Printing Guide in Minneapolis | MSE Printing",
    description:
      "Turnaround expectations, pickup/delivery, and file prep tips from a Minneapolis production team serving Minnesota and the USA.",
    locale: "en_US",
    images: [
      {
        url: "https://www.mseprinting.com/images/blog/pages/additional/local-printing-services.webp",
        width: 1200,
        height: 630,
        alt: "Local printing guide for fast, reliable turnarounds",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Local Printing Guide — Same-Day & Pickup Options",
    description:
      "When to use same-day printing, how pickup/delivery works, and how to prep files for best results.",
    images: [
      "https://www.mseprinting.com/images/blog/pages/additional/local-printing-services.webp",
    ],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  // Removed: keywords, page-level verification, and LocalBusiness contact/geo meta (keep those site-wide)
};

/* ─────────────── VIEWPORT COLOR MODE ─────────────── */
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  colorScheme: "normal",
};

/* ─────────────── STRUCTURED DATA / SCHEMA.ORG ─────────────── */
/** Use Article (+ optional FAQ + BreadcrumbList) on a blog URL. */
function StructuredData() {
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Local Printing Guide — Same-Day & Pickup Options in Minneapolis",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.mseprinting.com/blog/local-printing-services",
    },
    datePublished: "2025-08-01",
    dateModified: new Date().toISOString().slice(0, 10),
    author: { "@type": "Organization", name: "MSE Printing" },
    publisher: { "@type": "Organization", name: "MSE Printing" },
    image: [
      "https://www.mseprinting.com/images/blog/pages/additional/local-printing-services.webp",
    ],
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Blog",
        item: "https://www.mseprinting.com/blog",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Local Printing Guide — Same-Day & Pickup Options in Minneapolis",
        item: "https://www.mseprinting.com/blog/local-printing-services",
      },
    ],
  };

  // Keep only if you render matching on-page FAQs; otherwise remove
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you offer same-day local printing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes—qualifying digital jobs can be completed the same day depending on file readiness, quantity, and finishing.",
        },
      },
      {
        "@type": "Question",
        name: "Can I pick up my order?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes—pickup is available from our Minneapolis location, and local delivery or nationwide shipping can be arranged.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
    </>
  );
}

/* ─────────────── MAIN PAGE COMPONENT ─────────────── */
const LocalPrintingServices = async () => {
  const data = await getBlogPagesData("/blog/local-printing-services");
  const pageData = data?.BlogLocalPrintingServicesPageData?.[0];

  // Avoid thin 200s (soft-404): 404 if no content
  if (!pageData) return notFound();

  return (
    <>
      <StructuredData />
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

export default LocalPrintingServices;
