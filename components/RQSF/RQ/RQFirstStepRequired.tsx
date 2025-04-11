"use client";
import React from "react";
import { useFormContext } from "react-hook-form";
import { getRequiredFields } from "db/RQData";
import { FormData } from "../../../types/commonTypes";

const RQFirstStepRequired = () => {
  // Access react-hook-form methods from context
  const {
    register,
    getValues,
    formState: { errors },
  } = useFormContext<FormData>();

  // Build the array using getValues
  const requiredFields = getRequiredFields(getValues);

  return (
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
  );
};

export default RQFirstStepRequired;
