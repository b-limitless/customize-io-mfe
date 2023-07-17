const path = require("path");
const commonConfig = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(woff2?|jpe?g|png|gif|ico)$/, 
        oneOf: [
          {
            include: path.resolve(__dirname, "../node_modules/"),
            use: "svg-inline-loader",
          },
          {
            exclude: path.resolve(__dirname, "../node_modules/"),
            use: "url-loader",
          },
        ],
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
  resolve: {
    extensions: [
      ".js",
      ".jsx",
      ".tsx",
      ".ts",
      ".svg",
      ".scss",
      ".sass",
      ".png",
      ".jpeg",
      ".gif",
    ],
    alias: {
      '@styles': path.resolve(__dirname, '../src/styles'),
      '@components': path.resolve(__dirname, '../src/components'),
      '@assets': path.resolve(__dirname, '../src/assets'),
      '@hooks': path.resolve(__dirname, '../src/hooks'),
    },
  },
};




module.exports = commonConfig;

