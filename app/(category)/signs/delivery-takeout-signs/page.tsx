import React from "react";
import { Metadata } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

export const metadata: Metadata = {
  title: "Delivery & Takeout Signs | MSE Print",
  description:
    "Boost visibility and efficiency with professional delivery and takeout signs from MSE Printing.",
  alternates: {
    canonical: "https://www.mseprinting.com/signs/delivery-takeout-signs",
  },
  metadataBase: new URL(
    "https://www.mseprinting.com/signs/delivery-takeout-signs"
  ),
  openGraph: {
    title: "Delivery & Takeout Signs | MSE Print",
    description:
      "Durable and branded delivery and takeout signage that helps customers find you fast and boosts your food service operations.",
    url: "https://www.mseprinting.com/delivery-takeout-signs",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/images/signs-images/additional/delivery_takeout_signs_right.webp",
        width: 500,
        height: 500,
        alt: "MSE Printing - Delivery & Takeout Signs",
      },
    ],
  },
};

const DeliveryTakeoutSigns = async () => {
  const data = await getCategoryPagesData("/signs/delivery-takeout-signs");
  const pageData = data.DeliveryTakeoutSignsPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return <PageStructure pageData={pageData} />;
};

export default DeliveryTakeoutSigns;
