import React from "react";
import { Metadata } from "next";
import { getSpecialPagesData } from "db/GetSpecialPagesData";
import CardsPagesStructure from "components/common/CardsPagesStructure";

export const metadata: Metadata = {
  title: "Marketing Services | MSE Print",
  description:
    "Strategy-fueled, story-driven marketing solutions that connect and convert—powered by MSE Printing.",
  alternates: {
    canonical: "https://www.mseprinting.com/marketing-services",
  },
  metadataBase: new URL("https://www.mseprinting.com/marketing-services"),
  openGraph: {
    title: "Marketing Services | MSE Print",
    description:
      "From campaigns and consultation to websites and video, MSE Printing delivers data‑driven marketing that generates results.",
    url: "https://www.mseprinting.com/marketing-services",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/images/marketing-services-images/campaigns_consultation.webp",
        width: 500,
        height: 500,
        alt: "Campaigns Consultation",
      },
    ],
  },
};

const MarketingServices = async () => {
  const data = await getSpecialPagesData("/marketing-services");
  const pageData = data.MarketingServicesCardPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return <CardsPagesStructure pageData={pageData} />;
};

export default MarketingServices;
