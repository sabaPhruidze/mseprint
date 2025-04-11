import React from "react";
import { Metadata } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

export const metadata: Metadata = {
  title: "Video Production | MSE Print",
  description:
    "Engage your audience with high-quality video content tailored to your brand and message.",
  alternates: {
    canonical:
      "https://www.mseprinting.com/marketing-services/video-production",
  },
  metadataBase: new URL(
    "https://www.mseprinting.com/marketing-services/video-production"
  ),
  openGraph: {
    title: "Video Production | MSE Print",
    description:
      "From concept to final cut, our video production services help you tell your story and drive results through compelling visuals.",
    url: "https://www.mseprinting.com/marketing-services/video-production",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/images/marketing-services-images/additional/video_production_right.webp",
        width: 500,
        height: 500,
        alt: "MSE Printing - Video Production",
      },
    ],
  },
};

const VideoProduction = async () => {
  const data = await getCategoryPagesData(
    "/marketing-services/video-production"
  );
  const pageData = data.VideoProductionPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return <PageStructure pageData={pageData} />;
};

export default VideoProduction;
