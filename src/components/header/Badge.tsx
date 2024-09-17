import { ReactNode } from "react";

export default function Badge({ children }: { children: ReactNode }) {
  return (
    <div className="absolute -right-3 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-rose-600 text-white">
      {children}
    </div>
  );
}
