"use client";

import { toggleCartSidebar } from "@/lib/features/toggleSlice";
import { useAppDispatch, useAppSelector } from "@/lib/reduxHooks";
import { motion } from "framer-motion";
import { BsBasket } from "react-icons/bs";
import Badge from "./Badge";

export default function CartSidebarButton() {
  const cartItemList = useAppSelector((store) => store.cart.cartItemList);
  const dispatch = useAppDispatch();

  return (
    <>
      <motion.button
        initial={{
          scale: 0,
        }}
        animate={{
          scale: 1,
          rotate: 360,
        }}
        transition={{
          duration: 0.3,
        }}
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.95,
        }}
        className="relative flex items-center rounded-lg border border-rose-600 p-1 ring-rose-600 hover:bg-slate-100 active:ring-2 dark:hover:bg-slate-800"
        onClick={() => dispatch(toggleCartSidebar(true))}
      >
        <BsBasket className="size-7" />
        {cartItemList.length > 0 && cartItemList.length < 10 ? (
          <Badge>{cartItemList.length}</Badge>
        ) : cartItemList.length > 9 ? (
          <Badge>9+</Badge>
        ) : (
          ""
        )}
      </motion.button>
    </>
  );
}
