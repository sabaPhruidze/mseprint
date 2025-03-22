import React from "react";
import { Metadata } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

export const metadata: Metadata = {
  title: "Pull-Up Banners & Flags | MSE Print",
  description:
    "High-quality, portable pull-up banners and flags designed to grab attention and elevate your brand visibility.",
  alternates: {
    canonical: "https://www.mseprinting.com/pull-up-banners-flags",
  },
  metadataBase: new URL("https://www.mseprinting.com/pull-up-banners-flags"),
  openGraph: {
    title: "Pull-Up Banners & Flags | MSE Print",
    description:
      "Durable and vibrant pull-up banners and flags for events, promotions, and storefronts. Custom printed by MSE Printing.",
    url: "https://www.mseprinting.com/pull-up-banners-flags",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/images/home-images/pull-up-banners-flags.webp",
        width: 500,
        height: 500,
        alt: "MSE Printing - Pull-Up Banners & Flags",
      },
    ],
  },
};

const PullUpBannersFlags = async () => {
  const data = await getCategoryPagesData("/pull-up-banners-flags");
  const pageData = data.PullUpBannersFlagsPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return <PageStructure pageData={pageData} />;
};

export default PullUpBannersFlags;
