import React from "react";
import { Metadata } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

export const metadata: Metadata = {
  title: "Envelope Printing | MSE Print",
  description:
    "Custom envelope printing solutions that elevate your brand’s professional image.",
  alternates: {
    canonical:
      "https://www.mseprinting.com/printing-copying/custom-envelope-printing",
  },
  metadataBase: new URL(
    "https://www.mseprinting.com/printing-copying/custom-envelope-printing"
  ),
  openGraph: {
    title: "Envelope Printing | MSE Print",
    description:
      "Professionally printed envelopes that showcase your brand identity from the moment they're delivered.",
    url: "https://www.mseprinting.com/printing-copying/custom-envelope-printing",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/images/printing-copying-images/additional/envelope_printing_right.webp",
        width: 500,
        height: 500,
        alt: "MSE Printing - Envelope Printing",
      },
    ],
  },
};

const CustomEnvelopePrinting = async () => {
  const data = await getCategoryPagesData(
    "/printing-copying/custom-envelope-printing"
  );
  const pageData = data.CustomEnvelopePrintingPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return <PageStructure pageData={pageData} />;
};

export default CustomEnvelopePrinting;
