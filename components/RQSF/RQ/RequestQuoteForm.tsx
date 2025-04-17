"use client";
import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { FormData } from "../../../types/commonTypes";

import RQFirstStepRequired from "./RQFirstStepRequired";
import RQFirstStepOptional from "./RQFirstStepOptional";
import SelectRepresentative from "../SelectRepresentative";
import RQSecondStepLeft from "./RQSecondStepLeft";
import RQSecondStepRight from "./RQSecondStepRight";

export default function RequestQuoteForm() {
  const methods = useForm<FormData>({ mode: "onBlur" });

  // State to store the uploaded file's download URL
  const [fileDownloadUrl, setFileDownloadUrl] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSubmitRQ = async (data: FormData) => {
    setSubmitting(true);
    setSuccessMessage(null);
    setErrorMessage(null);
    console.log(data);
    console.log(fileDownloadUrl);
    try {
      const payload = {
        ...data,
        fileLink: fileDownloadUrl,
      };

      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload), // includes all fields
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      setSuccessMessage("Your quote request has been submitted successfully!");
      methods.reset();
      setFileDownloadUrl(null);
    } catch (error: any) {
      console.error("Submit error:", error);
      setErrorMessage(
        "An error occurred while submitting the form. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmitRQ)}
        autoComplete="off"
        className="max-w-[1500px] mx-auto border p-10 rounded-md shadow-2xl ring-1 ring-gray-200 bg-white flex flex-col gap-8 justify-center screen-size-12:items-stretch items-center"
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
          <div className="grid grid-cols-1 screen-size-12:grid-cols-2 gap-4 mt-4">
            <RQSecondStepLeft />
            {/* Pass setter to capture download URL from file upload */}
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
            {submitting ? "Submitting..." : "Submit"}
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
