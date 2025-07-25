"use client";
import React from "react";
import { useFormContext } from "react-hook-form";
import { FormData } from "../../types/commonTypes";

export default function RQSFSecondStepLeft() {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormData>();

  return (
    <div className="space-y-6 max-w-[500px] min-w-[300px] mx-auto text-center screen-size-12:text-left ">
      <h3 className="text-[24px] font-inter-bold">About Project</h3>

      {/* Project Name */}
      <div className="flex flex-col items-center screen-size-12:items-start">
        <input
          type="text"
          placeholder="Project Name *"
          className="border p-2 screen-size-5:w-[460px] screen-size-5:h-[60px] text-black rounded screen-size-5:text-base w-[300px] h-[45px] text-sm"
          {...register("projectName", { required: "This field is required" })}
        />
        {errors.projectName && (
          <p className="text-red text-sm mt-1">{errors.projectName.message}</p>
        )}
      </div>

      {/* Quantity */}
      <div className="flex flex-col items-center screen-size-12:items-start">
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          placeholder="Quantity *"
          className="text-black border p-2 screen-size-5:w-[460px] screen-size-5:h-[60px] rounded screen-size-5:text-base w-[300px] h-[45px] text-sm"
          {...register("quantity", {
            required: "This field is required",
            pattern: /^\d+$/, // <- just RegExp
          })}
          onKeyDown={(e) => {
            const allowed = [
              "Backspace",
              "Delete",
              "ArrowLeft",
              "ArrowRight",
              "Tab",
            ];
            if (!/^[0-9]$/.test(e.key) && !allowed.includes(e.key))
              e.preventDefault();
          }}
        />

        {errors.quantity?.type === "pattern" && (
          <p className="text-red text-sm mt-1">Quantity must be digits only</p>
        )}
      </div>

      {/* Project Description */}
      <div className="flex flex-col items-center screen-size-12:items-start">
        <label className="text-sm font-medium mb-1">
          Project Description *
        </label>
        <textarea
          placeholder="Describe your project..."
          className="text-black border p-2 screen-size-5:w-[460px] rounded screen-size-5:text-base w-[300px] text-sm min-h-[200px] resize-vertical"
          maxLength={700}
          {...register("description", {
            required: "This field is required",
            maxLength: {
              value: 700,
              message: "Max 700 characters for description",
            },
          })}
        />
        {errors.description && (
          <p className="text-red text-sm mt-1">{errors.description.message}</p>
        )}
        <p className="text-gray-400 text-xs mt-1">
          Max 700 characters for description
        </p>
      </div>

      {/* Due Date */}
      <div className="flex flex-col items-center screen-size-12:items-start">
        <label className="text-sm font-medium mb-1">Project Due Date *</label>
        <input
          type="date"
          className="border p-2 dark:text-black screen-size-5:w-[460px] screen-size-5:h-[60px] rounded screen-size-5:text-base w-[300px] h-[45px] text-sm"
          {...register("dueDate", { required: "This field is required" })}
        />
        {errors.dueDate && (
          <p className="text-red text-sm mt-1">{errors.dueDate.message}</p>
        )}
      </div>

      {/* Terms Agreement */}
      <div className="flex flex-col items-center screen-size-12:flex-row screen-size-12:items-start gap-2">
        <input
          type="checkbox"
          className="w-5 h-5"
          {...register("terms", { required: "This field is required" })}
        />
        <label className="text-sm">
          Yes, I agree to the terms and conditions *
        </label>
      </div>
      {errors.terms && (
        <p className="text-red text-sm text-center screen-size-12:text-left">
          {errors.terms.message}
        </p>
      )}
    </div>
  );
}
