import React from "react";
import { Metadata } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

export const metadata: Metadata = {
  title: "Poster Printing | MSE Print",
  description:
    "Capture attention with high-quality poster printing from MSE Printing—perfect for promotions, events, and décor.",
  alternates: {
    canonical: "https://www.mseprinting.com/printing-copying/poster-printing",
  },
  metadataBase: new URL(
    "https://www.mseprinting.com/printing-copying/poster-printing"
  ),
  openGraph: {
    title: "Poster Printing | MSE Print",
    description:
      "Custom poster printing in vivid color and professional finishes. Great for advertising, announcements, and displays.",
    url: "https://www.mseprinting.com/printing-copying/poster-printing",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/printing-copying-images/additional/poster_printing_right.webp",
        width: 500,
        height: 500,
        alt: "MSE Printing - Poster Printing",
      },
    ],
  },
};

const PosterPrinting = async () => {
  const data = await getCategoryPagesData("/printing-copying/poster-printing");
  const pageData = data.PosterPrintingPageData?.[0];
  console.log(pageData?.mainimage.src);
  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return <PageStructure pageData={pageData} />;
};

export default PosterPrinting;
