import { toggleCartSidebar } from "@/lib/features/toggleSlice";
import { useAppDispatch, useAppSelector } from "@/lib/reduxHooks";
import React from "react";
import CartListItem from "./CartListItem";
import { BsCartX } from "react-icons/bs";

export default function CartItemList() {
  const { cartItemList } = useAppSelector((store) => store.cart);
  const dispatch = useAppDispatch();

  return (
    <ul
      className="flex h-full flex-grow flex-col"
      onClick={() => dispatch(toggleCartSidebar(false))}
    >
      {cartItemList.length > 0 &&
        cartItemList.map((cartItem) => {
          return <CartListItem key={cartItem.product.id} cartItem={cartItem} />;
        })}
      {cartItemList.length <= 0 && (
        <li className="flex h-full flex-col items-center justify-center gap-5">
          <BsCartX className="size-20" />
          <p className="text-2xl font-semibold capitalize">
            your cart is empty
          </p>
        </li>
      )}
    </ul>
  );
}
