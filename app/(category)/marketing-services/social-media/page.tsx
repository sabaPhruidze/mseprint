import React from "react";
import { Metadata } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

export const metadata: Metadata = {
  title: "Social Media Marketing | MSE Print",
  description:
    "Boost your online presence with expert social media marketing and management services from MSE Print.",
  alternates: {
    canonical: "https://www.mseprinting.com/marketing-services/social-media",
  },
  metadataBase: new URL(
    "https://www.mseprinting.com/marketing-services/social-media"
  ),
  openGraph: {
    title: "Social Media Marketing | MSE Print",
    description:
      "From content creation to ad campaigns, we help your business grow with strategic social media solutions tailored for success.",
    url: "https://www.mseprinting.com/marketing-services/social-media",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/images/marketing-services-images/additional/social_media_right.webp",
        width: 500,
        height: 500,
        alt: "MSE Printing - Social Media Marketing",
      },
    ],
  },
};

const SocialMedia = async () => {
  const data = await getCategoryPagesData("/marketing-services/social-media");
  const pageData = data.SocialMediaPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return <PageStructure pageData={pageData} />;
};

export default SocialMedia;
