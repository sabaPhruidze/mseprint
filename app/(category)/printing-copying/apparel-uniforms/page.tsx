import React from "react";
import { Metadata } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

export const metadata: Metadata = {
  title: "Apparel & Uniforms | MSE Print",
  description:
    "Custom apparel and uniforms that elevate your brand’s identity and professionalism.",
  alternates: {
    canonical: "https://www.mseprinting.com/printing-copying/apparel-uniforms",
  },
  metadataBase: new URL(
    "https://www.mseprinting.com/printing-copying/apparel-uniforms"
  ),
  openGraph: {
    title: "Apparel & Uniforms | MSE Print",
    description:
      "From polos to safety gear, outfit your team with high-quality, branded apparel crafted by MSE Printing.",
    url: "https://www.mseprinting.com/printing-copying/apparel-uniforms",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/images/printing-copying-images/additional/apparel_uniforms_right.webp",
        width: 500,
        height: 500,
        alt: "MSE Printing - Apparel & Uniforms",
      },
    ],
  },
};

const ApparelUniforms = async () => {
  const data = await getCategoryPagesData("/printing-copying/apparel-uniforms");
  const pageData = data.ApparelUniformsPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return <PageStructure pageData={pageData} />;
};

export default ApparelUniforms;
