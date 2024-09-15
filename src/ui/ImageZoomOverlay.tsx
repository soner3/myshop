"use client";

import { toggleImageFocus } from "@/lib/features/toggleSlice";
import { useAppDispatch, useAppSelector } from "@/lib/reduxHooks";

export default function ImageZoomOverlay() {
  const isOpen = useAppSelector((store) => store.toggle.isImageFocus);
  const dispatch = useAppDispatch();

  if (!isOpen) {
    return;
  }

  return (
    <div
      onClick={() => dispatch(toggleImageFocus(false))}
      className="fixed inset-0 z-20 h-screen w-screen bg-black p-4 opacity-50"
    ></div>
  );
}
