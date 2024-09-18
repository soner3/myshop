"use client";

import { CartItem } from "@/interfaces";
import { decraseQuantity, incraseQuantity } from "@/lib/features/cartSlice";
import { useAppDispatch } from "@/lib/reduxHooks";
import { BsTrash3 } from "react-icons/bs";

export default function CartItemQuantity({ cartItem }: { cartItem: CartItem }) {
  const dispatch = useAppDispatch();

  return (
    <div className="m-1 flex items-center justify-center gap-3">
      <button
        onClick={() => dispatch(decraseQuantity(cartItem))}
        className="flex h-7 w-7 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-rose-600 text-white shadow-xl duration-200 hover:scale-105 active:scale-95"
      >
        {cartItem.quantity <= 1 ? <BsTrash3 /> : "-"}
      </button>
      <p>{cartItem.quantity}</p>
      <button
        onClick={() => dispatch(incraseQuantity(cartItem))}
        className="flex h-7 w-7 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-violet-600 text-white shadow-xl duration-200 hover:scale-105 active:scale-95"
      >
        +
      </button>
    </div>
  );
}
