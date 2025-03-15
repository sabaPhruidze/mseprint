import React from "react";
import { Metadata } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

export const metadata: Metadata = {
  title: "Signs | MSE Print",
  description: "Discover high-quality signage solutions by MSE Print.",
  alternates: {
    canonical: "https://www.mseprinting.com/signs",
  },
  metadataBase: new URL("https://www.mseprinting.com/signs"),
  openGraph: {
    title: "Signs | MSE Print",
    description:
      "High-quality signage solutions that capture attention and enhance your brand presence.",
    url: "https://www.mseprinting.com/signs",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/images/home-images/signs.webp",
        width: 500,
        height: 500,
        alt: "MSE Printing - Signs",
      },
    ],
  },
};

const Signs = async () => {
  const data = await getCategoryPagesData("/signs");
  const pageData = data.SignsPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return <PageStructure pageData={pageData} />;
};

export default Signs;
