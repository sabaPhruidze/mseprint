import React from "react";
import { Metadata } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

export const metadata: Metadata = {
  title: "Business & Annual Reports | MSE Print",
  description:
    "Present your organization’s performance with clarity and professionalism through expertly printed business reports.",
  alternates: {
    canonical:
      "https://www.mseprinting.com/printing-copying/business-annual-reports",
  },
  metadataBase: new URL(
    "https://www.mseprinting.com/printing-copying/business-annual-reports"
  ),
  openGraph: {
    title: "Business & Annual Reports | MSE Print",
    description:
      "Showcase growth and achievements with beautifully designed business and annual reports printed by MSE Printing.",
    url: "https://www.mseprinting.com/printing-copying/business-annual-reports",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/printing-copying-images/additional/business_annual_reports_right.webp",
        width: 500,
        height: 500,
        alt: "MSE Printing - Business & Annual Reports",
      },
    ],
  },
};

const BusinessAnnualReports = async () => {
  const data = await getCategoryPagesData(
    "/printing-copying/business-annual-reports"
  );
  const pageData = data.BusinessAnnualReportsPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return <PageStructure pageData={pageData} />;
};

export default BusinessAnnualReports;
