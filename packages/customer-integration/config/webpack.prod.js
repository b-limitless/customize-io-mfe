const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const packageJson = require("../package.json");
const HtmlWebpackPlugin = require(`html-webpack-plugin`);

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    // publicPath: "/customer-interaction/latest/",
    publicPath: "/"
  },
  plugins: [
    // new ModuleFederationPlugin({
    //   name: "payment",
    //   filename: "remoteEntry.js",
    //   exposes: {
    //     "./CustomerInteractionApp": "./src/bootstrap",
    //   },
    //   shared: packageJson.dependencies,
    // }),
    new WebpackManifestPlugin({
      fileName: 'asset-manifest.json',
      publicPath: "../build",
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    
  ],
};

module.exports = merge(commonConfig, prodConfig);
