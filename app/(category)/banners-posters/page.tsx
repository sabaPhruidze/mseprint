import React from "react";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

const BannersPosters = async () => {
  const data = await getCategoryPagesData("/printing-copying");
  const pageData = data.PrintingCopyingPageData?.[0];
  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return <PageStructure pageData={pageData} />;
};

export default BannersPosters;
