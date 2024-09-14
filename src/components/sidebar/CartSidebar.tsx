"use client";

import { toggleCartSidebar } from "@/lib/features/toggleSlice";
import { useAppDispatch, useAppSelector } from "@/lib/reduxHooks";

export default function CartSidebar() {
  const isOpen = useAppSelector((store) => store.sidebar.isCartSidebarOpen);
  const dispatch = useAppDispatch();

  return (
    <aside
      className={`fixed right-0 top-0 z-30 h-screen w-1/2 bg-white md:w-[280px] lg:w-[320px] ${!isOpen && "translate-x-full"} opacity-100 duration-300`}
    >
      <ul className="h-full" onClick={() => dispatch(toggleCartSidebar(false))}>
        <li>Item1</li>
        <li>Item2</li>
        <li>Item3</li>
        <li>Item4</li>
        <li>Item5</li>
        <li>Item6</li>
        <li>Item7</li>
      </ul>
    </aside>
  );
}
