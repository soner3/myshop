"use client";

import { toggleSidebar } from "@/lib/features/toggleSlice";
import { useAppDispatch, useAppSelector } from "@/lib/reduxHooks";
import { BsJustify } from "react-icons/bs";
import { motion } from "framer-motion";

export default function SidebarButton() {
  const isOpen = useAppSelector((state) => state.toggle.isSidebarOpen);
  const dispatch = useAppDispatch();

  return (
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
      onClick={() => dispatch(toggleSidebar(!isOpen))}
      className="flex items-center rounded-lg border border-violet-600 p-1 ring-violet-600 hover:bg-slate-100 active:ring-2 dark:hover:bg-slate-800"
    >
      <BsJustify className="size-7" />
    </motion.button>
  );
}
