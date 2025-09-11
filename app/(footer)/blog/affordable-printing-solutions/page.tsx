import React from "react";
import { Metadata, Viewport } from "next";
import { getBlogPagesData } from "db/getBlogPagesData";
import PageStructure from "components/common/PageStructure";

/* ─────────────── SEO METADATA ─────────────── */
const CANONICAL =
  "https://www.mseprinting.com/blog/affordable-printing-solutions";

export const metadata: Metadata = {
  title: "Affordable Printing Solutions | MSE Printing",
  description:
    "Discover affordable printing services for Minneapolis businesses. Practical tips and options to keep print quality high while controlling costs.",
  keywords: [
    "affordable printing Minneapolis",
    "budget printing solutions",
    "low-cost brochures",
    "cost-effective flyers",
    "Minneapolis print shop",
    "discount printing services",
    "custom print deals",
    "digital printing Minneapolis",
  ],
  applicationName: "MSE Printing",
  category: "Blog: Affordable Printing",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: { canonical: CANONICAL },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  // Tip: put site verification in app/layout.tsx to apply sitewide.
  verification: {
    google: "ABCD1234xyz",
  },
  openGraph: {
    title: "Affordable Printing Solutions | MSE Printing",
    description:
      "Professional quality printing tailored to your budget. Explore cost-efficient options in Minneapolis.",
    url: CANONICAL,
    siteName: "MSE Printing",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://www.mseprinting.com/images/blog/pages/additional/affordable-printing-solutions.webp",
        width: 1200,
        height: 630,
        alt: "Affordable business printing in Minneapolis including cards, brochures, and signage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Affordable Printing Solutions | MSE Printing",
    description:
      "Budget-friendly print services that make your brand look professional without overspending.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/blog/pages/additional/affordable-printing-solutions.webp",
        alt: "Cost-effective printing services for Minneapolis businesses",
      },
    ],
  },
  other: {
    "geo.region": "US-MN",
    "geo.placename": "Minneapolis",
    "geo.position": "45.0230;-93.2790",
    ICBM: "45.0230, -93.2790",
    "business:contact_data:street_address": "3839 Washington Ave N Ste. 103",
    "business:contact_data:locality": "Minneapolis",
    "business:contact_data:region": "MN",
    "business:contact_data:postal_code": "55412",
    "business:contact_data:country_name": "USA",
    "business:contact_data:phone_number": "763-542-8812",
    "og:email": "info@mseprinting.com",
    "og:phone_number": "763-542-8812",
  },
  icons: { icon: "/favicon.ico", apple: "/favicon.ico" },
  authors: [{ name: "MSE Printing", url: "https://www.mseprinting.com" }],
  creator: "MSE Printing",
  publisher: "MSE Printing",
};

/* ─────────────── VIEWPORT COLOR MODE ─────────────── */
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  colorScheme: "light dark",
};

/* ─────────────── STRUCTURED DATA / SCHEMA.ORG (BlogPosting) ─────────────── */
function BlogPostingSchema(props: {
  headline: string;
  description: string;
  image: string;
  datePublished?: string;
  dateModified?: string;
}) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${CANONICAL}#blogposting`,
    mainEntityOfPage: CANONICAL,
    headline: props.headline,
    description: props.description,
    image: [props.image],
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
        url: "https://www.mseprinting.com/favicon.ico",
      },
    },
    datePublished: props.datePublished || undefined,
    dateModified: props.dateModified || props.datePublished || undefined,
    articleSection: "Printing",
    url: CANONICAL,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}

/* ─────────────── TYPES ─────────────── */
type BlogPageData = {
  title?: string;
  metaDescription?: string;
  excerpt?: string;
  ogImage?: string;
  image?: string;
  heroImage?: string;
  publishedAt?: string | Date;
  updatedAt?: string | Date;
  createdAt?: string | Date;
  seo?: { title?: string; description?: string };
};

/* ─────────────── MAIN PAGE COMPONENT ─────────────── */
const AffordablePrintingSolutions = async () => {
  const data = await getBlogPagesData("/blog/affordable-printing-solutions");
  const pageDataRaw = data?.BlogAffordablePrintingSolutionsPageData?.[0];

  if (!pageDataRaw) {
    return <div>Data not available.</div>;
  }

  const pageData = pageDataRaw as BlogPageData;

  const headline =
    (pageData.seo && pageData.seo.title) ||
    pageData.title ||
    "Affordable Printing Solutions";

  const descriptionText =
    (pageData.seo && pageData.seo.description) ||
    pageData.metaDescription ||
    pageData.excerpt ||
    "Discover affordable printing services for Minneapolis businesses.";

  const heroImage =
    pageData.ogImage ||
    pageData.image ||
    pageData.heroImage ||
    "https://www.mseprinting.com/images/blog/pages/additional/affordable-printing-solutions.webp";

  const published = pageData.publishedAt
    ? new Date(pageData.publishedAt).toISOString()
    : pageData.createdAt
      ? new Date(pageData.createdAt).toISOString()
      : undefined;

  const modified = pageData.updatedAt
    ? new Date(pageData.updatedAt).toISOString()
    : published;

  return (
    <>
      <BlogPostingSchema
        headline={headline}
        description={descriptionText}
        image={heroImage}
        datePublished={published}
        dateModified={modified}
      />
      <PageStructure
        pageData={pageDataRaw}
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

export default AffordablePrintingSolutions;
