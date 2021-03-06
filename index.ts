import dotenv from "dotenv";
import express, {  } from "express";
import { defaultErrorHandler } from "./src/errorHandlers/defaultErrorHandler";
import { nonexistentUrl } from "./src/middleware";
import { authorize } from "./src/middleware/authorize";
import router from "./src/routes";
import path from "path"

global.appRoot = path.resolve(__dirname);

dotenv.config();

const port = process.env.PORT || 4000;
const app = express();

app.use("/files", express.static("files"));
app.use(authorize);

app.use("/storage", router);

app.use(nonexistentUrl);
app.use(defaultErrorHandler);

app.listen(port, () => console.log(`[server]: Server is running at http://localhost:${port}`));
