import React from "react";
import { Metadata } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

export const metadata: Metadata = {
  title: "Healthcare Printing | MSE Print",
  description:
    "Clear, compliant, and compassionate healthcare printing solutions for medical professionals.",
  alternates: {
    canonical: "https://www.mseprinting.com/industry-specific/healthcare",
  },
  metadataBase: new URL(
    "https://www.mseprinting.com/industry-specific/healthcare"
  ),
  openGraph: {
    title: "Healthcare Printing | MSE Print",
    description:
      "MSE Printing delivers HIPAA-compliant print materials for hospitals, clinics, and healthcare organizations—supporting patient care and operational efficiency.",
    url: "https://www.mseprinting.com/industry-specific/healthcare",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/images/industry-specific-images/additional/health_care_right.webp",
        width: 500,
        height: 500,
        alt: "MSE Printing - Healthcare Printing",
      },
    ],
  },
};

const HealthCare = async () => {
  const data = await getCategoryPagesData("/industry-specific/healthcare");
  const pageData = data.HealthcarePageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return <PageStructure pageData={pageData} />;
};

export default HealthCare;
