import React from "react";
import { Metadata } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

export const metadata: Metadata = {
  title: "Window, Wall & Floor Graphics | MSE Print",
  description:
    "Transform your business space with vibrant and professional window, wall, and floor graphics from MSE Printing.",
  alternates: {
    canonical: "https://www.mseprinting.com/window-wall-floor-graphics",
  },
  metadataBase: new URL(
    "https://www.mseprinting.com/window-wall-floor-graphics"
  ),
  openGraph: {
    title: "Window, Wall & Floor Graphics | MSE Print",
    description:
      "Custom printed graphics for windows, walls, and floors to enhance your branding and customer experience. Durable, impactful, and professional.",
    url: "https://www.mseprinting.com/window-wall-floor-graphics",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/images/home-images/window-wall-floor-graphics.webp",
        width: 500,
        height: 500,
        alt: "MSE Printing - Window, Wall & Floor Graphics",
      },
    ],
  },
};

const WindowWallFloorGraphics = async () => {
  const data = await getCategoryPagesData("/window-wall-floor-graphics");
  const pageData = data.WindowWallFloorGraphicsPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return <PageStructure pageData={pageData} />;
};

export default WindowWallFloorGraphics;
