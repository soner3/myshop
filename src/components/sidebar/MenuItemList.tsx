"use client";

import { MenuItemType } from "@/interfaces";
import { BsBagPlus, BsHouseDoor } from "react-icons/bs";
import MenuItem from "./MenuItem";
import { motion } from "framer-motion";
import { useAppSelector } from "@/lib/reduxHooks";

const menuItems: MenuItemType[] = [
  {
    id: "1",
    href: "/",
    text: "Homepage",
    icon: <BsHouseDoor className="mb-1 size-5" />,
  },
  {
    id: "2",
    href: "/products/all/",
    text: "Products",
    icon: <BsBagPlus className="mb-1 size-5" />,
  },
];

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export default function MenuItemList() {
  const isOpen = useAppSelector((state) => state.sidebar.isSidebarOpen);

  return (
    <motion.ul
      variants={variants}
      animate={isOpen ? "open" : "closed"}
      className="flex flex-col gap-2 p-4"
    >
      {menuItems.map((item) => (
        <MenuItem
          key={item.id}
          icon={item.icon}
          href={item.href}
          text={item.text}
        />
      ))}
    </motion.ul>
  );
}
