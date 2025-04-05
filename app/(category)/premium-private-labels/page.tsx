import React from "react";
import { Metadata } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

export const metadata: Metadata = {
  title: "Premium & Private Labels | MSE Print",
  description:
    "Stand out with high-end, customizable premium and private labels from MSE Print.",
  alternates: {
    canonical: "https://www.mseprinting.com/premium-private-labels",
  },
  metadataBase: new URL("https://www.mseprinting.com/premium-private-labels"),
  openGraph: {
    title: "Premium & Private Labels | MSE Print",
    description:
      "Custom premium and private labels crafted to reflect your brand’s uniqueness and quality with precision and elegance.",
    url: "https://www.mseprinting.com/premium-private-labels",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/images/home-images/premium-private-labels.webp",
        width: 500,
        height: 500,
        alt: "MSE Printing - Premium & Private Labels",
      },
    ],
  },
};

const PremiumPrivateLabels = async () => {
  const data = await getCategoryPagesData("/premium-private-labels");
  const pageData = data.PremiumPrivateLabelsPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return <PageStructure pageData={pageData} />;
};

export default PremiumPrivateLabels;
