import React from "react";
import { Metadata } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

export const metadata: Metadata = {
  title: "Product Promotional Labels | MSE Print",
  description:
    "Boost visibility and drive sales with custom promotional labels by MSE Print.",
  alternates: {
    canonical: "https://www.mseprinting.com/product-promotional-labels",
  },
  metadataBase: new URL(
    "https://www.mseprinting.com/product-promotional-labels"
  ),
  openGraph: {
    title: "Product Promotional Labels | MSE Print",
    description:
      "Eye-catching promotional labels designed to highlight offers, spark urgency, and convert attention into action.",
    url: "https://www.mseprinting.com/product-promotional-labels",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/images/home-images/product-promotional-labels.webp",
        width: 500,
        height: 500,
        alt: "MSE Printing - Product Promotional Labels",
      },
    ],
  },
};

const ProductPromotionalLabels = async () => {
  const data = await getCategoryPagesData("/product-promotional-labels");
  const pageData = data.ProductPromotionalLabelsPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return <PageStructure pageData={pageData} />;
};

export default ProductPromotionalLabels;
