"use client";

import React, { useMemo, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { getRequiredFields, optionalFields } from "../../../lib/registerFields";
import { registerAction } from "./registerAction";

/* ----------------------------------------------------------------------- */
/*  Shapes                                                                 */
/* ----------------------------------------------------------------------- */
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

export type FieldDef = {
  name: keyof RegisterFormValues;
  type: string;
  placeholder: string;
  autoComplete: string;
  rules: Record<string, unknown>;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

/* ----------------------------------------------------------------------- */
/*  Component                                                              */
/* ----------------------------------------------------------------------- */
export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<RegisterFormValues>();

  const [serverError, setServerError] = useState<string | null>(null);
  const [isPending, start] = useTransition();

  /* build the field list once                                               */
  const fields: FieldDef[] = useMemo(() => {
    const required = getRequiredFields(getValues) as FieldDef[];
    return [...required, ...optionalFields] as FieldDef[];
  }, [getValues]);

  /* --------------------------------------------------------------------- */
  /* submit handler – calls server action, shows error if it comes back    */
  /* --------------------------------------------------------------------- */
  const onSubmit = (data: RegisterFormValues) =>
    start(async () => {
      const res = await registerAction(data);
      if (res?.error) setServerError(res.error);
    });

  return (
    <div className="flex justify-center items-start lg:items-center min-h-screen px-4 my-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md lg:max-w-lg flex flex-col gap-6 mx-auto"
      >
        {fields.map(
          ({ name, type, placeholder, rules, onChange, autoComplete }) => (
            <div key={name} className="flex flex-col gap-1 w-full">
              <input
                type={type}
                placeholder={placeholder}
                autoComplete={autoComplete}
                className="w-full border rounded py-3 px-4 h-[60px] text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register(name, {
                  ...(rules || {}),
                  ...(onChange ? { onChange } : {}),
                })}
              />
              {errors[name] && (
                <p className="text-red-600 text-xs md:text-sm">
                  {String(errors[name]?.message)}
                </p>
              )}
            </div>
          )
        )}

        {serverError && (
          <p className="text-red-600 text-center text-sm md:text-base">
            {serverError}
          </p>
        )}

        <button
          type="submit"
          disabled={isPending}
          className="w-full rounded-lg bg-red py-3 font-semibold text-white transition-opacity duration-800 hover:bg-red disabled:opacity-50"
        >
          {isPending ? "Creating account…" : "Create account"}
        </button>
      </form>
    </div>
  );
}
