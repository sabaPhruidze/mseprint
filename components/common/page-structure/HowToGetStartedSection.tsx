import { PageStructureTypes } from "types/commonTypes";
import CollapsibleList from "./CollapsibleList";

type Step = { id: string | number; page?: string; content?: string };

export default function HowToGetStartedSection({
  pageData,
}: {
  pageData: PageStructureTypes;
}) {
  const h = pageData.howtogetstarted?.heading;
  if (!h) return null;

  const list = (pageData.howtogetstarted?.list || []) as Step[];
  const asList = list.map((it) => ({
    id: it.id,
    page: it.page || "",
    content: it.content || "",
  }));

  return (
    <section className="text-left">
      <h2
        id="how-to-get-started"
        className="text-2xl sm:text-3xl lg:text-4xl font-inter-bold text-black dark:text-white mt-6"
      >
        {h}
      </h2>

      {asList.length ? (
        <CollapsibleList list={asList} />
      ) : (
        "pageData.howToGetStarted.list not written"
      )}
    </section>
  );
}
