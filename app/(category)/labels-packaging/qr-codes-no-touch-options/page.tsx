import React from "react";
import { Metadata } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

export const metadata: Metadata = {
  title: "QR Codes & No-Touch Options | MSE Print",
  description:
    "Connect smarter with QR codes and no-touch print solutions from MSE Print.",
  alternates: {
    canonical:
      "https://www.mseprinting.com/labels-packaging/qr-codes-no-touch-options",
  },
  metadataBase: new URL(
    "https://www.mseprinting.com/labels-packaging/qr-codes-no-touch-options"
  ),
  openGraph: {
    title: "QR Codes & No-Touch Options | MSE Print",
    description:
      "Safe, fast, and future-ready—MSE Printing bridges the gap between print and digital with QR code solutions.",
    url: "https://www.mseprinting.com/labels-packaging/qr-codes-no-touch-options",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/images/labels-packaging-images/additional/qr_code_no_touch_options_right.webp",
        width: 500,
        height: 500,
        alt: "MSE Printing - QR Codes & No-Touch Options",
      },
    ],
  },
};

const QRCodesNoTouchOptions = async () => {
  const data = await getCategoryPagesData(
    "/labels-packaging/qr-codes-no-touch-options"
  );
  const pageData = data.QRCodesNoTouchOptionsPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return <PageStructure pageData={pageData} />;
};

export default QRCodesNoTouchOptions;
