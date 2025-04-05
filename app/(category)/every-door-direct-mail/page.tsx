import React from "react";
import { Metadata } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

export const metadata: Metadata = {
  title: "Every Door Direct Mail® | MSE Print",
  description:
    "Launch a high-visibility local campaign with Every Door Direct Mail® from MSE Printing—no list required.",
  alternates: {
    canonical: "https://www.mseprinting.com/every-door-direct-mail",
  },
  metadataBase: new URL("https://www.mseprinting.com/every-door-direct-mail"),
  openGraph: {
    title: "Every Door Direct Mail® | MSE Print",
    description:
      "Reach every mailbox in your neighborhood with EDDM services from MSE Printing—affordable, efficient, and impactful.",
    url: "https://www.mseprinting.com/every-door-direct-mail",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/common-images/additional/every_door_direct_mail_right.webp",
        width: 500,
        height: 500,
        alt: "MSE Printing - Every Door Direct Mail",
      },
    ],
  },
};

const EveryDoorDirectMail = async () => {
  const data = await getCategoryPagesData("/every-door-direct-mail");
  const pageData = data.EveryDoorDirectMailPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return <PageStructure pageData={pageData} />;
};

export default EveryDoorDirectMail;
