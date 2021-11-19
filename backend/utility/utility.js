import dotenv from "dotenv";

dotenv.config();

export const portNumber = process.env.PORT;
export const blocksURL = process.env.BLOCKS_URL;
export const singleBlockURL = process.env.SINGLE_BLOCK_URL;

export const handlePagination = (page, pageLimit, resBody) => {
  const firstElem = pageLimit * (page - 1);
  const lastElem = firstElem + pageLimit;
  const pageCount = Math.ceil(resBody.length / pageLimit);
  const results = resBody.slice(firstElem, lastElem);

  return [pageCount, results];
};
