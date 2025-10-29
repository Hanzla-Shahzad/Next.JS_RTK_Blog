import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../mainSlice/page";

export const store = configureStore({
  reducer: {
    main: mainReducer,
  },
});
