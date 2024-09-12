"use client";

import { useAppSelector } from "@/lib/reduxHooks";
import IconItemList from "./IconItemList";

export default function IconSidebar() {
  const isOpen = useAppSelector((store) => store.sidebar.isOpen);
  return (
    <aside
      className={`fixed hidden h-full bg-gradient-to-br from-sky-500 via-violet-600 to-rose-600 shadow-2xl transition-all duration-300 md:flex ${isOpen && "-translate-x-full"}`}
    >
      <IconItemList />
    </aside>
  );
}
