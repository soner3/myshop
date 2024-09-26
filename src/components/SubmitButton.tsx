import React, { ReactNode } from "react";

export default function SubmitButton({
  children,
  isLoading,
}: {
  children: ReactNode;
  isLoading?: boolean;
}) {
  return (
    <button
      type="submit"
      disabled={isLoading}
      className="my-4 w-full rounded-xl bg-gradient-to-br from-sky-500 to-violet-600 py-2 font-bold text-white duration-200 hover:scale-105 active:scale-95 dark:from-violet-600 dark:to-rose-600"
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
}
