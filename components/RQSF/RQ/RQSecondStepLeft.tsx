"use client";
import React from "react";
import { useFormContext } from "react-hook-form";
import { FormData } from "../../../types/commonTypes";

export default function RQSecondStepLeft() {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormData>();

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">About Project</h3>

      {/* Project Name */}
      <div className="flex flex-col">
        <input
          type="text"
          placeholder="Project Name *"
          className="border p-2 rounded"
          {...register("projectName", { required: "This field is required" })}
        />
        {errors.projectName && (
          <p className="text-red-500 text-sm">
            {errors.projectName.message as string}
          </p>
        )}
      </div>

      {/* Quantity */}
      <div className="flex flex-col">
        <input
          type="number"
          placeholder="Quantity *"
          className="border p-2 rounded"
          {...register("quantity", { required: "This field is required" })}
        />
        {errors.quantity && (
          <p className="text-red-500 text-sm">
            {errors.quantity.message as string}
          </p>
        )}
      </div>

      {/* Project Description */}
      <div className="flex flex-col">
        <label className="text-sm font-medium mb-1">
          Project Description *
        </label>
        <textarea
          placeholder="Describe your project..."
          className="border p-2 rounded h-32 resize-vertical"
          {...register("description", {
            required: "This field is required",
            maxLength: {
              value: 700,
              message: "Max 700 characters for description",
            },
          })}
        />
        {errors.description && (
          <p className="text-red-500 text-sm">
            {errors.description.message as string}
          </p>
        )}
        <p className="text-gray-400 text-xs">
          Max 700 characters for description
        </p>
      </div>

      {/* Project Due Date */}
      <div className="flex flex-col">
        <label className="text-sm font-medium mb-1">Project Due Date *</label>
        <input
          type="date"
          className="border p-2 rounded"
          {...register("dueDate", { required: "This field is required" })}
        />
        {errors.dueDate && (
          <p className="text-red-500 text-sm">
            {errors.dueDate.message as string}
          </p>
        )}
      </div>

      {/* Terms Checkbox */}
      <div className="flex items-center gap-2">
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
        <p className="text-red-500 text-sm">{errors.terms.message as string}</p>
      )}
    </div>
  );
}
