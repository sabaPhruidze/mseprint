import { PageStructureTypes } from "types/commonTypes";
import CollapsibleText from "./CollapsibleText";
import CollapsibleList from "./CollapsibleList";

export default function CustomizationFinishing({
  pageData,
}: {
  pageData: PageStructureTypes;
}) {
  const c = pageData.advancedfeatures?.customizationFinishing;
  if (!c?.heading) return null;

  const p1 =
    c.paragraph1 ||
    "pageData.advancedFeatures.customizationFinishing.paragraph1 not written";
  const list = c.list || [];

  return (
    <>
      <h3
        id="customization-finishing"
        className="scroll-mt-24 text-xl sm:text-xl lg:text-2xl font-inter-bold text-black dark:text-white mt-4"
      >
        {c.heading}
      </h3>

      <CollapsibleText text={p1} />
      {list.length ? (
        <CollapsibleList list={list} />
      ) : (
        "pageData.advancedFeatures.customizationFinishing.list not written"
      )}
    </>
  );
}
