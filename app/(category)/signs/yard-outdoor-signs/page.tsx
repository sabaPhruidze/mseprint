import React from "react";
import { Metadata } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

export const metadata: Metadata = {
  title: "Yard & Outdoor Signs | MSE Print",
  description:
    "Boost visibility with high-impact yard and outdoor signs designed to promote your business in any weather.",
  alternates: {
    canonical: "https://www.mseprinting.com/signs/yard-outdoor-signs",
  },
  metadataBase: new URL("https://www.mseprinting.com/signs/yard-outdoor-signs"),
  openGraph: {
    title: "Yard & Outdoor Signs | MSE Print",
    description:
      "Custom outdoor signage solutions including yard signs, A-frames, and weatherproof displays tailored to your needs.",
    url: "https://www.mseprinting.com/signs/yard-outdoor-signs",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/images/home-images/yard-outdoor-signs.webp",
        width: 500,
        height: 500,
        alt: "MSE Printing - Yard & Outdoor Signs",
      },
    ],
  },
};

const YardOutdoorSigns = async () => {
  const data = await getCategoryPagesData("/signs/yard-outdoor-signs");
  const pageData = data.YardOutdoorSignsPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return <PageStructure pageData={pageData} />;
};

export default YardOutdoorSigns;
