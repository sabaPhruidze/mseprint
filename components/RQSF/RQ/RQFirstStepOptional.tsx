"use client";
import React from "react";
import { useFormContext } from "react-hook-form";
import { optionalFields } from "db/RQData";
import { FormData } from "../../../types/commonTypes";

const RQFirstStepOptional = () => {
  // Access form context
  const {
    register,
    formState: { errors },
  } = useFormContext<FormData>();

  return (
    <div className="space-y-3 w-[500px]">
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
  );
};

export default RQFirstStepOptional;
