"use client";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export default function Pagination({
  page,
  count,
  limit,
  handleChange,
}: {
  page: number;
  count: number;
  limit: number;
  handleChange: (value: number) => void;
}) {
  const maxPage = Math.ceil(count / limit);

  return (
    <div className="flex items-center justify-center gap-3 text-white">
      <button
        className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 duration-200 hover:bg-sky-600 active:bg-sky-700 dark:bg-rose-600 dark:hover:bg-rose-700 dark:active:bg-rose-800"
        disabled={page <= 1}
        onClick={() => handleChange(page - 1 < 0 ? 1 : page - 1)}
      >
        <BsChevronLeft className="mr-1 size-6" />
      </button>
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 duration-200 dark:bg-rose-600">
        {page}
      </div>
      <button
        className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 duration-200 hover:bg-sky-600 active:bg-sky-700 dark:bg-rose-600 dark:hover:bg-rose-700 dark:active:bg-rose-800"
        disabled={page >= maxPage}
        onClick={() => handleChange(page + 1 > maxPage ? maxPage : page + 1)}
      >
        <BsChevronRight className="ml-1 size-6" />
      </button>
    </div>
  );
}
