import React from "react";
import { Metadata } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

export const metadata: Metadata = {
  title: "Inventory Management | MSE Print",
  description:
    "Track, store, and manage with confidence using MSE Printing’s inventory management solutions.",
  alternates: {
    canonical:
      "https://www.mseprinting.com/fulfillment-services/inventory-management",
  },
  metadataBase: new URL(
    "https://www.mseprinting.com/fulfillment-services/inventory-management"
  ),
  openGraph: {
    title: "Inventory Management | MSE Print",
    description:
      "Gain control of your stock with real-time tracking, scalable storage, and seamless fulfillment integration from MSE Printing.",
    url: "https://www.mseprinting.com/fulfillment-services/inventory-management",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/images/fulfillment-services-images/additional/inventory_management_right.webp",
        width: 500,
        height: 500,
        alt: "MSE Printing - Inventory Management",
      },
    ],
  },
};

const InventoryManagement = async () => {
  const data = await getCategoryPagesData(
    "/fulfillment-services/inventory-management"
  );
  const pageData = data.InventoryManagementPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return <PageStructure pageData={pageData} />;
};

export default InventoryManagement;
