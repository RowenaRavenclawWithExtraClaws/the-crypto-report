import { configureStore } from "@reduxjs/toolkit";
import blocksReducer from "./blockSlice";
import oneBlockReducer from "./oneBlockSlice";

const store = configureStore({
  reducer: {
    blocks: blocksReducer,
    block: oneBlockReducer,
  },
});

export default store;
