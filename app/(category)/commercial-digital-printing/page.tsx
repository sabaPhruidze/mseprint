import React from "react";
import { Metadata } from "next";
import { getDigitalPrintingPageData } from "db/getDigitalPrintingData";
import PageStructure from "components/common/PageStructure";

export const metadata: Metadata = {
  title: "Commercial Digital Printing | MSE Print",
  description:
    "Professional digital printing services from MSE Print. High-quality, fast, and cost-effective printing solutions for businesses.",
  metadataBase: new URL(
    "https://www.mseprinting.com/commercial-digital-printing"
  ),
  openGraph: {
    title: "Commercial Digital Printing | MSE Print",
    description:
      "Digital printing revolutionizes the way businesses approach their printing needs, offering unmatched versatility, speed, and customization for small to medium-sized projects.",
    url: "https://www.mseprinting.com/commercial-digital-printing",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/images/home-images/digital_printing.webp",
        width: 1200,
        height: 630,
        alt: "MSE Printing - Commercial Digital Printing",
      },
    ],
  },
};

const CommercialDigitalPrinting = async () => {
  const data = await getDigitalPrintingPageData();
  const pageData = data.CommercialDigitalPrintingPageData[0];

  console.log(pageData);
  return <PageStructure pageData={pageData} />;
};

export default CommercialDigitalPrinting;
