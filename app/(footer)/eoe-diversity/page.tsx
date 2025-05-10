import React from "react";
import type { EoeDiversitySection } from "types/commonTypes";
import { getSpecialPagesData } from "db/GetSpecialPagesData"; // same helper you already use

/* ──────────────────────────  SEO  ────────────────────────── */
export const metadata = {
  title: "Equal Employment Opportunity & Diversity | MSE Printing",
  description:
    "Explore MSE Printing’s commitment to equal employment opportunity, our inclusive hiring practices, and how we foster a diverse workplace culture across our franchise network.",
  alternates: {
    canonical: "https://www.mseprinting.com/eoe-diversity",
  },
  openGraph: {
    title: "Equal Employment Opportunity & Diversity | MSE Printing",
    description:
      "Learn how MSE Printing champions fair hiring, accessibility accommodations, and a culture of respect for all employees and applicants.",
    url: "https://www.mseprinting.com/eoe-diversity",
    siteName: "MSE Printing",
    type: "article",
  },
  robots: { index: true, follow: true },
} as const;

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
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-10">{pageTitle}</h1>

      {sections.map((section) => (
        <SectionBlock key={section.id} data={section} />
      ))}
    </main>
  );
}
