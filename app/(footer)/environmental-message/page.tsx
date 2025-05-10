import type { Metadata } from "next";
import { EnvironmentalSection } from "types/commonTypes";
/* =============================================================================
 *  MSE Printing – Environmental Commitment (Server Component / SEO‑Ready)
 * =============================================================================
 *  • Mirrors the exact wording and emphasis (bold) from the uploaded Word file.
 *  • Sections are exported so you can seed Neon/PostgreSQL without altering
 *    structure. Each bold phrase is wrapped in <strong> for fidelity.
 * =============================================================================
 */

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

/* ---------------------------------------------------------------------------
 *  Types & Data Model
 * ------------------------------------------------------------------------ */

export const ENVIRONMENTAL_CONTENT: {
  title: string;
  sections: EnvironmentalSection[];
} = {
  title: "MSE Printing – Environmental Commitment",
  sections: [
    {
      id: "intro",
      heading: null,
      content: [
        `At MSE Printing we believe great print should never come at the planet’s expense. Every decision we make— from paper selection to pressroom chemistry— is guided by a single goal: leave a lighter footprint for future generations while helping your brand thrive.`,
      ],
    },
    {
      id: "sustainability-actions",
      heading: "How We Put Sustainability Into Action",
      content: [],
      list: [
        `<strong>Digital & Direct‑to‑Plate Technology</strong> – Fewer chemicals, faster makeready, lower energy use.`,
        `<strong>Recycled & Post‑Consumer‑Waste (PCW) Papers</strong> – Less water and energy consumed, supports responsible forestry.`,
        `<strong>Low‑VOC, Soy‑Based Inks</strong> – Reduce airborne emissions during drying and produce vibrant color.`,
        `<strong>Eco‑Savvy Graphic Design</strong> – Layouts optimized to minimize trim waste and ink coverage.`,
        `<strong>Document Scanning & Archiving</strong> – Convert hard copies to searchable files and free up storage space for recycling.`,
        `<strong>Lean, Streamlined Workflows</strong> – Continuous‑improvement audits cut waste at every production stage.`,
        `<strong>Online “Send‑a‑File” & “Request‑a‑Quote” Tools</strong> – Eliminate unnecessary courier trips and paper forms.`,
        `<strong>Web‑to‑Print & On‑Demand Digital Runs</strong> – Print exactly what you need, when you need it—no obsolete stock headed to landfills.`,
        `<strong>Smart Online Ordering</strong> – Built‑in proofing reduces errors, saving material and energy.`,
        `<strong>Variable‑Data Printing</strong> – Targeted messaging means higher ROI and fewer pieces in the recycle bin.`,
      ],
    },
    {
      id: "partnering",
      heading: "Partnering With You for a Greener Future",
      content: [
        `Sustainability works best when we collaborate. Our experts will recommend eco‑friendly substrates, finishes, and mailing strategies tailored to your campaign goals and budget. Together we can cut waste, conserve resources, and strengthen your brand’s environmental credibility.`,
      ],
    },
    {
      id: "responsible-sourcing",
      heading: "Responsible Sourcing – Lacey Act Compliance",
      content: [
        `MSE Printing strictly follows the Lacey Act Amendment of 2008, which bans the trade of illegally harvested plant products. We require every paper supplier to certify the legality and traceability of their fiber, so you can print with confidence.`,
      ],
    },
    {
      id: "cta",
      heading: null,
      content: [
        `Ready to bring your project to life the sustainable way? Let’s talk about how our green printing solutions can power your next campaign—while protecting the planet we all share.`,
      ],
    },
  ],
};

/* ---------------------------------------------------------------------------
 *  Neon seed helper (optional)
 * ------------------------------------------------------------------------ */
export const buildInsertQueries = (): string[] =>
  ENVIRONMENTAL_CONTENT.sections.map((s, index) => {
    const json = s.list ?? s.content;
    const payload = JSON.stringify(json).replace(/'/g, "''");
    return `INSERT INTO environmental_commitment_page (id, section_index, heading, content) VALUES ('${s.id}', ${index}, '${
      s.heading ? s.heading.replace(/'/g, "''") : ""
    }', '${payload}'::jsonb) ON CONFLICT (id) DO UPDATE SET heading = EXCLUDED.heading, content = EXCLUDED.content, section_index = EXCLUDED.section_index, updated_at = NOW();`;
  });

/* ---------------------------------------------------------------------------
 *  Render Component
 * ------------------------------------------------------------------------ */
export default function EnvironmentalCommitment() {
  const { title, sections } = ENVIRONMENTAL_CONTENT;

  return (
    <main className="max-w-3xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-4xl font-bold text-center mb-10">{title}</h1>

      {sections.map(({ id, heading, content, list }) => (
        <section key={id} id={id} className="mt-12">
          {heading && (
            <h2 className="text-2xl font-semibold mb-4">{heading}</h2>
          )}

          {content.map((p, idx) => (
            <p
              key={idx}
              className="mb-4 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: p }}
            />
          ))}

          {list && (
            <ul className="list-disc list-inside space-y-2">
              {list.map((item, idx) => (
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
