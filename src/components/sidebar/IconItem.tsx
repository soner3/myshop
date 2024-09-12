"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export default function IconItem({
  href,
  icon,
}: {
  href: string;
  icon: ReactNode;
}) {
  return (
    <motion.li variants={variants}>
      <Link
        href={href}
        className="flex justify-center p-6 text-white duration-200 hover:scale-110 hover:bg-white hover:bg-opacity-20 active:scale-95"
      >
        {icon}
      </Link>
    </motion.li>
  );
}
