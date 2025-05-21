"use client";

import React, { useMemo, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { loginAction } from "./loginAction";

/* ----------------------------------------------------------------------- */
/* 1 ·  shape of the form                                                  */
/* ----------------------------------------------------------------------- */
export type LoginFormValues = {
  email: string;
  password: string;
};

/* single definition for field metadata */
type FieldDef = {
  name: keyof LoginFormValues;
  type: string;
  placeholder: string;
  autoComplete: string;
  rules: Record<string, unknown>;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();

  const [serverError, setServerError] = useState<string | null>(null);
  const [isPending, start] = useTransition();

  /* two inputs, styled like Register but using red as the accent color */
  const fields: FieldDef[] = useMemo(
    () => [
      {
        name: "email",
        type: "email",
        placeholder: "Email",
        autoComplete: "email",
        rules: {
          required: "Email is required",
          pattern: {
            value: /^\S+@\S+$/i,
            message: "Invalid email",
          },
        },
      },
      {
        name: "password",
        type: "password",
        placeholder: "Password",
        autoComplete: "current-password",
        rules: { required: "Password is required" },
      },
    ],
    []
  );

  const onSubmit = (data: LoginFormValues) =>
    start(async () => {
      const res = await loginAction(data);
      if (res?.error) setServerError(res.error);
    });

  return (
    <div className="flex justify-center items-start lg:items-center min-h-screen px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md lg:max-w-lg flex flex-col gap-6 mx-auto"
      >
        {fields.map(({ name, type, placeholder, autoComplete, rules }) => (
          <div key={name} className="flex flex-col gap-1 w-full">
            <input
              type={type}
              placeholder={placeholder}
              autoComplete={autoComplete}
              className="w-full border rounded px-4 py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-red-500"
              {...register(name, rules)}
            />
            {errors[name] && (
              <p className="text-red-600 text-xs md:text-sm">
                {String(errors[name]?.message)}
              </p>
            )}
          </div>
        ))}

        {serverError && (
          <p className="text-red-600 text-center text-sm md:text-base">
            {serverError}
          </p>
        )}

        <button
          type="submit"
          disabled={isPending}
          className="w-full rounded-lg bg-red py-3 font-semibold text-white transition-opacity duration-200 hover:bg-red disabled:opacity-50"
        >
          {isPending ? "Signing in…" : "Sign in"}
        </button>
      </form>
    </div>
  );
}
