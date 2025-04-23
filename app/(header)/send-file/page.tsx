// ── app/send-file/page.tsx ──────────────────────────────────────
import type { Metadata } from "next";
import React from "react";

import { getRequestQuoteData } from "db/getRQContent";

import SFContentTop from "components/RQSF/SF/SFContentTop";
import SFContentBottom from "components/RQSF/SF/SFContentBottom";
import SendFileForm from "components/RQSF/SF/SendFileForm";

// ── SEO metadata ────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Place an Order | MSE Printing",
  description:
    "Upload production-ready files and place your printing order with MSE Printing. Our team will review the artwork and provide confirmation.",
  alternates: { canonical: "https://www.mseprinting.com/send-file" },
};

// ── Page component ──────────────────────────────────────────────
export default async function SendAFile() {
  const { requestQuoteContent } = await getRequestQuoteData("/request-quote");

  return (
    <main className="bg-gray-50 screen-size-6:p-10 p-0">
      <SFContentTop data={requestQuoteContent} />
      <SendFileForm />
      <SFContentBottom data={requestQuoteContent} />
    </main>
  );
}
