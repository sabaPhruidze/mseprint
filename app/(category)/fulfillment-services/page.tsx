import React from "react";
import { Metadata } from "next";
import { getSpecialPagesData } from "db/GetSpecialPagesData";
import CardsPagesStructure from "components/common/CardsPagesStructure";

export const metadata: Metadata = {
  title: "Fulfillment Services | MSE Print",
  description:
    "Fast, accurate, and scalable product fulfillment services from MSE Printing—warehouse to doorstep, handled with care.",
  alternates: {
    canonical: "https://www.mseprinting.com/fulfillment-services",
  },
  metadataBase: new URL("https://www.mseprinting.com/fulfillment-services"),
  openGraph: {
    title: "Fulfillment Services | MSE Print",
    description:
      "Discover efficient warehousing, kitting, and shipping services tailored to your brand’s logistics needs with MSE Printing.",
    url: "https://www.mseprinting.com/fulfillment-services",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/images/fulfillment-services-images/product_fulfillment.webp",
        width: 500,
        height: 500,
        alt: "Product Fulfillment Services",
      },
    ],
  },
};

const FulfillmentServices = async () => {
  const data = await getSpecialPagesData("/fulfillment-services");
  const pageData = data.FulfillmentServicesCardPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return <CardsPagesStructure pageData={pageData} />;
};

export default FulfillmentServices;
