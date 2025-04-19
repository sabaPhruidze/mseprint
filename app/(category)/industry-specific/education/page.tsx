import React from "react";
import { Metadata } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

export const metadata: Metadata = {
  title: "Education Printing | MSE Print",
  description:
    "Enhance learning, promote events, and streamline school operations with professional education printing.",
  alternates: {
    canonical: "https://www.mseprinting.com/industry-specific/education",
  },
  metadataBase: new URL(
    "https://www.mseprinting.com/industry-specific/education"
  ),
  openGraph: {
    title: "Education Printing | MSE Print",
    description:
      "From classrooms to campuses—MSE Printing delivers quality printed materials that empower student success and strengthen school identity.",
    url: "https://www.mseprinting.com/industry-specific/education",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/images/industry-specific-images/additional/education_right.webp",
        width: 500,
        height: 500,
        alt: "MSE Printing - Education Printing",
      },
    ],
  },
};

const Education = async () => {
  const data = await getCategoryPagesData("/industry-specific/education");
  const pageData = data.EducationPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return <PageStructure pageData={pageData} />;
};

export default Education;
