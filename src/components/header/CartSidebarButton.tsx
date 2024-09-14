"use client";

import { toggleCartSidebar } from "@/lib/features/toggleSlice";
import { useAppDispatch } from "@/lib/reduxHooks";
import { motion } from "framer-motion";
import { BsBasket } from "react-icons/bs";

export default function CartSidebarButton() {
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
        className="flex items-center rounded-lg border p-1 hover:bg-slate-100 active:ring-2"
        onClick={() => dispatch(toggleCartSidebar(true))}
      >
        <BsBasket className="size-7" />
      </motion.button>
    </>
  );
}
