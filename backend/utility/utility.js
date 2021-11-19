import dotenv from "dotenv";

dotenv.config();

export const portNumber = process.env.PORT;
export const blocksURL = process.env.BLOCKS_URL;
export const singleBlockURL = process.env.SINGLE_BLOCK_URL;
