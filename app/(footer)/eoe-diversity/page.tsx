import React from "react";
import type { EoeDiversitySection } from "types/commonTypes";
import { getSpecialPagesData } from "db/GetSpecialPagesData"; // same helper you already use

/* ──────────────────────────  SEO  ────────────────────────── */
export const metadata = {
  title: "Equal Opportunity & Diversity | MSE Printing",
  description:
    "Explore MSE Printing’s commitment to equal employment opportunity, inclusive hiring, and our diverse workplace culture.",
  keywords: [
    "equal employment opportunity",
    "diversity and inclusion",
    "inclusive hiring",
    "fair workplace",
    "diverse workforce",
    "employment equity",
    "MSE Printing careers",
    "franchise diversity",
    "accessibility accommodations",
    "respectful workplace",
  ],
  applicationName: "MSE Printing",
  category: "Equal Opportunity & Diversity",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/eoe-diversity",
  },
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

  openGraph: {
    title: "Equal Opportunity & Diversity | MSE Printing",
    description:
      "Learn how MSE Printing champions fair hiring, accessibility accommodations, and a culture of respect for all employees and applicants.",
    url: "https://www.mseprinting.com/eoe-diversity",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://www.mseprinting.com/images/footer-images/eoe_diversity.webp",
        width: 800,
        height: 630,
        alt: "MSE Printing Equal Employment Opportunity & Diversity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Equal Opportunity & Diversity | MSE Printing",
    description:
      "Learn how MSE Printing fosters a respectful, inclusive, and diverse workplace culture.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/footer-images/eoe_diversity.webp",
        alt: "Equal Employment Opportunity & Diversity at MSE Printing",
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
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  authors: [{ name: "MSE Printing", url: "https://www.mseprinting.com" }],
  creator: "MSE Printing",
  publisher: "MSE Printing",
} as const;

/* — Schema.org Article structured data — */
const ArticleSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": "https://www.mseprinting.com/eoe-diversity#statement",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.mseprinting.com/eoe-diversity",
    },
    headline: "Equal Opportunity & Diversity",
    description:
      "Explore MSE Printing’s commitment to equal employment opportunity, inclusive hiring, and our diverse workplace culture.",
    author: {
      "@type": "Organization",
      name: "MSE Printing",
      url: "https://www.mseprinting.com",
    },
    publisher: {
      "@type": "Organization",
      name: "MSE Printing",
      logo: {
        "@type": "ImageObject",
        url: "https://www.mseprinting.com/favicon.ico",
      },
    },
    datePublished: "2024-01-01", // Update as appropriate
    dateModified: "2025-05-24", // Update dynamically if possible
    image: [
      "https://www.mseprinting.com/images/footer-images/eoe_diversity.webp",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

/* ---------- Simple Section Block ---------- */
const SectionBlock: React.FC<{ data: EoeDiversitySection }> = ({ data }) => (
  <section id={data.id} className="mt-12">
    <h2 className="text-2xl font-semibold mb-4">{data.heading}</h2>

    {data.content.map((paragraph, idx) =>
      paragraph.includes("clicking here: Accessibility") ? (
        <p key={idx} className="mb-4 leading-relaxed">
          {paragraph.split("Accessibility")[0]}
          <a
            href="/accessibility"
            className="text-blue-600 underline hover:text-blue-800"
          >
            Accessibility
          </a>
        </p>
      ) : (
        <p key={idx} className="mb-4 leading-relaxed">
          {paragraph}
        </p>
      )
    )}
  </section>
);

export default async function EoeDiversity() {
  const { eoeDiversityData = [] } = await getSpecialPagesData("/eoe-diversity");

  const sections: EoeDiversitySection[] = eoeDiversityData.flat();

  if (sections.length === 0) {
    console.warn(
      "eoe_diversity_page table returned no rows — seed the data in Neon."
    );
    return (
      <main className="max-w-xl mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">
          Equal Employment Opportunity & Diversity
        </h1>
        <p className="text-red-600">
          Content is not yet available for this page.
        </p>
      </main>
    );
  }

  const pageTitle =
    "MSE PRINTING EQUAL EMPLOYMENT OPPORTUNITY & DIVERSITY" as const;

  return (
    <>
      <ArticleSchema />
      <main className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-10">{pageTitle}</h1>

        {sections.map((section) => (
          <SectionBlock key={section.id} data={section} />
        ))}
      </main>
    </>
  );
}
