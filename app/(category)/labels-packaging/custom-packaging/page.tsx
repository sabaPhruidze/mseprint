import React from "react";
import { Metadata } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

export const metadata: Metadata = {
  title: "Custom Packaging | MSE Print",
  description:
    "Elevate your product experience with branded custom packaging by MSE Print.",
  alternates: {
    canonical: "https://www.mseprinting.com/labels-packaging/custom-packaging",
  },
  metadataBase: new URL(
    "https://www.mseprinting.com/labels-packaging/custom-packaging"
  ),
  openGraph: {
    title: "Custom Packaging | MSE Print",
    description:
      "Stylish, secure, and strategic—MSE Printing creates custom packaging that delivers more than just a product.",
    url: "https://www.mseprinting.com/labels-packaging/custom-packaging",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/images/labels-packaging-images/additional/custom_packaging_right.webp",
        width: 500,
        height: 500,
        alt: "MSE Printing - Custom Packaging",
      },
    ],
  },
};

const CustomPackaging = async () => {
  const data = await getCategoryPagesData("/labels-packaging/custom-packaging");
  const pageData = data.CustomPackagingPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return <PageStructure pageData={pageData} />;
};

export default CustomPackaging;
