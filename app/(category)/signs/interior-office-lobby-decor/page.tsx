import React from "react";
import { Metadata } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

export const metadata: Metadata = {
  title: "Interior Office & Lobby Décor | MSE Print",
  description:
    "Custom interior office and lobby décor that reflects your brand, enhances aesthetics, and leaves a lasting impression.",
  alternates: {
    canonical: "https://www.mseprinting.com/signs/interior-office-lobby-decor",
  },
  metadataBase: new URL(
    "https://www.mseprinting.com/signs/interior-office-lobby-decor"
  ),
  openGraph: {
    title: "Interior Office & Lobby Décor | MSE Print",
    description:
      "Enhance your workplace with branded wall graphics, signage, and custom décor solutions designed to impress clients and employees.",
    url: "https://www.mseprinting.com/signs/interior-office-lobby-decor",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/images/home-images/interior-office-lobby-decor.webp",
        width: 500,
        height: 500,
        alt: "MSE Printing - Interior Office & Lobby Décor",
      },
    ],
  },
};

const InteriorOfficeLobbyDecor = async () => {
  const data = await getCategoryPagesData("/signs/interior-office-lobby-decor");
  const pageData = data.InteriorOfficeLobbyDecorPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return <PageStructure pageData={pageData} />;
};

export default InteriorOfficeLobbyDecor;
