import React from "react";
import { Metadata } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

export const metadata: Metadata = {
  title: "Cards & Invitations | MSE Print",
  description:
    "Design and print beautiful custom cards and invitations for any event or business need with MSE Printing.",
  alternates: {
    canonical: "https://www.mseprinting.com/cards-invitations",
  },
  metadataBase: new URL("https://www.mseprinting.com/cards-invitations"),
  openGraph: {
    title: "Cards & Invitations | MSE Print",
    description:
      "Create elegant, heartfelt cards and invitations with custom finishes and expert printing from MSE Printing.",
    url: "https://www.mseprinting.com/cards-invitations",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/common-images/additional/cards_invitations_right.webp",
        width: 500,
        height: 500,
        alt: "MSE Printing - Cards & Invitations",
      },
    ],
  },
};

const CardsInvitations = async () => {
  const data = await getCategoryPagesData("/cards-invitations");
  const pageData = data.CardsInvitationsPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return <PageStructure pageData={pageData} />;
};

export default CardsInvitations;
