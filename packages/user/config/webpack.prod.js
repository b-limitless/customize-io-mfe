const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("../package.json");


const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/user/latest/",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "user",
      filename: "remoteEntry.js",
      exposes: {
        "./UserApp": "./src/bootstrap",
      },
      remotes: {
        components: "components@http://localhost:8084/remoteEntry.js",
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
