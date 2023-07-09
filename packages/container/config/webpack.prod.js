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
        auth: `auth@${domain}/auth/latest/remoteEntry.js`,
        dashboard: `dashboard@${domain}/dashboard/latest/remoteEntry.js`,
        product: `product@${domain}/product/latest/remoteEntry.js`,
        user: `user@${domain}/user/latest/remoteEntry.js`,
        order: `user@${domain}/order/latest/remoteEntry.js`,
        payment: `payment@${domain}/payment/latest/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
