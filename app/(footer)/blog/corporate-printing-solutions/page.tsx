import React from "react";
import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { getBlogPagesData } from "db/getBlogPagesData";
import PageStructure from "components/common/PageStructure";

/* ─────────────── SEO METADATA ─────────────── */
export const metadata: Metadata = {
  title:
    "Corporate Printing in Minneapolis — Practical Buyer’s Guide | MSE Printing",
  description:
    "Straightforward guidance for corporate printing in Minneapolis: timelines, file prep, paper & finish choices, budget ranges, and a mini case study from MSE Printing.",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/blog/corporate-printing-solutions",
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
    type: "article", // ← important
    url: "https://www.mseprinting.com/blog/corporate-printing-solutions",
    siteName: "MSE Printing",
    title:
      "Corporate Printing in Minneapolis — Practical Buyer’s Guide | MSE Printing",
    description:
      "Timelines, file setup, paper & finishing choices, and budget tiers for corporate printing in Minneapolis.",
    locale: "en_US",
    images: [
      {
        url: "https://www.mseprinting.com/images/blog/pages/additional/corporate-printing-solutions.webp",
        width: 1200,
        height: 630,
        alt: "Corporate printing guide overview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Printing in Minneapolis — Practical Buyer’s Guide",
    description:
      "What to send, when to send it, and how to choose papers, finishes, and quantities for reliable results.",
    images: [
      "https://www.mseprinting.com/images/blog/pages/additional/corporate-printing-solutions.webp",
    ],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  // Remove page-level geo/contact/verification/keywords here
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
/** Use Article + optional FAQ + Breadcrumbs on a blog post. */
function StructuredData() {
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Corporate Printing in Minneapolis — Practical Buyer’s Guide",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.mseprinting.com/blog/corporate-printing-solutions",
    },
    datePublished: "2025-07-24",
    dateModified: new Date().toISOString().slice(0, 10),
    author: { "@type": "Organization", name: "MSE Printing" },
    publisher: { "@type": "Organization", name: "MSE Printing" },
    image: [
      "https://www.mseprinting.com/images/blog/pages/additional/corporate-printing-solutions.webp",
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
        name: "Corporate Printing in Minneapolis — Practical Buyer’s Guide",
        item: "https://www.mseprinting.com/blog/corporate-printing-solutions",
      },
    ],
  };

  // Optional: add FAQPage if you have real on-page FAQs
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Which file format works best for printing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "High-resolution PDFs with fonts embedded at 300 DPI. Native files are OK if links and fonts are packaged.",
        },
      },
      {
        "@type": "Question",
        name: "Can you match our Pantone® brand colors?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Calibrated presses and spectrophotometers keep brand colors consistent across runs.",
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
const CorporatePrintingSolutions = async () => {
  const data = await getBlogPagesData("/blog/corporate-printing-solutions");
  const pageData = data?.blogCorporatePrintingSolutions?.[0];

  // If we have no content, 404 instead of returning a thin 200 page
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

export default CorporatePrintingSolutions;
