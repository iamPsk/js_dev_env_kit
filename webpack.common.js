const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  target: "web",
  entry: [
    path.resolve(__dirname, "./src/index.js")
  ],
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin(
      { template: "./src/index.html" }
    )
  ],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "./dist/"),
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
};
