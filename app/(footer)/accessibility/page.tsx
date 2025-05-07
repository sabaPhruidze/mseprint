import React from "react";
import type {
  TitleContentTypes,
  SectionContent,
} from "../../../types/commonTypes";
import { getSpecialPagesData } from "db/GetSpecialPagesData";

export const metadata = {
  title: "Accessibility Statement | MSE Printing",
  description:
    "Learn how MSE Printing designs a barrier‑free digital experience that meets WCAG 2.1 AA guidelines and our ongoing plans for inclusive improvements.",
};

const TitleBlock: React.FC<{ data: TitleContentTypes }> = ({ data }) => {
  if (!data?.title) return null;

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
export default async function Accessibility() {
  const data = await getSpecialPagesData("/accessibility");
  const pageData = data.accessibilityData?.[0];

  if (!pageData) {
    return (
      <main className="max-w-[1200px] mx-auto text-center py-24">
        <h1 className="text-4xl font-bold">Accessibility Statement</h1>
        <p className="mt-6">
          Content is being prepared. Please check back soon.
        </p>
      </main>
    );
  }

  const { first, second, third, fourth, fifth, sixth, seventh } = pageData;

  return (
    <main className="screen-size-15:w-[1200px] max-w-full screen-size-5:mx-20 mx-0 screen-size-15:text-left text-center">
      <h1 className="text-4xl font-bold text-center mb-10">{first}</h1>

      <TitleBlock data={second} />
      <TitleBlock data={third} />
      <SectionBlock data={fourth} />
      <SectionBlock data={fifth} />
      <SectionBlock data={sixth} />
      <TitleBlock data={seventh} />
    </main>
  );
}
