import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./init";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { init } from "./init";
const gitSlice = createSlice({
  name: "gitFetch",
  initialState,
  reducers: {
    getData(state: init, action: PayloadAction<Array<object>>) {
        state.loading = false;
        state.data = action.payload;
        state.error = "";
    },
  },
});
export const {  getData } = gitSlice.actions;
export default gitSlice.reducer;
