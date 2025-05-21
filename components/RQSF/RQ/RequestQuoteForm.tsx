/* ------------------------------------------------------------------
   RequestQuoteForm.tsx
   ------------------------------------------------------------------
   • Two-step “Request a Quote” wizard
   • Receives `userDefaults` (optional) from the page component
   • Uses react-hook-form for state / validation
------------------------------------------------------------------- */

"use client";

import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";

import { CurrentUser } from "lib/getCurrentUser";
import { FormData } from "../../../types/commonTypes";

import RQSFFirstStepRequired from "../RQSFFirstStepRequired";
import RQSFFirstStepOptional from "../RQSFFirstStepOptional";
import SelectRepresentative from "../SelectRepresentative";
import RQSFSecondStepLeft from "../RQSFSecondStepLeft";
import RQSFSecondStepRight from "../RQSFSecondStepRight";

/* ---------- props ---------- */
interface Props {
  /** Values pulled from the signed-in user’s row in the `users` table.
      Undefined when the visitor is a guest. */
  userDefaults?: CurrentUser;
}

/* ------------------------------------------------------------------ */
export default function RequestQuoteForm({ userDefaults }: Props) {
  /* ---------- react-hook-form ---------- */
  const methods = useForm<FormData>({
    mode: "onBlur",
    defaultValues: {
      // ----- Step 1 required -----
      firstname: userDefaults?.firstname ?? "",
      lastname: userDefaults?.lastname ?? "",
      email: userDefaults?.email ?? "",
      emailVerification: userDefaults?.email ?? "",
      phone: userDefaults?.phone ?? "",

      // ----- Step 1 optional -----
      jobTitle: userDefaults?.jobTitle ?? "",
      company: userDefaults?.company ?? "",
      extension: userDefaults?.extension ?? "",

      // ----- Step 2 & other blank fields (add more if you have them) -----
      /* description: "",  quantity: "",  etc. */
    },
  });

  /* ---------- local UI state ---------- */
  const [fileDownloadUrl, setFileDownloadUrl] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  /* ---------- submit handler ---------- */
  const onSubmitRQ = async (data: FormData) => {
    setSubmitting(true);
    setSuccessMessage(null);
    setErrorMessage(null);

    const payload = {
      ...data,
      fileLink: fileDownloadUrl ?? null, // always include the key
    };

    try {
      const res = await fetch("/api/requestQuote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json();

      if (!res.ok) throw new Error(result.error || result.message);

      setSuccessMessage("Your quote request has been submitted successfully!");
      methods.reset();
      setFileDownloadUrl(null);
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error("Submit error:", msg);
      setErrorMessage(msg);
    } finally {
      setSubmitting(false);
    }
  };

  /* ---------- render ---------- */
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmitRQ)}
        autoComplete="off"
        className="max-w-[1500px] mx-auto border px-4 screen-size-4:px-10 py-10
                   rounded-md shadow-2xl ring-1 ring-gray-200 bg-white
                   flex flex-col gap-8 justify-center
                   screen-size-12:items-stretch items-center"
      >
        {/* ───────────────────── STEP 1 ───────────────────── */}
        <div>
          <h1 className="text-[36px] font-inter-extrabold mb-2">
            STEP 1 OF 2{" "}
            <span className="font-inter-medium">PERSONAL INFORMATION</span>
          </h1>
          <div className="grid grid-cols-1 screen-size-12:grid-cols-2 gap-4 mt-4s">
            <RQSFFirstStepRequired />
            <RQSFFirstStepOptional />
          </div>
        </div>

        {/* ───────────────────── STEP 2 ───────────────────── */}
        <div>
          <h2 className="text-[36px] font-inter-extrabold mb-2 mt-8">
            STEP 2 OF 2 <span className="font-inter-medium">ABOUT PROJECT</span>
          </h2>
          <div className="grid grid-cols-1 screen-size-12:grid-cols-2 gap-4 mt-4s">
            <RQSFSecondStepLeft />
            <RQSFSecondStepRight setDownloadUrl={setFileDownloadUrl} />
          </div>
        </div>

        {/* representative radio group */}
        <SelectRepresentative />

        {/* ---------- submit button ---------- */}
        <div className="w-full h-[60px] flex justify-center items-center">
          <button
            type="submit"
            disabled={submitting}
            className="mt-6 bg-red text-white w-[300px] h-[50px] text-[22px]
                       font-inter-extrabold rounded hover:bg-red-700
                       disabled:opacity-50"
          >
            {submitting ? "Submitting…" : "Submit"}
          </button>
        </div>

        {/* ---------- banners ---------- */}
        {successMessage && (
          <p className="text-green-600 font-semibold mt-4 text-center">
            {successMessage}
          </p>
        )}
        {errorMessage && (
          <p className="text-red-600 font-semibold mt-4 text-center">
            {errorMessage}
          </p>
        )}
      </form>
    </FormProvider>
  );
}
