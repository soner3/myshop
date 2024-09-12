"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { motion } from "framer-motion";

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

export default function MenuItem({
  href,
  text,
  icon,
}: {
  href: string;
  text: string;
  icon: ReactNode;
}) {
  return (
    <motion.li variants={variants}>
      <Link
        href={href}
        className="flex w-full items-center gap-5 rounded-lg p-2 duration-200 hover:scale-110 hover:bg-slate-100 active:scale-95"
      >
        {icon}
        <p className="text-lg">{text}</p>
      </Link>
    </motion.li>
  );
}
