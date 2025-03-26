import React from "react";
import { Metadata } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

export const metadata: Metadata = {
  title: "ADA & Wayfinding Signs | MSE Print",
  description:
    "Create accessible and branded environments with ADA-compliant and wayfinding signage from MSE Printing.",
  alternates: {
    canonical: "https://www.mseprinting.com/signs/ada-wayfinding-signs",
  },
  metadataBase: new URL(
    "https://www.mseprinting.com/signs/ada-wayfinding-signs"
  ),
  openGraph: {
    title: "ADA & Wayfinding Signs | MSE Print",
    description:
      "Ensure safety, accessibility, and a professional image with custom-designed ADA & wayfinding signage tailored to your facility.",
    url: "https://www.mseprinting.com/signs/ada-wayfinding-signs",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/images/home-images/ada-wayfinding-signs.webp",
        width: 500,
        height: 500,
        alt: "MSE Printing - ADA & Wayfinding Signs",
      },
    ],
  },
};

const AdaWayFindingSigns = async () => {
  const data = await getCategoryPagesData("/signs/ada-wayfinding-signs");
  const pageData = data.AdaWayfindingSignsPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return <PageStructure pageData={pageData} />;
};

export default AdaWayFindingSigns;
