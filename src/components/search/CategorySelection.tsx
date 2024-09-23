"use client";

import { useParams, usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function CategorySelection({
  categories,
}: {
  categories: string[];
}) {
  const { category } = useParams();
  const path = usePathname();
  const [currentCategory, setCurrentCategory] = useState(category);
  const router = useRouter();

  useEffect(() => {
    if (path.includes("all")) {
      setCurrentCategory("all");
      return;
    }
    return;
  }, [path]);

  function handleCategoryChange(category: string) {
    setCurrentCategory(category);
    router.replace(`/products/search/${category}/`);
  }

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <label
        className="text-lg font-semibold text-sky-500 dark:text-rose-600"
        htmlFor="categorySelect"
      >
        Category
      </label>
      <select
        id="categorySelect"
        className="m-2 w-3/4 cursor-pointer rounded-xl border-2 border-sky-500 bg-white p-2 capitalize text-black outline-none active:border-none active:ring-2 dark:border-rose-600 dark:ring-rose-600"
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
    </div>
  );
}
