import React from "react";
import type {
  TitleContentTypes,
  SectionContent,
  privacyPolicyTypes,
} from "../../../types/commonTypes";
import { getSpecialPagesData } from "db/GetSpecialPagesData";

export const metadata = {
  title: "Privacy Policy | MSE Printing",
  description:
    "Read how MSE Printing collects, uses, and protects your personal information in accordance with the CCPA and other privacy regulations.",
  alternates: { canonical: "https://www.mseprinting.com/privacy-policy" },
  openGraph: {
    title: "Privacy Policy | MSE Printing",
    description:
      "Learn how MSE Printing safeguards your data, your rights under the CCPA, and how you can contact us to manage your information.",
    url: "https://www.mseprinting.com/privacy-policy",
    siteName: "MSE Printing",
    type: "article",
  },
};

const TitleBlock: React.FC<{ data: TitleContentTypes }> = ({ data }) =>
  !data.title ? null : (
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
          const isPhone = item.content?.replace(/\s+/g, "").match(/^\d{9,}$/);

          const pagePart = item.page ? <span>{item.page}</span> : null;
          const pathPart = item.path ? <strong>{item.path}</strong> : null;

          const renderedContent = isEmail ? (
            <a
              href={`mailto:${item.content}`}
              className="font-semibold text-blue-600"
            >
              {item.content}
            </a>
          ) : isPhone ? (
            <a
              href={`tel:${item.content?.replace(/\D/g, "")}`}
              className="font-semibold text-blue-600"
            >
              {item.content}
            </a>
          ) : (
            <span>{item.content}</span>
          );

          return (
            <li key={item.id}>
              {pagePart}
              {pathPart}
              {pagePart || pathPart ? " " : null}
              {renderedContent}
            </li>
          );
        })}
      </ul>
    )}
  </section>
);

/* ---------- Page Component ---------- */
export default async function PrivacyPolicy() {
  /** 1. Fetch data for this path */
  const { privacyPolicyData = [] } =
    await getSpecialPagesData("/privacy-policy");

  /** 2. Take the first (and only) row */
  const policyRow = privacyPolicyData[0] as privacyPolicyTypes | undefined;

  if (!policyRow) {
    console.warn(
      "privacy_policy_page table returned no rows — seed the data in Neon."
    );
    return (
      <main className="max-w-xl mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-red-600">
          Privacy‑policy content is not yet available.
        </p>
      </main>
    );
  }

  /** 3. Destructure and render */
  const { first, second, third, fourth, fifth, sixth, seventh } = policyRow;

  return (
    <main className="screen-size-15:w-[1200px] max-w-[1200px] max-w-full screen-size-5:mx-20 mx-10 screen-size-15:text-left text-center">
      <h1 className="text-4xl font-bold text-center my-10">{first}</h1>

      <TitleBlock data={second} />
      <SectionBlock data={third} />
      <SectionBlock data={fourth} />
      <SectionBlock data={fifth} />
      <SectionBlock data={sixth} />
      <TitleBlock data={seventh} />
    </main>
  );
}
