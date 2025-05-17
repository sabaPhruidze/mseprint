"use client";

import React, { useMemo, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { loginAction } from "./loginAction";

/* ──────────────────────────────────────────────────────────────── */
/* 1 ·  shape of the form                                          */
/* ──────────────────────────────────────────────────────────────── */
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

  /* two inputs, same style you used for register */
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 items-center screen-size-12:items-start"
    >
      {fields.map(({ name, type, placeholder, autoComplete, rules }) => (
        <div
          key={name}
          className="flex flex-col items-center screen-size-12:items-start"
        >
          <input
            type={type}
            placeholder={placeholder}
            autoComplete={autoComplete}
            className="border p-2 screen-size-5:w-[460px] screen-size-5:h-[60px] rounded screen-size-5:text-base w-[300px] h-[45px] text-sm"
            {...register(name, rules)}
          />
          {errors[name] && (
            <p className="text-red text-sm mt-1">
              {String(errors[name]?.message)}
            </p>
          )}
        </div>
      ))}

      {serverError && (
        <p className="text-red text-sm mt-1 text-center">{serverError}</p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="bg-blue-600 text-white rounded px-6 py-2 disabled:opacity-50"
      >
        {isPending ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}
