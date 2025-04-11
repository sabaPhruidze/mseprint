"use client";
import React from "react";
import { useFormContext } from "react-hook-form";
// import { FormData } from "path/to/types"; // if you have a specific form type

// Example representatives array
const representatives = [
  { id: "rep1", name: "Doug Snider" },
  { id: "rep2", name: "Trish Benson" },
  { id: "rep3", name: "John Goodrich" },
  { id: "rep4", name: "Ethan Ellison" },
  { id: "rep5", name: "Merabi Pruidze" },
  { id: "rep6", name: "No preference" },
];

export default function SelectRepresentative() {
  // If using react-hook-form, uncomment and reference your form type:
  const {
    register,
    formState: { errors },
  } = useFormContext(/*<FormData>*/);

  return (
    <div className="flex flex-col w-full gap-2">
      <h3 className="text-lg font-inter-bold">Select a Representative</h3>

      {/* Use a responsive grid: 2 columns on small screens, up to 6 columns on larger */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {representatives.map((rep) => (
          <label
            key={rep.id}
            className="flex items-center gap-2 border rounded px-3 py-2 hover:bg-gray-50 cursor-pointer h-[50px] font-inter-bold"
          >
            {/* Radio input (registered with react-hook-form) */}
            <input
              type="radio"
              value={rep.name}
              // For accessibility, reference rep.id or use an auto-generated one
              {...register("representative", {
                required: "Please select a representative",
              })}
            />
            <span className="text-[18px]">{rep.name}</span>
          </label>
        ))}
      </div>

      {errors.representative && (
        <p className="text-red-500 text-sm mt-1">
          {errors.representative.message as string}
        </p>
      )}
    </div>
  );
}
