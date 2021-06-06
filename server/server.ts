import express from "express";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";
import myGraphQLSchema from "./src/schema";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

app.use("/graphql", graphqlHTTP({ schema: myGraphQLSchema, graphiql: true }));

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Graphql Server started on: http://localhost:${port}`);
});
