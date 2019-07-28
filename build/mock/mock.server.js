import express from "express";
import chalk from "chalk";
import { mockRouter } from "./router/mock.routes";

const mockServer = express();
const port = process.env.PORT || 3001;

mockServer.use(express.json())
mockServer.use("/", mockRouter);

mockServer.listen(port, () => console.log(chalk.green(`\nMocking data at http://localhost:${port}\n`)));