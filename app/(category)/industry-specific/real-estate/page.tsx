import React from "react";
import { Metadata } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

export const metadata: Metadata = {
  title: "Real Estate Printing | MSE Print",
  description:
    "Sell faster and market smarter with professional real estate printing services from MSE Print.",
  alternates: {
    canonical: "https://www.mseprinting.com/industry-specific/real-estate",
  },
  metadataBase: new URL(
    "https://www.mseprinting.com/industry-specific/real-estate"
  ),
  openGraph: {
    title: "Real Estate Printing | MSE Print",
    description:
      "From signs and brochures to business cards and folders—MSE Printing provides professional materials to elevate your real estate brand.",
    url: "https://www.mseprinting.com/industry-specific/real-estate",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/images/industry-specific-images/additional/real_estate_right.webp",
        width: 500,
        height: 500,
        alt: "MSE Printing - Real Estate Printing",
      },
    ],
  },
};

const RealEstate = async () => {
  const data = await getCategoryPagesData("/industry-specific/real-estate");
  const pageData = data.RealEstatePageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return <PageStructure pageData={pageData} />;
};

export default RealEstate;
