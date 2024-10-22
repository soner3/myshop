"use client";

import { applyTheme } from "@/lib/theme";
import { useEffect } from "react";

/**
 * Es wird überprüft, welches Thema vom Browser preferiert wird und anschließend implementiert.
 * Wird ausgeführt sobald die Seite geladen ist.
 */

export default function ApplyTheme() {
  useEffect(() => {
    applyTheme();
  }, []);

  return null;
}
