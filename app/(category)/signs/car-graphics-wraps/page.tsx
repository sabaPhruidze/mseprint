import React from "react";
import { Metadata } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

export const metadata: Metadata = {
  title: "Car Graphics & Wraps | MSE Print",
  description:
    "Transform your vehicle into a moving advertisement with custom car graphics and wraps from MSE Printing.",
  alternates: {
    canonical: "https://www.mseprinting.com/signs/car-graphics-wraps",
  },
  metadataBase: new URL("https://www.mseprinting.com/signs/car-graphics-wraps"),
  openGraph: {
    title: "Car Graphics & Wraps | MSE Print",
    description:
      "High-quality custom vehicle wraps and graphics designed to boost brand visibility on the road.",
    url: "https://www.mseprinting.com/signs/car-graphics-wraps",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/images/signs-images/additional/car_graphics_wraps_right.webp",
        width: 500,
        height: 500,
        alt: "MSE Printing - Car Graphics & Wraps",
      },
    ],
  },
};

const CarGraphicsWraps = async () => {
  const data = await getCategoryPagesData("/car-graphics-wraps");
  const pageData = data.CarGraphicsWrapsPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return <PageStructure pageData={pageData} />;
};

export default CarGraphicsWraps;
