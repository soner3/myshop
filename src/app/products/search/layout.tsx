import Filter from "@/components/search/Filter";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  description:
    "Explore a wide range of products at MyShop. From electronics to fashion and home goods, find everything you need online with secure and convenient shopping.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <section className="flex w-full flex-col items-center justify-center p-8">
      <Filter />
      {children}
    </section>
  );
}
