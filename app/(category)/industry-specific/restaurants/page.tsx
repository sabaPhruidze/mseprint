import React from "react";
import { Metadata } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

export const metadata: Metadata = {
  title: "Restaurant Printing | MSE Print",
  description:
    "Menus, marketing, and more—MSE Printing powers your restaurant’s brand with professional print services.",
  alternates: {
    canonical: "https://www.mseprinting.com/industry-specific/restaurants",
  },
  metadataBase: new URL(
    "https://www.mseprinting.com/industry-specific/restaurants"
  ),
  openGraph: {
    title: "Restaurant Printing | MSE Print",
    description:
      "From laminated dine-in menus to branded packaging and takeout materials, MSE Printing helps restaurants stand out and stay consistent.",
    url: "https://www.mseprinting.com/industry-specific/restaurants",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/images/industry-specific-images/additional/restaurant_right.webp",
        width: 500,
        height: 500,
        alt: "MSE Printing - Restaurant Printing",
      },
    ],
  },
};

const Restaurants = async () => {
  const data = await getCategoryPagesData("/industry-specific/restaurants");
  const pageData = data.RestaurantsPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return <PageStructure pageData={pageData} />;
};

export default Restaurants;
