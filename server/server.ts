import express from "express";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";
import myGraphQLSchema from "./src/schema";
import helmet from "helmet";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(helmet());
    app.use(helmet.contentSecurityPolicy());
    app.use(helmet.dnsPrefetchControl());
    app.use(helmet.expectCt());
    app.use(helmet.frameguard());
    app.use(helmet.hidePoweredBy());
    app.use(helmet.hsts());
    app.use(helmet.ieNoOpen());
    app.use(helmet.hidePoweredBy());
    app.use(helmet.noSniff());
    app.use(helmet.permittedCrossDomainPolicies());
    app.use(helmet.referrerPolicy());
    app.use(helmet.xssFilter());
    app.use(cors({ origin: "next-apollo-app.herokuapp.com", optionsSuccessStatus: 200 }));
} else {
    app.use(cors());
}

app.use("/graphql", graphqlHTTP({ schema: myGraphQLSchema, graphiql: true }));

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Graphql Server started on: http://localhost:${port}`);
});
