const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack = require("webpack");
const path = require("path");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  entry: [
    "webpack-hot-middleware/client"
  ],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "./dist/"),
    publicPath: "/"
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
});
