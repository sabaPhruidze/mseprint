import { PageStructureTypes } from "types/commonTypes";
import CollapsibleList from "./CollapsibleList";

export default function ConvenientPrinting({
  pageData,
}: {
  pageData: PageStructureTypes;
}) {
  const c = pageData.advancedfeatures?.convenientPrinting;
  if (!c?.heading) return null;

  const list = (c.list || []).map((it) => ({
    id: it.id,
    page: it.page || "",
    content: it.content || "",
  }));

  return (
    <>
      <h3
        id="convenient-printing"
        className="text-xl sm:text-xl lg:text-2xl font-inter-bold mt-4 screen-size-10:text-left"
      >
        {c.heading}
      </h3>

      {list.length ? (
        <CollapsibleList list={list} />
      ) : (
        "pageData.advancedFeatures.convenientPrinting.list not written"
      )}
    </>
  );
}
