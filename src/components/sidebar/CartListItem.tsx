import { CartItem } from "@/interfaces";
import Image from "next/image";
import React from "react";

export default function CartListItem({ cartItem }: { cartItem: CartItem }) {
  return (
    <li className="flex">
      <Image
        src={cartItem.product.images[0]}
        alt={cartItem.product.title}
        height={100}
        width={100}
        className="bg-gradient-to-br from-sky-500 to-violet-600 dark:from-violet-600 dark:to-rose-600"
      />
      <div className="w-full">
        <p>{cartItem.product.title}</p>
        <p>{cartItem.product.price}</p>
      </div>
    </li>
  );
}
