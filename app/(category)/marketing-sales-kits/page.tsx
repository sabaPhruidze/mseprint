import React from "react";
import { Metadata } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

export const metadata: Metadata = {
  title: "Marketing & Sales Kits | MSE Print",
  description:
    "Custom-built marketing and sales kits to empower your outreach strategy by MSE Print.",
  alternates: {
    canonical: "https://www.mseprinting.com/marketing-sales-kits",
  },
  metadataBase: new URL("https://www.mseprinting.com/marketing-sales-kits"),
  openGraph: {
    title: "Marketing & Sales Kits | MSE Print",
    description:
      "Boost engagement and brand consistency with custom-crafted sales kits featuring print and digital tools.",
    url: "https://www.mseprinting.com/marketing-sales-kits",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/images/common-images/additional/marketing_sales_kits_right.webp",
        width: 500,
        height: 500,
        alt: "MSE Printing - Marketing & Sales Kits",
      },
    ],
  },
};

const MarketingSalesKits = async () => {
  const data = await getCategoryPagesData("/marketing-sales-kits");
  const pageData = data.MarketingSalesKitsPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return <PageStructure pageData={pageData} />;
};

export default MarketingSalesKits;
