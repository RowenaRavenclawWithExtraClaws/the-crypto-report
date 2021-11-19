import express from "express";
import cors from "cors";
import { portNumber } from "./utility/utility.js";

const app = express();

app.use(cors());
app.use("/graphql", () => {});

app.listen(portNumber, () => console.log(`listening on port ${portNumber}`));
