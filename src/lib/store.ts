import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./features/toggleSlice";
import cartReducer from "./features/cartSlice";
import searchReducer from "./features/searchSlice";
import checkoutReducer from "./features/checkoutSlice";

/**
 * Redux Store
 *
 * Ist wie eine Kombination der Context API und des useReducer Hooks von React.
 * Die Slices sind die Reducer und erhalten und bearbeiten die Anfragen.
 * Der Store speichert die Slices und macht sie für den Provider bereit.
 * Weil der StoreProvider in der layout.tsx Datei die Elternkomponente aller elemente ist,
 * sind die Funktionen zum speichern und bearbeiten von Zuständen für die gesamte Anwendung verfügbar.
 * Das gilt aber nur für Client Komponenten.
 *
 * Wieso verwende ich Redux statt die eben genannten React Hooks?
 * Die Context API mit dem useReducer zusammen sind dann geeignet wenn sich
 * Zustände nicht oft ändern. Bei jeder Zustandsänderung wird nämlich der gesamte
 * Context, seine Zustände und die betroffenen Komponenten rerendert.
 *
 * Redux hingegen hat seine eigenen Reducer (Die Slices) welche unabhängig von
 * den anderen sind und sich deshalb für oft verändernde und komplexe Zustände eignet
 *
 */

// Store der alle Slices hat
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

// Der Store selbst
export type AppStore = ReturnType<typeof makeStore>;
// Funktion, um die Zustände von Slices zu erhalten
export type RootState = ReturnType<AppStore["getState"]>;
// Funktion, um die Funktionen zum bearbeiten von Zuständen zu erhalten
export type AppDispatch = AppStore["dispatch"];
