import React from "react";
import { Metadata } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

export const metadata: Metadata = {
  title: "Finance Printing | MSE Print",
  description:
    "Secure, compliant, and professional finance printing services tailored for financial institutions.",
  alternates: {
    canonical: "https://www.mseprinting.com/industry-specific/finance",
  },
  metadataBase: new URL(
    "https://www.mseprinting.com/industry-specific/finance"
  ),
  openGraph: {
    title: "Finance Printing | MSE Print",
    description:
      "From statements to disclosures and branded stationery—MSE Printing delivers trusted printing services for the finance sector.",
    url: "https://www.mseprinting.com/industry-specific/finance",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/images/industry-specific-images/additional/finance_right.webp",
        width: 500,
        height: 500,
        alt: "MSE Printing - Finance Printing",
      },
    ],
  },
};

const Finance = async () => {
  const data = await getCategoryPagesData("/industry-specific/finance");
  const pageData = data.FinancePageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return <PageStructure pageData={pageData} />;
};

export default Finance;
