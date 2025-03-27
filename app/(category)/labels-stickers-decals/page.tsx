import React from "react";
import { Metadata } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

export const metadata: Metadata = {
  title: "Labels, Stickers & Decals | MSE Print",
  description:
    "Custom-designed labels, stickers, and decals that help your brand stick in customers’ minds.",
  alternates: {
    canonical: "https://www.mseprinting.com/labels-stickers-decals",
  },
  metadataBase: new URL("https://www.mseprinting.com/labels-stickers-decals"),
  openGraph: {
    title: "Labels, Stickers & Decals | MSE Print",
    description:
      "High-quality labels, stickers, and decals by MSE Printing to enhance your packaging, promotions, and brand visibility.",
    url: "https://www.mseprinting.com/labels-stickers-decals",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/images/home-images/labels-stickers-decals.webp",
        width: 500,
        height: 500,
        alt: "MSE Printing - Labels, Stickers & Decals",
      },
    ],
  },
};

const LabelsStickersDecals = async () => {
  const data = await getCategoryPagesData("/labels-stickers-decals");
  const pageData = data.LabelsStickersDecalsPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return <PageStructure pageData={pageData} />;
};

export default LabelsStickersDecals;
