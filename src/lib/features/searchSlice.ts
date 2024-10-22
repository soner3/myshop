import { SearchState } from "@/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: SearchState = {
  search: "",
};

/**
 * Speichert die aktuellen ziechen im Formularfeld
 *
 */

const searchSlice = createSlice({
  name: "search",
  initialState: initialState,
  reducers: {
    searchChange: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

export const { searchChange } = searchSlice.actions;
export default searchSlice.reducer;
