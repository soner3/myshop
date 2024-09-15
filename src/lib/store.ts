import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./features/toggleSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      toggle: toggleReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
