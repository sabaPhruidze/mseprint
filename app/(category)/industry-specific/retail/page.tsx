import React from "react";
import { Metadata } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

export const metadata: Metadata = {
  title: "Retail Printing | MSE Print",
  description:
    "Drive foot traffic and build brand recognition with powerful retail printing from MSE Print.",
  alternates: {
    canonical: "https://www.mseprinting.com/industry-specific/retail",
  },
  metadataBase: new URL("https://www.mseprinting.com/industry-specific/retail"),
  openGraph: {
    title: "Retail Printing | MSE Print",
    description:
      "From signage and packaging to seasonal promos and branded materials—MSE Printing equips retailers with everything needed to attract and retain customers.",
    url: "https://www.mseprinting.com/industry-specific/retail",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/images/industry-specific-images/additional/retail_right.webp",
        width: 500,
        height: 500,
        alt: "MSE Printing - Retail Printing",
      },
    ],
  },
};

const Retail = async () => {
  const data = await getCategoryPagesData("/industry-specific/retail");
  const pageData = data.RetailPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return <PageStructure pageData={pageData} />;
};

export default Retail;
