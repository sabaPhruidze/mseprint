import React from "react";
import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { getBlogPagesData } from "db/getBlogPagesData";
import PageStructure from "components/common/PageStructure";

/* ─────────────── SEO METADATA ─────────────── */
export const metadata: Metadata = {
  title: "Custom Notepad Printing Guide — in Minneapolis | MSE Printing",
  description:
    "A practical guide to custom notepad printing: pad types (glue/tear, spiral, sticky), sheet counts, paper weights, and branding tips from our Minneapolis production team.",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/blog/notepad-printing-services",
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
    type: "article", // important: blog article, not website
    url: "https://www.mseprinting.com/blog/notepad-printing-services",
    siteName: "MSE Printing",
    title: "Custom Notepad Printing Guide — in Minneapolis | MSE Printing",
    description:
      "Choose the right notepad: glue-bound, spiral, sticky notes, legal pads. Sheet counts, chipboard backing, bleed, and file prep tips for brand-ready pads.",
    locale: "en_US",
    images: [
      {
        url: "https://www.mseprinting.com/images/blog/pages/additional/notepad-printing-services.webp",
        width: 1200,
        height: 630,
        alt: "Examples of branded notepads, sticky notes, and legal pads",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Notepad Printing Guide — Pads, Sticky Notes & Legal Pads",
    description:
      "Binding styles, sheet counts, paper choices, and file prep for brand-ready notepads printed in Minneapolis.",
    images: [
      "https://www.mseprinting.com/images/blog/pages/additional/notepad-printing-services.webp",
    ],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  // Removed: keywords, page-level verification, and LocalBusiness/geo meta (keep those site-wide or on the LocalBusiness page)
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
/** Use Article (+ optional FAQ + BreadcrumbList) for a blog URL. */
function StructuredData() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.mseprinting.com/blog/notepad-printing-services#article",
        headline:
          "Custom Notepad Printing Guide — Pads, Sticky Notes & Legal Pads",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": "https://www.mseprinting.com/blog/notepad-printing-services",
        },
        datePublished: "2025-07-15",
        dateModified: new Date().toISOString().slice(0, 10),
        author: { "@type": "Organization", name: "MSE Printing" },
        publisher: { "@type": "Organization", name: "MSE Printing" },
        image: [
          "https://www.mseprinting.com/images/blog/pages/additional/notepad-printing-services.webp",
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.mseprinting.com/blog/notepad-printing-services#breadcrumbs",
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
            name: "Custom Notepad Printing Guide — Pads, Sticky Notes & Legal Pads",
            item: "https://www.mseprinting.com/blog/notepad-printing-services",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.mseprinting.com/blog/notepad-printing-services#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "What’s the best sheet count for branded notepads?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Common pad counts are 25, 50, or 100 sheets per pad. Choose 25–50 for giveaways and events, 50–100 for daily office use.",
            },
          },
          {
            "@type": "Question",
            name: "Do you offer chipboard backing and perforation?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, sturdy chipboard backers are standard on glue-bound pads, and micro-perf can be added for clean tear-off sheets.",
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
const NotepadPrintingServices = async () => {
  const data = await getBlogPagesData("/blog/notepad-printing-services");
  const pageData = data?.BlogNotepadPrintingServicesPageData?.[0];

  // Important: return 404 when no content to avoid thin 200 / soft-404
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

export default NotepadPrintingServices;
