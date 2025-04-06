import React from "react";
import { Metadata } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

export const metadata: Metadata = {
  title: "Business Card Printing | MSE Print",
  description:
    "Custom business card printing that makes a lasting impression—crafted by MSE Print.",
  alternates: {
    canonical:
      "https://www.mseprinting.com/printing-copying/custom-business-card-printing",
  },
  metadataBase: new URL(
    "https://www.mseprinting.com/printing-copying/custom-business-card-printing"
  ),
  openGraph: {
    title: "Business Card Printing | MSE Print",
    description:
      "High-quality business cards with premium materials and creative designs to elevate your networking impact.",
    url: "https://www.mseprinting.com/printing-copying/custom-business-card-printing",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/images/printing-copying-images/additional/business_annual_reports_right.webp",
        width: 500,
        height: 500,
        alt: "MSE Printing - Business Card Printing",
      },
    ],
  },
};

const CustomBusinessCardPrinting = async () => {
  const data = await getCategoryPagesData(
    "/printing-copying/custom-business-card-printing"
  );
  const pageData = data.CustomBusinessCardPrintingPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return <PageStructure pageData={pageData} />;
};

export default CustomBusinessCardPrinting;
