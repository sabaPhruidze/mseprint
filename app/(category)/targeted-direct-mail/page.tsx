import React from "react";
import { Metadata } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

export const metadata: Metadata = {
  title: "Targeted Direct Mail | MSE Print",
  description:
    "Send smarter with targeted direct mail campaigns from MSE Print.",
  alternates: {
    canonical: "https://www.mseprinting.com/targeted-direct-mail",
  },
  metadataBase: new URL("https://www.mseprinting.com/targeted-direct-mail"),
  openGraph: {
    title: "Targeted Direct Mail | MSE Print",
    description:
      "Reach the right audience at the right time with precision-targeted direct mail campaigns designed to drive results.",
    url: "https://www.mseprinting.com/targeted-direct-mail",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/images/direct-mail-images/additional/targeted_direct_mail_right.webp",
        width: 500,
        height: 500,
        alt: "MSE Printing - Targeted Direct Mail",
      },
    ],
  },
};

const TargetedDirectMail = async () => {
  const data = await getCategoryPagesData("/targeted-direct-mail");
  const pageData = data.TargetedDirectMailPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return <PageStructure pageData={pageData} />;
};

export default TargetedDirectMail;
