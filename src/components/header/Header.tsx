import Logo from "@/ui/Logo";
import CartSidebar from "../sidebar/CartSidebar";
import SidebarButton from "./SidebarButton";

export default function Header() {
  return (
    <header className="sticky top-0 flex items-center justify-between border p-2 shadow-2xl">
      <div className="flex items-center gap-5">
        <SidebarButton />
        <Logo />
      </div>
      <CartSidebar />
    </header>
  );
}
