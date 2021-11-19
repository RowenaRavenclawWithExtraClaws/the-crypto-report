import { graphqlHTTP } from "express-graphql";
import schema from "./schema.js";

const graphqlReqHandler = () =>
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  });

export default graphqlReqHandler;
