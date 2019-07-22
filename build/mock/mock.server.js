import express from "express";
import chalk from "chalk";
import { mockRouter } from "./router/mock.routes";

const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const config = require("../../webpack.config");
const compiler = webpack(config);
const mockServer = express();
const port = process.env.PORT || 3001;

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
mockServer.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

mockServer.use(webpackHotMiddleware(compiler));

mockServer.use("/", mockRouter);

mockServer.listen(port, () => console.log(chalk.green(`\nMocking data at http://localhost:${port}\n`)));