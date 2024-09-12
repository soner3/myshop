import { IconListItemType } from "@/interfaces";
import { useAppSelector } from "@/lib/reduxHooks";
import { motion } from "framer-motion";
import { BsCartPlus, BsHouseDoor } from "react-icons/bs";
import IconItem from "./IconItem";

const menuItems: IconListItemType[] = [
  {
    id: "1",
    href: "/",
    icon: <BsHouseDoor className="size-7" />,
  },
  {
    id: "2",
    href: "/products/all/",
    icon: <BsCartPlus className="size-7" />,
  },
  {
    id: "3",
    href: "/",
    icon: <BsHouseDoor className="size-7" />,
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
  const isOpen = useAppSelector((state) => state.sidebar.isOpen);

  return (
    <motion.ul variants={variants} animate={isOpen ? "closed" : "open"}>
      {menuItems.map((item) => (
        <IconItem key={item.id} icon={item.icon} href={item.href} />
      ))}
    </motion.ul>
  );
}
