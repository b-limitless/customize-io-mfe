const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const packageJson = require("../package.json");


const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/customer-interaction/latest/",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "payment",
      filename: "remoteEntry.js",
      exposes: {
        "./CustomerInteractionApp": "./src/bootstrap",
      },
      shared: packageJson.dependencies,
    }),
    new WebpackManifestPlugin({
      fileName: 'asset-manifest.json',
      publicPath: "../dist",
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
