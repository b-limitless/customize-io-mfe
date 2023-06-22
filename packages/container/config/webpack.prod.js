const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require(`html-webpack-plugin`);
const commonConfig = require(`./webpack.common`);
const ModuleFederationPlugin = require(`webpack/lib/container/ModuleFederationPlugin`);
const packageJson = require("../package.json");

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/container/latest/",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        dashboard: `dashboard@http://${domain}/dashboard/latest/remoteEntry.js`,
        product: `product@http://${domain}/product/latestremoteEntry.js`,
        auth: `auth@http://${domain}/auth/latest/remoteEntry.js`,
        user: `user@http://${domain}/user/latest/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
