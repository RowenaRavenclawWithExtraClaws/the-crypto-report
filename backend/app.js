import express from "express";
import cors from "cors";
import graphqlReqHandler from "./graphql/routeHandler.js";
import { portNumber } from "./utility/utility.js";

const app = express();

app.use(cors());
app.use("/graphql", graphqlReqHandler());

app.listen(portNumber, () => console.log(`listening on port ${portNumber}`));
