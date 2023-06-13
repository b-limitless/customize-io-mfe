const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const commonConfig = require("./webpack.common");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require('../package.json');

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/container/latest/'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                dashboard: "dashboard@http://localhost:8081/remoteEntry.js", 
                product: "product@http://localhost:8082/remoteEntry.js", 
                auth: "auth@http://localhost:8083/remoteEntry.js",
                user: "user@http://localhost:8085/remoteEntry.js",
            },
            shared: packageJson.dependencies
        })
    ]
}; 

module.exports = merge(commonConfig, prodConfig);