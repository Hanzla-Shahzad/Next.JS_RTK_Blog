import { configureStore } from "@reduxjs/toolkit";
import main from "../mainSlice/page";
export const store = configureStore({
  reducer: {
    main,
  },
});
