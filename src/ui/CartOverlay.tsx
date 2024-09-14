"use client";

import { toggleCartSidebar } from "@/lib/features/toggleSlice";
import { useAppDispatch, useAppSelector } from "@/lib/reduxHooks";

export default function CartOverlay() {
  const isOpen = useAppSelector((store) => store.sidebar.isCartSidebarOpen);
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
