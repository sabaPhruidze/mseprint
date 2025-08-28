import React from "react";
import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { getBlogPagesData } from "db/getBlogPagesData";
import PageStructure from "components/common/PageStructure";

/* ─────────────── SEO METADATA ─────────────── */
export const metadata: Metadata = {
  title:
    "Booklet Printing Guide — Saddle Stitch, Perfect Bind, Coil | MSE Printing",
  description:
    "A practical buyer’s guide to booklet printing: page counts, binding choices (saddle stitch, perfect bound, coil/spiral), paper weights, bleeds, and timeline tips from MSE Printing in Minneapolis, Minnesota.",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/blog/booklet-printing-services",
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
    type: "article", // important: it's a blog article
    url: "https://www.mseprinting.com/blog/booklet-printing-services",
    siteName: "MSE Printing",
    title:
      "Booklet Printing Guide — Saddle Stitch, Perfect Bind, Coil | MSE Printing",
    description:
      "How to choose binding, paper, and timelines for catalogs, manuals, and programs. Practical tips from a Minneapolis production team.",
    locale: "en_US",
    images: [
      {
        url: "https://www.mseprinting.com/images/blog/pages/additional/booklet-printing-services.webp",
        width: 1200,
        height: 630,
        alt: "Examples of saddle-stitched, perfect-bound, and coil-bound booklets",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Booklet Printing Guide — Binding, Paper & Timelines",
    description:
      "Saddle stitch vs perfect bind vs coil, page count rules, paper weights, and lead times.",
    images: [
      "https://www.mseprinting.com/images/blog/pages/additional/booklet-printing-services.webp",
    ],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  // removed: keywords, page-level geo/business contact, verification
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
/** Article + optional FAQ + Breadcrumbs (better for a blog URL) */
function StructuredData() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.mseprinting.com/blog/booklet-printing-services#article",
        headline: "Booklet Printing Guide — Saddle Stitch, Perfect Bind, Coil",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": "https://www.mseprinting.com/blog/booklet-printing-services",
        },
        datePublished: "2025-07-15",
        dateModified: new Date().toISOString().slice(0, 10),
        author: { "@type": "Organization", name: "MSE Printing" },
        publisher: { "@type": "Organization", name: "MSE Printing" },
        image: [
          "https://www.mseprinting.com/images/blog/pages/additional/booklet-printing-services.webp",
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.mseprinting.com/blog/booklet-printing-services#breadcrumbs",
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
            name: "Booklet Printing Guide — Saddle Stitch, Perfect Bind, Coil",
            item: "https://www.mseprinting.com/blog/booklet-printing-services",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.mseprinting.com/blog/booklet-printing-services#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "What binding should I choose for my booklet?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Saddle stitch works best for 8–64 pages and fast timelines. Perfect bind suits 60+ pages for a square spine. Coil/spiral is durable and lays flat for manuals and training books.",
            },
          },
          {
            "@type": "Question",
            name: "What paper weights are typical?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Common interiors: 80–100# text (gloss or silk). Covers: 10–14pt cover with optional soft-touch or gloss lamination for durability.",
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}

/* ─────────────── MAIN PAGE COMPONENT ─────────────── */
const BookletPrintingServices = async () => {
  const data = await getBlogPagesData("/blog/booklet-printing-services");
  const pageData = data?.BlogBookletPrintingServicesPageData?.[0];

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

export default BookletPrintingServices;
