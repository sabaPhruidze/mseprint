import React from "react";
import { getPageStructureData } from "db/getPageStructureData";
import PageStructure from "components/common/PageStructure"; // Adjust the import path as needed

const CommercialOffsetPrinting = async () => {
  const data = await getPageStructureData();
  const pageData = data.CommercialOffsetPrintingPageData[0];
  return <PageStructure pageData={pageData} />;
};

export default CommercialOffsetPrinting;
