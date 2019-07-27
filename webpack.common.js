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
      {
        title: "DevEnv",
        template: "./src/index.html",
        inject: "body",
      }
    )
  ],
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "eslint-loader",
      },
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
