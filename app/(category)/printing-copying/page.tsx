import React from "react";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import CardsPagesStructure from "components/common/CardsPagesStructure";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Printing & Copying Services | MSE Print",
  description:
    "Fast, high-quality printing and copying solutions from MSE Printing. Perfect for documents, presentations, and everyday business needs.",
  alternates: {
    canonical: "https://www.mseprinting.com/printing-copying",
  },
  metadataBase: new URL("https://www.mseprinting.com/printing-copying"),
  openGraph: {
    title: "Printing & Copying Services | MSE Print",
    description:
      "Reliable and professional printing and copying services at MSE Printing. From color prints to black-and-white copies, we handle jobs of any size with speed and precision.",
    url: "https://www.mseprinting.com/printing-copying",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/images/printing-copying-images/additional/card_printing_copying_right.webp",
        width: 500,
        height: 500,
        alt: "MSE Printing - Printing & Copying Services",
      },
    ],
  },
};

const PrintingCopying = async () => {
  const data = await getCategoryPagesData("/printing-copying");
  const pageData = data.PrintingCopyingPageData?.[0];
  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return <CardsPagesStructure pageData={pageData} />;
};

export default PrintingCopying;
