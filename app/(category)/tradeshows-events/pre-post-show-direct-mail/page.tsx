import React from "react";
import { Metadata } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

export const metadata: Metadata = {
  title: "Pre- & Post-Show Direct Mail | MSE Print",
  description:
    "Drive booth traffic, create engagement, and follow up with impact using pre- and post-show direct mail services.",
  alternates: {
    canonical:
      "https://www.mseprinting.com/tradeshows-events/pre-post-show-direct-mail",
  },
  metadataBase: new URL(
    "https://www.mseprinting.com/tradeshows-events/pre-post-show-direct-mail"
  ),
  openGraph: {
    title: "Pre- & Post-Show Direct Mail | MSE Print",
    description:
      "From pre-show invitations to post-event thank-yous, MSE Printing helps extend your reach and maximize event ROI through effective direct mail.",
    url: "https://www.mseprinting.com/tradeshows-events/pre-post-show-direct-mail",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/images/tradeshows-events-images/additional/pre_post_show_direct_mail_right.webp",
        width: 500,
        height: 500,
        alt: "MSE Printing - Pre- & Post-Show Direct Mail",
      },
    ],
  },
};

const PrePostShowDirectMail = async () => {
  const data = await getCategoryPagesData(
    "/tradeshows-events/pre-post-show-direct-mail"
  );
  const pageData = data.PrePostShowDirectMailPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return <PageStructure pageData={pageData} />;
};

export default PrePostShowDirectMail;
