import IconItemList from "./IconItemList";

export default function IconSidebar() {
  return (
    <aside className="fixed h-full -translate-x-full bg-gradient-to-br from-sky-500 via-violet-600 to-rose-600 shadow-2xl transition-all duration-300 md:translate-x-0">
      <IconItemList />
    </aside>
  );
}
