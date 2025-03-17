import React from "react";
import { Metadata } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

export const metadata: Metadata = {
  title: "Brochures & Collateral | MSE Print",
  description:
    "Discover professionally designed brochures and marketing collateral by MSE Print.",
  alternates: {
    canonical: "https://www.mseprinting.com/brochures-collateral",
  },
  metadataBase: new URL("https://www.mseprinting.com/brochures-collateral"),
  openGraph: {
    title: "Brochures & Collateral | MSE Print",
    description:
      "High-quality brochures and marketing collateral designed to elevate your brand and engage your audience.",
    url: "https://www.mseprinting.com/brochures-collateral",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/images/home-images/brochures-collateral.webp",
        width: 500,
        height: 500,
        alt: "MSE Printing - Brochures & Collateral",
      },
    ],
  },
};

const BrochuresCollateral = async () => {
  const data = await getCategoryPagesData("/brochures-collateral");
  const pageData = data.BrochuresCollateralPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return <PageStructure pageData={pageData} />;
};

export default BrochuresCollateral;
