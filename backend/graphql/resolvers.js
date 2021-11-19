import fetch from "node-fetch";
import {
  handlePagination,
  blocksURL,
  singleBlockURL,
} from "../utility/utility.js";

class Resolvers {
  constructor() {
    this.blocks = [];
    this.block = {};
    this.pageCount = 0;
  }

  get getBlocks() {
    return this.blocks;
  }

  get getBlock() {
    return this.block;
  }

  get getPageCount() {
    return this.pageCount;
  }

  fetchBlocks = async (page = 1) => {
    const response = await fetch(blocksURL);

    const resBody = await response.json();

    if (response.status === 200)
      [this.pageCount, this.blocks] = handlePagination(page, 10, resBody);
    else this.blocks = [];
  };

  fetchSingleBlock = async (hash) => {
    const response = await fetch(`${singleBlockURL}${hash}`);

    const resBody = await response.json();

    if (response.status === 200) this.block = resBody;
    else this.block = {};
  };
}

const resolvers = new Resolvers();

export default resolvers;
