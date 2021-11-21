import { configureStore } from "@reduxjs/toolkit";
import blocksReducer from "./blockSlice";

const store = configureStore({
  reducer: {
    blocks: blocksReducer,
  },
});

export default store;
