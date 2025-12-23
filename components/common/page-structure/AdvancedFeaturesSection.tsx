import { PageStructureTypes } from "types/commonTypes";
import CustomizationFinishing from "./CustomizationFinishing";
import BulkPrinting from "./BulkPrinting";
import ConvenientPrinting from "./ConvenientPrinting";

export default function AdvancedFeaturesSection({
  pageData,
}: {
  pageData: PageStructureTypes;
}) {
  const af = pageData.advancedfeatures;
  if (!af?.heading) return null;

  return (
    <section className="text-left">
      <h2
        id="advanced-features"
        className="text-2xl sm:text-3xl lg:text-4xl font-inter-bold text-black dark:text-white mt-6"
      >
        {af.heading}
      </h2>

      <CustomizationFinishing pageData={pageData} />
      <BulkPrinting pageData={pageData} />
      <ConvenientPrinting pageData={pageData} />
    </section>
  );
}
