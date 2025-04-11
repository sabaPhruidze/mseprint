"use client";
import React from "react";
import { useForm } from "react-hook-form";

type FormData = {
  firstname: string;
  lastname: string;
  email: string;
  emailVerification: string;
  phone: string; // single phone field

  // 3 new optional fields
  jobTitle?: string;
  company?: string;
  extension?: string;

  projectName: string;
  quantity: number;
  description: string;
  dueDate: string;
  terms: boolean;
  representative: string;
};

export default function RequestQuoteForm() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormData>({ mode: "onBlur" });

  // 1) Auto-format function for phone: "XXX-XXX-XXXX"
  const formatPhoneNumber = (rawValue: string) => {
    const digits = rawValue.replace(/\D/g, "");
    if (digits.length > 6) {
      return (
        digits.slice(0, 3) +
        "-" +
        digits.slice(3, 6) +
        "-" +
        digits.slice(6, 10)
      );
    } else if (digits.length > 3) {
      return digits.slice(0, 3) + "-" + digits.slice(3, 6);
    } else {
      return digits;
    }
  };

  // 2) Required fields array
  const requiredFields = [
    {
      name: "firstname" as const,
      type: "text",
      placeholder: "First Name *",
      rules: {
        required: "First name is required",
        pattern: {
          value: /^[A-Za-z]{3,}$/,
          message:
            "First name must be at least 3 English letters (no digits/symbols)",
        },
      },
    },
    {
      name: "lastname" as const,
      type: "text",
      placeholder: "Last Name *",
      rules: {
        required: "Last name is required",
        pattern: {
          value: /^[A-Za-z]{3,}$/,
          message:
            "Last name must be at least 3 English letters (no digits/symbols)",
        },
      },
    },
    {
      name: "email" as const,
      type: "email",
      placeholder: "Email *",
      rules: {
        required: "Email is required",
        pattern: {
          value: /^\S+@\S+$/i,
          message: "Invalid email",
        },
      },
    },
    {
      name: "emailVerification" as const,
      type: "email",
      placeholder: "Confirm Email *",
      rules: {
        required: "Please verify your email address",
        validate: (value: string) => {
          const originalEmail = getValues("email");
          return value === originalEmail || "Confirmation email does not match";
        },
      },
    },
    {
      name: "phone" as const,
      type: "tel",
      placeholder: "Phone *",
      rules: {
        required: "Phone is required",
        validate: (value: string) => {
          const digits = value.replace(/\D/g, "");
          if (digits.length === 0) {
            return "Phone is required";
          }
          if (digits.length !== 10) {
            return "Phone number must be 10 digits";
          }
          return true;
        },
      },
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        e.target.value = formatPhoneNumber(e.target.value);
      },
    },
  ];

  // 3) Optional fields array
  const optionalFields = [
    {
      name: "jobTitle" as const, // no required
      type: "text",
      placeholder: "Job Title (Optional)",
      rules: {}, // No required or pattern => truly optional
    },
    {
      name: "company" as const,
      type: "text",
      placeholder: "Company (Optional)",
      rules: {},
    },
    {
      name: "extension" as const,
      type: "text",
      placeholder: "Extension (Optional)",
      rules: {},
    },
  ];

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
                    className="border p-2 screen-size-5:w-[460px] screen-size-5:h-[60px] rounded screen-size-5:text-base
        w-[340px] h-[45px] text-sm"
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
                    className="border p-2 screen-size-5:w-[460px] screen-size-5:h-[60px] rounded screen-size-5:text-base
        w-[340px] h-[45px] text-sm"
                    // No required => simply pass rules if any
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

      <button
        type="submit"
        className="mt-4 bg-red-600 text-white py-2 px-8 rounded hover:bg-red-700"
      >
        Submit
      </button>
    </form>
  );
}
