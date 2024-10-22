"use client";

import { AppStore, makeStore } from "@/lib/store";
import { ReactNode, useRef } from "react";
import { Provider } from "react-redux";

/**
 * Damit nicht mehrere Redux Stores existieren empfiehlt die Dokumentation
 * sich die referenz zu speichern. Dadurch wird sichergestellt, dass die Zustände
 * korrekt gemanaget werden und im gleichen Store sind.
 *
 * Das besondere an dieser komponente ist, dass sie eine Client Komponente ist und
 * children übergeben bekommt. Dadurch kann man weitere Server Komponenten im Element Tree
 * hinzufügen auch wenn die Elternkomponente im Client gerendert wird.
 *
 * @link https://redux-toolkit.js.org/usage/nextjs
 * @param children
 * @returns Provider
 */

export default function StoreProvider({ children }: { children: ReactNode }) {
  const storeRef = useRef<AppStore>();

  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
