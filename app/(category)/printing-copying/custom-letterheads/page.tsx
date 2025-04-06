import React from "react";
import { Metadata } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

export const metadata: Metadata = {
  title: "Letterhead Printing | MSE Print",
  description:
    "Custom letterhead printing that reinforces your brand on every page.",
  alternates: {
    canonical:
      "https://www.mseprinting.com/printing-copying/custom-letterheads",
  },
  metadataBase: new URL(
    "https://www.mseprinting.com/printing-copying/custom-letterheads"
  ),
  openGraph: {
    title: "Letterhead Printing | MSE Print",
    description:
      "Professional letterhead printing with premium materials and design options to build brand credibility.",
    url: "https://www.mseprinting.com/printing-copying/custom-letterheads",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/images/printing-copying-images/additional/letterheads_right.webp",
        width: 500,
        height: 500,
        alt: "MSE Printing - Letterhead Printing",
      },
    ],
  },
};

const CustomLetterheads = async () => {
  const data = await getCategoryPagesData(
    "/printing-copying/custom-letterheads"
  );
  const pageData = data.CustomLetterheadsPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return <PageStructure pageData={pageData} />;
};

export default CustomLetterheads;
