import React from "react";
import { Metadata } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

export const metadata: Metadata = {
  title: "Manufacturing Printing | MSE Print",
  description:
    "Durable, high-performance print solutions for industrial operations and logistics.",
  alternates: {
    canonical: "https://www.mseprinting.com/industry-specific/manufacturing",
  },
  metadataBase: new URL(
    "https://www.mseprinting.com/industry-specific/manufacturing"
  ),
  openGraph: {
    title: "Manufacturing Printing | MSE Print",
    description:
      "From weatherproof labels to instruction manuals and facility signage, MSE Printing supports manufacturers with rugged, efficient print services.",
    url: "https://www.mseprinting.com/industry-specific/manufacturing",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/images/industry-specific-images/additional/manufacturing_right.webp",
        width: 500,
        height: 500,
        alt: "MSE Printing - Manufacturing Printing",
      },
    ],
  },
};

const Manufacturing = async () => {
  const data = await getCategoryPagesData("/industry-specific/manufacturing");
  const pageData = data.ManufacturingPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return <PageStructure pageData={pageData} />;
};

export default Manufacturing;
