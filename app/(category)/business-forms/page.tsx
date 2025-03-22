import React from "react";
import { Metadata } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

export const metadata: Metadata = {
  title: "Business Forms | MSE Print",
  description: "Streamline operations with custom business forms by MSE Print.",
  alternates: {
    canonical: "https://www.mseprinting.com/business-forms",
  },
  metadataBase: new URL("https://www.mseprinting.com/business-forms"),
  openGraph: {
    title: "Business Forms | MSE Print",
    description:
      "Customizable business forms designed to support efficient operations and professional documentation.",
    url: "https://www.mseprinting.com/business-forms",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/images/home-images/business-forms.webp",
        width: 500,
        height: 500,
        alt: "MSE Printing - Business Forms",
      },
    ],
  },
};

const BusinessForms = async () => {
  const data = await getCategoryPagesData("/business-forms");
  const pageData = data.BusinessFormsPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return <PageStructure pageData={pageData} />;
};

export default BusinessForms;
