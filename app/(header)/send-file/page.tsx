import type { Metadata } from "next";
import React from "react";

import { getRQSFData } from "db/getRQSFContent";

import SFContentTop from "components/RQSF/SF/SFContentTop";
import SFContentBottom from "components/RQSF/SF/SFContentBottom";
import SendFileForm from "components/RQSF/SF/SendFileForm";

export const metadata: Metadata = {
  title: "Place an Order | MSE Printing",
  description:
    "Upload production-ready files and place your printing order with MSE Printing. Our team will review the artwork and provide confirmation.",
  alternates: { canonical: "https://www.mseprinting.com/send-file" },
};

export default async function SendAFile() {
  const { sendFileContent } = await getRQSFData("/send-file");

  return (
    <main className="bg-gray-50 screen-size-6:p-10 p-0">
      <SFContentTop data={sendFileContent} />
      <SendFileForm />
      <SFContentBottom data={sendFileContent} />
    </main>
  );
}
