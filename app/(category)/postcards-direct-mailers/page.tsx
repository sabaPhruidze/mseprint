import React from "react";
import { Metadata } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

export const metadata: Metadata = {
  title: "Postcards & Direct Mailers | MSE Print",
  description:
    "Reach customers directly with powerful postcard and mail campaigns printed by MSE Printing.",
  alternates: {
    canonical: "https://www.mseprinting.com/postcards-direct-mailers",
  },
  metadataBase: new URL("https://www.mseprinting.com/postcards-direct-mailers"),
  openGraph: {
    title: "Postcards & Direct Mailers | MSE Print",
    description:
      "High-quality postcard and direct mail printing to deliver your message with impact, personalization, and professionalism.",
    url: "https://www.mseprinting.com/postcards-direct-mailers",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/printing-copying-images/additional/postcards_direct_mailers_right.webp",
        width: 500,
        height: 500,
        alt: "MSE Printing - Postcards & Direct Mailers",
      },
    ],
  },
};

const PostcardsDirectMailers = async () => {
  const data = await getCategoryPagesData("/postcards-direct-mailers");
  const pageData = data.PostcardsDirectMailersPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return <PageStructure pageData={pageData} />;
};

export default PostcardsDirectMailers;
