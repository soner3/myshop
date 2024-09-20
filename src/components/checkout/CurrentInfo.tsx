"use client";

import Link from "next/link";
import { ReactNode } from "react";

export default function CurrentInfo({
  title,
  changeLink,
  children,
}: {
  title: string;
  children: ReactNode;
  changeLink: string;
}) {
  return (
    <li className="my-1 flex w-full items-center justify-between gap-5 rounded-xl p-6 hover:border hover:border-sky-500 dark:hover:border-rose-600">
      <p className="text-xl text-sky-500">{title}</p>
      <div>{children}</div>
      <Link
        href={changeLink}
        className="text-sky-500 underline dark:text-rose-600"
      >
        Change
      </Link>
    </li>
  );
}
