import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./features/sidebarSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      sidebar: sidebarReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
