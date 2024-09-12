"use client";

import { toggleSidebar } from "@/lib/features/sidebarSlice";
import { useAppDispatch } from "@/lib/reduxHooks";
import Logo from "@/ui/Logo";
import { BsArrowLeft } from "react-icons/bs";

export default function SidebarHeader() {
  const dispatch = useAppDispatch();

  return (
    <div className="relative my-2 mt-6 flex w-full justify-center">
      <Logo />
      <button
        onClick={() => dispatch(toggleSidebar(false))}
        className="absolute right-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border bg-white p-1 text-black duration-200 hover:scale-110 hover:bg-slate-100 active:scale-95 active:bg-slate-200"
      >
        <BsArrowLeft className="size-6" />
      </button>
    </div>
  );
}
