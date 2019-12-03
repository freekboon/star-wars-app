import bodyParser from "body-parser";
import cors from "cors";

const applyParser = server => {
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(bodyParser.json());
};

export const applyCors = server =>
  server.use(cors({ credentials: true, origin: true }));

export default [applyParser, applyCors];
