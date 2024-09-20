"use client";

import { BsCashStack } from "react-icons/bs";

export default function NoPaymentBanner() {
  return (
    <div className="my-2 flex h-full w-full flex-col items-center justify-center rounded-xl border p-8 shadow-xl dark:border-rose-600">
      <BsCashStack className="size-12" />
      <p>This store can&apos;t accept payments right now.</p>
    </div>
  );
}
