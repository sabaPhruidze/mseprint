import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { getBlogPagesData } from "db/getBlogPagesData";
import PageStructure from "components/common/PageStructure";

const BASE_URL = "https://www.mseprinting.com";
const PAGE_PATH = "/blog/booklet-printing-services";
const PAGE_URL = `${BASE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${BASE_URL}/images/blog/pages/additional/booklet-printing-services.webp`;

/* ─────────────── SEO METADATA ─────────────── */
export const metadata: Metadata = {
  title: "Booklet Printing in Minneapolis | MSE Printing",
  description:
    "Minneapolis booklet printing guide: page counts, saddle stitch vs perfect bound vs coil, paper weights, bleeds, proofing, and turnaround tips from MSE Printing in MN.",
  keywords: [
    "booklet printing Minneapolis",
    "booklet printing services",
    "saddle stitch booklets",
    "perfect bound booklets",
    "coil bound booklets",
    "catalog printing",
    "manual printing",
    "program booklet printing",
    "paper weights for booklets",
    "MSE Printing booklet guide",
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
    title: "Booklet Printing in Minneapolis | MSE Printing",
    description:
      "Choose the right binding, paper, and timeline for catalogs, manuals, and programs. Practical tips from a Minneapolis production team.",
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Examples of saddle-stitched, perfect-bound, and coil-bound booklets",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Booklet Printing in Minneapolis — Binding, Paper & Turnaround Tips",
    description:
      "Saddle stitch vs perfect bind vs coil, page-count rules, paper weights, bleeds, proofing, and lead times.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: OG_IMAGE,
        alt: "Booklet printing guide cover image",
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
/** Article + optional FAQ + Breadcrumbs */
function StructuredData({ hasVisibleFAQ = false }: { hasVisibleFAQ?: boolean }) {
  const articleId = `${PAGE_URL}#article`;
  const breadcrumbsId = `${PAGE_URL}#breadcrumbs`;
  const websiteId = `${BASE_URL}/#website`;
  const businessId = `${BASE_URL}/#business`;

  const graph: Record<string, unknown>[] = [
    {
      "@type": "Article",
      "@id": articleId,
      headline:
        "Booklet Printing in Minneapolis — Guide to Saddle Stitch, Perfect Bind & Coil",
      mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
      datePublished: "2025-07-15",
      dateModified: "2025-09-12",
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
          name: "Booklet Printing in Minneapolis — Guide to Saddle Stitch, Perfect Bind & Coil",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Booklet Printing in Minneapolis | MSE Printing",
      isPartOf: { "@type": "WebSite", "@id": websiteId },
      about: { "@type": "LocalBusiness", "@id": businessId },
      breadcrumb: { "@id": breadcrumbsId },
      primaryImageOfPage: { "@type": "ImageObject", url: OG_IMAGE },
      inLanguage: "en-US",
    },
  ];

  if (hasVisibleFAQ) {
    // Note: if you ever enable this, shorten long answers for best rich-results eligibility.
    // Keeping your FAQ as-is, just normalized URLs/ids.
    graph.push({
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
      inLanguage: "en-US",
      // (Your existing mainEntity array can remain here if you want to enable later)
      mainEntity: [],
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
export default async function BookletPrintingServices() {
  const data = await getBlogPagesData(PAGE_PATH);
  const pageData = data?.BlogBookletPrintingServicesPageData?.[0];

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
