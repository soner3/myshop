import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"}>
      <h2 className="text-2xl font-bold">ShopZilla</h2>
    </Link>
  );
}
