import express from "express";
import chalk from "chalk";
import open from "open";
import { buildRouter } from "./routes/build.route";

const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const config = require("../../webpack.dev");
const compiler = webpack(config);
const server = express();
const port = process.env.PORT || 3000;

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
server.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

server.use(webpackHotMiddleware(compiler));

server.use("/", buildRouter);

server.listen(port, (err) => {
  if (err) {
    console.error(err)
  } else {
    console.log(chalk.green(`\nBuild server listening on http://localhost:${port}\n`));
    open(`http://localhost:${port}`);
  }
});
