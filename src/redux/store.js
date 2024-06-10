import { configureStore } from "@reduxjs/toolkit";
import { themes } from "./slice";

const store = configureStore({
  reducer: { themes: themes },
});

export default store;
