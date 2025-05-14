import React from "react";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import CardsPagesStructure from "components/common/CardsPagesStructure";

const PrintingCopying = async () => {
  const data = await getCategoryPagesData("/printing-copying");
  const pageData = data.PrintingCopyingPageData?.[0];
  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return <CardsPagesStructure pageData={pageData} />;
};

export default PrintingCopying;
