import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Products | ShopZilla",

  // Generated by chatGPT
  description:
    "Entdecken Sie die riesige Auswahl an Produkten bei ShopZilla. Von Elektronik über Mode bis hin zu Haushaltsartikeln, hier finden Sie alles, was Sie suchen – bequem und sicher online einkaufen.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return <section className="flex flex-col md:flex-row">{children}</section>;
}