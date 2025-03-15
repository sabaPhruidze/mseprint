import React from "react";
import { Metadata } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

export const metadata: Metadata = {
  title: "Online Ordering Portals | MSE Print",
  description:
    "Streamline your printing and marketing processes with custom online ordering portals from MSE Print. Simplify ordering, enhance productivity, and maintain brand consistency.",
  alternates: {
    canonical: "https://www.mseprinting.com/online-ordering-portals",
  },
  metadataBase: new URL("https://www.mseprinting.com/online-ordering-portals"),
  openGraph: {
    title: "Online Ordering Portals | MSE Print",
    description:
      "Customized online ordering solutions designed specifically to enhance your business operations, productivity, and brand consistency.",
    url: "https://www.mseprinting.com/online-ordering-portals",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/images/home-images/additional/online_ordering_portals.webp",
        width: 500,
        height: 500,
        alt: "MSE Printing - Online Ordering Portals",
      },
    ],
  },
};

const OnlineOrderingPortals = async () => {
  const data = await getCategoryPagesData("/online-ordering-portals");
  const pageData = data.OnlineOrderingPortalsPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return <PageStructure pageData={pageData} />;
};

export default OnlineOrderingPortals;
