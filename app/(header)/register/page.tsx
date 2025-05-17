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

  /* build the field list once                                                  */
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 items-center screen-size-12:items-start"
    >
      {fields.map(
        ({ name, type, placeholder, rules, onChange, autoComplete }) => (
          <div
            key={name}
            className="flex flex-col items-center screen-size-12:items-start"
          >
            <input
              type={type}
              placeholder={placeholder}
              autoComplete={autoComplete}
              className="border p-2 screen-size-5:w-[460px] screen-size-5:h-[60px]
                       rounded screen-size-5:text-base w-[300px] h-[45px] text-sm"
              {...register(name, {
                ...(rules || {}),
                ...(onChange ? { onChange } : {}),
              })}
            />
            {errors[name] && (
              <p className="text-red text-sm mt-1">
                {String(errors[name]?.message)}
              </p>
            )}
          </div>
        )
      )}

      {serverError && (
        <p className="text-red text-sm mt-1 text-center">{serverError}</p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="bg-blue-600 text-white rounded px-6 py-2 disabled:opacity-50"
      >
        {isPending ? "Creating account…" : "Create account"}
      </button>
    </form>
  );
}
