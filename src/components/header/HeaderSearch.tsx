"use client";

import { searchChange } from "@/lib/features/searchSlice";
import { useAppDispatch, useAppSelector } from "@/lib/reduxHooks";
import { useRouter } from "next/navigation";
import { BsSearch } from "react-icons/bs";

export default function HeaderSearch() {
  const { search } = useAppSelector((store) => store.search);
  const dispatch = useAppDispatch();
  const router = useRouter();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (search.length <= 0) {
      return;
    }

    router.push(`/products/search?searchInput=${search}`);
    dispatch(searchChange(""));
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="hidden justify-center rounded-full border border-sky-500 md:flex"
    >
      <button
        type="submit"
        className="flex items-center justify-center rounded-l-full border-r bg-slate-100 px-3 hover:bg-gray-200 dark:border-none dark:bg-slate-900 hover:dark:bg-slate-900"
      >
        <BsSearch className="size-5" />
      </button>
      <input
        type="search"
        name="search"
        id="searchId"
        value={search}
        placeholder="Search"
        onChange={(event) => dispatch(searchChange(event.target.value))}
        className="w-64 rounded-r-full bg-transparent p-2 outline-none duration-500 focus:ring-2 xl:w-96 dark:text-white"
      />
    </form>
  );
}
