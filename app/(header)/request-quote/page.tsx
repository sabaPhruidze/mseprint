import type { Metadata } from "next";
import React from "react";
import RequestQuoteForm from "components/RQSF/RQ/RequestQuoteForm";
import { getRQSFData } from "db/getRQSFContent";
import RQContentTop from "components/RQSF/RQ/RQContentTop";
import RQContentBottom from "components/RQSF/RQ/RQContentBottom";

import { getCurrentUser } from "lib/getCurrentUser";
// ── SEO metadata ────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Request a Quote | MSE Printing",
  description:
    "Submit a quote request for custom printing and marketing services with MSE Printing. Our team will provide a tailored solution for your business needs.",
  alternates: { canonical: "https://www.mseprinting.com/request-quote" },
};

// ── Page component ──────────────────────────────────────────────
export default async function RequestQuotePage() {
  const { requestQuoteContent } = await getRQSFData("/request-quote");
  const userDefaults = await getCurrentUser();

  return (
    <main className="bg-gray-50 screen-size-6:p-10 p-0">
      <RQContentTop data={requestQuoteContent} />
      <RequestQuoteForm userDefaults={userDefaults ?? undefined} />
      <RQContentBottom data={requestQuoteContent} />
    </main>
  );
}
