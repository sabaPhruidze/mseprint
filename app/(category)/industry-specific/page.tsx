import React from "react";
import { Metadata } from "next";
import CardsPagesStructure from "components/common/CardsPagesStructure";
import { getSpecialPagesData } from "db/GetSpecialPagesData";

export const metadata: Metadata = {
  title: "Industry-Specific Printing | MSE Print",
  description:
    "Tailored print solutions for real estate, legal, healthcare, finance, and more—customized to meet your industry's needs.",
  alternates: {
    canonical: "https://www.mseprinting.com/industry-specific",
  },
  metadataBase: new URL("https://www.mseprinting.com/industry-specific"),
  openGraph: {
    title: "Industry-Specific Printing | MSE Print",
    description:
      "From real estate to education, MSE Printing delivers sector-focused materials that ensure clarity, compliance, and impact.",
    url: "https://www.mseprinting.com/industry-specific",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/images/industry-specific-images/real_estate.webp",
        width: 500,
        height: 500,
        alt: "MSE Printing – Industry-Specific Real Estate Materials",
      },
    ],
  },
};

const IndustrySpecific = async () => {
  const data = await getSpecialPagesData("/industry-specific");
  const pageData = data.IndustrySpecificCardPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return <CardsPagesStructure pageData={pageData} />;
};

export default IndustrySpecific;
