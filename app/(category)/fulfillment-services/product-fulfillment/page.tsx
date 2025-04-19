import React from "react";
import { Metadata } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

export const metadata: Metadata = {
  title: "Product Fulfillment | MSE Print",
  description:
    "Deliver confidence with flexible and reliable product fulfillment services from MSE Print.",
  alternates: {
    canonical:
      "https://www.mseprinting.com/fulfillment-services/product-fulfillment",
  },
  metadataBase: new URL(
    "https://www.mseprinting.com/fulfillment-services/product-fulfillment"
  ),
  openGraph: {
    title: "Product Fulfillment | MSE Print",
    description:
      "Reliable, flexible, and brand-aligned—MSE Printing takes your product the final mile with professional fulfillment solutions.",
    url: "https://www.mseprinting.com/fulfillment-services/product-fulfillment",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/images/fulfillment-services-images/additional/product_fulfillment_right.webp",
        width: 500,
        height: 500,
        alt: "MSE Printing - Product Fulfillment",
      },
    ],
  },
};

const ProductFulfillment = async () => {
  const data = await getCategoryPagesData(
    "/fulfillment-services/product-fulfillment"
  );
  const pageData = data.ProductFulfillmentPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return <PageStructure pageData={pageData} />;
};

export default ProductFulfillment;
