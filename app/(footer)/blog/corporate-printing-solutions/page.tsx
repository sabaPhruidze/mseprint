import React from "react";
import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { getBlogPagesData } from "db/getBlogPagesData";
import PageStructure from "components/common/PageStructure";

/* ─────────────── SEO METADATA ─────────────── */
export const metadata: Metadata = {
  title: "Corporate Printing in Minneapolis | MSE Printing",
  description:
    "Straightforward guidance for corporate printing in Minneapolis: timelines, file prep, paper & finish choices, Pantone® brand color control, budget tiers, and a mini case study.",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/blog/corporate-printing-solutions",
  },
  keywords: [
    "corporate printing Minneapolis",
    "business printing Minneapolis",
    "commercial printing Minneapolis",
    "print procurement",
    "print RFP checklist",
    "print timelines Minneapolis",
    "rush printing Minneapolis",
    "file setup for print 300 dpi",
    "PDF for print fonts embedded",
    "paper stock guide",
    "coated vs uncoated paper",
    "soft touch laminate",
    "spot UV vs foil",
    "Pantone brand color matching",
    "annual report printing Minneapolis",
    "brochure printing Minneapolis",
    "training manuals printing",
    "presentation materials printing",
    "marketing collateral printing",
  ],
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
    url: "https://www.mseprinting.com/blog/corporate-printing-solutions",
    siteName: "MSE Printing",
    title: "Corporate Printing in Minneapolis | MSE Printing",
    description:
      "Timelines, file setup, paper & finishing choices, Pantone® control and budget tiers for corporate printing in Minneapolis.",
    locale: "en_US",
    images: [
      {
        url: "https://www.mseprinting.com/images/blog/pages/additional/corporate-printing-solutions.webp",
        width: 1200,
        height: 630,
        alt: "Corporate printing guide overview",
      },
    ],
    // ✅ article-specific
    publishedTime: "2025-07-24T08:00:00-05:00",
    modifiedTime: new Date().toISOString(),
    section: "Corporate Printing",
    authors: ["MSE Printing"],
    tags: [
      "corporate printing",
      "print timelines",
      "file setup",
      "paper & finishes",
      "Pantone matching",
      "Minneapolis",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Printing in Minneapolis — Practical Buyer’s Guide ",
    description:
      "What to send, when to send it, and how to choose papers, finishes, and quantities for reliable, on-brand results.",
    images: [
      "https://www.mseprinting.com/images/blog/pages/additional/corporate-printing-solutions.webp",
    ],
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
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
  const published = "2025-07-24";
  const modified = new Date().toISOString().slice(0, 10);

  const blogPosting = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Corporate Printing in Minneapolis — Practical Buyer’s Guide",
    articleSection: "Corporate Printing",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.mseprinting.com/blog/corporate-printing-solutions",
    },
    datePublished: published,
    dateModified: modified,
    author: {
      "@type": "Organization",
      name: "MSE Printing",
      url: "https://www.mseprinting.com",
    },
    publisher: {
      "@type": "Organization",
      name: "MSE Printing",
      url: "https://www.mseprinting.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.mseprinting.com/images/logo.png",
      },
    },
    image: [
      "https://www.mseprinting.com/images/blog/pages/additional/corporate-printing-solutions.webp",
    ],
    description:
      "Straightforward guidance for corporate printing in Minneapolis: timelines, file setup, paper & finish choices, Pantone® color control, budget tiers, and a mini case study.",
    keywords: [
      "corporate printing Minneapolis",
      "print timelines",
      "file setup",
      "paper finishes",
      "Pantone matching",
      "annual report printing",
      "brochure printing",
    ],
    wordCount: 1200, // თუ იცი რეალური რაოდენობა, განაახლე
    timeRequired: "PT6M", // დაახლ. კითხვის დრო
    isAccessibleForFree: true,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPosting) }}
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
