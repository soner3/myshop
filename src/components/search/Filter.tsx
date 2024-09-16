import { getProductCategories } from "@/data/productData";
import React from "react";
import CategorySelection from "./CategorySelection";

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
    <div className="mb-8 flex w-full flex-col items-center justify-center rounded-xl border py-4 shadow-xl">
      <h2 className="text-xl font-semibold text-sky-500">Filter</h2>
      <CategorySelection categories={categories} />
    </div>
  );
}
