"use client";

import { applyTheme } from "@/lib/theme";
import { useEffect } from "react";

export default function ApplyTheme() {
  useEffect(() => {
    applyTheme();
  }, []);

  return null;
}
