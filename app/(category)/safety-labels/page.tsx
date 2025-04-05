import React from "react";
import { Metadata } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

export const metadata: Metadata = {
  title: "Safety Labels | MSE Print",
  description:
    "Compliant, durable safety labels crafted to protect and inform with clarity by MSE Print.",
  alternates: {
    canonical: "https://www.mseprinting.com/safety-labels",
  },
  metadataBase: new URL("https://www.mseprinting.com/safety-labels"),
  openGraph: {
    title: "Safety Labels | MSE Print",
    description:
      "Engineered for resilience and compliance, MSE Printing’s safety labels help ensure workplace safety and meet industry regulations.",
    url: "/images/common-images/additional/safety_labels_right.webp",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/images/common-images/additional/safety_labels_right.webp",
        width: 500,
        height: 500,
        alt: "MSE Printing - Safety Labels",
      },
    ],
  },
};

const SafetyLabels = async () => {
  const data = await getCategoryPagesData("/safety-labels");
  const pageData = data.SafetyLabelsPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return <PageStructure pageData={pageData} />;
};

export default SafetyLabels;
