import React from "react";
import { Metadata } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

export const metadata: Metadata = {
  title: "Legal Printing | MSE Print",
  description:
    "Confidential, precise, and fast legal printing solutions tailored for attorneys and legal professionals.",
  alternates: {
    canonical: "https://www.mseprinting.com/industry-specific/legal",
  },
  metadataBase: new URL("https://www.mseprinting.com/industry-specific/legal"),
  openGraph: {
    title: "Legal Printing | MSE Print",
    description:
      "From case files and contracts to exhibit binders and document scanning—MSE Printing supports legal professionals with secure, accurate, and professional print services.",
    url: "https://www.mseprinting.com/industry-specific/legal",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/images/industry-specific-images/additional/legal_right.webp",
        width: 500,
        height: 500,
        alt: "MSE Printing - Legal Printing",
      },
    ],
  },
};

const Legal = async () => {
  const data = await getCategoryPagesData("/industry-specific/legal");
  const pageData = data.LegalPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return <PageStructure pageData={pageData} />;
};

export default Legal;
