import { PageStructureTypes } from "types/commonTypes";
import { LocationTokens, applyTokens, slugify } from "./utils";
import { buildFaqJsonLd, normalizeFaqForSchema, FAQItem } from "./faqSchema";

export default function FaqSection({
  pageData,
  tokens,
}: {
  pageData: PageStructureTypes;
  tokens?: LocationTokens;
}) {
  const list = (pageData.faqs?.list || []) as FAQItem[];
  const schemaList = normalizeFaqForSchema(list);
  const jsonLd = schemaList.length ? buildFaqJsonLd(schemaList) : null;

  return (
    <section className="text-left">
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}

      <h2
        id="faqs"
        className="text-2xl sm:text-3xl lg:text-4xl font-inter-bold text-black dark:text-white mt-6"
      >
        {applyTokens(pageData.faqs?.heading || "", tokens) ||
          "pageData.faqs?.heading not written"}
      </h2>

      {!list.length ? (
        "pageData.faqs?.list not written"
      ) : (
        <>
          <details className="w-full md:hidden group mt-2" role="group">
            <summary className="cursor-pointer marker:hidden list-none p-0">
              <span className="block font-inter-bold">
                Q:&nbsp;{list[0].question}
              </span>
              <span className="block">A:&nbsp;{list[0].answer}</span>
              <span className="ml-1 text-blue-600 group-open:hidden">
                see more&nbsp;…
              </span>
              <span className="ml-1 text-blue-600 hidden group-open:inline">
                see less
              </span>
            </summary>
            {list.slice(1).map((it, idx) => (
              <div className="mt-4" key={`${idx}-${it.question}`}>
                <h3
                  id={`faq-${slugify(String(it.question || ""))}`}
                  className="scroll-mt-24 text-xl lg:text-2xl font-inter-bold"
                >
                  Q:&nbsp;{it.question}
                </h3>
                <p className="mt-2">A:&nbsp;{it.answer}</p>
              </div>
            ))}
          </details>

          <div className="hidden md:block">
            {list.map((it, idx) => (
              <div className="mt-4" key={`${idx}-${it.question}`}>
                <h3
                  id={`faq-${slugify(String(it.question || ""))}`}
                  className="scroll-mt-24 text-xl lg:text-2xl font-inter-bold"
                >
                  Q:&nbsp;{it.question}
                </h3>
                <p className="mt-2">A:&nbsp;{it.answer}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
