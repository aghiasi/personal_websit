import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./init";
import { gitFetch } from "./action";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { init } from "./init";
const gitSlice = createSlice({
  name: "gitFetch",
  initialState,
  reducers: {
    pageRefresh(state: init) {
      const data = sessionStorage.getItem("gitData");
      if (data) {
        state.loading = false;
        state.data = JSON.parse(data);
        state.error = "";
      }
    },
  },
  extraReducers: (builder: any) => {
    builder.addCase(gitFetch.pending, (state: init) => {
      state.loading = true;
    });
    builder.addCase(
      gitFetch.fulfilled,
      (state: init, action: PayloadAction<Array<Object>>) => {
        state.loading = false;
        state.data = action.payload;
        state.error = "";
        sessionStorage.setItem("gitData", JSON.stringify(state.data));
      }
    );
    builder.addCase(
      gitFetch.rejected,
      (state: init, action: { error: { message: string } }) => {
        state.loading = false;
        state.data = [];
        state.error = action.error.message;
      }
    );
  },
});
export const { pageRefresh } = gitSlice.actions;
export default gitSlice.reducer;
