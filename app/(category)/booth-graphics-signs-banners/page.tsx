import React from "react";
import { Metadata } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

export const metadata: Metadata = {
  title: "Booth Graphics, Signs & Banners | MSE Print",
  description:
    "Make your booth unforgettable with custom graphics, signs, and banners by MSE Printing.",
  alternates: {
    canonical: "https://www.mseprinting.com/booth-graphics-signs-banners",
  },
  metadataBase: new URL(
    "https://www.mseprinting.com/booth-graphics-signs-banners"
  ),
  openGraph: {
    title: "Booth Graphics, Signs & Banners | MSE Print",
    description:
      "Command attention at events with high-resolution booth graphics, signs, and banners that reflect your brand identity.",
    url: "https://www.mseprinting.com/booth-graphics-signs-banners",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/images/home-images/booth-graphics-signs-banners.webp",
        width: 500,
        height: 500,
        alt: "MSE Printing - Booth Graphics, Signs & Banners",
      },
    ],
  },
};

const BoothGraphicsSignsBanners = async () => {
  const data = await getCategoryPagesData("/booth-graphics-signs-banners");
  const pageData = data.BoothGraphicsSignsBannersPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return <PageStructure pageData={pageData} />;
};

export default BoothGraphicsSignsBanners;
