import { ReactNode } from "react";

export interface MenuItemType {
  id: string;
  href: string;
  text: string;
  icon: ReactNode;
}

export interface SidebarState {
  isOpen: boolean;
}
