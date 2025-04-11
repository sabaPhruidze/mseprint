import React from "react";
import { Metadata } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

export const metadata: Metadata = {
  title: "Graphic Design | MSE Print",
  description:
    "Creative and strategic graphic design services that bring your brand to life.",
  alternates: {
    canonical: "https://www.mseprinting.com/graphic-design",
  },
  metadataBase: new URL("https://www.mseprinting.com/graphic-design"),
  openGraph: {
    title: "Graphic Design | MSE Print",
    description:
      "From branding to brochures, our expert graphic designers craft visual assets that communicate and convert.",
    url: "https://www.mseprinting.com/graphic-design",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/images/graphic-design-images/additional/graphic_design_right.webp",
        width: 500,
        height: 500,
        alt: "MSE Printing - Graphic Design",
      },
    ],
  },
};

const GraphicDesign = async () => {
  const data = await getCategoryPagesData("/graphic-design");
  const pageData = data.GraphicDesignPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return <PageStructure pageData={pageData} />;
};

export default GraphicDesign;
