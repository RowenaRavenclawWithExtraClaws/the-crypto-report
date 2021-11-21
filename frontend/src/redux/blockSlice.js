import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    blocks: [],
    pageCount: 0,
  },
  status: "idle",
};

export const blockSlice = createSlice({
  name: "blocks",
  initialState,
  reducers: {
    setBlocks: (state, action) => {
      state.value.blocks = action.payload;
    },
    setPageCount: (state, action) => {
      state.value.pageCount = action.payload;
    },
  },
});

export const { setBlocks, setPageCount } = blockSlice.actions;

export const selectBlocks = (state) => state.blocks.value.blocks;
export const selectPageCount = (state) => state.blocks.value.pageCount;

export default blockSlice.reducer;
