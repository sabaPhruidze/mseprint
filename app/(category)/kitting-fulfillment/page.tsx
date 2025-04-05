import React from "react";
import { Metadata } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

export const metadata: Metadata = {
  title: "Kitting & Fulfillment | MSE Print",
  description:
    "Streamline complex projects with MSE Printing’s kitting and fulfillment services—assembly, packaging, and delivery done right.",
  alternates: {
    canonical: "https://www.mseprinting.com/kitting-fulfillment",
  },
  metadataBase: new URL("https://www.mseprinting.com/kitting-fulfillment"),
  openGraph: {
    title: "Kitting & Fulfillment | MSE Print",
    description:
      "Customized kits professionally packed and shipped by MSE Printing. Perfect for events, marketing, onboarding, and more.",
    url: "https://www.mseprinting.com/kitting-fulfillment",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/common-images/additional/kitting_fulfillment_right.webp",
        width: 500,
        height: 500,
        alt: "MSE Printing - Kitting & Fulfillment",
      },
    ],
  },
};

const KittingFulfillment = async () => {
  const data = await getCategoryPagesData("/kitting-fulfillment");
  const pageData = data.KittingFulfillmentPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return <PageStructure pageData={pageData} />;
};

export default KittingFulfillment;
