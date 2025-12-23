import { PageStructureTypes } from "types/commonTypes";
import CollapsibleList from "./CollapsibleList";

type Item = { id: string | number; page?: string; content?: string };

export default function WhyTrustUsSection({
  pageData,
}: {
  pageData: PageStructureTypes;
}) {
  const h = pageData.whytrustus?.heading;
  if (!h) return null;

  const list = (pageData.whytrustus?.list || []) as Item[];
  const asList = list.map((it) => ({
    id: it.id,
    page: it.page ? `✅ ${it.page}` : "",
    content: it.content || "",
  }));

  return (
    <section className="text-left">
      <h2
        id="why-trust-us"
        className="text-2xl sm:text-3xl lg:text-4xl font-inter-bold text-black dark:text-white mt-6"
      >
        {h}
      </h2>

      {asList.length ? (
        <CollapsibleList list={asList} />
      ) : (
        "pageData.whyTrustUs.list not written"
      )}
    </section>
  );
}
