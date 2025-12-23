import { PageStructureTypes } from "types/commonTypes";
import ContactValue from "./ContactValue";

type Step = { id: string | number; page?: string; content?: string };

export default function GetStartedSection({
  pageData,
}: {
  pageData: PageStructureTypes;
}) {
  const h =
    pageData.getstartedsection?.heading ||
    "pageData.getStartedSection?.heading not written";

  const steps = (pageData.getstartedsection?.steps || []) as Step[];
  const finalP =
    pageData.getstartedsection?.finalParagraph ||
    "pageData.getStartedSection?.finalParagraph not written";

  return (
    <section className="text-left">
      <h2
        id="get-started"
        className="text-2xl sm:text-3xl lg:text-4xl font-inter-bold text-black dark:text-white mt-6"
      >
        {h}
      </h2>

      <p className="mt-4">
        {steps.length
          ? steps.map((it) => (
              <span key={it.id}>
                {it.page ? <span>{` ${it.page} `}</span> : null}
                <ContactValue value={String(it.content || "")} />
              </span>
            ))
          : "pageData.getStartedSection?.steps not written"}
      </p>

      <p className="mt-2">{finalP}</p>
    </section>
  );
}
