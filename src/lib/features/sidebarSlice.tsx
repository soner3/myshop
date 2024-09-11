import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SidebarStateType {
  isOpen: boolean;
}

const initialState: SidebarStateType = {
  isOpen: false,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: initialState,
  reducers: {
    changeSidebar: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
  },
});

export const { changeSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
