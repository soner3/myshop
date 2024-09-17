"use client";

import { applyDarkMode, applyLightMode } from "@/lib/theme";
import { BsBrightnessHigh, BsMoonStars } from "react-icons/bs";
import { motion } from "framer-motion";

export default function ToggleTheme() {
  function changeToDark() {
    applyDarkMode();
  }

  function changeToLight() {
    applyLightMode();
  }

  return (
    <motion.div
      initial={{
        scale: 0,
      }}
      animate={{
        scale: 1,
      }}
      transition={{
        duration: 0.3,
      }}
      className="flex"
    >
      <button
        className="z-10 rounded-l-full border border-sky-500 p-2 duration-300 hover:scale-105 active:scale-95"
        onClick={changeToLight}
      >
        <BsBrightnessHigh className="size-6" />
      </button>
      <button
        className="z-10 rounded-r-full border border-sky-500 p-2 duration-300 hover:scale-105 active:scale-95"
        onClick={changeToDark}
      >
        <BsMoonStars className="size-6" />
      </button>
    </motion.div>
  );
}
