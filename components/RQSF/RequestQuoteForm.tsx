"use client";
import React from "react";
import { useForm } from "react-hook-form";

type FormData = {
  firstname: string;
  lastname: string;
  email: string;
  emailVerification: string; // NEW field
  phone: string;
  // Step 2 fields
  projectName: string;
  quantity: number;
  description: string;
  dueDate: string;
  terms: boolean;

  // Representative
  representative: string;
};

export default function RequestQuoteForm() {
  // react-hook-form initialization
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormData>({ mode: "onBlur" });

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
  console.log(getValues);
  return (
    <form
      onSubmit={handleSubmit(onSubmitRQ)}
      autoComplete="off"
      className="max-w-[1500px] mx-auto border border-black p-10 rounded-md shadow-md flex flex-col gap-8 bg-white"
    >
      {/* STEP 1: Personal Information */}
      <div>
        <h2 className="text-[36px] font-inter-extrabold mb-2">
          STEP 1 OF 2{" "}
          <span className=" font-inter-medium">PERSONAL INFORMATION</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {/* Required Information */}
          <div className="space-y-3">
            <p className="text-[24px] font-inter-bold">Required Information</p>

            <input
              placeholder="First Name *"
              className="border p-2 w-full rounded screen-size-5:text-base screen-size-5:w-[460px] screen-size-5:h-[60px] w-[340px] h-[45px] text-sm"
              {...register("firstname", {
                required: "First name is required",
                pattern: {
                  value: /^[A-Za-z]{3,}$/,
                  message:
                    "First name must be at least 3 English letters (no numbers, no special characters)",
                },
              })}
            />
            {errors.firstname && (
              <p className="text-red-500 text-sm">{errors.firstname.message}</p>
            )}

            <input
              placeholder="Last Name *"
              className="border p-2 w-full rounded"
              {...register("lastname", {
                required: "Last name is required",
                pattern: {
                  value: /^[A-Za-z]{3,}$/,
                  message:
                    "Last name must be at least 3 English letters (no numbers, no special characters)",
                },
              })}
            />
            {errors.lastname && (
              <p className="text-red-500 text-sm">{errors.lastname.message}</p>
            )}

            <input
              type="email"
              placeholder="Email *"
              className="border p-2 w-full rounded"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
            {/* Email Verification */}
            <input
              type="email"
              placeholder="Confirm Email *"
              className="border p-2 w-full rounded"
              {...register("emailVerification", {
                required: "Please verify your email address",
                validate: (value) => {
                  const originalEmail = getValues("email");
                  return (
                    value === originalEmail ||
                    "Confirmation email does not match"
                  );
                },
              })}
            />
            {errors.emailVerification && (
              <p className="text-red-500 text-sm">
                {errors.emailVerification.message}
              </p>
            )}
          </div>

          {/* Optional Details */}
          <div className="space-y-3">
            <p className="text-[24px] font-inter-bold">Optional Details</p>

            <input
              placeholder="Phone (Optional)"
              className="border p-2 w-full rounded"
              {...register("phone")}
            />
            {/* No error needed for optional phone */}
          </div>
        </div>
      </div>
    </form>
  );
}
