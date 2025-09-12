import React from "react";
import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { getBlogPagesData } from "db/getBlogPagesData";
import PageStructure from "components/common/PageStructure";

/* ─────────────── SEO METADATA ─────────────── */
export const metadata: Metadata = {
  title:
    "Booklet Printing in Minneapolis — Guide to Saddle Stitch, Perfect Bind & Coil | MSE Printing",
  description:
    "Minneapolis booklet printing guide: page counts, saddle stitch vs perfect bound vs coil, paper weights, bleeds, proofing, and turnaround tips from MSE Printing in MN.",
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
    type: "article",
    url: "https://www.mseprinting.com/blog/booklet-printing-services",
    siteName: "MSE Printing",
    title:
      "Booklet Printing in Minneapolis — Guide to Saddle Stitch, Perfect Bind & Coil | MSE Printing",
    description:
      "Choose the right binding, paper, and timeline for catalogs, manuals, and programs. Practical tips from a Minneapolis production team.",
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
    title: "Booklet Printing in Minneapolis — Binding, Paper & Turnaround Tips",
    description:
      "Saddle stitch vs perfect bind vs coil, page-count rules, paper weights, bleeds, proofing, and lead times.",
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
/** Article + optional FAQ + Breadcrumbs */
function StructuredData({ hasVisibleFAQ = false }) {
  const url = "https://www.mseprinting.com/blog/booklet-printing-services";
  const img =
    "https://www.mseprinting.com/images/blog/pages/additional/booklet-printing-services.webp";

  const graph: Record<string, unknown>[] = [
    {
      "@type": "Article",
      "@id": `${url}#article`,
      headline:
        "Booklet Printing in Minneapolis — Guide to Saddle Stitch, Perfect Bind & Coil",
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      datePublished: "2025-07-15",
      dateModified: "2025-09-12",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "MSE Printing" },
      publisher: { "@type": "Organization", name: "MSE Printing" },
      image: [img],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumbs`,
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
          name: "Booklet Printing in Minneapolis — Guide to Saddle Stitch, Perfect Bind & Coil",
          item: url,
        },
      ],
    },
  ];

  if (hasVisibleFAQ) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      inLanguage: "en-US",
      mainEntity: [
        {
          "@type": "Question",
          "@id": `${url}#q-format`,
          name: "Which file formats should we submit for professional printing?",
          acceptedAnswer: {
            "@type": "Answer",
            "@id": `${url}#a-format`,
            text: "The most reliable format for professional printing is a high-resolution PDF with all fonts embedded and images at 300 DPI or higher. This ensures consistent results and prevents common issues like font substitutions or blurry graphics. We also accept Adobe InDesign, Illustrator, or Photoshop files if all links and fonts are included. Our pre-press specialists in Minneapolis review every file before production to check bleeds, resolution, and color profiles—helping businesses across Minnesota and the USA avoid delays and achieve flawless final results.",
          },
        },
        {
          "@type": "Question",
          "@id": `${url}#q-pantone`,
          name: "Can you match Pantone® brand colors for our print projects?",
          acceptedAnswer: {
            "@type": "Answer",
            "@id": `${url}#a-pantone`,
            text: "Yes. We use calibrated presses and spectrophotometer technology to reproduce Pantone® and custom brand colors with precision. This guarantees consistency across all your print materials, whether business cards, brochures, or annual reports. Our Minneapolis production team carefully monitors every run, so your brand colors remain vibrant and accurate for both small local projects and large national campaigns.",
          },
        },
        {
          "@type": "Question",
          "@id": `${url}#q-eco`,
          name: "Do you offer eco-friendly paper options for our printing needs?",
          acceptedAnswer: {
            "@type": "Answer",
            "@id": `${url}#a-eco`,
            text: "We are committed to sustainable printing practices. Options include FSC-certified and 100% post-consumer recycled papers, soy-based inks, and carbon-neutral printing processes. Many Minnesota companies choose these eco-friendly solutions to meet their environmental goals while still receiving durable, high-quality materials. Selecting these papers helps reduce your carbon footprint and supports responsible forestry without sacrificing professional results.",
          },
        },
        {
          "@type": "Question",
          "@id": `${url}#q-turn`,
          name: "How fast can you turn a large corporate report printing project?",
          acceptedAnswer: {
            "@type": "Answer",
            "@id": `${url}#a-turn`,
            text: "Large projects like annual reports or catalogs are usually completed within 3–5 business days, depending on page count and finishing. For urgent deadlines, we offer expedited services—often same-day or next-day using high-speed digital presses. Our team evaluates each project to recommend the fastest and most efficient production method, helping Twin Cities businesses and nationwide clients meet critical timelines without compromising quality.",
          },
        },
        {
          "@type": "Question",
          "@id": `${url}#q-digital-offset`,
          name: "What is the difference between digital and offset printing, and which is right for my project?",
          acceptedAnswer: {
            "@type": "Answer",
            "@id": `${url}#a-digital-offset`,
            text: "Digital printing is ideal for short runs, variable data, and projects that require quick turnaround. Offset printing, by contrast, is best for large-volume jobs because of its lower cost per unit and exceptional consistency across thousands of pieces. In practice, a Minnesota business might choose digital for 200 personalized booklets, but offset for 20,000 catalogs. We guide each client toward the most cost-effective method for their project.",
          },
        },
        {
          "@type": "Question",
          "@id": `${url}#q-proof`,
          name: "What is your proofing process for print jobs?",
          acceptedAnswer: {
            "@type": "Answer",
            "@id": `${url}#a-proof`,
            text: "Every project includes a proofing stage. For most jobs, we provide digital PDF proofs to confirm layout and content. For color-critical or high-value projects, we recommend physical proofs printed on the chosen paper stock. This allows you to evaluate color, finish, and binding before the full run begins. We only move forward once you provide written approval, ensuring peace of mind and eliminating surprises.",
          },
        },
        {
          "@type": "Question",
          "@id": `${url}#q-ship`,
          name: "Do you offer delivery or shipping for completed printing orders?",
          acceptedAnswer: {
            "@type": "Answer",
            "@id": `${url}#a-ship`,
            text: "Yes. We provide local delivery throughout Minneapolis and the greater Twin Cities area, and ship nationally via trusted carriers with full tracking. Clients are also welcome to pick up their orders directly from our Minneapolis print shop for added convenience. Whether you’re in Minnesota or across the USA, we make sure your materials arrive on time and in excellent condition.",
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
const BookletPrintingServices = async () => {
  const data = await getBlogPagesData("/blog/booklet-printing-services");
  const pageData = data?.BlogBookletPrintingServicesPageData?.[0];

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

export default BookletPrintingServices;
