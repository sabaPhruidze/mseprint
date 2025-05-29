"use client";

import React, { useMemo, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { getRequiredFields, optionalFields } from "lib/registerFields";
import { registerAction } from "app/(header)/register/registerAction";

/* ---------- Types ---------- */
export type RegisterFormValues = {
  firstname: string;
  lastname: string;
  email: string;
  emailVerification: string;
  password: string;
  passwordVerification: string;
  phone: string;
  jobTitle?: string;
  company?: string;
  extension?: string;
};

type FieldDef = {
  name: keyof RegisterFormValues;
  type: string;
  placeholder: string;
  autoComplete: string;
  rules: Record<string, unknown>;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

/* ---------- Component ---------- */
export default function RegisterClient() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<RegisterFormValues>();

  const [serverError, setServerError] = useState<string | null>(null);
  const [isPending, start] = useTransition();

  /* Build field list once */
  const fields: FieldDef[] = useMemo(() => {
    return [...getRequiredFields(getValues), ...optionalFields] as FieldDef[];
  }, [getValues]);

  /* Submit handler */
  const onSubmit = (data: RegisterFormValues) =>
    start(async () => {
      const res = await registerAction(data);
      if (res?.error) setServerError(res.error);
    });

  return (
    <div className="flex justify-center items-start lg:items-center min-h-screen px-4 my-10 screen-size-6:w-[600px] screen-size-4:w-[400px] w-[300px]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md lg:max-w-lg flex flex-col gap-6 mx-auto"
      >
        {/* ------ Dynamic Fields ------ */}
        {fields.map(
          ({ name, type, placeholder, rules, onChange, autoComplete }) => {
            const fieldError = errors[name];
            return (
              <div key={name} className="flex flex-col gap-1 w-full">
                <input
                  type={type}
                  placeholder={placeholder}
                  autoComplete={autoComplete}
                  className="w-full border rounded py-3 px-4 h-[60px] text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue dark:text-black"
                  {...register(name, {
                    ...rules,
                    ...(onChange ? { onChange } : {}),
                  })}
                />
                {fieldError && (
                  <p className="text-red text-xs md:text-sm">
                    {String(fieldError.message || "This field is required")}
                  </p>
                )}
              </div>
            );
          }
        )}

        {/* ------ Server Error ------ */}
        {serverError && (
          <p className="text-red text-center text-sm md:text-base">
            {serverError}
          </p>
        )}

        {/* ------ Submit Button ------ */}
        <button
          type="submit"
          disabled={isPending}
          className="w-full rounded-lg bg-red py-3 font-semibold text-white transition-opacity duration-200 hover:opacity-90 disabled:opacity-50 "
        >
          {isPending ? "Creating account…" : "Create account"}
        </button>
      </form>
    </div>
  );
}
