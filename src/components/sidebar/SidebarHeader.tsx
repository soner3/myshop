"use client";

import { searchChange } from "@/lib/features/searchSlice";
import { toggleSidebar } from "@/lib/features/toggleSlice";
import { useAppDispatch, useAppSelector } from "@/lib/reduxHooks";
import Logo from "@/ui/Logo";
import { useRouter, useSearchParams } from "next/navigation";
import { BsArrowLeft, BsSearch } from "react-icons/bs";

export default function SidebarHeader() {
  const { search } = useAppSelector((store) => store.search);
  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();
  const sort = searchParams.get("sort");
  const router = useRouter();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (search.length <= 0) {
      return;
    }
    if (sort) {
      router.push(`/products/search?searchInput=${search}&sort=${sort}`);
    } else {
      router.push(`/products/search?searchInput=${search}`);
    }
    dispatch(searchChange(""));
  }

  return (
    <div className="relative my-2 mt-6 flex w-full flex-col items-center justify-center">
      <Logo />
      <button
        onClick={() => dispatch(toggleSidebar(false))}
        className="absolute right-3 top-0 flex h-8 w-8 items-center justify-center rounded-full border bg-white p-1 text-black duration-200 hover:scale-110 hover:bg-slate-100 active:scale-95 active:bg-slate-200"
      >
        <BsArrowLeft className="size-6" />
      </button>
      <form
        onSubmit={handleSubmit}
        className="mt-5 flex justify-center rounded-full md:hidden"
      >
        <button
          type="submit"
          className="flex items-center justify-center rounded-l-full border px-3 duration-300 hover:bg-slate-200 hover:bg-opacity-20"
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
          className="w-52 rounded-r-full p-2 text-black outline-none focus:ring-2 xl:w-96"
        />
      </form>
    </div>
  );
}
