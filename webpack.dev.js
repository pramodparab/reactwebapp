const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");
require("dotenv").config({ path: "./.env" });

module.exports = merge(common, {
  mode: "development",
  devServer: {
    port: process.env.PORT || 3000,
    static: path.join(__dirname, "build"),
    compress: true,
    open: true,
    historyApiFallback: true,
    hot: true,
  },
});
