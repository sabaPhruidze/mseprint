import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { getBlogPagesData } from "db/getBlogPagesData";
import PageStructure from "components/common/PageStructure";

const BASE_URL = "https://www.mseprinting.com";
const PAGE_PATH = "/blog/professional-printing-services";
const PAGE_URL = `${BASE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${BASE_URL}/images/blog/pages/additional/professional-printing-services.webp`;

/* ─────────────── SEO METADATA ─────────────── */
export const metadata: Metadata = {
  title: "Corporate Materials, Labels & Large Format | MSE Printing",
  description:
    "A practical guide to professional printing in Minneapolis: brochures, labels, large-format graphics, paper/finish choices, file prep, and when to use digital vs offset.",
  keywords: [
    "professional printing services Minneapolis",
    "business printing Minneapolis",
    "corporate printing materials",
    "labels and packaging printing",
    "large format printing Minneapolis",
    "brochure printing",
    "print file preparation",
    "digital vs offset printing",
    "paper and finishes guide",
    "MSE Printing blog",
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
    title: "Corporate Materials, Labels & Large Format | MSE Printing",
    description:
      "Turnaround expectations, color management, and file prep tips from a Minneapolis production team serving Minnesota and the USA.",
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE,
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
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: OG_IMAGE,
        alt: "Professional printing guide cover image",
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
      headline:
        "Professional Printing Guide — Corporate Materials, Labels & Large Format",
      mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
      datePublished: "2025-08-01",
      dateModified: "2025-09-04",
      inLanguage: "en-US",
      image: [OG_IMAGE],
      isPartOf: { "@type": "WebSite", "@id": websiteId },
      author: { "@type": "Organization", name: "MSE Printing", url: BASE_URL },
      publisher: {
        "@type": "Organization",
        name: "MSE Printing",
        url: BASE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${BASE_URL}/favicon.ico`,
        },
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
          name: "Professional Printing Guide — Corporate Materials, Labels & Large Format",
          item: PAGE_URL,
        },
      ],
    },
    // Optional: tie to your LocalBusiness entity (if you keep businessId in layout schema)
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Corporate Materials, Labels & Large Format | MSE Printing",
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
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
      }}
    />
  );
}

/* ─────────────── MAIN PAGE COMPONENT ─────────────── */
export default async function ProfessionalPrintingServices() {
  const data = await getBlogPagesData(PAGE_PATH);
  const pageData = data?.BlogProfessionalPrintingServicesPageData?.[0];

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
