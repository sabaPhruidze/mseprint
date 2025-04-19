import React from "react";
import { Metadata } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

export const metadata: Metadata = {
  title: "Pick & Pack | MSE Print",
  description:
    "Streamline your shipping process with professional pick & pack services from MSE Print.",
  alternates: {
    canonical: "https://www.mseprinting.com/fulfillment-services/pick-pack",
  },
  metadataBase: new URL(
    "https://www.mseprinting.com/fulfillment-services/pick-pack"
  ),
  openGraph: {
    title: "Pick & Pack | MSE Print",
    description:
      "Fast, accurate, and scalable—MSE Printing’s pick & pack services ensure every order is fulfilled with care and delivered on time.",
    url: "https://www.mseprinting.com/fulfillment-services/pick-pack",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/images/fulfillment-services-images/additional/pick_pack_right.webp",
        width: 500,
        height: 500,
        alt: "MSE Printing - Pick & Pack",
      },
    ],
  },
};

const PickPack = async () => {
  const data = await getCategoryPagesData("/fulfillment-services/pick-pack");
  const pageData = data.PickPackPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return <PageStructure pageData={pageData} />;
};

export default PickPack;
