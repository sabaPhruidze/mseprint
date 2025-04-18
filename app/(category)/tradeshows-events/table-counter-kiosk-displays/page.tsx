import React from "react";
import { Metadata } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

export const metadata: Metadata = {
  title: "Table, Counter & Kiosk Displays | MSE Print",
  description:
    "Maximize visibility in compact spaces with custom tabletop, counter, and kiosk displays by MSE Print.",
  alternates: {
    canonical:
      "https://www.mseprinting.com/tradeshows-events/table-counter-kiosk-displays",
  },
  metadataBase: new URL(
    "https://www.mseprinting.com/tradeshows-events/table-counter-kiosk-displays"
  ),
  openGraph: {
    title: "Table, Counter & Kiosk Displays | MSE Print",
    description:
      "Turn any surface into a standout promotional platform with branded mini signage, kiosk wraps, and compact displays.",
    url: "https://www.mseprinting.com/tradeshows-events/table-counter-kiosk-displays",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/images/tradeshows-events-images/additional/table_counter_kiosk_displays_right.webp",
        width: 500,
        height: 500,
        alt: "MSE Printing - Table, Counter & Kiosk Displays",
      },
    ],
  },
};

const TableCounterKioskDisplays = async () => {
  const data = await getCategoryPagesData(
    "/tradeshows-events/table-counter-kiosk-displays"
  );
  const pageData = data.TableCounterKioskDisplaysPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return <PageStructure pageData={pageData} />;
};

export default TableCounterKioskDisplays;
