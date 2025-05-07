import React from "react";
import type {
  TitleContentTypes,
  SectionContent,
  FaccessibilityTypes,
} from "../../../types/commonTypes";

/* ---------- SEO metadata (App Router) ---------- */
export const metadata = {
  title: "Accessibility Statement | MSE Printing",
  description:
    "Learn how MSE Printing designs a barrier‑free digital experience that meets WCAG 2.1 AA guidelines and our ongoing plans for inclusive improvements.",
};

/* ---------- Content ---------- */
const accessibilityContent: FaccessibilityTypes = {
  /* 1 ─────────────────────────────────────────── */
  first: "Accessibility Statement",

  /* 2 ─────────────────────────────────────────── */
  second: {
    id: 1,
    title: "MSE Printing",
    contentUp: [
      "At MSE Printing we believe an inclusive online experience is a fundamental right. We design and maintain our website to meet the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA and review it regularly to keep pace with evolving best practices.",
    ],
  },

  /* 3 ─────────────────────────────────────────── */
  third: {
    id: 2,
    title: "Our Ongoing Commitment",
    contentUp: [
      "Accessibility is a living promise, not a one‑time project. We schedule routine audits with assistive‑technology users, conduct code reviews, and roll out incremental fixes to remove barriers.",
      "Recent improvements include:",
    ],
    content: [
      "Full keyboard operability with clear focus indicators",
      "Logical heading hierarchy and ARIA landmarks for screen‑reader navigation",
      "Colour palette and typography that exceed 4.5 : 1 contrast ratios",
      "Layout that adapts cleanly to 400 % zoom and small‑screen devices",
      "Error‑prevention cues and descriptive form‑validation messages",
      "Closed captions on all video content",
    ],
  },

  /* 4 ─────────────────────────────────────────── */
  fourth: {
    heading: "Built‑in Accessibility Features",
    list: [
      {
        id: 1,
        page: "Alternative Text for Images",
        content: "every meaningful image includes a descriptive alt tag.",
      },
      {
        id: 2,
        page: "Skip‑to‑Content Link",
        content: "lets keyboard users bypass repetitive navigation.",
      },
      {
        id: 3,
        page: "Consistent Layout",
        content: "menus and tools stay in familiar locations across pages.",
      },
      {
        id: 4,
        page: "Readable Typography",
        content: "scalable fonts, generous line‑height, and no text‑in‑images.",
      },
    ],
  },

  /* 5 ─────────────────────────────────────────── */
  fifth: {
    heading: "Third‑Party Content",
    paragraph1:
      "Our site may link you to Facebook, X/Twitter, LinkedIn, YouTube, Instagram, or other platforms we don’t control. Their accessibility standards may differ. Please consult each platform’s own statement if you have concerns.",
  },

  /* 6 ─────────────────────────────────────────── */
  sixth: {
    heading: "Need Assistance?",
    paragraph1:
      "Our accessibility‑trained staff are happy to help you navigate the site or obtain content in another format. Contact us Monday–Friday, 8 AM – 5 PM (CST):",
    list: [
      {
        id: 1,
        page: "Email:",
        content: "info@mseprinting.com",
      },
      {
        id: 2,
        page: "Phone:",
        content: "763 542 8812",
      },
    ],
  },

  /* 7 ─────────────────────────────────────────── */
  seventh: {
    id: 4,
    title: "We Value Your Feedback",
    contentUp: [
      "If you encounter a barrier or have suggestions for improvement, please let us know through the channels above.",
      "Your insights drive our roadmap and help us offer an ever‑better experience to every visitor.",
    ],
  },
};

/* ---------- Helper Components ---------- */
const TitleBlock: React.FC<{ data: TitleContentTypes }> = ({ data }) => {
  if (!data.title) return null;

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold mb-4">{data.title}</h2>

      {data.contentUp?.map((p, i) => (
        <p key={`up-${i}`} className="mb-4 leading-relaxed">
          {p}
        </p>
      ))}

      {data.content && (
        <ul className="list-disc list-inside space-y-2">
          {data.content.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      )}

      {data.contentDown?.map((p, i) => (
        <p key={`down-${i}`} className="mt-4 leading-relaxed">
          {p}
        </p>
      ))}
    </section>
  );
};

const SectionBlock: React.FC<{ data: SectionContent }> = ({ data }) => (
  <section className="mt-12">
    <h2 className="text-2xl font-semibold mb-4">{data.heading}</h2>

    {data.paragraph1 && (
      <p className="mb-4 leading-relaxed">{data.paragraph1}</p>
    )}
    {data.paragraph2 && (
      <p className="mb-4 leading-relaxed">{data.paragraph2}</p>
    )}

    {data.list && (
      <ul className="list-disc list-inside space-y-2">
        {data.list.map((item) => {
          const isEmail = item.content?.includes("@");
          const isPhone =
            item.content && item.content.replace(/\s+/g, "").match(/^\d{9,}$/);

          return (
            <li key={item.id}>
              <strong>{item.page}</strong>{" "}
              {isEmail ? (
                <a
                  href={`mailto:${item.content}`}
                  className="font-semibold text-blue-600 underline"
                >
                  {item.content}
                </a>
              ) : isPhone ? (
                <a
                  href={`tel:${item.content?.replace(/\D/g, "")}`}
                  className="font-semibold text-blue-600 underline"
                >
                  {item.content}
                </a>
              ) : (
                item.content
              )}
            </li>
          );
        })}
      </ul>
    )}
  </section>
);

/* ---------- Page Component ---------- */
const Accessibility: React.FC = () => {
  const { first, second, third, fourth, fifth, sixth, seventh } =
    accessibilityContent;

  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-10">{first}</h1>

      <TitleBlock data={second} />
      <TitleBlock data={third} />
      <SectionBlock data={fourth} />
      <SectionBlock data={fifth} />
      <SectionBlock data={sixth} />
      <TitleBlock data={seventh} />
    </main>
  );
};

export default Accessibility;
