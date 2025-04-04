import React from "react";
import { Metadata } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

export const metadata: Metadata = {
  title: "Commercial Offset Printing | MSE Print",
  description:
    "Professional commercial offset printing services from MSE Print. Learn how offset printing can elevate your marketing materials.",
  alternates: {
    canonical: "https://www.mseprinting.com/commercial-offset-printing",
  },
  metadataBase: new URL(
    "https://www.mseprinting.com/commercial-offset-printing"
  ),
  openGraph: {
    title: "Commercial Offset Printing | MSE Print",
    description:
      "Full-service offset printing solutions for businesses seeking high-quality, cost-effective prints.",
    url: "https://www.mseprinting.com/commercial-offset-printing",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/images/home-images/additional/offset_printing_right.webp",
        width: 500,
        height: 500,
        alt: "MSE Printing - Commercial Offset Printing",
      },
    ],
  },
};

const CommercialOffsetPrinting = async () => {
  const data = await getCategoryPagesData("/commercial-offset-printing");
  const pageData = data.CommercialOffsetPrintingPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return <PageStructure pageData={pageData} />;
};

export default CommercialOffsetPrinting;
