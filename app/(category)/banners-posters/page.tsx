import React from "react";
import { Metadata } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

export const metadata: Metadata = {
  title: "Banners & Posters | MSE Print",
  description:
    "Explore premium banners and posters by MSE Print for impactful advertising.",
  alternates: {
    canonical: "https://www.mseprinting.com/banners-posters",
  },
  metadataBase: new URL("https://www.mseprinting.com/banners-posters"),
  openGraph: {
    title: "Banners & Posters | MSE Print",
    description:
      "High-quality banners and posters that enhance visibility and promote your brand effectively.",
    url: "https://www.mseprinting.com/banners-posters",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/images/home-images/banners-posters.webp",
        width: 500,
        height: 500,
        alt: "MSE Printing - Banners & Posters",
      },
    ],
  },
};

const BannersPosters = async () => {
  const data = await getCategoryPagesData("/banners-posters");
  const pageData = data.BannersPostersPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return <PageStructure pageData={pageData} />;
};

export default BannersPosters;
