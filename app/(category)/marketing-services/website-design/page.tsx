import React from "react";
import { Metadata } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

export const metadata: Metadata = {
  title: "Website Design | MSE Print",
  description:
    "Modern, mobile-friendly websites that reflect your brand and convert visitors into customers.",
  alternates: {
    canonical: "https://www.mseprinting.com/marketing-services/website-design",
  },
  metadataBase: new URL(
    "https://www.mseprinting.com/marketing-services/website-design"
  ),
  openGraph: {
    title: "Website Design | MSE Print",
    description:
      "We design responsive, SEO-optimized websites that look stunning and perform flawlessly across all devices.",
    url: "https://www.mseprinting.com/marketing-services/website-design",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/images/marketing-services-images/additional/website_design_right.webp",
        width: 500,
        height: 500,
        alt: "MSE Printing - Website Design",
      },
    ],
  },
};

const WebsiteDesign = async () => {
  const data = await getCategoryPagesData("/marketing-services/website-design");
  const pageData = data.WebsiteDesignPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return <PageStructure pageData={pageData} />;
};

export default WebsiteDesign;
