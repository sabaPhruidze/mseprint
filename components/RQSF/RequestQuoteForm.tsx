"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { FormData } from "../../types/commonTypes";
// ⚠️ Switch from `requiredFields` to `getRequiredFields`
import { getRequiredFields, optionalFields } from "db/RQData";

export default function RequestQuoteForm() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormData>({ mode: "onBlur" });

  // Build the required fields array by calling the function
  const requiredFields = getRequiredFields(getValues);

  // 4) Submission logic
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
    <form
      onSubmit={handleSubmit(onSubmitRQ)}
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
          {/* Required Information */}
          <div className="space-y-3">
            <p className="text-[24px] font-inter-bold">Required Information</p>

            {requiredFields.map((field) => {
              const { name, type, placeholder, rules, onChange } = field;
              return (
                <div key={name} className="flex flex-col">
                  <input
                    type={type}
                    placeholder={placeholder}
                    className="
                      border p-2 screen-size-5:w-[460px] screen-size-5:h-[60px]
                      rounded screen-size-5:text-base w-[340px] h-[45px] text-sm
                    "
                    {...register(name, {
                      ...rules,
                      onChange, // Attach onChange if present
                    })}
                  />
                  {errors[name] && (
                    <p className="text-red text-sm">
                      {errors[name]?.message as string}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Optional Details */}
          <div className="space-y-3">
            <p className="text-[24px] font-inter-bold">Optional Details</p>

            {optionalFields.map((field) => {
              const { name, type, placeholder, rules } = field;
              return (
                <div key={name} className="flex flex-col">
                  <input
                    type={type}
                    placeholder={placeholder}
                    className="
                      border p-2 screen-size-5:w-[460px] screen-size-5:h-[60px]
                      rounded screen-size-5:text-base w-[340px] h-[45px] text-sm
                    "
                    {...register(name, rules)}
                  />
                  {errors[name] && (
                    <p className="text-red text-sm">
                      {errors[name]?.message as string}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* You can continue with step 2 fields, etc... */}
    </form>
  );
}
