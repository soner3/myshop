"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SortSelection() {
  const searchParams = useSearchParams();
  const sort = searchParams.get("sort");
  const [sorting, setSorting] = useState(sort ? sort : "none");
  const router = useRouter();
  const path = usePathname();

  useEffect(() => {
    if (sorting !== "none") {
      router.push(`${path}?sort=${sorting}`);
    }
  }, [path, router, sorting]);

  function handleSortChange(value: string) {
    setSorting(value);
    if (value === "none") {
      router.replace(path);
      router.refresh();
    } else {
      router.push(`${path}?sort=${value}`);
    }
  }

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <label
        className="text-lg font-semibold text-sky-500 dark:text-rose-600"
        htmlFor="sortSelect"
      >
        Sorting
      </label>
      <select
        id="sortSelect"
        className="m-2 w-3/4 cursor-pointer rounded-xl border-2 border-sky-500 bg-white p-2 capitalize text-black outline-none active:border-none active:ring-2 dark:border-rose-600 dark:ring-rose-600"
        onChange={(event) => handleSortChange(event.target.value)}
        value={sorting}
      >
        <option value="none">None</option>
        <option value="price-asc">Price Ascending</option>
        <option value="price-desc">Price Descending</option>
        <option value="rating-asc">Rating Ascending</option>
        <option value="rating-desc">Rating Descending</option>
      </select>
    </div>
  );
}
