"use client";

import { toggleCartSidebar } from "@/lib/features/toggleSlice";
import { useAppDispatch, useAppSelector } from "@/lib/reduxHooks";
import Link from "next/link";

export default function CartInfo() {
  const cart = useAppSelector((store) => store.cart.cartItemList);
  const dispatch = useAppDispatch();

  const totalPrice = cart.reduce((acc, curr) => {
    return acc + curr.totalPrice;
  }, 0);

  const fixedTotalPrice = totalPrice.toFixed(2);

  return (
    <div className="m-auto flex w-full flex-col items-center justify-center p-2">
      <div className="flex w-full justify-between p-3 text-2xl font-semibold">
        <p>Total</p>
        <p>{fixedTotalPrice}$</p>
      </div>
      <Link href={"/checkout/information/"} className="w-full">
        <button
          onClick={() => dispatch(toggleCartSidebar(false))}
          className="mx-auto w-full rounded-xl bg-gradient-to-br from-sky-500 to-violet-600 p-2 font-bold text-white duration-200 hover:scale-105 active:scale-95 dark:from-violet-600 dark:to-rose-600"
        >
          Checkout
        </button>
      </Link>
    </div>
  );
}
