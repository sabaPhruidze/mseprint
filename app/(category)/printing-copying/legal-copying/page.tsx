import React from "react";
import { Metadata } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

export const metadata: Metadata = {
  title: "Legal Copying | MSE Print",
  description:
    "Secure, accurate, and confidential legal copying services for law firms, courts, and legal professionals.",
  alternates: {
    canonical: "https://www.mseprinting.com/printing-copying/legal-copying",
  },
  metadataBase: new URL(
    "https://www.mseprinting.com/printing-copying/legal-copying"
  ),
  openGraph: {
    title: "Legal Copying | MSE Print",
    description:
      "Trusted legal document duplication and scanning services—Bates stamping, tabbing, secure handling, and fast turnaround.",
    url: "https://www.mseprinting.com/printing-copying/legal-copying",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/printing-copying-images/additional/legal_copying_right.webp",
        width: 500,
        height: 500,
        alt: "MSE Printing - Legal Copying",
      },
    ],
  },
};

const LegalCopying = async () => {
  const data = await getCategoryPagesData("/printing-copying/legal-copying");
  const pageData = data.LegalCopyingPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return <PageStructure pageData={pageData} />;
};

export default LegalCopying;
