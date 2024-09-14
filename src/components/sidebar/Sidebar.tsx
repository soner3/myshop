"use client";

import { useAppSelector } from "@/lib/reduxHooks";
import MenuItemList from "./MenuItemList";
import SidebarHeader from "./SidebarHeader";

export default function Sidebar() {
  const isOpen = useAppSelector((state) => state.sidebar.isOpen);

  return (
    <nav
      className={`${isOpen ? "" : "-translate-x-full"} fixed top-0 z-20 h-screen w-[280px] rounded-r-2xl bg-gradient-to-br from-sky-500 via-violet-600 to-rose-600 text-white duration-300`}
    >
      <SidebarHeader />
      <MenuItemList />
    </nav>
  );
}
