import React from "react";
import { Metadata } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

export const metadata: Metadata = {
  title: "Campaigns & Consultation | MSE Print",
  description:
    "Strategic marketing consultation and campaign support tailored to your business goals.",
  alternates: {
    canonical:
      "https://www.mseprinting.com/marketing-services/campaigns-consultation",
  },
  metadataBase: new URL(
    "https://www.mseprinting.com/marketing-services/campaigns-consultation"
  ),
  openGraph: {
    title: "Campaigns & Consultation | MSE Print",
    description:
      "Get expert advice and support to plan, launch, and manage high-impact marketing campaigns that generate measurable results.",
    url: "https://www.mseprinting.com/marketing-services/campaigns-consultation",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/images/marketing-services-images/additional/campaigns_consultation_right.webp",
        width: 500,
        height: 500,
        alt: "MSE Printing - Campaigns & Consultation",
      },
    ],
  },
};

const CampaignsConsultation = async () => {
  const data = await getCategoryPagesData(
    "/marketing-services/campaigns-consultation"
  );
  const pageData = data.CampaignsConsultationPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return <PageStructure pageData={pageData} />;
};

export default CampaignsConsultation;
