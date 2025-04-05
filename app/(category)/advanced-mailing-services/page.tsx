import React from "react";
import { Metadata } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

export const metadata: Metadata = {
  title: "Advanced Mailing Services | MSE Print",
  description:
    "Full-service mailing solutions including print, fulfillment, data processing, and USPS coordination by MSE Printing.",
  alternates: {
    canonical: "https://www.mseprinting.com/advanced-mailing-services",
  },
  metadataBase: new URL(
    "https://www.mseprinting.com/advanced-mailing-services"
  ),
  openGraph: {
    title: "Advanced Mailing Services | MSE Print",
    description:
      "Streamline mailing campaigns with MSE Printing—from data and design to delivery. Ideal for businesses, nonprofits, and agencies.",
    url: "https://www.mseprinting.com/advanced-mailing-services",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/common-images/additional/advanced_mailing_services_right.webp",
        width: 500,
        height: 500,
        alt: "MSE Printing - Advanced Mailing Services",
      },
    ],
  },
};

const AdvancedMailingServices = async () => {
  const data = await getCategoryPagesData("/advanced-mailing-services");
  const pageData = data.AdvancedMailingServicesPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return <PageStructure pageData={pageData} />;
};

export default AdvancedMailingServices;
