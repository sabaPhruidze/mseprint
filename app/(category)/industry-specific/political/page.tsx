import React from "react";
import { Metadata } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

export const metadata: Metadata = {
  title: "Political Printing | MSE Print",
  description:
    "Drive voter engagement with high-impact political printing from MSE Print.",
  alternates: {
    canonical: "https://www.mseprinting.com/industry-specific/political",
  },
  metadataBase: new URL(
    "https://www.mseprinting.com/industry-specific/political"
  ),
  openGraph: {
    title: "Political Printing | MSE Print",
    description:
      "MSE Printing provides fast, targeted print materials that help campaigns gain visibility, build trust, and win votes.",
    url: "https://www.mseprinting.com/industry-specific/political",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/images/industry-specific-images/additional/political_right.webp",
        width: 500,
        height: 500,
        alt: "MSE Printing - Political Printing",
      },
    ],
  },
};

const Political = async () => {
  const data = await getCategoryPagesData("/industry-specific/political");
  const pageData = data.PoliticalPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return <PageStructure pageData={pageData} />;
};

export default Political;
