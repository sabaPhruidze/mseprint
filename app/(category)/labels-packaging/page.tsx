import React from "react";
import { Metadata } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

export const metadata: Metadata = {
  title: "Labels & Packaging | MSE Print",
  description:
    "Enhance product appeal with custom labels and packaging by MSE Print.",
  alternates: {
    canonical: "https://www.mseprinting.com/labels-packaging",
  },
  metadataBase: new URL("https://www.mseprinting.com/labels-packaging"),
  openGraph: {
    title: "Labels & Packaging | MSE Print",
    description:
      "Custom label and packaging solutions designed to elevate your product presentation and brand identity.",
    url: "https://www.mseprinting.com/labels-packaging",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/images/home-images/labels-packaging.webp",
        width: 500,
        height: 500,
        alt: "MSE Printing - Labels & Packaging",
      },
    ],
  },
};

const LabelsPackaging = async () => {
  const data = await getCategoryPagesData("/labels-packaging");
  const pageData = data.LabelsPackagingPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return <PageStructure pageData={pageData} />;
};

export default LabelsPackaging;
