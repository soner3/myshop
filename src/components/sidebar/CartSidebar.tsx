"use client";

import { Drawer } from "@mui/material";
import { useState } from "react";
import { motion } from "framer-motion";
import { BsBasket } from "react-icons/bs";

export default function CartSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDrawer(newOpen: boolean) {
    setIsOpen(newOpen);
  }
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
        onClick={() => toggleDrawer(true)}
      >
        <BsBasket className="size-7" />
      </motion.button>
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={() => toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: 1 / 2,
          },
        }}
      >
        <ul className="h-full" onClick={() => toggleDrawer(false)}>
          <li>Item1</li>
          <li>Item2</li>
          <li>Item3</li>
          <li>Item4</li>
          <li>Item5</li>
          <li>Item6</li>
          <li>Item7</li>
        </ul>
      </Drawer>
    </>
  );
}
