import { PageStructureTypes } from "types/commonTypes";
import SecondaryImage from "./SecondaryImage";
import CollapsibleText from "./CollapsibleText";
import CollapsibleList from "./CollapsibleList";

export default function WhyChooseSection({
  pageData,
}: {
  pageData: PageStructureTypes;
}) {
  const h =
    pageData.whychoosesection?.heading ||
    "pageData.whyChooseSection.heading not written";
  const p1 =
    pageData.whychoosesection?.paragraph1 ||
    "pageData.whyChooseSection.paragraph1 not written";
  const p2 = pageData.whychoosesection?.paragraph2 || "";
  const full = `${p1}${p2 ? " " + p2 : ""}`;
  const list = pageData.whychoosesection?.list || [];

  return (
    <>
      <h2
        id="why-choose"
        className="text-2xl sm:text-3xl lg:text-4xl font-inter-bold text-black dark:text-white my-6"
      >
        {h}
      </h2>

      <SecondaryImage pageData={pageData} />

      <div className="mt-4 text-left">
        <CollapsibleText text={full} />
        {list.length > 0 && <CollapsibleList list={list} />}
      </div>
    </>
  );
}
