import React from "react";
import { Metadata } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

export const metadata: Metadata = {
  title: "List Management Services | MSE Print",
  description:
    "Optimize your mailing list for accuracy, deliverability, and better campaign results with MSE Print.",
  alternates: {
    canonical:
      "https://www.mseprinting.com/direct-mail/list-management-services",
  },
  metadataBase: new URL(
    "https://www.mseprinting.com/direct-mail/list-management-services"
  ),
  openGraph: {
    title: "List Management Services | MSE Print",
    description:
      "Ensure every message hits the right mailbox with professional list cleaning, de-duplication, and segmentation services.",
    url: "https://www.mseprinting.com/direct-mail/list-management-services",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/images/direct-mail-images/additional/list_management_services_right.webp",
        width: 500,
        height: 500,
        alt: "MSE Printing - List Management Services",
      },
    ],
  },
};

const ListManagementServices = async () => {
  const data = await getCategoryPagesData(
    "/direct-mail/list-management-services"
  );
  const pageData = data.ListManagementServicesPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return <PageStructure pageData={pageData} />;
};

export default ListManagementServices;
