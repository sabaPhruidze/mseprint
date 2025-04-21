"use client";

import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { FormData } from "../../../types/commonTypes";

import RQFirstStepRequired from "./RQFirstStepRequired";
import RQFirstStepOptional from "./RQFirstStepOptional";
import SelectRepresentative from "../SelectRepresentative";
import RQSecondStepLeft from "./RQSecondStepLeft";
import RQSecondStepRight from "./RQSecondStepRight";

/**
 * RequestQuoteForm – two‑step quote request wizard
 * -------------------------------------------------
 * ‣ Uses react‑hook‑form for validation / state
 * ‣ Sends a JSON payload to /api/sendEmail which relays via Resend
 * ‣ Shows success / error banners and disables the button while submitting
 */
export default function RequestQuoteForm() {
  const methods = useForm<FormData>({ mode: "onBlur" });

  /* ------------- local UI state ------------- */
  const [fileDownloadUrl, setFileDownloadUrl] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  /* ------------- submit handler ------------- */
  const onSubmitRQ = async (data: FormData) => {
    setSubmitting(true);
    setSuccessMessage(null);
    setErrorMessage(null);

    /* Build the exact payload the API expects */
    const payload = {
      ...data,
      fileLink: fileDownloadUrl ?? null, // always send the key – even if null
    };

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json(); // `any` from fetch types – acceptable

      if (!response.ok) {
        // The API returns { error: "…" } on 400/500
        throw new Error(
          result.error || result.message || "Failed to send email"
        );
      }

      console.info("✔️  Email sent:", result);
      setSuccessMessage("Your quote request has been submitted successfully!");
      methods.reset();
      setFileDownloadUrl(null);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      console.error("Submit error:", message);
      setErrorMessage(message);
    } finally {
      setSubmitting(false);
    }
  };

  /* ------------- render ------------- */
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmitRQ)}
        autoComplete="off"
        className="max-w-[1500px] mx-auto border px-4 screen-size-4:px-10 py-10 rounded-md shadow-2xl ring-1 ring-gray-200 bg-white flex flex-col gap-8 justify-center screen-size-12:items-stretch items-center"
      >
        {/* STEP 1 */}
        <div>
          <h1 className="text-[36px] font-inter-extrabold mb-2">
            STEP 1 OF 2{" "}
            <span className="font-inter-medium">PERSONAL INFORMATION</span>
          </h1>
          <div className="grid grid-cols-1 screen-size-12:grid-cols-2 gap-4 mt-4s">
            <RQFirstStepRequired />
            <RQFirstStepOptional />
          </div>
        </div>

        {/* STEP 2 */}
        <div>
          <h2 className="text-[36px] font-inter-extrabold mb-2 mt-8">
            STEP 2 OF 2 <span className="font-inter-medium">ABOUT PROJECT</span>
          </h2>
          <div className="grid grid-cols-1 screen-size-12:grid-cols-2 gap-4 mt-4s">
            <RQSecondStepLeft />
            {/* Right half passes upload callback */}
            <RQSecondStepRight setDownloadUrl={setFileDownloadUrl} />
          </div>
        </div>

        <SelectRepresentative />

        {/* SUBMIT BUTTON */}
        <div className="w-full h-[60px] flex justify-center items-center">
          <button
            type="submit"
            disabled={submitting}
            className="mt-6 bg-red text-white w-[300px] h-[50px] text-[22px] font-inter-extrabold rounded hover:bg-red-700 disabled:opacity-50"
          >
            {submitting ? "Submitting…" : "Submit"}
          </button>
        </div>

        {/* SUCCESS MESSAGE */}
        {successMessage && (
          <p className="text-green-600 font-semibold mt-4 text-center">
            {successMessage}
          </p>
        )}

        {/* ERROR MESSAGE */}
        {errorMessage && (
          <p className="text-red-600 font-semibold mt-4 text-center">
            {errorMessage}
          </p>
        )}
      </form>
    </FormProvider>
  );
}
