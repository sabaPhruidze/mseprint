import { PageStructureTypes } from "types/commonTypes";
import { LocationTokens, applyTokens } from "./utils";

export default function ServicesSection({
  pageData,
  tokens,
}: {
  pageData: PageStructureTypes;
  tokens?: LocationTokens;
}) {
  const heading =
    applyTokens(pageData.servicessection?.heading || "", tokens) ||
    "pageData.servicesSection.heading not written";

  const p1 =
    pageData.servicessection?.paragraph1 ||
    "pageData.servicesSection.paragraph1 not written";

  return (
    <>
      <h2
        id="services"
        className="text-2xl sm:text-3xl lg:text-4xl font-inter-bold text-black dark:text-white mt-6"
      >
        {heading}
      </h2>
      <p className="mt-4 text-left">{p1}</p>
    </>
  );
}
