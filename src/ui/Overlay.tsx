"use client";

import { toggleCartSidebar } from "@/lib/features/sidebarSlice";
import { useAppDispatch, useAppSelector } from "@/lib/reduxHooks";

export default function Overlay() {
  const isOpen = useAppSelector((store) => store.sidebar.cartSidebarIsOpen);
  const dispatch = useAppDispatch();

  if (!isOpen) {
    return;
  }

  return (
    <div
      onClick={() => dispatch(toggleCartSidebar(false))}
      className="fixed inset-0 z-20 h-screen w-screen bg-black p-4 opacity-50"
    ></div>
  );
}
