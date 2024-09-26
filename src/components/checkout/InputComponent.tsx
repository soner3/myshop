"use client";

import { InputComponentType } from "@/interfaces";

export default function InputComponent({
  labelValue,
  inputPlaceholder,
  inputType,
  inputId,
  error,
  errorMessage,
  register,
  registerSchema,
}: InputComponentType) {
  return (
    <div className="flex h-full w-full flex-col p-2">
      <label
        htmlFor={inputId}
        className={`my-2 font-semibold duration-200 ${error && "text-red-500"}`}
      >
        {labelValue} *
      </label>
      <input
        type={inputType}
        id={inputId}
        {...register(registerSchema)}
        placeholder={inputPlaceholder}
        className={`rounded-xl border-2 border-sky-500 p-2 text-black ring-sky-500 duration-200 focus:outline-none focus:ring-2 dark:border-rose-600 dark:ring-rose-600 ${error && "text-red-500"}`}
      />
      {error && <p className="ml-1 capitalize text-red-500">{errorMessage}</p>}
    </div>
  );
}
