import { createSlice } from "@reduxjs/toolkit";
import { getData } from "../Thunks/productThunk";

const mainSlice = createSlice({
  name: "main",
  initialState: { data: [], isPending: false, isError: false },
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.isPending = true;
        state.isError = false;
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.isPending = false;
        state.data = action.payload;
      })
      .addCase(getData.rejected, (state) => {
        state.isPending = false;
        state.isError = true;
      });
  },
});

export default mainSlice.reducer;
