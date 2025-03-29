import React from "react";
import { Metadata } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

export const metadata: Metadata = {
  title: "Now Open Signs & Graphics | MSE Print",
  description:
    "Celebrate your grand opening with bold and professional Now Open signage from MSE Printing.",
  alternates: {
    canonical: "https://www.mseprinting.com/now-open-signs-graphics",
  },
  metadataBase: new URL("https://www.mseprinting.com/now-open-signs-graphics"),
  openGraph: {
    title: "Now Open Signs & Graphics | MSE Print",
    description:
      "Grab attention fast with vibrant Now Open banners, window clings, and signage designed to launch your business with impact.",
    url: "https://www.mseprinting.com/signs/now-open-signs-graphics",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "signs-images/additional/now_open_signs_graphics_right.webp",
        width: 500,
        height: 500,
        alt: "MSE Printing - Now Open Signs & Graphics",
      },
    ],
  },
};

const NowOpenSignsGraphics = async () => {
  const data = await getCategoryPagesData("/now-open-signs-graphics");
  const pageData = data.NowOpenSignsGraphicsPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return <PageStructure pageData={pageData} />;
};

export default NowOpenSignsGraphics;
