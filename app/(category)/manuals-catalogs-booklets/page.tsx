import React from "react";
import { Metadata } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

export const metadata: Metadata = {
  title: "Manuals, Catalogs & Booklets | MSE Print",
  description:
    "Professional manuals, catalogs, and booklets for training, education, and marketing by MSE Print.",
  alternates: {
    canonical: "https://www.mseprinting.com/manuals-catalogs-booklets",
  },
  metadataBase: new URL(
    "https://www.mseprinting.com/manuals-catalogs-booklets"
  ),
  openGraph: {
    title: "Manuals, Catalogs & Booklets | MSE Print",
    description:
      "Custom manuals, catalogs, and booklets designed to educate, engage, and impress. Printed with precision by MSE Printing.",
    url: "https://www.mseprinting.com/manuals-catalogs-booklets",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/images/home-images/manuals-catalogs-booklets.webp",
        width: 500,
        height: 500,
        alt: "MSE Printing - Manuals, Catalogs & Booklets",
      },
    ],
  },
};

const ManualsCatalogsBooklets = async () => {
  const data = await getCategoryPagesData("/manuals-catalogs-booklets");
  const pageData = data.ManualsCatalogsBookletsPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return <PageStructure pageData={pageData} />;
};

export default ManualsCatalogsBooklets;
