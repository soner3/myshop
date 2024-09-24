"use client";

import { toggleCartSidebar } from "@/lib/features/toggleSlice";
import { useAppDispatch } from "@/lib/reduxHooks";
import { BsXLg } from "react-icons/bs";

export default function CloseCartButton() {
  const dispatch = useAppDispatch();

  return (
    <button
      onClick={() => dispatch(toggleCartSidebar(false))}
      className="absolute left-5 top-5 rounded-full bg-white p-3 text-black duration-200 hover:scale-105 active:scale-95 md:hidden"
    >
      <BsXLg className="size-7" />
    </button>
  );
}
