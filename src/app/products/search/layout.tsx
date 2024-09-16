import Filter from "@/components/search/Filter";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  // Generated by ChatGPT
  description:
    "Discover the vast selection of products at ShopZilla. From electronics and fashion to household items, you'll find everything you're looking for – shop online conveniently and securely.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <section className="flex w-full flex-col items-center justify-center p-8">
      <Filter />
      {children}
    </section>
  );
}