import express from "express";
import { applyMiddleware, applyRoutes } from "./utils/utils";
import middleware from "./middleware/middleware";
import routes from "./services/routes";

const server = express();
const port = 3001;

applyMiddleware(server, middleware);
applyRoutes(server, routes);

server.listen(port, () => console.log(`Server live on ${port}`));
