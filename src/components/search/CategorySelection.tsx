"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function CategorySelection({
  categories,
}: {
  categories: string[];
}) {
  const [currentCategory, setCurrentCategory] = useState("all");
  const router = useRouter();

  function handleCategoryChange(category: string) {
    setCurrentCategory(category);
    router.push(`/products/search/${category}/`);
  }

  return (
    <select
      className="m-2 w-3/4 cursor-pointer rounded-xl border-2 border-sky-500 bg-white p-2 capitalize outline-none active:border-none active:ring-2"
      value={currentCategory}
      onChange={(event) => handleCategoryChange(event.target.value)}
    >
      {categories.map((category) => {
        return (
          <option key={category} value={category}>
            {category}
          </option>
        );
      })}
    </select>
  );
}
