import type { Metadata } from "next";
import { EnvironmentalSection } from "types/commonTypes";
import { getSpecialPagesData } from "db/GetSpecialPagesData";

export const metadata: Metadata = {
  title: "Environmental Commitment | MSE Printing",
  description:
    "Discover how MSE Printing reduces its environmental footprint through sustainable materials, lean workflows, and responsible sourcing.",
  alternates: {
    canonical: "https://www.mseprinting.com/environmental-commitment",
  },
  openGraph: {
    title: "Environmental Commitment | MSE Printing",
    description:
      "Learn how MSE Printing powers your brand while protecting the planet—digital technologies, recycled papers, soy inks, and more.",
    url: "https://www.mseprinting.com/environmental-commitment",
    siteName: "MSE Printing",
    type: "article",
  },
  robots: { index: true, follow: true },
};

export default async function EnvironmentalCommitment() {
  const { environmentalMessageData = [] } = await getSpecialPagesData(
    "/environmental-message"
  );

  // Apply runtime sort only if section_index is available
  const sections = (
    environmentalMessageData.flat() as (EnvironmentalSection & {
      section_index?: number;
    })[]
  ).sort((a, b) => (a.section_index ?? 0) - (b.section_index ?? 0));

  if (sections.length === 0) {
    return (
      <main className="max-w-xl mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Environmental Commitment</h1>
        <p className="text-red-600">
          Environmental message content is not yet available.
        </p>
      </main>
    );
  }

  const pageTitle = "MSE Printing – Environmental Commitment" as const;

  return (
    <main className="max-w-3xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-4xl font-bold text-center mb-10">{pageTitle}</h1>

      {sections.map((section) => (
        <section key={section.id} id={section.id} className="mt-12">
          {section.heading && (
            <h2 className="text-2xl font-semibold mb-4">{section.heading}</h2>
          )}

          {section.content.map((p, idx) => (
            <p
              key={idx}
              className="mb-4 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: p }}
            />
          ))}

          {section.list && (
            <ul className="list-disc list-inside space-y-2">
              {section.list.map((item, idx) => (
                <li
                  key={idx}
                  className="leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              ))}
            </ul>
          )}
        </section>
      ))}
    </main>
  );
}
