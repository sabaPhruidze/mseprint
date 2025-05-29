"use client";
import React from "react";
import { useFormContext } from "react-hook-form";
import { getRequiredFields } from "db/RQData";
import { FormData } from "../../types/commonTypes";

const RQSFFirstStepRequired = () => {
  const {
    register,
    getValues,
    formState: { errors },
  } = useFormContext<FormData>();

  const requiredFields = getRequiredFields(getValues);

  return (
    <div className="space-y-6 max-w-[500px] min-w-[300px] mx-auto text-center screen-size-12:text-left">
      <p className="text-[24px] font-inter-bold">Required Information</p>

      {requiredFields.map((field) => {
        const { name, type, placeholder, rules, onChange } = field;

        return (
          <div
            key={name}
            className="flex flex-col items-center screen-size-12:items-start"
          >
            <input
              type={type}
              placeholder={placeholder}
              className="border p-2 screen-size-5:w-[460px] screen-size-5:h-[60px] rounded screen-size-5:text-base w-[300px] h-[45px] text-sm "
              {...register(name, {
                ...rules,
                onChange,
              })}
            />
            {errors[name] && (
              <p className="text-red text-sm mt-1">
                {String(errors[name]?.message)}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default RQSFFirstStepRequired;
