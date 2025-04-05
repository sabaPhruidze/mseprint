import React from "react";
import { Metadata } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

export const metadata: Metadata = {
  title: "Standard Direct Mail | MSE Print",
  description:
    "Deliver high-impact marketing directly to your audience with MSE Printing’s professional direct mail services.",
  alternates: {
    canonical: "https://www.mseprinting.com/standard-direct-mail",
  },
  metadataBase: new URL("https://www.mseprinting.com/standard-direct-mail"),
  openGraph: {
    title: "Standard Direct Mail | MSE Print",
    description:
      "Targeted mailing solutions from MSE Printing—design, print, and deliver postcards, letters, and more with postal precision.",
    url: "https://www.mseprinting.com/standard-direct-mail",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/common-images/additional/standard_direct_mail_right.webp",
        width: 500,
        height: 500,
        alt: "MSE Printing - Standard Direct Mail",
      },
    ],
  },
};

const StandardDirectMail = async () => {
  const data = await getCategoryPagesData("/standard-direct-mail");
  const pageData = data.StandardDirectMailPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return <PageStructure pageData={pageData} />;
};

export default StandardDirectMail;
