import React from "react";
import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { getBlogPagesData } from "db/getBlogPagesData";
import PageStructure from "components/common/PageStructure";

/* ─────────────── SEO METADATA ─────────────── */
export const metadata: Metadata = {
  title: "Corporate Materials, Labels & Large Format | MSE Printing",
  description:
    "A practical guide to professional printing in Minneapolis: brochures, labels, large-format graphics, paper/finish choices, file prep, and when to use digital vs offset.",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical:
      "https://www.mseprinting.com/blog/professional-printing-services",
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
    type: "article", // blog article, not website
    url: "https://www.mseprinting.com/blog/professional-printing-services",
    siteName: "MSE Printing",
    title: "Corporate Materials, Labels & Large Format | MSE Printing",
    description:
      "Turnaround expectations, color management, and file prep tips from a Minneapolis production team serving Minnesota and the USA.",
    locale: "en_US",
    images: [
      {
        url: "https://www.mseprinting.com/images/blog/pages/additional/professional-printing-services.webp",
        width: 1200,
        height: 630,
        alt: "Examples of corporate printing: brochures, labels, and large-format displays",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Professional Printing Guide — Corporate Materials, Labels & Large Format",
    description:
      "Paper & finishes, color accuracy, file prep, and when to choose digital vs offset for business printing.",
    images: [
      "https://www.mseprinting.com/images/blog/pages/additional/professional-printing-services.webp",
    ],
  },
  icons: { icon: "/favicon.ico", apple: "/favicon.ico" },
  // Removed: keywords, page-level verification, LocalBusiness contact/geo meta (keep site-wide)
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
function StructuredData({ hasVisibleFAQ = false }) {
  const graph: Record<string, unknown>[] = [
    {
      "@type": "Article",
      "@id":
        "https://www.mseprinting.com/blog/professional-printing-services#article",
      headline:
        "Professional Printing Guide — Corporate Materials, Labels & Large Format",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://www.mseprinting.com/blog/professional-printing-services",
      },
      datePublished: "2025-08-01",
      dateModified: "2025-09-04", // stable YYYY-MM-DD (avoid dynamic date)
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "MSE Printing" },
      publisher: { "@type": "Organization", name: "MSE Printing" },
      image: [
        "https://www.mseprinting.com/images/blog/pages/additional/professional-printing-services.webp",
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.mseprinting.com/blog/professional-printing-services#breadcrumbs",
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
          name: "Professional Printing Guide — Corporate Materials, Labels & Large Format",
          item: "https://www.mseprinting.com/blog/professional-printing-services",
        },
      ],
    },
  ];

  if (hasVisibleFAQ) {
    graph.push({
      "@type": "FAQPage",
      "@id":
        "https://www.mseprinting.com/blog/professional-printing-services#faq",
      inLanguage: "en-US",
      mainEntity: [
        {
          "@type": "Question",
          name: "When should I choose digital vs offset printing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Digital suits short runs, fast turnarounds, or variable data; offset suits large volumes with exacting color consistency and lower per-unit cost at scale.",
          },
        },
        {
          "@type": "Question",
          name: "How do I prep files for best results?",
          acceptedAnswer: {
            "@type": "Answer",
            text: 'Export press-ready PDF with fonts embedded, 300 DPI images, CMYK or Pantone profiles, and 0.125" bleeds; include live text outlines when needed.',
          },
        },
      ],
    });
  }

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

/* ─────────────── MAIN PAGE COMPONENT ─────────────── */
const ProfessionalPrintingServices = async () => {
  const data = await getBlogPagesData("/blog/professional-printing-services");
  const pageData = data?.BlogProfessionalPrintingServicesPageData?.[0];

  if (!pageData) return notFound();

  return (
    <>
      <StructuredData hasVisibleFAQ={false} />
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

export default ProfessionalPrintingServices;
