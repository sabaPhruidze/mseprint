import React from "react";
import { Metadata } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

export const metadata: Metadata = {
  title: "Short Run Packaging | MSE Print",
  description:
    "Agile and high-quality packaging tailored for short runs by MSE Print.",
  alternates: {
    canonical: "https://www.mseprinting.com/short-run-packaging",
  },
  metadataBase: new URL("https://www.mseprinting.com/short-run-packaging"),
  openGraph: {
    title: "Short Run Packaging | MSE Print",
    description:
      "Flexible, premium-quality short run packaging for startups, seasonal launches, and limited editions—crafted by MSE Printing.",
    url: "/images/common-images/additional/short_run_packaging_right.webp",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/images/common-images/additional/short_run_packaging_right.webp",
        width: 500,
        height: 500,
        alt: "MSE Printing - Short Run Packaging",
      },
    ],
  },
};

const ShortRunPackaging = async () => {
  const data = await getCategoryPagesData("/short-run-packaging");
  const pageData = data.ShortRunPackagingPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return <PageStructure pageData={pageData} />;
};

export default ShortRunPackaging;
