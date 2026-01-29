import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { getBlogPagesData } from "db/getBlogPagesData";
import PageStructure from "components/common/PageStructure";

const BASE_URL = "https://www.mseprinting.com";
const PAGE_PATH = "/blog/notepad-printing-services";
const PAGE_URL = `${BASE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${BASE_URL}/images/blog/pages/additional/notepad-printing-services.webp`;

/* ─────────────── SEO METADATA ─────────────── */
export const metadata: Metadata = {
  title: "Custom Notepad Printing Guide — in Minneapolis | MSE Printing",
  description:
    "A practical guide to custom notepad printing: pad types (glue/tear, spiral, sticky), sheet counts, paper weights, and branding tips from our Minneapolis production team.",
  keywords: [
    "notepad printing Minneapolis",
    "custom notepad printing",
    "branded notepads",
    "sticky note printing",
    "legal pad printing",
    "glue bound notepads",
    "spiral notepad printing",
    "paper weights for notepads",
    "notepad design and printing",
    "MSE Printing notepad guide",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: PAGE_URL },
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
    url: PAGE_URL,
    siteName: "MSE Printing",
    title: "Custom Notepad Printing Guide — in Minneapolis | MSE Printing",
    description:
      "Choose the right notepad: glue-bound, spiral, sticky notes, legal pads. Sheet counts, chipboard backing, bleed, and file prep tips for brand-ready pads.",
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE,
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
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: OG_IMAGE,
        alt: "Notepad printing guide cover image",
      },
    ],
  },
  icons: { icon: "/favicon.ico", apple: "/favicon.ico" },
};

/* ─────────────── VIEWPORT COLOR MODE ─────────────── */
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  colorScheme: "light dark",
};

/* ─────────────── STRUCTURED DATA / SCHEMA.ORG ─────────────── */
function StructuredData({ hasVisibleFAQ = false }: { hasVisibleFAQ?: boolean }) {
  const articleId = `${PAGE_URL}#article`;
  const breadcrumbsId = `${PAGE_URL}#breadcrumbs`;
  const websiteId = `${BASE_URL}/#website`;
  const businessId = `${BASE_URL}/#business`;

  const graph: Record<string, unknown>[] = [
    {
      "@type": "Article",
      "@id": articleId,
      headline: "Custom Notepad Printing Guide — Pads, Sticky Notes & Legal Pads",
      mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
      datePublished: "2025-07-15",
      dateModified: "2025-09-04",
      inLanguage: "en-US",
      image: [OG_IMAGE],
      isPartOf: { "@type": "WebSite", "@id": websiteId },
      author: { "@type": "Organization", name: "MSE Printing", url: BASE_URL },
      publisher: {
        "@type": "Organization",
        name: "MSE Printing",
        url: BASE_URL,
        logo: { "@type": "ImageObject", url: `${BASE_URL}/favicon.ico` },
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": breadcrumbsId,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Blog", item: `${BASE_URL}/blog` },
        {
          "@type": "ListItem",
          position: 2,
          name: "Custom Notepad Printing Guide — Pads, Sticky Notes & Legal Pads",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Custom Notepad Printing Guide — in Minneapolis | MSE Printing",
      isPartOf: { "@type": "WebSite", "@id": websiteId },
      about: { "@type": "LocalBusiness", "@id": businessId },
      breadcrumb: { "@id": breadcrumbsId },
      primaryImageOfPage: { "@type": "ImageObject", url: OG_IMAGE },
      inLanguage: "en-US",
    },
  ];

  if (hasVisibleFAQ) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      inLanguage: "en-US",
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
    });
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
      }}
    />
  );
}

/* ─────────────── MAIN PAGE COMPONENT ─────────────── */
export default async function NotepadPrintingServices() {
  const data = await getBlogPagesData(PAGE_PATH);
  const pageData = data?.BlogNotepadPrintingServicesPageData?.[0];

  if (!pageData) notFound();

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
}
