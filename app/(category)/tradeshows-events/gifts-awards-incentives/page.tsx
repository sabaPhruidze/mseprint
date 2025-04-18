import React from "react";
import { Metadata } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

export const metadata: Metadata = {
  title: "Gifts, Awards & Incentives | MSE Print",
  description:
    "Celebrate milestones, reward achievement, and inspire loyalty with custom-branded gifts and awards.",
  alternates: {
    canonical:
      "https://www.mseprinting.com/tradeshows-events/gifts-awards-incentives",
  },
  metadataBase: new URL(
    "https://www.mseprinting.com/tradeshows-events/gifts-awards-incentives"
  ),
  openGraph: {
    title: "Gifts, Awards & Incentives | MSE Print",
    description:
      "From custom trophies to employee appreciation kits, MSE Printing helps you deliver meaningful recognition through personalized gifts and awards.",
    url: "https://www.mseprinting.com/tradeshows-events/gifts-awards-incentives",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/images/tradeshows-events-images/additional/gifts_awards_incentives_right.webp",
        width: 500,
        height: 500,
        alt: "MSE Printing - Gifts, Awards & Incentives",
      },
    ],
  },
};

const GiftsAwardsIncentives = async () => {
  const data = await getCategoryPagesData(
    "/tradeshows-events/gifts-awards-incentives"
  );
  const pageData = data.GiftsAwardsIncentivesPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return <PageStructure pageData={pageData} />;
};

export default GiftsAwardsIncentives;
