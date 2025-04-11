"use client";
import React from "react";
import { FormData } from "../../../types/commonTypes";
import { useForm, FormProvider } from "react-hook-form";

import RQFirstStepRequired from "./RQFirstStepRequired";
import RQFirstStepOptional from "./RQFirstStepOptional";

export default function RequestQuoteForm() {
  // Initialize react-hook-form
  const methods = useForm<FormData>({ mode: "onBlur" });

  // Submission logic
  const onSubmitRQ = async (data: FormData) => {
    try {
      const res = await fetch("/api/send-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        throw new Error("Failed to submit");
      }
      alert("Quote submitted successfully!");
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    // Provide form methods (register, errors, getValues, etc.) to children
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmitRQ)}
        autoComplete="off"
        className="max-w-[1500px] mx-auto border border-black p-10 rounded-md shadow-md flex flex-col gap-8 bg-white"
      >
        {/* STEP 1: Personal Information */}
        <div>
          <h1 className="text-[36px] font-inter-extrabold mb-2">
            STEP 1 OF 2{" "}
            <span className="font-inter-medium">PERSONAL INFORMATION</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <RQFirstStepRequired />
            <RQFirstStepOptional />
          </div>
        </div>

        {/* Step 2 fields, etc... */}
      </form>
    </FormProvider>
  );
}
