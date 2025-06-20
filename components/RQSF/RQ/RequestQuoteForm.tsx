"use client";

import React, { useState, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";

import { CurrentUser } from "lib/getCurrentUser";
import { FormData } from "../../../types/commonTypes";

import RQSFFirstStepRequired from "../RQSFFirstStepRequired";
import RQSFFirstStepOptional from "../RQSFFirstStepOptional";
import SelectRepresentative from "../SelectRepresentative";
import RQSFSecondStepLeft from "../RQSFSecondStepLeft";
import RQSFSecondStepRight from "../RQSFSecondStepRight";

interface Props {
  userDefaults?: CurrentUser;
}

export default function RequestQuoteForm({ userDefaults }: Props) {
  const methods = useForm<FormData>({
    mode: "onBlur",
    defaultValues: {
      firstname: userDefaults?.firstname ?? "",
      lastname: userDefaults?.lastname ?? "",
      email: userDefaults?.email ?? "",
      emailVerification: userDefaults?.email ?? "",
      phone: userDefaults?.phone ?? "",

      jobTitle: userDefaults?.jobTitle ?? "",
      company: userDefaults?.company ?? "",
      extension: userDefaults?.extension ?? "",

      fileLink: null,
    },
  });

  const { setValue, trigger } = methods;

  const [fileDownloadUrl, setFileDownloadUrl] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    setValue("fileLink", fileDownloadUrl);
    trigger("fileLink");
  }, [fileDownloadUrl, setValue, trigger]);

  const onSubmitRQ = async (data: FormData) => {
    if (!data.fileLink) {
      setErrorMessage("Please upload your project files before submitting.");
      return;
    }

    setSubmitting(true);
    setSuccessMessage(null);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/requestQuote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data), // fileLink already included
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
                   rounded-md shadow-2xl ring-1 ring-gray-200 bg-white dark:bg-black
                   flex flex-col gap-8 justify-center
                   screen-size-12:items-stretch items-center"
      >
        {/* hidden field that makes the upload mandatory */}
        <input
          type="hidden"
          {...methods.register("fileLink", {
            required: "Please upload your project files.",
          })}
        />

        {/* ───────────────────── STEP 1 ───────────────────── */}
        <div>
          <h1 className="text-[36px] font-inter-extrabold mb-2">
            STEP 1 OF 2{" "}
            <span className="font-inter-medium">PERSONAL INFORMATION</span>
          </h1>
          <div className="grid grid-cols-1 screen-size-12:grid-cols-2 gap-4 mt-4s text-black">
            <RQSFFirstStepRequired />
            <RQSFFirstStepOptional />
          </div>
        </div>

        {/* ───────────────────── STEP 2 ───────────────────── */}
        <div>
          <h2 className="text-[36px] font-inter-extrabold mb-2 mt-8">
            STEP 2 OF 2 <span className="font-inter-medium">ABOUT PROJECT</span>
          </h2>
          <div className="grid grid-cols-1 screen-size-12:grid-cols-2 gap-4 mt-4s ">
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
            disabled={submitting || !fileDownloadUrl}
            className="mt-6 bg-red text-white w-[300px] h-[50px] text-[22px]
                       font-inter-extrabold rounded hover:bg-red-700
                       disabled:opacity-50"
          >
            {submitting ? "Submitting…" : "Submit"}
          </button>
        </div>
        {!fileDownloadUrl && (
          <p className="text-red-600 text-sm mt-2 text-center">
            Please upload your project files before submitting.
          </p>
        )}

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
