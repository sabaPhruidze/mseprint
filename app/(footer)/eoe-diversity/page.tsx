import React from "react";
import type { EoeDiversitySection } from "types/commonTypes";
import { getSpecialPagesData } from "db/GetSpecialPagesData"; // same helper you already use

/* ──────────────────────────  SEO  ────────────────────────── */
export const metadata = {
  title:
    "Equal Opportunity (EEO), Non-Discrimination & Diversity | MSE Printing",
  description:
    "MSE Printing is an Equal Opportunity Employer. We prohibit discrimination and harassment, support DEI, and provide reasonable ADA accommodations in Minneapolis, MN.",
  keywords: [
    "equal employment opportunity policy",
    "EEO statement",
    "non-discrimination policy",
    "anti-harassment policy",
    "DEI diversity equity inclusion",
    "inclusive hiring Minneapolis",
    "reasonable accommodation ADA",
    "accessibility accommodations",
    "equal opportunity employer Minnesota",
    "MSE Printing careers",
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
    title:
      "Equal Opportunity (EEO), Non-Discrimination & Diversity | MSE Printing",
    description:
      "Our EEO statement outlines zero-tolerance for discrimination/harassment, DEI commitments, and ADA accommodations for applicants and employees in Minneapolis, MN.",
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
    title:
      "Equal Opportunity (EEO), Non-Discrimination & Diversity | MSE Printing",
    description:
      "We’re an Equal Opportunity Employer committed to DEI and ADA accommodations. Read our policy for applicants and employees in Minneapolis, MN.",
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
      "MSE Printing’s Equal Employment Opportunity (EEO) statement: non-discrimination, anti-harassment, DEI commitments, and ADA reasonable accommodations in Minneapolis, MN.",
    datePublished: "2024-01-01",
    dateModified: "2025-09-26",
    about: [
      "Equal Employment Opportunity (EEO)",
      "Non-discrimination",
      "Anti-harassment",
      "Diversity, Equity, and Inclusion (DEI)",
      "ADA reasonable accommodations",
      "Inclusive hiring",
    ],
    articleSection: [
      "EEO Policy",
      "Non-Discrimination & Anti-Harassment",
      "Reasonable Accommodation (ADA)",
      "Inclusive Hiring & DEI",
      "Reporting & Resolution",
    ],
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
