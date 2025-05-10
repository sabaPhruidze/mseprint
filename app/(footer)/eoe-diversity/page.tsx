import React, { FC } from "react";

/**
 * -----------------------------------------------------------------------------
 *  Equal Employment Opportunity & Diversity — Static Content Source
 * -----------------------------------------------------------------------------
 *  • All text lives locally so the component renders without any network calls.
 *  • The content object is exported for easy reuse (e.g. database seeding).
 *  • Each section has a stable `id` you can use as the primary key in Postgres.
 *  • If you later decide to hydrate this page from Neon/PostgreSQL, simply
 *    replace the local import with a fetch to your API layer.
 * -----------------------------------------------------------------------------
 */

/** Database‑ready TypeScript shape for a single section. */
export interface EoeDiversitySection {
  /** Stable, URL‑friendly primary key */
  id: string;
  /** Visible heading in the UI */
  heading: string;
  /** One or more paragraphs (markdown/HTML‑safe). */
  content: string[];
}

/** Complete page content, ready to seed Neon/PostgreSQL if desired. */
export const EOE_DIVERSITY_CONTENT: {
  title: string;
  sections: EoeDiversitySection[];
} = {
  title: "MSE PRINTING EQUAL EMPLOYMENT OPPORTUNITY & DIVERSITY",
  sections: [
    {
      id: "equal-employment-opportunity",
      heading: "EQUAL EMPLOYMENT OPPORTUNITY",
      content: [
        "MSE Printing is committed to providing equal employment opportunities to all individuals. We strictly prohibit discrimination against employees or job applicants based on race, color, religion, sex, pregnancy, national origin, ancestry, citizenship, age, marital status, military or veteran status, physical or mental disability, sexual orientation, medical condition, or any other characteristic protected by state or federal law.",
        "Our franchise locations are independently owned and operated. Each franchisee is responsible for all employment‑related decisions within their location, including hiring, termination, discipline, training, supervision, staffing, scheduling, and the establishment of employment policies and procedures. Employment decisions will be based solely on individual qualifications pertinent to the job requirements. Additionally, the administration of compensation, benefits, transfers, education, and social/recreational programs will be conducted without any illegal discriminatory practices.",
      ],
    },
    {
      id: "accessibility-support",
      heading: "ACCESSIBILITY SUPPORT",
      content: [
        "MSE Printing is dedicated to providing reasonable accommodations to employees in accordance with the Americans with Disabilities Act and applicable state or local laws. A reasonable accommodation is a modification or adjustment to a job or work environment that enables equal employment opportunities without imposing undue hardship on the business operations. You can check in detail by clicking here: Accessibility",
      ],
    },
    {
      id: "corporate-diversity-statement",
      heading: "CORPORATE DIVERSITY STATEMENT",
      content: [
        "At MSE Printing, we strive to create a work environment where all employees feel valued, included, respected, and empowered to contribute to the company’s culture and growth.",
        "We promote an open‑minded workforce composed of individuals from diverse backgrounds, embodying various visions, voices, and perspectives. We support a work environment that is inclusive of all people. Talented professionals of all races, creeds, colors, religions, sexes, national origins, ages, sexual orientations, gender identities, disabilities, and military backgrounds are welcomed to join our organization.",
        "The diversity within the MSE Printing franchise network is a testament to the success of inclusion across America. Our community of franchise owners represents a wide range of ethnic backgrounds, genders, and races. We believe that attracting, developing, and retaining employees who reflect this diversity, as well as that of our customers, is essential to our success.",
        "The positions listed on this website represent employment opportunities that may be available at an independently owned and operated MSE Printing franchise. This means the independent franchisee, not MSE Printing or Franchise Services, Inc., is solely responsible for all employment‑related matters in their business, including setting job requirements and making decisions regarding interviewing, hiring, managing, disciplining, supervising, and compensating employees. If you are hired for any job posting or position at an MSE Printing location, the independent franchisee, not MSE Printing or Franchise Services, Inc., will be your employer.",
      ],
    },
  ],
};

/**
 * Optional helper: Generate a parametrised INSERT (or UPSERT) statement for Neon.
 * You can run this function in your seed script or API route. Adjust the table
 * name and column names to match your schema.
 *
 * Example table:
 *   CREATE TABLE eoe_diversity_sections (
 *     id       TEXT PRIMARY KEY,
 *     heading  TEXT NOT NULL,
 *     content  TEXT NOT NULL            -- store as markdown/HTML string
 *   );
 */
export const buildInsertQueries = (): string[] => {
  return EOE_DIVERSITY_CONTENT.sections.map(
    (s) =>
      `INSERT INTO eoe_diversity_sections (id, heading, content) VALUES ('${s.id}', '${s.heading.replace("'", "''")}', '${s.content
        .join("\n\n")
        .replace(
          /'/g,
          "''"
        )}') ON CONFLICT (id) DO UPDATE SET heading = EXCLUDED.heading, content = EXCLUDED.content;`
  );
};

/**
 * -----------------------------------------------------------------------------
 *  React Component
 * -----------------------------------------------------------------------------
 *  • TailwindCSS utility classes for quick styling.
 *  • Fully accessible: semantic headings, proper hierarchy, and readable line
 *    lengths (max‑w‑3xl).
 * -----------------------------------------------------------------------------
 */

const EoeDiversity: FC = () => {
  const { title, sections } = EOE_DIVERSITY_CONTENT;

  return (
    <section className="px-4 py-12 max-w-3xl mx-auto text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
        {title}
      </h1>

      {sections.map((section) => (
        <article key={section.id} id={section.id} className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            {section.heading}
          </h2>
          {section.content.map((paragraph, idx) => {
            // Special‑case the Accessibility link so it becomes an <a> tag.
            if (paragraph.includes("clicking here: Accessibility")) {
              const [before, _] = paragraph.split("Accessibility");
              return (
                <p key={idx} className="mb-4 leading-relaxed">
                  {before}
                  <a
                    href="/accessibility"
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    Accessibility
                  </a>
                </p>
              );
            }
            return (
              <p key={idx} className="mb-4 leading-relaxed">
                {paragraph}
              </p>
            );
          })}
        </article>
      ))}
    </section>
  );
};

export default EoeDiversity;
