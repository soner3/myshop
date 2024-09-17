"use client";

import { useAppSelector } from "@/lib/reduxHooks";
import CartItemList from "./CartItemList";

export default function CartSidebar() {
  const isOpen = useAppSelector((store) => store.toggle.isCartSidebarOpen);

  return (
    <aside
      className={`dark:text-whitemd:w-[280px] fixed right-0 top-0 z-30 h-screen w-1/2 bg-white lg:w-[320px] dark:bg-slate-900 ${!isOpen && "translate-x-full"} opacity-100 duration-300`}
    >
      <CartItemList />
    </aside>
  );
}
