"use client";

import { IconListItemType } from "@/interfaces";
import { useAppSelector } from "@/lib/reduxHooks";
import { motion } from "framer-motion";
import {
  BsBagPlus,
  BsCashCoin,
  BsEnvelopeExclamation,
  BsHouseDoor,
  BsInfoCircle,
} from "react-icons/bs";
import IconItem from "./IconItem";

const menuItems: IconListItemType[] = [
  {
    id: "1",
    href: "/",
    icon: <BsHouseDoor className="size-7" />,
  },
  {
    id: "2",
    href: "/products/search/all/",
    icon: <BsBagPlus className="size-7" />,
  },
  {
    id: "3",
    href: "/checkout/information/",
    icon: <BsCashCoin className="size-7" />,
  },
  {
    id: "4",
    href: "/contact/",
    icon: <BsEnvelopeExclamation className="size-7" />,
  },
  {
    id: "5",
    href: "/imprint/",
    icon: <BsInfoCircle className="size-7" />,
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

export default function IconItemList() {
  const isOpen = useAppSelector((state) => state.toggle.isSidebarOpen);

  return (
    <motion.ul variants={variants} animate={isOpen ? "closed" : "open"}>
      {menuItems.map((item) => (
        <IconItem key={item.id} icon={item.icon} href={item.href} />
      ))}
    </motion.ul>
  );
}
