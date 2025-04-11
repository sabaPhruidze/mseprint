"use client";
import React from "react";
import { FormData } from "../../../types/commonTypes";
import { useForm, FormProvider } from "react-hook-form";

import RQFirstStepRequired from "./RQFirstStepRequired";
import RQFirstStepOptional from "./RQFirstStepOptional";

// Step 2 components
import RQSecondStepLeft from "./RQSecondStepLeft";
import RQSecondStepRight from "./RQSecondStepRight";

export default function RequestQuoteForm() {
  const methods = useForm<FormData>({ mode: "onBlur" });

  const onSubmitRQ = async (data: FormData) => {
    // ...submit logic
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmitRQ)}
        autoComplete="off"
        className="max-w-[1500px] mx-auto border border-black p-10 rounded-md shadow-md flex flex-col gap-8 bg-white"
      >
        {/* STEP 1 */}
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

        {/* STEP 2 */}
        <div>
          <h2 className="text-[36px] font-inter-extrabold mb-2 mt-8">
            STEP 2 OF 2 <span className="font-inter-medium">ABOUT PROJECT</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
            <RQSecondStepLeft />
            <RQSecondStepRight />
          </div>
        </div>

        {/* SUBMIT BUTTON */}
        <div className="w-full h-[60px] flex justify-center items-center">
          <button
            type="submit"
            className="mt-6 bg-red text-white w-[200px] h-[50px] rounded hover:bg-red-700"
          >
            Submit
          </button>
        </div>
      </form>
    </FormProvider>
  );
}
