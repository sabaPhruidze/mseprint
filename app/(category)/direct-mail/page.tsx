import React from "react";
import { Metadata } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

export const metadata: Metadata = {
  title: "Direct Mail & Mailing Services | MSE Print",
  description: "Professional direct mail and mailing services by MSE Print.",
  alternates: {
    canonical: "https://www.mseprinting.com/direct-mail",
  },
  metadataBase: new URL("https://www.mseprinting.com/direct-mail"),
  openGraph: {
    title: "Direct Mail & Mailing Services | MSE Print",
    description:
      "Boost brand awareness and engagement with MSE Printing's direct mail solutions.",
    url: "https://www.mseprinting.com/direct-mail",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/images/home-images/direct_mail.webp",
        width: 500,
        height: 500,
        alt: "MSE Printing - Direct Mail & Mailing Services",
      },
    ],
  },
};

const DirectMailMailingServices = async () => {
  const data = await getCategoryPagesData("/direct-mail");
  const pageData = data.DirectMailMailingServicesPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return <PageStructure pageData={pageData} />;
};

export default DirectMailMailingServices;
