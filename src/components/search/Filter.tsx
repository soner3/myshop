import { getProductCategories } from "@/data/productData";
import React from "react";
import CategorySelection from "./CategorySelection";
import SortSelection from "./SortSelection";

// Auswahlfelder für die Kategorie und Sortierung der Produkte
export default async function Filter() {
  const categoryList = await getProductCategories();

  if (!categoryList) {
    return (
      <div className="text-2xl font-semibold capitalize">
        an error occured please reload the page
      </div>
    );
  }

  const categories: string[] = ["all", ...categoryList];

  return (
    <div className="mb-8 flex w-full flex-col items-center justify-center rounded-xl border py-4 shadow-xl dark:border-rose-600">
      <h2 className="mb-2 text-left text-3xl font-bold text-sky-500">Filter</h2>
      <CategorySelection categories={categories} />
      <SortSelection />
    </div>
  );
}
