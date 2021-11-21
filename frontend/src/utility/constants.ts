import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export const queryStrings = {
  blocks: (page: number) =>
    `{ blocks(page: ${page} ) { hash, height, time } pageCount }`,
  block: (hash: string) =>
    `{ block(hash: "${hash}" ) { hash, time, height, size, block_index, prev_block } }`,
};
