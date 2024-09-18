"use client";

import { CartItem } from "@/interfaces";
import Image from "next/image";
import React from "react";
import CartItemQuantity from "./CartItemQuantity";

export default function CartListItem({ cartItem }: { cartItem: CartItem }) {
  const totalItemPrice = cartItem.quantity * cartItem.product.price;
  const fixedTotalItemPrice = totalItemPrice.toFixed(2);

  return (
    <li className="flex flex-wrap items-center gap-3 rounded-xl border shadow-xl dark:border-rose-600">
      <div className="relative h-20 w-full">
        <Image
          src={cartItem.product.images[0]}
          alt={cartItem.product.title}
          fill
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="rounded-t-xl bg-gradient-to-br from-sky-500 to-violet-600 object-contain dark:from-violet-600 dark:to-rose-600"
        />
      </div>
      <div className="w-full p-2">
        <p className="font-semibold text-sky-500">{cartItem.product.title}</p>
        <p>Total: {fixedTotalItemPrice}$</p>
        <CartItemQuantity cartItem={cartItem} />
      </div>
    </li>
  );
}
