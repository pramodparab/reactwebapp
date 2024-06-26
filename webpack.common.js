const path = require("path");
const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: {
    path: path.resolve(__dirname, "src", "index.js"),
    vendor: ["react", "react-dom", "react-router-dom"],
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    clean: true,
  },

  //rules
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.gif$/,
        type: "asset/inline",
      },
      {
        test: /\.(ttf|eot)$/,
        type: "asset/resource",
      },

      {
        test: /\.svg/,
        use: {
          loader: "svg-url-loader",
          options: {
            // make all svg images to work in IE
            iesafe: true,
          },
        },
      },

      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|ico)(\?[a-z0-9=.]+)?$/i,
        use: ["url-loader?limit=100000", "file-loader"],
      },

      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",

          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
    ],
  },
  //plugins

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
      filename: "index.html",
    }),
    new webpack.HotModuleReplacementPlugin(),
    new LodashModuleReplacementPlugin(),
  ],
};
