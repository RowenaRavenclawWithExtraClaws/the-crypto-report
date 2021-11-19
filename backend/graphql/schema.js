import {
  GraphQLFloat,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from "graphql";

import resolvers from "./resolvers.js";

const BlockType = new GraphQLObjectType({
  name: "Block",
  description: "Block type definition",
  fields: () => ({
    hash: { type: GraphQLNonNull(GraphQLString) },
    time: { type: GraphQLNonNull(GraphQLFloat) },
    height: { type: GraphQLNonNull(GraphQLFloat) },
    block_index: { type: GraphQLNonNull(GraphQLString) },
    size: { type: GraphQLFloat },
    prev_block: { type: GraphQLNonNull(GraphQLString) },
  }),
});

const RootQueryType = new GraphQLObjectType({
  name: "Query",
  description: "This is the root query serving the landing page",
  fields: () => ({
    blocks: {
      type: new GraphQLList(BlockType),
      description: "List of the latest blocks",
      args: {
        page: { type: GraphQLInt },
      },
      resolve: async (_, args) => {
        await resolvers.fetchBlocks(args.page);
        return resolvers.getBlocks;
      },
    },
    block: {
      type: BlockType,
      description: "A single block",
      args: {
        hash: { type: GraphQLString },
      },
      resolve: async (_, args) => {
        await resolvers.fetchSingleBlock(args.hash);
        return resolvers.getBlock;
      },
    },
    pageCount: {
      type: GraphQLInt,
      description: "Number of pages",
      resolve: async () => {
        if (!resolvers.getPageCount) await resolvers.fetchBlocks();
        return resolvers.getPageCount;
      },
    },
  }),
});

const schema = new GraphQLSchema({
  query: RootQueryType,
});

export default schema;
