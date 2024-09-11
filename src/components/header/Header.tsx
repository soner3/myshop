import CartSidebar from "../sidebar/CartSidebar";
import MenuDrawer from "../sidebar/MenuDrawer";

export default function Header() {
  return (
    <header className="sticky top-0 flex justify-between border p-4 shadow-2xl">
      <MenuDrawer />
      <h1>ShopZilla</h1>
      <CartSidebar />
    </header>
  );
}
