import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./features/toggleSlice";
import cartReducer from "./features/cartSlice";
import searchReducer from "./features/searchSlice";
import checkoutReducer from "./features/checkoutSlice";

/**
 * Ist wie eine Kombination der Context API und des useReducer Hooks von React.
 * Die Slices sind die Reducer und erhalten und bearbeiten die Anfragen.
 * Der Store speichert die Slices und macht sie für den Provider bereit.
 * Weil der StoreProvider in der layout.tsx Datei die Elternkomponente aller elemente ist,
 * sind die Funktionen zum speichern und bearbeiten von Zuständen für die gesamte Anwendung verfügbar.
 * Das gilt aber nur für Client Komponenten.
 */

export const makeStore = () => {
  return configureStore({
    reducer: {
      toggle: toggleReducer,
      cart: cartReducer,
      search: searchReducer,
      checkout: checkoutReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
