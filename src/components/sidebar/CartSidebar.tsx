"use client";

import { useAppSelector } from "@/lib/reduxHooks";
import CartItemList from "./CartItemList";
import CloseCartButton from "./CloseCartButton";

export default function CartSidebar() {
  const isOpen = useAppSelector((store) => store.toggle.isCartSidebarOpen);

  return (
    <aside
      className={`fixed right-0 top-0 z-30 flex h-screen w-full flex-col bg-white md:w-[320px] lg:w-[320px] dark:bg-slate-900 dark:text-white ${!isOpen && "translate-x-full"} opacity-100 duration-300`}
    >
      <CartItemList />
      <CloseCartButton />
    </aside>
  );
}
